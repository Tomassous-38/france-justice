'use client';

import Link from 'next/link';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { ReactNode, ElementType } from 'react';
import { motion } from 'framer-motion';

// Color constants
const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  grayLight: '#F8FAFC',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray300: '#CBD5E1',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
};

// Base Card
interface BaseCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export function Card({ children, className = '', href, hover = true }: BaseCardProps) {
  const style: React.CSSProperties = {
    background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.grayLight} 100%)`,
    borderRadius: '1rem',
    border: `1px solid ${colors.gray200}`,
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return <div className={className} style={style}>{children}</div>;
}

// Category Card (Home page) - Premium
interface CategoryCardProps {
  icon: ElementType;
  title: string;
  count: number;
  href: string;
  color?: string;
}

export function CategoryCard({ icon: Icon, title, count, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group block relative">
      <motion.div 
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.grayLight} 100%)`,
          borderRadius: '1.25rem',
          border: `1px solid ${colors.gray200}`,
          padding: '1.75rem',
          transition: 'border-color 0.3s ease',
        }}
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 40px -10px rgba(30, 64, 175, 0.15), 0 0 20px rgba(30, 64, 175, 0.1)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {/* Gradient overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.03) 0%, rgba(206, 17, 38, 0.02) 100%)',
          }}
        />
        
        {/* Icon container with gradient */}
        <div 
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${colors.blueLight} 0%, rgba(30, 64, 175, 0.1) 100%)`,
            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.1)',
          }}
        >
          <Icon style={{ width: '1.5rem', height: '1.5rem', color: colors.bluePrimary }} />
        </div>

        <h3 className="relative font-bold text-lg mb-1 transition-colors duration-300 group-hover:text-blue-700" style={{ color: colors.charcoal }}>
          {title}
        </h3>
        
        <div className="relative flex items-center gap-2 text-sm" style={{ color: colors.gray500 }}>
          <span>{count} articles</span>
          <ArrowRight 
            className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" 
          />
        </div>
      </motion.div>
    </Link>
  );
}

// Article Card (Listing, News) - Premium
interface ArticleCardProps {
  title: string;
  excerpt?: string;
  category: string;
  categoryColor?: string;
  date: string;
  image?: string;
  href: string;
}

export function ArticleCard({ title, excerpt, category, categoryColor = 'bg-blue-500', date, image, href }: ArticleCardProps) {
  const colorMap: Record<string, string> = {
    'bg-orange-500': '#F97316',
    'bg-blue-500': '#3B82F6',
    'bg-pink-500': '#EC4899',
    'bg-purple-500': '#A855F7',
    'bg-emerald-500': '#10B981',
    'bg-red-500': '#EF4444',
  };
  const bgColor = colorMap[categoryColor] || '#3B82F6';

  return (
    <Link href={href} className="group block">
      <motion.div
        className="relative overflow-hidden"
        style={{
          background: colors.white,
          borderRadius: '1.25rem',
          border: `1px solid ${colors.gray200}`,
        }}
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {image && (
          <div className="relative h-52 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)'
              }}
            />
          </div>
        )}
        <div style={{ padding: '1.5rem' }}>
          <div className="flex items-center gap-3 mb-3">
            <span 
              className="px-3 py-1 text-xs font-semibold rounded-full text-white"
              style={{ background: bgColor }}
            >
              {category}
            </span>
            <span className="text-sm" style={{ color: colors.gray400 }}>{date}</span>
          </div>
          <h3 
            className="font-bold text-lg mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-blue-700"
            style={{ color: colors.charcoal }}
          >
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm line-clamp-2" style={{ color: colors.gray500 }}>
              {excerpt}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

// Bento Card (Category page) - Premium
interface BentoCardProps {
  title: string;
  description: string;
  count: number;
  href: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: ElementType;
}

export function BentoCard({ title, description, count, href, size = 'md', icon: Icon }: BentoCardProps) {
  const padding = size === 'sm' ? '1.25rem' : size === 'lg' ? '2rem' : '1.5rem';
  const minHeight = size === 'lg' ? '280px' : '200px';

  return (
    <Link href={href} className="group block h-full">
      <motion.div
        className="relative h-full flex flex-col justify-between overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.grayLight} 100%)`,
          borderRadius: '1.25rem',
          border: `1px solid ${colors.gray200}`,
          padding,
          minHeight,
        }}
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 40px -10px rgba(30, 64, 175, 0.15)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {/* Gradient border effect on hover */}
        <div 
          className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(206, 17, 38, 0.03) 100%)',
          }}
        />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-blue-700" style={{ color: colors.charcoal }}>
              {title}
            </h3>
            {Icon && (
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${colors.blueLight} 0%, rgba(30, 64, 175, 0.1) 100%)`,
                }}
              >
                <Icon style={{ width: '1.25rem', height: '1.25rem', color: colors.bluePrimary }} />
              </div>
            )}
          </div>
          <p className="text-sm line-clamp-2" style={{ color: colors.gray500 }}>
            {description}
          </p>
        </div>
        
        <div className="relative flex items-center gap-2 mt-4 font-semibold text-sm" style={{ color: colors.bluePrimary }}>
          <span>{count} articles</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
}

// Form/Paperasse Card - Premium
interface FormCardProps {
  cerfa: string;
  title: string;
  href: string;
  downloadUrl?: string;
}

export function FormCard({ cerfa, title, href, downloadUrl }: FormCardProps) {
  return (
    <motion.div
      className="group"
      style={{
        background: colors.white,
        borderRadius: '1rem',
        border: `1px solid ${colors.gray200}`,
        padding: '1.25rem',
      }}
      whileHover={{ 
        y: -2,
        boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link href={href} className="flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${colors.gray100} 0%, ${colors.gray50} 100%)`,
            border: `1px solid ${colors.gray200}`,
          }}
        >
          <FileText style={{ width: '1.5rem', height: '1.5rem', color: colors.gray400 }} />
        </div>
        <div className="flex-1 min-w-0">
          <span 
            className="block text-xs font-mono tracking-wider mb-1"
            style={{ color: colors.gray400 }}
          >
            {cerfa}
          </span>
          <h3 
            className="font-semibold line-clamp-1 transition-colors duration-300 group-hover:text-blue-700"
            style={{ color: colors.charcoal }}
          >
            {title}
          </h3>
        </div>
      </Link>
      {downloadUrl && (
        <a 
          href={downloadUrl}
          className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
          style={{
            border: `1px solid ${colors.gray200}`,
            color: colors.gray600,
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.blueLight;
            e.currentTarget.style.borderColor = colors.bluePrimary;
            e.currentTarget.style.color = colors.bluePrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = colors.gray200;
            e.currentTarget.style.color = colors.gray600;
          }}
        >
          <Download style={{ width: '1rem', height: '1rem' }} />
          Télécharger
        </a>
      )}
    </motion.div>
  );
}

