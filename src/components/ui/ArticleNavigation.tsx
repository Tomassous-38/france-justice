import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray500: '#64748B',
  gray600: '#475569',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  red: '#CE1126',
  green: '#10B981',
};

interface NavItem {
  title: string;
  href: string;
  excerpt?: string;
}

interface ArticleNavigationProps {
  previous?: NavItem;
  next?: NavItem;
}

export default function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
  if (!previous && !next) return null;

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8"
      style={{ borderTop: `1px solid ${colors.gray200}` }}
    >
      {/* Previous */}
      <div>
        {previous && (
          <Link 
            href={previous.href}
            className="group block p-5 rounded-2xl transition-all"
            style={{ border: `1px solid ${colors.gray200}` }}
          >
            <div className="flex items-center gap-2 text-sm mb-2" style={{ color: colors.gray500 }}>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Précédent</span>
            </div>
            <h4 
              className="font-semibold line-clamp-2 transition-colors"
              style={{ color: colors.charcoal }}
            >
              {previous.title}
            </h4>
            {previous.excerpt && (
              <p className="text-sm mt-1 line-clamp-1" style={{ color: colors.gray500 }}>{previous.excerpt}</p>
            )}
          </Link>
        )}
      </div>

      {/* Next */}
      <div className="md:text-right">
        {next && (
          <Link 
            href={next.href}
            className="group block p-5 rounded-2xl transition-all"
            style={{ border: `1px solid ${colors.gray200}` }}
          >
            <div className="flex items-center justify-end gap-2 text-sm mb-2" style={{ color: colors.gray500 }}>
              <span>Suivant</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 
              className="font-semibold line-clamp-2 transition-colors"
              style={{ color: colors.charcoal }}
            >
              {next.title}
            </h4>
            {next.excerpt && (
              <p className="text-sm mt-1 line-clamp-1" style={{ color: colors.gray500 }}>{next.excerpt}</p>
            )}
          </Link>
        )}
      </div>
    </div>
  );
}

// Feedback Widget
interface FeedbackWidgetProps {
  pageId?: string;
}

export function FeedbackWidget({ pageId }: FeedbackWidgetProps) {
  return (
    <div 
      className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6 rounded-2xl text-center"
      style={{ background: colors.gray50 }}
    >
      <span style={{ color: colors.gray600 }}>💬 Cette page vous a-t-elle été utile ?</span>
      <div className="flex items-center gap-2">
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
        >
          👍 Oui
        </button>
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
        >
          👎 Non
        </button>
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
        >
          💡 Suggérer
        </button>
      </div>
    </div>
  );
}

// Share Buttons
interface ShareButtonsProps {
  url?: string;
  title?: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm" style={{ color: colors.gray500 }}>Partager :</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg transition-colors"
        style={{ color: colors.gray500 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg transition-colors"
        style={{ color: colors.gray500 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg transition-colors"
        style={{ color: colors.gray500 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg transition-colors"
        style={{ color: colors.gray500 }}
        title="Copier le lien"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
      </button>
    </div>
  );
}
