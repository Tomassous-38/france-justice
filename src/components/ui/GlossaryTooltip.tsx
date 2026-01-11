'use client';

import { useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray200: '#E2E8F0',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
};

interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  domain?: string;
}

interface GlossaryTooltipProps {
  term: GlossaryTerm;
  children?: ReactNode;
}

export default function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <span 
      className="relative inline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span 
        className="cursor-help"
        style={{
          borderBottom: `1px dashed ${colors.bluePrimary}`,
          color: colors.bluePrimary,
        }}
      >
        {children || term.term}
      </span>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 rounded-lg p-4"
            style={{
              background: colors.white,
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
              border: `1px solid ${colors.gray200}`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
              <div 
                className="w-3 h-3 transform rotate-45 -translate-y-1.5"
                style={{
                  background: colors.white,
                  borderBottom: `1px solid ${colors.gray200}`,
                  borderRight: `1px solid ${colors.gray200}`,
                }}
              />
            </div>
            
            {/* Content */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold" style={{ color: colors.charcoal }}>{term.term}</h4>
              {term.domain && (
                <span 
                  className="px-2 py-0.5 text-xs font-medium rounded-full"
                  style={{ background: colors.blueLight, color: colors.bluePrimary }}
                >
                  {term.domain}
                </span>
              )}
            </div>
            
            <p className="text-sm leading-relaxed mb-3" style={{ color: colors.gray600 }}>
              {term.definition}
            </p>
            
            <Link 
              href={`/glossaire/${term.slug}`}
              className="text-sm font-medium inline-flex items-center gap-1"
              style={{ color: colors.bluePrimary }}
            >
              En savoir plus →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Utility to wrap terms in text
interface GlossaryTextProps {
  text: string;
  terms: GlossaryTerm[];
}

export function GlossaryText({ text, terms }: GlossaryTextProps) {
  const elements: (string | JSX.Element)[] = [];
  
  // Sort terms by length (longest first) to avoid partial matches
  const sortedTerms = [...terms].sort((a, b) => b.term.length - a.term.length);
  
  // Simple implementation - for production, use a proper text parser
  let lastIndex = 0;
  const regex = new RegExp(`\\b(${sortedTerms.map(t => t.term).join('|')})\\b`, 'gi');
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }
    
    // Find the matching term
    const matchedTerm = sortedTerms.find(
      t => t.term.toLowerCase() === match[0].toLowerCase()
    );
    
    if (matchedTerm) {
      elements.push(
        <GlossaryTooltip key={match.index} term={matchedTerm}>
          {match[0]}
        </GlossaryTooltip>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }
  
  return <>{elements}</>;
}