// Hub Link Card (chips style) - Premium
interface HubLinkCardProps {
  title: string;
  href: string;
}

export function HubLinkCard({ title, href }: HubLinkCardProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center gap-2 transition-all duration-300 group"
      style={{
        padding: '0.625rem 1.25rem',
        background: colors.grayLight,
        borderRadius: '9999px',
        border: `1px solid ${colors.gray200}`,
        fontSize: '0.875rem',
        fontWeight: 500,
        color: colors.gray700,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.blueLight;
        e.currentTarget.style.borderColor = colors.bluePrimary;
        e.currentTarget.style.color = colors.bluePrimary;
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = colors.grayLight;
        e.currentTarget.style.borderColor = colors.gray200;
        e.currentTarget.style.color = colors.gray700;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {title}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

// Comparator Card - Premium
interface ComparatorCardProps {
  title: string;
  description?: string;
  href: string;
}

export function ComparatorCard({ title, description, href }: ComparatorCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        className="relative overflow-hidden"
        style={{
          background: colors.white,
          borderRadius: '1.25rem',
          border: `1px solid ${colors.gray200}`,
          padding: '1.5rem',
        }}
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="text-2xl p-2 rounded-xl"
            style={{ background: colors.blueLight }}
          >
            ⚖️
          </span>
          <h3 
            className="font-bold text-lg transition-colors duration-300 group-hover:text-blue-700"
            style={{ color: colors.charcoal }}
          >
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-sm" style={{ color: colors.gray500 }}>{description}</p>
        )}
        <div 
          className="mt-4 flex items-center gap-2 text-sm font-semibold"
          style={{ color: colors.bluePrimary }}
        >
          Comparer
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
}
