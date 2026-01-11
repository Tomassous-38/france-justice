import { ReactNode, CSSProperties } from 'react';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, CSSProperties> = {
  default: { background: '#F1F5F9', color: '#334155' },
  success: { background: '#DCFCE7', color: '#166534' },
  warning: { background: '#FEF3C7', color: '#B45309' },
  error: { background: '#FEE2E2', color: '#B91C1C' },
  info: { background: '#DBEAFE', color: '#1E40AF' },
  outline: { background: 'transparent', border: '1px solid #CBD5E1', color: '#475569' },
};

const sizeStyles: Record<BadgeSize, CSSProperties> = {
  sm: { padding: '0.125rem 0.5rem', fontSize: '0.75rem' },
  md: { padding: '0.25rem 0.75rem', fontSize: '0.875rem' },
};

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className = '' 
}: BadgeProps) {
  return (
    <span 
      className={`inline-flex items-center font-medium rounded-full ${className}`}
      style={{ ...variantStyles[variant], ...sizeStyles[size] }}
    >
      {children}
    </span>
  );
}

// Pre-built badges
export function NewBadge() {
  return <Badge variant="error">Nouveau</Badge>;
}

export function UpdatedBadge() {
  return <Badge variant="success">Mis à jour</Badge>;
}

export function PopularBadge() {
  return <Badge variant="info">Populaire</Badge>;
}

export function CerfaBadge({ number }: { number: string }) {
  return <Badge variant="outline">CERFA {number}</Badge>;
}

// Category Tag
interface CategoryTagProps {
  name: string;
  color?: string;
  href?: string;
}

export function CategoryTag({ name, href }: CategoryTagProps) {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    background: '#EFF6FF',
    color: '#1E40AF',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '9999px',
    transition: 'all 200ms ease',
  };
  
  if (href) {
    return (
      <a href={href} style={baseStyle}>
        {name}
      </a>
    );
  }
  
  return <span style={baseStyle}>{name}</span>;
}

// Tag List
interface TagListProps {
  tags: string[];
  onTagClick?: (tag: string) => void;
}

export function TagList({ tags, onTagClick }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick?.(tag)}
          className="rounded-full transition-colors"
          style={{
            padding: '0.25rem 0.75rem',
            background: '#F1F5F9',
            color: '#475569',
            fontSize: '0.875rem',
          }}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
