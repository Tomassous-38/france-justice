'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  red: '#CE1126',
};

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div 
      className="overflow-hidden"
      style={{ 
        borderBottom: `1px solid ${colors.gray200}`,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 group"
      >
        <span 
          className="font-semibold text-lg pr-4 transition-colors duration-300"
          style={{ color: isOpen ? colors.bluePrimary : colors.charcoal }}
        >
          {question}
        </span>
        <motion.div 
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen 
              ? `linear-gradient(135deg, ${colors.bluePrimary} 0%, #3B82F6 100%)`
              : colors.gray100,
            boxShadow: isOpen ? '0 4px 12px rgba(30, 64, 175, 0.3)' : 'none',
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4" style={{ color: colors.gray500 }} />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div 
              className="pb-6 leading-relaxed text-base"
              style={{ color: colors.gray600 }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div 
      className="rounded-2xl overflow-hidden"
      style={{
        background: colors.white,
        border: `1px solid ${colors.gray200}`,
        boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.08)',
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="px-6 md:px-8">
          <AccordionItem
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

// Premium FAQ Section wrapper
interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQSection({ 
  title = 'Questions fréquentes', 
  subtitle,
  items 
}: FAQSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4 mb-8">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ 
            background: `linear-gradient(135deg, ${colors.blueLight} 0%, rgba(30, 64, 175, 0.1) 100%)`,
          }}
        >
          <HelpCircle className="w-6 h-6" style={{ color: colors.bluePrimary }} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ color: colors.gray500 }}>{subtitle}</p>
          )}
        </div>
      </div>
      <Accordion items={items} />
    </motion.div>
  );
}
