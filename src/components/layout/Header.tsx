'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Briefcase,
  Scale,
  Home,
  Building2,
  Calculator,
  Car,
  ShoppingCart,
  FileText,
  ArrowRight
} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  grayLight: '#F8FAFC',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
};

const categories = [
  {
    title: 'DROIT PRIVÉ',
    items: [
      { name: 'Droit de la famille', href: '/droit-famille', icon: Home, description: 'Mariage, divorce, succession' },
      { name: 'Droit immobilier', href: '/droit-immobilier', icon: Building2, description: 'Bail, copropriété, vente' },
      { name: 'Successions', href: '/successions', icon: FileText, description: 'Héritage, testament, donation' },
    ]
  },
  {
    title: 'DROIT PUBLIC',
    items: [
      { name: 'Droit fiscal', href: '/droit-fiscal', icon: Calculator, description: 'Impôts, TVA, déclarations' },
      { name: 'Droit pénal', href: '/droit-penal', icon: Scale, description: 'Infractions, procédure pénale' },
      { name: 'Droit administratif', href: '/droit-administratif', icon: Building2, description: 'Administration, contentieux' },
    ]
  },
  {
    title: 'VIE QUOTIDIENNE',
    items: [
      { name: 'Droit du travail', href: '/droit-travail', icon: Briefcase, description: 'Contrat, licenciement, congés' },
      { name: 'Consommation', href: '/consommation', icon: ShoppingCart, description: 'Litiges, garanties, arnaques' },
      { name: 'Droit routier', href: '/droit-routier', icon: Car, description: 'Permis, infractions, assurance' },
    ]
  }
];

