'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray300: '#CBD5E1',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1E293B',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
};

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TOCProps {
  items: TOCItem[];
  className?: string;
}

export default function TOC({ items, className = '' }: TOCProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollProgress, 100));

      // Find active section
      const headings = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav 
      className={`rounded-2xl p-5 ${className}`}
      style={{
        background: colors.white,
        border: `1px solid ${colors.gray200}`,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5" style={{ color: colors.gray400 }} />
        <h3 
          className="font-semibold text-sm uppercase tracking-wider"
          style={{ color: colors.gray500 }}
        >
          Sommaire
        </h3>
      </div>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left py-2 px-3 rounded-lg text-sm transition-all relative"
              style={{
                background: activeId === item.id ? colors.blueLight : 'transparent',
                color: activeId === item.id ? colors.bluePrimary : colors.gray600,
                fontWeight: activeId === item.id ? 500 : 400,
                paddingLeft: item.level > 2 ? '1.5rem' : '0.75rem',
                fontSize: item.level > 2 ? '0.75rem' : '0.875rem',
              }}
            >
              <div className="flex items-center gap-2">
                <span 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: activeId === item.id ? colors.bluePrimary : colors.gray300,
                  }}
                />
                {item.title}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${colors.gray100}` }}>
        <div className="flex items-center justify-between text-xs mb-2" style={{ color: colors.gray500 }}>
          <span>Progression</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div 
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: colors.gray100 }}
        >
          <motion.div 
            className="h-full rounded-full"
            style={{ background: `linear-gradient(135deg, ${colors.bluePrimary} 0%, ${colors.red} 100%)` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </nav>
  );
}

// Mobile TOC Button & Drawer
interface MobileTOCProps {
  items: TOCItem[];
}

export function MobileTOC({ items }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 lg:hidden w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
        style={{ background: colors.blueDark, color: 'white' }}
      >
        <List className="w-5 h-5" />
      </button>

      {/* Drawer */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-50 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="fixed bottom-0 left-0 right-0 rounded-t-2xl z-50 lg:hidden max-h-[70vh] overflow-y-auto"
            style={{ background: colors.white }}
          >
            <div 
              className="sticky top-0 p-4"
              style={{ background: colors.white, borderBottom: `1px solid ${colors.gray100}` }}
            >
              <div 
                className="w-12 h-1 rounded-full mx-auto mb-4"
                style={{ background: colors.gray200 }}
              />
              <h3 className="font-semibold text-center">Sommaire</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsOpen(false);
                      }}
                      className="w-full text-left py-3 px-4 rounded-lg transition-colors"
                      style={{ color: colors.gray700 }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
