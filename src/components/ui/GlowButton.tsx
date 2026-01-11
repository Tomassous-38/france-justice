'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface GlowButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
}

interface GlowButtonAsButton extends GlowButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never;
}

interface GlowButtonAsLink extends GlowButtonBaseProps {
  href: string;
}

type GlowButtonProps = GlowButtonAsButton | GlowButtonAsLink;

const colors = {
  blueDark: '#002654',
  bluePrimary: '#1E40AF',
  red: '#CE1126',
  white: '#FFFFFF',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray600: '#475569',
  gray700: '#334155',
};

const variantStyles: Record<ButtonVariant, {
  background: string;
  color: string;
  border: string;
  hoverBackground: string;
  glowColor: string;
  shadow: string;
}> = {
  primary: {
    background: `linear-gradient(135deg, ${colors.red} 0%, #e02040 100%)`,
    color: colors.white,
    border: 'none',
    hoverBackground: `linear-gradient(135deg, #e02040 0%, ${colors.red} 100%)`,
    glowColor: 'rgba(206, 17, 38, 0.4)',
    shadow: '0 4px 15px rgba(206, 17, 38, 0.3)',
  },
  secondary: {
    background: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 100%)`,
    color: colors.white,
    border: 'none',
    hoverBackground: `linear-gradient(135deg, ${colors.bluePrimary} 0%, ${colors.blueDark} 100%)`,
    glowColor: 'rgba(30, 64, 175, 0.4)',
    shadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
  },
  ghost: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: colors.white,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    hoverBackground: 'rgba(255, 255, 255, 0.2)',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    shadow: 'none',
  },
  outline: {
    background: 'transparent',
    color: colors.gray700,
    border: `1px solid ${colors.gray200}`,
    hoverBackground: colors.gray100,
    glowColor: 'rgba(30, 64, 175, 0.2)',
    shadow: 'none',
  },
};

const sizeStyles: Record<ButtonSize, {
  padding: string;
  fontSize: string;
  borderRadius: string;
  iconSize: string;
}> = {
  sm: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    borderRadius: '0.625rem',
    iconSize: '1rem',
  },
  md: {
    padding: '0.75rem 1.5rem',
    fontSize: '0.9375rem',
    borderRadius: '0.75rem',
    iconSize: '1.125rem',
  },
  lg: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    borderRadius: '0.875rem',
    iconSize: '1.25rem',
  },
};

export function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  glow = true,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  href,
  ...props
}: GlowButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const buttonContent = (
    <>
      {/* Glow effect layer */}
      {glow && (
        <motion.div
          className="absolute inset-0 rounded-inherit opacity-0"
          style={{
            background: variantStyle.glowColor,
            filter: 'blur(15px)',
            borderRadius: 'inherit',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && (
          <span style={{ width: sizeStyle.iconSize, height: sizeStyle.iconSize }}>
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span style={{ width: sizeStyle.iconSize, height: sizeStyle.iconSize }}>
            {icon}
          </span>
        )}
      </span>
    </>
  );

  const buttonStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    fontWeight: 600,
    borderRadius: sizeStyle.borderRadius,
    background: variantStyle.background,
    color: variantStyle.color,
    border: variantStyle.border,
    boxShadow: variantStyle.shadow,
    cursor: 'pointer',
    overflow: 'hidden',
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const motionProps: HTMLMotionProps<'button' | 'a'> = {
    whileHover: { 
      scale: 1.02,
      y: -2,
    },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <Link href={href} className={className}>
        <motion.span
          style={buttonStyle}
          {...motionProps}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <motion.button
      style={buttonStyle}
      className={className}
      {...motionProps}
      {...buttonProps}
    >
      {buttonContent}
    </motion.button>
  );
}

// Convenience exports
export function PrimaryButton(props: Omit<GlowButtonProps, 'variant'>) {
  return <GlowButton variant="primary" {...props} />;
}

export function SecondaryButton(props: Omit<GlowButtonProps, 'variant'>) {
  return <GlowButton variant="secondary" {...props} />;
}

export function GhostButton(props: Omit<GlowButtonProps, 'variant'>) {
  return <GlowButton variant="ghost" {...props} />;
}

export function OutlineButton(props: Omit<GlowButtonProps, 'variant'>) {
  return <GlowButton variant="outline" {...props} />;
}

