'use client';

import Link from 'next/link';
import { Scale, Heart } from 'lucide-react';

const footerLinks = {
  droit: [
    { name: 'Droit du travail', href: '/droit-travail' },
    { name: 'Droit fiscal', href: '/droit-fiscal' },
    { name: 'Droit de la famille', href: '/droit-famille' },
    { name: 'Droit pénal', href: '/droit-penal' },
    { name: 'Droit immobilier', href: '/droit-immobilier' },
  ],
  ressources: [
    { name: 'Actualités', href: '/actualites' },
    { name: 'Formulaires CERFA', href: '/formulaires' },
    { name: 'Glossaire juridique', href: '/glossaire' },
    { name: 'Procédures', href: '/procedures' },
  ],
  apropos: [
    { name: 'Qui sommes-nous ?', href: '/a-propos' },
    { name: 'Nous contacter', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Confidentialité', href: '/confidentialite' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block">France Justice</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Le droit accessible</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Votre référence pour comprendre le droit français. 
              Des informations juridiques claires, accessibles et à jour.
            </p>
          </div>

          {/* Domaines */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Domaines</h4>
            <ul className="space-y-3">
              {footerLinks.droit.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">À propos</h4>
            <ul className="space-y-3">
              {footerLinks.apropos.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-1">
              © {new Date().getFullYear()} France Justice. Fait avec 
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              en France.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span>Sources officielles</span>
              <span>•</span>
              <span>100% gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
