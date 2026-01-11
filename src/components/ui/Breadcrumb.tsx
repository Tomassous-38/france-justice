'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray300: '#CBD5E1',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
};

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface SiblingLink {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  siblings?: SiblingLink[];
  light?: boolean;
}

export default function Breadcrumb({ items, siblings, light = true }: BreadcrumbProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const textColor = light ? 'rgba(255,255,255,0.6)' : colors.gray500;
  const activeTextColor = light ? 'white' : colors.charcoal;
  const separatorColor = light ? 'rgba(255,255,255,0.3)' : colors.gray300;

  return (
    <nav className="flex items-center gap-2 text-sm py-2 flex-wrap">
      {/* Home */}
      <Link 
        href="/"
        className="flex items-center gap-1.5 transition-all duration-300 hover:opacity-100 p-1.5 rounded-lg"
        style={{ 
          color: textColor,
          opacity: 0.8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = light ? 'rgba(255,255,255,0.1)' : colors.gray100;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Accueil</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const showDropdown = isLast && siblings && siblings.length > 0;

        return (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" style={{ color: separatorColor }} />
            
            {isLast ? (
              showDropdown ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1.5 font-medium transition-all duration-300 px-2 py-1 rounded-lg"
                    style={{ 
                      color: activeTextColor,
                      background: isDropdownOpen 
                        ? (light ? 'rgba(255,255,255,0.15)' : colors.gray100)
                        : 'transparent'
                    }}
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10"
                          onClick={() => setIsDropdownOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-xl py-2 z-20 overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.2)',
                            border: `1px solid ${colors.gray200}`,
                          }}
                        >
                          {siblings.map((sibling, sibIndex) => (
                            <motion.div
                              key={sibling.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: sibIndex * 0.03 }}
                            >
                              <Link
                                href={sibling.href}
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2.5 text-sm transition-all duration-200"
                                style={{
                                  background: sibling.current ? colors.blueLight : 'transparent',
                                  color: sibling.current ? colors.bluePrimary : colors.gray700,
                                  fontWeight: sibling.current ? 600 : 400,
                                }}
                                onMouseEnter={(e) => {
                                  if (!sibling.current) {
                                    e.currentTarget.style.background = colors.gray50;
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!sibling.current) {
                                    e.currentTarget.style.background = 'transparent';
                                  }
                                }}
                              >
                                {sibling.current && <span className="mr-2">→</span>}
                                {sibling.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <span 
                  className="font-semibold px-2 py-1"
                  style={{ color: activeTextColor }}
                >
                  {item.label}
                </span>
              )
            ) : (
              <Link 
                href={item.href}
                className="transition-all duration-300 px-2 py-1 rounded-lg"
                style={{ color: textColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = light ? 'rgba(255,255,255,0.1)' : colors.gray100;
                  e.currentTarget.style.color = activeTextColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = textColor;
                }}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
