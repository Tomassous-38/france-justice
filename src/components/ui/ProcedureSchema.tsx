'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F9FAFB',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  amber50: '#FFFBEB',
  amber400: '#F59E0B',
  amber800: '#92400E',
  blue50: '#EFF6FF',
};

interface ProcedureStep {
  id: number;
  title: string;
  subtitle?: string;
  duration?: string;
  icon?: string;
  description: string;
  details?: string[];
  documents?: string[];
  warning?: string;
  tip?: string;
}

interface ProcedureSchemaProps {
  steps: ProcedureStep[];
  title?: string;
}

export default function ProcedureSchema({ steps, title }: ProcedureSchemaProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div 
      className="rounded-2xl p-6 md:p-8"
      style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
    >
      {title && (
        <h3 className="text-xl font-bold mb-6 text-center" style={{ color: colors.charcoal }}>{title}</h3>
      )}
      
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative pb-8 last:pb-0">
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div 
                className="absolute left-6 top-14 w-0.5 h-[calc(100%-3rem)]"
                style={{ background: colors.gray200 }}
              />
            )}
            
            {/* Step Card */}
            <div className="relative flex gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-lg shadow-lg"
                  style={{ background: colors.blueDark }}
                >
                  {step.id}
                </div>
              </div>
              
              {/* Step Content */}
              <div className="flex-1">
                <button
                  onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 
                        className="font-semibold transition-colors"
                        style={{ color: colors.charcoal }}
                      >
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-sm" style={{ color: colors.gray500 }}>{step.subtitle}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {step.duration && (
                        <span 
                          className="flex items-center gap-1 text-sm px-3 py-1 rounded-full"
                          style={{ background: colors.gray50, color: colors.gray500 }}
                        >
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                      )}
                      <span style={{ color: colors.gray400 }}>
                        {expandedStep === step.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </div>
                  </div>
                </button>
                
                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedStep === step.id ? 'auto' : 0,
                    opacity: expandedStep === step.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    <p style={{ color: colors.gray600 }}>{step.description}</p>
                    
                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: colors.bluePrimary }}
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {step.documents && step.documents.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.documents.map((doc, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full"
                            style={{ background: colors.gray50, color: colors.gray600 }}
                          >
                            <FileText className="w-4 h-4" />
                            {doc}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {step.warning && (
                      <div 
                        className="p-3 border-l-4 rounded-r text-sm"
                        style={{ background: colors.amber50, borderColor: colors.amber400, color: colors.amber800 }}
                      >
                        ⚠️ {step.warning}
                      </div>
                    )}
                    
                    {step.tip && (
                      <div 
                        className="p-3 border-l-4 rounded-r text-sm"
                        style={{ background: colors.blue50, borderColor: colors.bluePrimary, color: colors.blueDark }}
                      >
                        💡 {step.tip}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Timeline component for horizontal display
interface TimelineStep {
  label: string;
  date?: string;
  duration?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="rounded-2xl p-6 overflow-x-auto" style={{ background: colors.gray50 }}>
      <div className="flex items-center min-w-max">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ background: colors.blueDark }}
              />
              <div className="mt-2 text-center">
                <div className="text-sm font-medium whitespace-nowrap" style={{ color: colors.charcoal }}>{step.label}</div>
                {step.date && (
                  <div className="text-xs" style={{ color: colors.gray500 }}>{step.date}</div>
                )}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center mx-4">
                <div className="w-20 h-0.5" style={{ background: colors.bluePrimary }} />
                {step.duration && (
                  <div className="text-xs mt-1" style={{ color: colors.gray400 }}>{step.duration}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
