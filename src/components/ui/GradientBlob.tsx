'use client';

import { motion } from 'framer-motion';

type BlobVariant = 'blue' | 'red' | 'purple' | 'green' | 'mixed';
type BlobSize = 'sm' | 'md' | 'lg' | 'xl';

interface GradientBlobProps {
  variant?: BlobVariant;
  size?: BlobSize;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  blur?: number;
  opacity?: number;
  animate?: boolean;
  duration?: number;
  className?: string;
}

const colors = {
  blue: 'rgba(30, 64, 175, 0.6)',
  blueDark: 'rgba(0, 38, 84, 0.6)',
  red: 'rgba(206, 17, 38, 0.5)',
  purple: 'rgba(139, 92, 246, 0.5)',
  green: 'rgba(16, 185, 129, 0.5)',
};

const variantGradients: Record<BlobVariant, string> = {
  blue: `radial-gradient(circle, ${colors.blue} 0%, transparent 70%)`,
  red: `radial-gradient(circle, ${colors.red} 0%, transparent 70%)`,
  purple: `radial-gradient(circle, ${colors.purple} 0%, transparent 70%)`,
  green: `radial-gradient(circle, ${colors.green} 0%, transparent 70%)`,
  mixed: `radial-gradient(circle, ${colors.blue} 0%, ${colors.red} 50%, transparent 70%)`,
};

const sizeStyles: Record<BlobSize, { width: string; height: string }> = {
  sm: { width: '300px', height: '300px' },
  md: { width: '500px', height: '500px' },
  lg: { width: '700px', height: '700px' },
  xl: { width: '900px', height: '900px' },
};

export function GradientBlob({
  variant = 'blue',
  size = 'md',
  position = {},
  blur = 60,
  opacity = 0.3,
  animate = true,
  duration = 15,
  className = '',
}: GradientBlobProps) {
  const sizeStyle = sizeStyles[size];

  const animationVariants = animate ? {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -20, 30, 0],
      scale: [1, 1.1, 0.95, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  } : {};

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        ...position,
        width: sizeStyle.width,
        height: sizeStyle.height,
        background: variantGradients[variant],
        filter: `blur(${blur}px)`,
        opacity,
      }}
      variants={animationVariants}
      animate={animate ? 'animate' : undefined}
    />
  );
}

// Hero Background with multiple blobs
interface HeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeroBackground({ children, className = '' }: HeroBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #001a3d 0%, #002654 30%, #0a3d7c 70%, #1E40AF 100%)'
        }}
      />

      {/* Animated blobs */}
      <GradientBlob 
        variant="blue"
        size="lg"
        position={{ top: '-20%', left: '-10%' }}
        opacity={0.3}
        duration={15}
      />
      <GradientBlob 
        variant="red"
        size="md"
        position={{ bottom: '-10%', right: '-5%' }}
        opacity={0.2}
        duration={12}
        blur={80}
      />
      <GradientBlob 
        variant="blue"
        size="md"
        position={{ top: '40%', right: '20%' }}
        opacity={0.15}
        duration={18}
        blur={70}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blob-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blob-grid)" />
        </svg>
      </div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Glass Card Background
interface GlassBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function GlassBackground({ 
  children, 
  className = '',
  intensity = 'medium' 
}: GlassBackgroundProps) {
  const intensityStyles = {
    light: {
      background: 'rgba(255, 255, 255, 0.05)',
      blur: 10,
      border: 'rgba(255, 255, 255, 0.1)',
    },
    medium: {
      background: 'rgba(255, 255, 255, 0.08)',
      blur: 20,
      border: 'rgba(255, 255, 255, 0.15)',
    },
    heavy: {
      background: 'rgba(255, 255, 255, 0.12)',
      blur: 30,
      border: 'rgba(255, 255, 255, 0.2)',
    },
  };

  const style = intensityStyles[intensity];

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: style.background,
        backdropFilter: `blur(${style.blur}px)`,
        WebkitBackdropFilter: `blur(${style.blur}px)`,
        border: `1px solid ${style.border}`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)',
      }}
    >
      {children}
    </div>
  );
}

// Floating decorative element
interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  amplitude?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  amplitude = 10,
  className = '',
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