const popularLinks = [
  { name: 'Divorce', href: '/droit-famille/divorce' },
  { name: 'Licenciement', href: '/droit-travail/licenciement' },
  { name: 'Contrat de bail', href: '/droit-immobilier/bail' },
  { name: 'Impôt sur le revenu', href: '/droit-fiscal/impot-sur-le-revenu' },
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const megaMenuVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.03
    }
  },
  exit: { 
    opacity: 0, 
    y: -5,
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  }
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  },
  exit: { 
    x: '100%',
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: isScrolled 
            ? '0 4px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)' 
            : 'none',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.5)' : 'none'
        }}
      >
        <div className="container-fj">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.bluePrimary} 100%)`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Scale className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)'
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span 
                  className="font-bold text-lg md:text-xl tracking-tight"
                  style={{ 
                    color: isScrolled ? colors.blueDark : 'white',
                    transition: 'color 0.3s ease'
                  }}
                >
                  France Justice
                </span>
                <span 
                  className="text-[10px] md:text-xs font-medium tracking-wider uppercase hidden sm:block"
                  style={{ 
                    color: isScrolled ? colors.gray500 : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Le droit accessible
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Search Button/Input */}
              <div className="relative mr-2">
                <AnimatePresence mode="wait">
                  {isSearchOpen ? (
                    <motion.div
                      key="search-input"
                      initial={{ width: 44, opacity: 0 }}
                      animate={{ width: 320, opacity: 1 }}
                      exit={{ width: 44, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="relative"
                    >
                      <input
                        type="text"
                        placeholder="Rechercher un sujet juridique..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-10 py-2.5 rounded-full text-sm focus:outline-none"
                        style={{ 
                          border: '1px solid rgba(30, 64, 175, 0.3)',
                          background: 'rgba(255, 255, 255, 0.95)',
                          boxShadow: '0 0 20px rgba(30, 64, 175, 0.15), 0 4px 12px rgba(0,0,0,0.05)',
                          color: colors.charcoal
                        }}
                        autoFocus
                      />
                      <Search 
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: colors.bluePrimary }}
                      />
                      <button 
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <X className="w-4 h-4" style={{ color: colors.gray400 }} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button 
                      key="search-button"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2.5 rounded-full transition-all duration-300"
                      style={{ 
                        color: isScrolled ? colors.gray700 : 'white',
                        background: isScrolled ? 'transparent' : 'rgba(255,255,255,0.1)'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        background: isScrolled ? 'rgba(30, 64, 175, 0.1)' : 'rgba(255,255,255,0.2)'
                      }}
                    >
                      <Search className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Categories Dropdown */}
              <button 
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-medium transition-all duration-300 relative group"
                style={{ 
                  color: isScrolled ? colors.gray700 : 'white',
                  background: isMegaMenuOpen 
                    ? (isScrolled ? 'rgba(30, 64, 175, 0.1)' : 'rgba(255,255,255,0.15)') 
                    : 'transparent'
                }}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Catégories
                <motion.div
                  animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Nav Links */}
              {[
                { name: 'Actualités', href: '/actualites' },
                { name: 'Formulaires', href: '/formulaires' },
                { name: 'Glossaire', href: '/glossaire' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="relative px-4 py-2.5 rounded-full font-medium transition-all duration-300 group"
                  style={{ color: isScrolled ? colors.gray700 : 'white' }}
                >
                  {link.name}
                  {/* Hover underline */}
                  <span 
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: isScrolled ? colors.bluePrimary : 'white' }}
                  />
                </Link>
              ))}

              {/* CTA Button */}
              <Link 
                href="/contact"
                className="ml-3 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                style={{
                  background: isScrolled 
                    ? `linear-gradient(135deg, ${colors.red} 0%, #e02040 100%)`
                    : 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
                  boxShadow: isScrolled ? '0 4px 15px rgba(206, 17, 38, 0.3)' : 'none'
                }}
              >
                Nous contacter
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl transition-colors"
              style={{ 
                color: isScrolled ? colors.gray700 : 'white',
                background: isScrolled ? 'transparent' : 'rgba(255,255,255,0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

      </header>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 z-50 bg-white shadow-2xl"
            style={{ top: '80px' }}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="grid grid-cols-3 gap-12">
                {categories.map((category) => (
                  <div key={category.title}>
                    <h3 
                      className="text-xs font-bold uppercase tracking-wider mb-4"
                      style={{ color: colors.bluePrimary }}
                    >
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link 
                            href={item.href}
                            className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <item.icon 
                              className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" 
                            />
                            <div>
                              <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors block">
                                {item.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Populaire :</span>
                  {popularLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-blue-600 hover:underline"
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/categories"
                  className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  onClick={() => setIsMegaMenuOpen(false)}
                >
                  Toutes les catégories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50"
              style={{ 
                background: 'rgba(0, 38, 84, 0.5)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 overflow-y-auto"
              style={{ 
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 px-6 py-5 flex items-center justify-between"
                style={{ 
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  borderBottom: `1px solid ${colors.gray100}`
                }}
              >
                <span 
                  className="font-bold text-xl"
                  style={{ color: colors.blueDark }}
                >
                  Menu
                </span>
                <motion.button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl transition-colors"
                  style={{ background: colors.gray100 }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" style={{ color: colors.gray700 }} />
                </motion.button>
              </div>

              <div className="p-6">
                {/* Mobile Search */}
                <div className="relative mb-8">
                  <Search 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" 
                    style={{ color: colors.gray400 }}
                  />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl focus:outline-none transition-shadow duration-300"
                    style={{ 
                      border: `1px solid ${colors.gray200}`,
                      background: colors.white,
                      fontSize: '16px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1), 0 4px 12px rgba(0,0,0,0.05)';
                      e.currentTarget.style.borderColor = colors.bluePrimary;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = colors.gray200;
                    }}
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6">
                  {categories.map((category, categoryIndex) => (
                    <motion.div 
                      key={category.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                    >
                      <h3 
                        className="text-xs font-bold uppercase tracking-widest mb-3 px-1"
                        style={{ color: colors.gray400 }}
                      >
                        {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <motion.li 
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                          >
                            <Link 
                              href={item.href}
                              className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300"
                              style={{ background: 'transparent' }}
                              onClick={() => setIsMobileMenuOpen(false)}
                              onTouchStart={(e) => {
                                e.currentTarget.style.background = colors.blueLight;
                              }}
                              onTouchEnd={(e) => {
                                e.currentTarget.style.background = 'transparent';
                              }}
                            >
                              <div 
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ 
                                  background: `linear-gradient(135deg, ${colors.blueLight} 0%, rgba(30, 64, 175, 0.08) 100%)`
                                }}
                              >
                                <item.icon style={{ width: 20, height: 20, color: colors.bluePrimary }} />
                              </div>
                              <div className="flex-1">
                                <span className="font-semibold" style={{ color: colors.charcoal }}>
                                  {item.name}
                                </span>
                                <span className="text-sm block" style={{ color: colors.gray500 }}>
                                  {item.description}
                                </span>
                              </div>
                              <ArrowRight className="w-5 h-5" style={{ color: colors.gray400 }} />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </nav>

                {/* Quick Links */}
                <div 
                  className="mt-8 pt-6 space-y-1"
                  style={{ borderTop: `1px solid ${colors.gray200}` }}
                >
                  {[
                    { name: 'Actualités', href: '/actualites' },
                    { name: 'Formulaires', href: '/formulaires' },
                    { name: 'Glossaire', href: '/glossaire' },
                  ].map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <Link 
                        href={link.href}
                        className="block p-4 rounded-xl font-semibold transition-colors"
                        style={{ color: colors.charcoal }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.red} 0%, #e02040 100%)`,
                      boxShadow: '0 8px 25px -5px rgba(206, 17, 38, 0.4)'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Nous contacter
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
