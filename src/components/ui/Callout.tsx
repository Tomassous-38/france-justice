'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle, AlertCircle, CheckCircle, FileText } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'error' | 'success' | 'example';

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutConfig = {
  info: {
    icon: Lightbulb,
    defaultTitle: 'BON À SAVOIR',
    bgColor: 'linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.7) 100%)',
    borderColor: '#1E40AF',
    iconColor: '#1E40AF',
    titleColor: '#1E40AF',
    iconBg: 'rgba(30, 64, 175, 0.1)',
    glowColor: 'rgba(30, 64, 175, 0.15)',
  },
  warning: {
    icon: AlertTriangle,
    defaultTitle: 'ATTENTION',
    bgColor: 'linear-gradient(135deg, rgba(255, 251, 235, 0.9) 0%, rgba(254, 243, 199, 0.7) 100%)',
    borderColor: '#F59E0B',
    iconColor: '#F59E0B',
    titleColor: '#B45309',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    glowColor: 'rgba(245, 158, 11, 0.15)',
  },
  error: {
    icon: AlertCircle,
    defaultTitle: 'IMPORTANT',
    bgColor: 'linear-gradient(135deg, rgba(254, 242, 242, 0.9) 0%, rgba(254, 226, 226, 0.7) 100%)',
    borderColor: '#CE1126',
    iconColor: '#CE1126',
    titleColor: '#CE1126',
    iconBg: 'rgba(206, 17, 38, 0.1)',
    glowColor: 'rgba(206, 17, 38, 0.15)',
  },
  success: {
    icon: CheckCircle,
    defaultTitle: 'EN RÉSUMÉ',
    bgColor: 'linear-gradient(135deg, rgba(236, 253, 245, 0.9) 0%, rgba(209, 250, 229, 0.7) 100%)',
    borderColor: '#10B981',
    iconColor: '#10B981',
    titleColor: '#059669',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
  example: {
    icon: FileText,
    defaultTitle: 'EXEMPLE',
    bgColor: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.7) 100%)',
    borderColor: '#94A3B8',
    iconColor: '#64748B',
    titleColor: '#475569',
    iconBg: 'rgba(100, 116, 139, 0.1)',
    glowColor: 'rgba(100, 116, 139, 0.1)',
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <motion.div 
      className="relative rounded-xl p-6 my-8 overflow-hidden"
      style={{
        background: config.bgColor,
        borderLeft: `4px solid ${config.borderColor}`,
        boxShadow: `0 4px 20px ${config.glowColor}`,
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative flex items-start gap-4">
        {/* Icon with glow */}
        <div 
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ 
            background: config.iconBg,
            boxShadow: `0 0 15px ${config.glowColor}`
          }}
        >
          <Icon className="w-5 h-5" style={{ color: config.iconColor }} />
        </div>
        
        <div className="flex-1">
          <span 
            className="font-bold text-xs uppercase tracking-wider block mb-2"
            style={{ color: config.titleColor }}
          >
            {displayTitle}
          </span>
          <div className="leading-relaxed text-sm" style={{ color: '#334155' }}>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Export individual callout components for convenience
export function InfoCallout({ title, children }: Omit<CalloutProps, 'type'>) {
  return <Callout type="info" title={title}>{children}</Callout>;
}

export function WarningCallout({ title, children }: Omit<CalloutProps, 'type'>) {
  return <Callout type="warning" title={title}>{children}</Callout>;
}

export function ErrorCallout({ title, children }: Omit<CalloutProps, 'type'>) {
  return <Callout type="error" title={title}>{children}</Callout>;
}

export function SuccessCallout({ title, children }: Omit<CalloutProps, 'type'>) {
  return <Callout type="success" title={title}>{children}</Callout>;
}

export function ExampleCallout({ title, children }: Omit<CalloutProps, 'type'>) {
  return <Callout type="example" title={title}>{children}</Callout>;
}
