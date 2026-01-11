'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Newspaper, TrendingUp } from 'lucide-react';

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
  blueDark: '#002654',
  red: '#CE1126',
  orange: '#F97316',
  pink: '#EC4899',
  purple: '#8B5CF6',
  emerald: '#10B981',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const categories = [
  { name: 'Tous', value: 'all', color: colors.gray500 },
  { name: 'Fiscal', value: 'fiscal', color: colors.orange },
  { name: 'Travail', value: 'travail', color: colors.bluePrimary },
  { name: 'Famille', value: 'famille', color: colors.pink },
  { name: 'Pénal', value: 'penal', color: colors.purple },
  { name: 'Immobilier', value: 'immobilier', color: colors.emerald },
];

const articles = [
  {
    title: 'Réforme des impôts 2026 : tout ce qui change pour votre déclaration',
    excerpt: 'Le gouvernement a annoncé plusieurs mesures qui impacteront votre imposition dès cette année.',
    category: 'Fiscal',
    categorySlug: 'fiscal',
    categoryColor: colors.orange,
    date: 'Il y a 2h',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    href: '/actualites/reforme-impots-2026',
    featured: true,
  },
  {
    title: 'Licenciement économique : vos droits en 2026',
    excerpt: 'Quelles sont les protections dont vous bénéficiez en cas de licenciement économique ?',
    category: 'Travail',
    categorySlug: 'travail',
    categoryColor: colors.bluePrimary,
    date: 'Hier',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    href: '/actualites/licenciement-economique-droits',
  },
  {
    title: 'Divorce : nouvelles règles pour la garde alternée',
    excerpt: 'La loi évolue pour favoriser la garde alternée dans l\'intérêt de l\'enfant.',
    category: 'Famille',
    categorySlug: 'famille',
    categoryColor: colors.pink,
    date: '10 jan',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    href: '/actualites/divorce-garde-alternee',
  },
  {
    title: 'Location meublée : nouveau régime fiscal en 2026',
    excerpt: 'Les règles d\'imposition des revenus locatifs meublés évoluent significativement.',
    category: 'Fiscal',
    categorySlug: 'fiscal',
    categoryColor: colors.orange,
    date: '9 jan',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    href: '/actualites/location-meublee-regime-fiscal',
  },
  {
    title: 'Rupture conventionnelle : record de demandes en 2025',
    excerpt: 'Plus de 500 000 ruptures conventionnelles ont été homologuées l\'année dernière.',
    category: 'Travail',
    categorySlug: 'travail',
    categoryColor: colors.bluePrimary,
    date: '8 jan',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    href: '/actualites/rupture-conventionnelle-record',
  },
  {
    title: 'Permis de conduire : vers une réforme de la formation',
    excerpt: 'Le gouvernement envisage de moderniser l\'accès au permis de conduire.',
    category: 'Routier',
    categorySlug: 'routier',
    categoryColor: colors.red,
    date: '7 jan',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    href: '/actualites/reforme-permis-conduire',
  },
  {
    title: 'Succession : les nouveaux abattements pour 2026',
    excerpt: 'Les seuils d\'exonération des droits de succession sont revalorisés.',
    category: 'Fiscal',
    categorySlug: 'fiscal',
    categoryColor: colors.orange,
    date: '6 jan',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    href: '/actualites/succession-abattements-2026',
  },
  {
    title: 'Bail d\'habitation : la nouvelle grille des loyers',
    excerpt: 'L\'encadrement des loyers s\'étend à de nouvelles agglomérations.',
    category: 'Immobilier',
    categorySlug: 'immobilier',
    categoryColor: colors.emerald,
    date: '5 jan',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    href: '/actualites/encadrement-loyers-2026',
  },
];

export default function ActualitesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.categorySlug === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredArticles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.blueDark}f5 0%, ${colors.bluePrimary}e8 50%, ${colors.red}dd 100%)`
        }}
      >
        <motion.div 
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Newspaper className="w-14 h-14 text-white/70 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Actualités juridiques
          </h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-8">
            Restez informé des dernières évolutions du droit français
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ color: colors.charcoal }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Categories */}
        <motion.div 
          className="py-6 flex flex-wrap items-center gap-2 border-b"
          style={{ borderColor: colors.gray200 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{ 
                background: selectedCategory === cat.value ? cat.color : colors.gray100,
                color: selectedCategory === cat.value ? colors.white : colors.gray600,
              }}
            >
              {cat.name}
            </button>
          ))}
          <span className="ml-auto text-sm" style={{ color: colors.gray500 }}>
            {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.section 
            className="py-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5" style={{ color: colors.red }} />
              <span className="font-semibold" style={{ color: colors.charcoal }}>À la une</span>
            </div>
            <Link
              href={featuredArticle.href}
              className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ border: `1px solid ${colors.gray200}` }}
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto md:h-80 relative overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: featuredArticle.categoryColor }}
                    >
                      {featuredArticle.category}
                    </span>
                    <span className="text-sm" style={{ color: colors.gray400 }}>{featuredArticle.date}</span>
                  </div>
                  <h2 
                    className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ color: colors.charcoal }}
                  >
                    {featuredArticle.title}
                  </h2>
                  <p style={{ color: colors.gray600 }}>{featuredArticle.excerpt}</p>
                </div>
              </div>
            </Link>
          </motion.section>
        )}

        {/* Separator */}
        <div className="flex justify-center py-4">
          <div 
            className="h-1 w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
          />
        </div>

        {/* Articles Grid */}
        <motion.section 
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <motion.div key={article.href} variants={fadeInUp}>
                  <Link
                    href={article.href}
                    className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
                    style={{ border: `1px solid ${colors.gray200}` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span 
                          className="px-2.5 py-0.5 rounded text-xs font-semibold"
                          style={{ background: article.categoryColor + '15', color: article.categoryColor }}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs" style={{ color: colors.gray400 }}>{article.date}</span>
                      </div>
                      <h3 
                        className="font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
                        style={{ color: colors.charcoal }}
                      >
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sm line-clamp-2" style={{ color: colors.gray500 }}>{article.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" style={{ color: colors.gray500 }}>
              Aucun article trouvé pour votre recherche.
            </div>
          )}
        </motion.section>

        {/* Pagination */}
        {filteredArticles.length > 0 && (
          <motion.div 
            className="flex items-center justify-center gap-2 py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((num) => (
              <button 
                key={num}
                className="w-10 h-10 rounded-lg font-medium transition-all"
                style={{ 
                  background: num === 1 ? colors.bluePrimary : 'transparent',
                  color: num === 1 ? colors.white : colors.gray600,
                }}
              >
                {num}
              </button>
            ))}
            <span style={{ color: colors.gray400 }}>...</span>
            <button 
              className="w-10 h-10 rounded-lg font-medium"
              style={{ color: colors.gray600 }}
            >
              12
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
