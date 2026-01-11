import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réforme des impôts 2026 : tout ce qui change | France Justice',
  description: 'Le gouvernement a annoncé plusieurs mesures fiscales qui entreront en vigueur dès 2026. Entre revalorisation des barèmes, nouvelles déductions et simplification des démarches, voici tout ce que vous devez savoir.',
  keywords: ['impôts 2026', 'réforme fiscale', 'déclaration revenus', 'barème impôt', 'crédit impôt'],
  authors: [{ name: 'Marie Dupont' }],
  openGraph: {
    title: 'Réforme des impôts 2026 : tout ce qui change pour votre déclaration',
    description: 'Le gouvernement a annoncé plusieurs mesures fiscales qui entreront en vigueur dès 2026.',
    type: 'article',
    publishedTime: '2026-01-10T10:00:00Z',
    modifiedTime: '2026-01-10T10:00:00Z',
    authors: ['Marie Dupont'],
    section: 'Fiscal',
    tags: ['impôts', 'fiscal', 'déclaration', '2026'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Réforme des impôts 2026',
      },
    ],
    locale: 'fr_FR',
    siteName: 'France Justice',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réforme des impôts 2026 : tout ce qui change',
    description: 'Le gouvernement a annoncé plusieurs mesures fiscales pour 2026.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://france-justice.fr/actualites/reforme-impots-2026',
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD for Google Discover */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: 'Réforme des impôts 2026 : tout ce qui change pour votre déclaration',
            description: 'Le gouvernement a annoncé plusieurs mesures fiscales qui entreront en vigueur dès 2026.',
            image: [
              'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80',
            ],
            datePublished: '2026-01-10T10:00:00+01:00',
            dateModified: '2026-01-10T10:00:00+01:00',
            author: {
              '@type': 'Person',
              name: 'Marie Dupont',
              url: 'https://france-justice.fr/auteurs/marie-dupont',
            },
            publisher: {
              '@type': 'Organization',
              name: 'France Justice',
              logo: {
                '@type': 'ImageObject',
                url: 'https://france-justice.fr/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://france-justice.fr/actualites/reforme-impots-2026',
            },
            articleSection: 'Fiscal',
            keywords: ['impôts', 'fiscal', 'réforme', '2026', 'déclaration'],
          }),
        }}
      />
      {children}
    </>
  );
}

