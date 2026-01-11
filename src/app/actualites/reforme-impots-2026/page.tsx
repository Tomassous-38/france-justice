'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight
} from 'lucide-react';

// Reading Progress Hook - Optimized with RAF
function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const readProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, readProgress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return progress;
}

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray600: '#475569',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
  orange: '#F97316',
};

const relatedArticles = [
  {
    title: 'Location meublée : nouveau régime fiscal en 2026',
    category: 'Fiscal',
    date: '9 jan 2026',
    href: '/actualites/location-meublee-regime-fiscal',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
  },
  {
    title: 'Succession : les nouveaux abattements pour 2026',
    category: 'Fiscal',
    date: '6 jan 2026',
    href: '/actualites/succession-abattements-2026',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
  },
  {
    title: 'Déclaration de revenus : les dates clés 2026',
    category: 'Fiscal',
    date: '3 jan 2026',
    href: '/actualites/declaration-revenus-dates-2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80',
  },
];

export default function ArticlePage() {
  const readingProgress = useReadingProgress();

  return (
    <>
      {/* Reading Progress Bar - Fixed at top (GPU accelerated) */}
      <div 
        className="fixed top-20 left-0 right-0 h-1 z-50 overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.05)' }}
      >
        <div 
          className="h-full origin-left will-change-transform"
          style={{ 
            transform: `scaleX(${readingProgress / 100})`,
            background: `linear-gradient(90deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 40%, ${colors.red} 100%)`,
            boxShadow: readingProgress > 5 ? '0 0 8px rgba(206, 17, 38, 0.4)' : 'none',
          }}
        />
      </div>

      <div style={{ background: colors.gray50, minHeight: '100vh' }}>
      {/* Hero Image - Optimized for Discover */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
          alt="Réforme des impôts 2026 - Documents fiscaux et calculatrice"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }}
        />
        
        {/* Back button */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-4xl mx-auto px-6">
            <Link 
              href="/actualites"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ background: colors.orange, color: colors.white }}
            >
              Fiscal
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Réforme des impôts 2026 : tout ce qui change pour votre déclaration
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="relative">
        <div className="max-w-4xl mx-auto px-6 -mt-6">
          {/* Meta Card */}
          <div 
            className="rounded-xl p-6 mb-8 flex flex-wrap items-center justify-between gap-4"
            style={{ background: colors.white, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: colors.gray500 }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>10 janvier 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Par <strong style={{ color: colors.charcoal }}>Marie Dupont</strong></span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Partager"
              >
                <Share2 className="w-5 h-5" style={{ color: colors.gray500 }} />
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Sauvegarder"
              >
                <Bookmark className="w-5 h-5" style={{ color: colors.gray500 }} />
              </button>
            </div>
          </div>

          {/* Chapô */}
          <p 
            className="text-xl leading-relaxed mb-8 font-medium"
            style={{ color: colors.gray700 }}
          >
            Le gouvernement a annoncé plusieurs mesures fiscales qui entreront en vigueur dès 2026. 
            Entre revalorisation des barèmes, nouvelles déductions et simplification des démarches, 
            voici tout ce que vous devez savoir pour préparer votre prochaine déclaration.
          </p>

          {/* Table of Contents */}
          <div 
            className="rounded-xl p-6 mb-8"
            style={{ background: colors.blueLight, border: `1px solid ${colors.bluePrimary}20` }}
          >
            <h2 className="font-bold mb-4" style={{ color: colors.blueDark }}>
              📋 Sommaire
            </h2>
            <nav>
              <ul className="space-y-2">
                {[
                  'Revalorisation du barème de l\'impôt',
                  'Nouvelles déductions fiscales',
                  'Crédits d\'impôt modifiés',
                  'Calendrier de la déclaration 2026',
                  'Ce qui ne change pas',
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#section-${index + 1}`}
                      className="flex items-center gap-2 text-sm hover:underline"
                      style={{ color: colors.bluePrimary }}
                    >
                      <ChevronRight className="w-4 h-4" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <section id="section-1" className="mb-12">
              <h2 
                className="text-2xl font-bold mb-4 pb-2"
                style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
              >
                1. Revalorisation du barème de l'impôt
              </h2>
              <p style={{ color: colors.gray600, lineHeight: 1.8 }}>
                Le barème de l'impôt sur le revenu est revalorisé de <strong>4,8%</strong> pour tenir compte 
                de l'inflation. Cette revalorisation concerne toutes les tranches du barème progressif, 
                ce qui devrait permettre à de nombreux contribuables de voir leur imposition allégée.
              </p>
              
              {/* Info Box */}
              <div 
                className="rounded-xl p-5 my-6"
                style={{ background: colors.gray100, borderLeft: `4px solid ${colors.bluePrimary}` }}
              >
                <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                  💡 Bon à savoir
                </p>
                <p className="text-sm" style={{ color: colors.gray600 }}>
                  La revalorisation du barème ne signifie pas une baisse d'impôt automatique. 
                  Elle permet simplement de neutraliser l'effet de l'inflation sur votre pouvoir d'achat.
                </p>
              </div>

              <p style={{ color: colors.gray600, lineHeight: 1.8 }}>
                Concrètement, si vos revenus ont augmenté au même rythme que l'inflation, 
                votre impôt devrait rester stable. En revanche, si vos revenus ont progressé 
                moins vite que l'inflation, vous pourriez bénéficier d'une légère baisse.
              </p>
            </section>

            <section id="section-2" className="mb-12">
              <h2 
                className="text-2xl font-bold mb-4 pb-2"
                style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
              >
                2. Nouvelles déductions fiscales
              </h2>
              <p style={{ color: colors.gray600, lineHeight: 1.8 }}>
                Plusieurs nouvelles déductions font leur apparition cette année :
              </p>
              
              <ul className="my-6 space-y-3">
                {[
                  'Déduction pour télétravail : jusqu\'à 550€ par an sans justificatif',
                  'Frais de mobilité durable : vélo, trottinette électrique, covoiturage',
                  'Dépenses de rénovation énergétique élargies',
                  'Frais de garde d\'enfants revalorisés',
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ background: colors.gray50 }}
                  >
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ background: colors.bluePrimary, color: colors.white }}
                    >
                      ✓
                    </span>
                    <span style={{ color: colors.gray700 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="section-3" className="mb-12">
              <h2 
                className="text-2xl font-bold mb-4 pb-2"
                style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
              >
                3. Crédits d'impôt modifiés
              </h2>
              <p style={{ color: colors.gray600, lineHeight: 1.8 }}>
                Le crédit d'impôt pour la transition énergétique (CITE) est remplacé par un nouveau 
                dispositif plus avantageux. Les travaux éligibles sont élargis et les plafonds revus à la hausse.
              </p>

              {/* Warning Box */}
              <div 
                className="rounded-xl p-5 my-6"
                style={{ background: '#FEF3C7', borderLeft: `4px solid ${colors.orange}` }}
              >
                <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                  ⚠️ Attention
                </p>
                <p className="text-sm" style={{ color: colors.gray600 }}>
                  Les travaux doivent être réalisés par un professionnel RGE (Reconnu Garant de l'Environnement) 
                  pour être éligibles au crédit d'impôt.
                </p>
              </div>
            </section>

            <section id="section-4" className="mb-12">
              <h2 
                className="text-2xl font-bold mb-4 pb-2"
                style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
              >
                4. Calendrier de la déclaration 2026
              </h2>
              
              {/* Timeline */}
              <div className="my-6 space-y-4">
                {[
                  { date: '10 avril', event: 'Ouverture du service de déclaration en ligne' },
                  { date: '22 mai', event: 'Date limite Zone 1 (départements 01 à 19)' },
                  { date: '29 mai', event: 'Date limite Zone 2 (départements 20 à 54)' },
                  { date: '5 juin', event: 'Date limite Zone 3 (départements 55 à 976)' },
                  { date: '20 mai', event: 'Date limite déclaration papier (toutes zones)' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg"
                    style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
                  >
                    <div 
                      className="px-3 py-1 rounded-lg text-sm font-bold"
                      style={{ background: colors.bluePrimary, color: colors.white }}
                    >
                      {item.date}
                    </div>
                    <span style={{ color: colors.gray700 }}>{item.event}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="section-5" className="mb-12">
              <h2 
                className="text-2xl font-bold mb-4 pb-2"
                style={{ color: colors.charcoal, borderBottom: `2px solid ${colors.bluePrimary}` }}
              >
                5. Ce qui ne change pas
              </h2>
              <p style={{ color: colors.gray600, lineHeight: 1.8 }}>
                Malgré ces évolutions, plusieurs éléments restent inchangés : le prélèvement à la source, 
                les abattements pour les personnes âgées, et les réductions pour dons aux associations 
                continuent de s'appliquer dans les mêmes conditions qu'en 2025.
              </p>
            </section>
          </div>

          {/* Share Section */}
          <div 
            className="rounded-xl p-6 my-12"
            style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
          >
            <p className="font-semibold mb-4" style={{ color: colors.charcoal }}>
              Partager cet article
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, color: '#1877F2', label: 'Facebook' },
                { icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
                { icon: Linkedin, color: '#0A66C2', label: 'LinkedIn' },
                { icon: LinkIcon, color: colors.gray500, label: 'Copier le lien' },
              ].map((social) => (
                <button
                  key={social.label}
                  className="p-3 rounded-lg transition-all hover:scale-105"
                  style={{ background: `${social.color}15`, color: social.color }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div 
            className="rounded-xl p-6 mb-12 flex items-center gap-6"
            style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
          >
            <div 
              className="w-16 h-16 rounded-full flex-shrink-0"
              style={{ background: colors.bluePrimary }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xl font-bold">
                MD
              </div>
            </div>
            <div>
              <p className="font-bold" style={{ color: colors.charcoal }}>Marie Dupont</p>
              <p className="text-sm mb-2" style={{ color: colors.gray500 }}>
                Journaliste spécialisée en droit fiscal
              </p>
              <p className="text-sm" style={{ color: colors.gray600 }}>
                Marie couvre l'actualité fiscale depuis 10 ans. Elle décrypte les réformes 
                pour les rendre accessibles au plus grand nombre.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12" style={{ background: colors.white }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: colors.charcoal }}>
            Articles similaires
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={{ background: `${colors.orange}15`, color: colors.orange }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs" style={{ color: colors.gray400 }}>{article.date}</span>
                  </div>
                  <h3 
                    className="font-semibold group-hover:text-blue-600 transition-colors line-clamp-2"
                    style={{ color: colors.charcoal }}
                  >
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

