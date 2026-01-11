'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Scale, 
  Home, 
  Building2, 
  Calculator, 
  Car, 
  ShoppingCart, 
  Globe,
  ArrowRight,
  Search,
  Shield,
  RefreshCw,
  Sparkles,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

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
  green: '#10B981',
  orange: '#F97316',
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
  { icon: Briefcase, title: 'Droit du Travail', count: 124, href: '/droit-travail', color: '#3B82F6' },
  { icon: Scale, title: 'Droit Pénal', count: 89, href: '/droit-penal', color: '#8B5CF6' },
  { icon: Home, title: 'Droit de la Famille', count: 156, href: '/droit-famille', color: '#EC4899' },
  { icon: Building2, title: 'Droit des Affaires', count: 67, href: '/droit-affaires', color: '#10B981' },
  { icon: Calculator, title: 'Droit Fiscal', count: 98, href: '/droit-fiscal', color: '#F97316' },
  { icon: Car, title: 'Droit Routier', count: 45, href: '/droit-routier', color: '#EF4444' },
  { icon: ShoppingCart, title: 'Consommation', count: 72, href: '/consommation', color: '#14B8A6' },
  { icon: Globe, title: 'Droit des Étrangers', count: 53, href: '/droit-etrangers', color: '#6366F1' },
];

const articles = [
  {
    title: 'Réforme des impôts 2026 : tout ce qui change pour votre déclaration',
    category: 'Fiscal',
    categoryColor: '#F97316',
    date: 'Il y a 2h',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    href: '/actualites/reforme-impots-2026',
  },
  {
    title: 'Licenciement économique : connaître et défendre vos droits',
    category: 'Travail',
    categoryColor: '#3B82F6',
    date: 'Hier',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    href: '/actualites/licenciement-economique-droits',
  },
  {
    title: 'Garde alternée : les nouvelles règles du divorce en 2026',
    category: 'Famille',
    categoryColor: '#EC4899',
    date: '10 jan',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    href: '/actualites/divorce-garde-alternee',
  },
];

const trustItems = [
  {
    icon: Shield,
    title: 'Sources officielles',
    description: 'Contenu vérifié basé sur les textes de loi et la jurisprudence française',
    color: '#10B981',
  },
  {
    icon: RefreshCw,
    title: 'Mis à jour quotidiennement',
    description: 'Nos experts suivent l\'évolution du droit en temps réel',
    color: '#1E40AF',
  },
  {
    icon: Sparkles,
    title: '100% gratuit',
    description: 'Accès libre à toutes nos ressources juridiques sans inscription',
    color: '#CE1126',
  }
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="Justice"
            fill
            priority
            className="object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${colors.blueDark}f5 0%, ${colors.bluePrimary}e8 50%, ${colors.red}dd 100%)`
            }}
          />
        </div>

        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
              top: '-10%',
              left: '-5%',
              filter: 'blur(60px)',
            }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(206, 17, 38, 0.2) 0%, transparent 70%)',
              bottom: '0%',
              right: '-5%',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-32">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Le droit français,
                  <br />
                  <span className="text-white/85">enfin accessible.</span>
                </h1>
                
                <p className="text-lg sm:text-xl mb-10 text-white/65 max-w-lg leading-relaxed">
                  Comprendre vos droits n'a jamais été aussi simple. 
                  Des informations juridiques <strong className="text-white">claires</strong>, <strong className="text-white">fiables</strong> et <strong className="text-white">à jour</strong>.
                </p>

                {/* Search */}
                <div className="max-w-lg">
                  <div 
                    className="relative flex items-center rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <Search className="absolute left-5 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Rechercher un sujet juridique..."
                      className="w-full pl-14 pr-36 py-5 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                    />
                    <button 
                      className="absolute right-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{ background: colors.red }}
                    >
                      Rechercher
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Categories */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: colors.blueLight, color: colors.bluePrimary }}
            >
              Domaines du droit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colors.charcoal }}>
              Explorez par catégorie
            </h2>
            <p className="text-lg" style={{ color: colors.gray500 }}>
              Trouvez rapidement les informations juridiques dont vous avez besoin
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <motion.div key={cat.title} variants={fadeInUp}>
                <Link
                  href={cat.href}
                  className="group block p-5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg"
                  style={{ borderColor: colors.gray200 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = cat.color + '40';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.gray200;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: cat.color + '15' }}
                  >
                    <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-bold mb-1 group-hover:text-blue-600 transition-colors" style={{ color: colors.charcoal }}>
                    {cat.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: colors.gray400 }}>{cat.count} articles</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Separator */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div 
            className="h-1 w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.bluePrimary}, ${colors.red})` }}
          />
        </motion.div>

        {/* News */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-end justify-between mb-12">
            <div>
              <span 
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                style={{ background: `${colors.red}12`, color: colors.red }}
              >
                <TrendingUp className="w-4 h-4" />
                À la une
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.charcoal }}>
                Actualités juridiques
              </h2>
              <p style={{ color: colors.gray500 }}>Les dernières évolutions du droit français</p>
            </div>
            <Link 
              href="/actualites"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-md"
              style={{ background: colors.blueLight, color: colors.bluePrimary }}
            >
              Toutes les actualités
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div key={article.title} variants={fadeInUp}>
                <Link
                  href={article.href}
                  className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
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
                      className="font-semibold group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                      style={{ color: colors.charcoal }}
                    >
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile link */}
          <motion.div variants={fadeInUp} className="mt-8 text-center md:hidden">
            <Link 
              href="/actualites"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold"
              style={{ background: colors.blueLight, color: colors.bluePrimary }}
            >
              Toutes les actualités
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.section>
      </div>

      {/* Trust section - full width */}
      <section className="py-20" style={{ background: colors.gray50 }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>
                Pourquoi nous faire confiance ?
              </h2>
              <p style={{ color: colors.gray500 }}>
                Une information juridique de qualité, accessible à tous
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {trustItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={fadeInUp}
                  className="text-center p-8 rounded-2xl bg-white transition-all duration-300 hover:shadow-lg"
                  style={{ border: `1px solid ${colors.gray200}` }}
                  whileHover={{ y: -4 }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: item.color + '10' }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: colors.gray500 }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="p-12 rounded-3xl text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 100%)` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative blob */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{ 
                background: 'radial-gradient(circle, rgba(206, 17, 38, 0.5) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
                filter: 'blur(40px)'
              }}
            />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Besoin d'aide juridique ?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto relative z-10">
              Explorez nos guides complets, posez vos questions ou trouvez un avocat près de chez vous.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/categories"
                className="px-6 py-3 rounded-xl font-semibold bg-white text-blue-900 hover:bg-gray-100 transition-colors"
              >
                Explorer les catégories
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
