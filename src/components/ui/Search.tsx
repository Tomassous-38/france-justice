'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SearchBarProps {
  placeholder?: string;
  large?: boolean;
  onSearch?: (query: string) => void;
}

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  red: '#CE1126',
};

const popularSearches = [
  { term: 'divorce', href: '/recherche?q=divorce' },
  { term: 'licenciement', href: '/recherche?q=licenciement' },
  { term: 'impôts', href: '/recherche?q=impots' },
  { term: 'bail', href: '/recherche?q=bail' },
];

const recentSearches = [
  'prélèvement à la source',
  'garde alternée',
  'rupture conventionnelle',
];

export default function SearchBar({ placeholder = 'Rechercher...', large = false, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query);
    }
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const paddingY = large ? 'py-4' : 'py-3';
  const paddingX = large ? 'pl-14 pr-14' : 'pl-12 pr-12';
  const iconSize = large ? 'w-6 h-6' : 'w-5 h-5';
  const fontSize = large ? 'text-base' : 'text-sm';

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit}>
        {/* Glow effect layer */}
        <motion.div 
          className="absolute -inset-1 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.3) 0%, rgba(206, 17, 38, 0.2) 100%)',
            filter: 'blur(15px)',
          }}
          animate={{ opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Input container */}
        <div 
          className="relative overflow-hidden transition-all duration-300"
          style={{
            background: isFocused 
              ? 'rgba(255, 255, 255, 0.98)' 
              : 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1rem',
            border: `1px solid ${isFocused ? colors.bluePrimary : colors.gray200}`,
            boxShadow: isFocused 
              ? '0 10px 40px -10px rgba(30, 64, 175, 0.2)' 
              : '0 4px 12px -4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Search 
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${iconSize}`}
            style={{ color: isFocused ? colors.bluePrimary : colors.gray400 }}
          />
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`w-full ${paddingY} ${paddingX} ${fontSize} bg-transparent focus:outline-none transition-colors duration-300`}
            style={{ color: colors.charcoal }}
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors duration-200 hover:bg-gray-100"
            >
              <X className="w-4 h-4" style={{ color: colors.gray400 }} />
            </button>
          )}
        </div>
      </form>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 z-50 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '1rem',
              border: `1px solid ${colors.gray200}`,
              boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
            }}
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b" style={{ borderColor: colors.gray100 }}>
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: colors.gray400 }}>
                  <Clock className="w-3.5 h-3.5" />
                  Recherches récentes
                </div>
                <div className="space-y-1">
                  {recentSearches.map((term, index) => (
                    <motion.button
                      key={term}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center justify-between group"
                      style={{ color: colors.gray600 }}
                      onClick={() => {
                        setQuery(term);
                        setShowSuggestions(false);
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: colors.gray100 }}
                    >
                      {term}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: colors.red }}>
                <TrendingUp className="w-3.5 h-3.5" />
                Tendances
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item, index) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                      style={{ 
                        background: colors.blueLight,
                        color: colors.bluePrimary 
                      }}
                      onClick={() => setShowSuggestions(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {item.term}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
