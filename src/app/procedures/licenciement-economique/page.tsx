'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Clock, 
  FileText, 
  Download, 
  ChevronRight, 
  ChevronDown, 
  AlertTriangle, 
  Lightbulb,
  Workflow,
  ArrowRight
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
  amber: '#F59E0B',
  purple: '#8B5CF6',
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const procedureSteps = [
  {
    id: 1,
    title: 'Convocation à l\'entretien préalable',
    subtitle: 'Lettre RAR ou remise en main propre',
    duration: 'J-5 min',
    description: 'L\'employeur doit convoquer le salarié à un entretien préalable par lettre recommandée avec accusé de réception ou remise en main propre contre décharge.',
    details: [
      'La lettre doit mentionner l\'objet de l\'entretien',
      'Indiquer la date, l\'heure et le lieu de l\'entretien',
      'Préciser la possibilité de se faire assister',
    ],
    documents: ['Modèle de convocation'],
    warning: 'Le non-respect du délai de 5 jours ouvrables rend la procédure irrégulière.',
    color: colors.bluePrimary,
  },
  {
    id: 2,
    title: 'Entretien préalable',
    subtitle: 'Discussion avec le salarié',
    duration: 'Jour J',
    description: 'L\'employeur expose les motifs de la décision envisagée et recueille les explications du salarié.',
    details: [
      'L\'employeur explique les raisons économiques',
      'Le salarié peut poser des questions et contester',
      'Un conseiller du salarié peut être présent',
      'Aucune décision ne peut être annoncée lors de l\'entretien',
    ],
    tip: 'Le salarié peut demander un compte-rendu écrit de l\'entretien.',
    color: colors.purple,
  },
  {
    id: 3,
    title: 'Délai de réflexion',
    subtitle: 'Période incompressible',
    duration: '7 jours min',
    description: 'Un délai minimum de 7 jours ouvrables doit s\'écouler entre l\'entretien préalable et l\'envoi de la lettre de licenciement.',
    details: [
      'Ce délai permet à l\'employeur de réfléchir',
      'Le salarié peut proposer des alternatives',
      'L\'employeur doit rechercher un reclassement',
    ],
    warning: 'Le délai est de 15 jours pour les cadres dans les entreprises de plus de 50 salariés.',
    color: colors.amber,
  },
  {
    id: 4,
    title: 'Lettre de licenciement',
    subtitle: 'Notification officielle',
    duration: 'J+7 min',
    description: 'L\'employeur envoie la lettre de licenciement par recommandé avec accusé de réception.',
    details: [
      'Motif économique détaillé',
      'Conséquences sur l\'emploi ou le contrat',
      'Priorité de réembauche pendant 1 an',
      'Modalités du CSP si applicable',
    ],
    documents: ['Modèle de lettre de licenciement'],
    color: colors.red,
  },
  {
    id: 5,
    title: 'Préavis',
    subtitle: 'Période de travail avant départ',
    duration: '1 à 3 mois',
    description: 'Le salarié effectue son préavis sauf dispense par l\'employeur.',
    details: [
      'Moins de 6 mois d\'ancienneté : selon convention collective',
      'De 6 mois à 2 ans : 1 mois minimum',
      'Plus de 2 ans : 2 mois minimum',
      'Cadres : souvent 3 mois selon convention',
    ],
    tip: 'Le salarié peut être dispensé de préavis tout en percevant l\'indemnité correspondante.',
    color: colors.green,
  },
  {
    id: 6,
    title: 'Fin du contrat & Documents',
    subtitle: 'Solde de tout compte',
    duration: 'Dernier jour',
    description: 'L\'employeur remet les documents de fin de contrat et verse les indemnités dues.',
    details: [
      'Certificat de travail',
      'Attestation France Travail',
      'Reçu pour solde de tout compte',
      'Indemnité de licenciement',
      'Indemnité compensatrice de congés payés',
    ],
    documents: ['Certificat de travail', 'Attestation France Travail', 'Solde tout compte'],
    color: colors.blueDark,
  },
];

const documents = [
  { title: 'Convocation entretien', icon: '📄' },
  { title: 'Compte-rendu entretien', icon: '📝' },
  { title: 'Lettre de licenciement', icon: '📮' },
  { title: 'Solde tout compte', icon: '💰' },
];

const faqItems = [
  {
    question: "Peut-on refuser l'entretien préalable ?",
    answer: "Oui, le salarié peut refuser de se présenter. Cependant, son absence ne bloque pas la procédure. Il est généralement conseillé de s'y rendre pour faire valoir ses arguments."
  },
  {
    question: "Que faire si la procédure n'est pas respectée ?",
    answer: "Si la procédure n'est pas respectée, le licenciement n'est pas nul mais irrégulier. Le salarié peut obtenir une indemnité pour non-respect de la procédure."
  },
  {
    question: "Qu'est-ce que le CSP ?",
    answer: "Le Contrat de Sécurisation Professionnelle (CSP) est un dispositif proposé aux salariés licenciés pour motif économique dans les entreprises de moins de 1000 salariés."
  },
];

function StepCard({ step, isOpen, onToggle }: { step: typeof procedureSteps[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div 
      className="rounded-xl overflow-hidden"
      style={{ 
        border: `1px solid ${isOpen ? step.color : colors.gray200}`,
        background: colors.white,
      }}
      variants={fadeInUp}
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center gap-4 text-left"
      >
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
          style={{ background: step.color }}
        >
          {step.id}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-bold" style={{ color: colors.charcoal }}>{step.title}</h3>
            <span 
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{ background: `${step.color}15`, color: step.color }}
            >
              {step.duration}
            </span>
          </div>
          <p className="text-sm" style={{ color: colors.gray500 }}>{step.subtitle}</p>
        </div>
        <ChevronDown 
          className="w-5 h-5 transition-transform flex-shrink-0"
          style={{ 
            color: colors.gray400,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-0">
              <div className="pl-14">
                <p className="mb-4" style={{ color: colors.gray600 }}>{step.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: step.color }} />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {step.warning && (
                  <div 
                    className="flex items-start gap-2 p-3 rounded-lg text-sm mb-3"
                    style={{ background: '#FEF3C7' }}
                  >
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.amber }} />
                    <span style={{ color: colors.gray700 }}>{step.warning}</span>
                  </div>
                )}
                
                {step.tip && (
                  <div 
                    className="flex items-start gap-2 p-3 rounded-lg text-sm mb-3"
                    style={{ background: colors.blueLight }}
                  >
                    <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.bluePrimary }} />
                    <span style={{ color: colors.gray700 }}>{step.tip}</span>
                  </div>
                )}
                
                {step.documents && step.documents.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {step.documents.map((doc) => (
                      <button
                        key={doc}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        style={{ background: colors.gray100, color: colors.gray600 }}
                      >
                        <Download className="w-3 h-3" />
                        {doc}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LicenciementEconomiquePage() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section 
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.blueDark}f5 0%, ${colors.bluePrimary}e8 50%, ${colors.amber}dd 100%)`
        }}
      >
        <motion.div 
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/procedures" className="hover:text-white/80 transition-colors">
              Procédures
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">Licenciement économique</span>
          </div>

          <div className="flex items-start gap-4">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
            >
              <Workflow className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Procédure de licenciement économique
            </h1>
              <p className="text-xl text-white/70">Guide étape par étape</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mt-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                12 min de lecture
              </span>
              <span>•</span>
              <span>Mis à jour le 10/01/2026</span>
            </div>
        </motion.div>
      </section>

      {/* Timeline Visual */}
      <section className="py-12" style={{ background: colors.gray50 }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6 text-center" style={{ color: colors.charcoal }}>
            📊 Timeline récapitulative
          </h2>
          <div className="flex items-center justify-between overflow-x-auto gap-2 pb-4">
            {[
              { label: 'Convocation', duration: 'J-5', color: colors.bluePrimary },
              { label: 'Entretien', duration: 'J', color: colors.purple },
              { label: 'Réflexion', duration: '7j', color: colors.amber },
              { label: 'Lettre', duration: 'J+8', color: colors.red },
              { label: 'Préavis', duration: '1-3 mois', color: colors.green },
              { label: 'Fin', duration: '', color: colors.blueDark },
            ].map((step, index, arr) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: step.color }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-xs font-medium mt-2 text-center whitespace-nowrap" style={{ color: colors.charcoal }}>
                    {step.label}
                  </p>
                  {step.duration && (
                    <p className="text-xs mt-1" style={{ color: colors.gray500 }}>{step.duration}</p>
                  )}
                </div>
                {index < arr.length - 1 && (
                  <div 
                    className="h-0.5 w-12 mx-2"
                    style={{ background: `linear-gradient(90deg, ${step.color}, ${arr[index + 1].color})` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center" 
            style={{ color: colors.charcoal }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Schéma de la procédure
          </motion.h2>
          
          <motion.div 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {procedureSteps.map((step) => (
              <StepCard 
                key={step.id}
                step={step}
                isOpen={openStep === step.id}
                onToggle={() => setOpenStep(openStep === step.id ? null : step.id)}
              />
            ))}
          </motion.div>
          
          <p className="text-center text-sm mt-6" style={{ color: colors.gray500 }}>
              🔍 Cliquez sur une étape pour plus de détails
            </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12" style={{ background: colors.gray50 }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            className="text-xl font-bold mb-6" 
            style={{ color: colors.charcoal }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            📋 Documents à préparer
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <motion.div 
                key={doc.title}
                className="p-4 rounded-xl cursor-pointer transition-all hover:shadow-lg"
                style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="text-3xl mb-2">{doc.icon}</div>
                <h4 className="font-medium text-sm" style={{ color: colors.charcoal }}>{doc.title}</h4>
                <button 
                  className="mt-2 text-xs flex items-center gap-1"
                  style={{ color: colors.bluePrimary }}
                >
                  <Download className="w-3 h-3" />
                  Télécharger
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="text-xl font-bold mb-6" 
            style={{ color: colors.charcoal }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="p-5 rounded-xl"
                style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-2" style={{ color: colors.charcoal }}>{item.question}</h3>
                <p className="text-sm" style={{ color: colors.gray600 }}>{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12" style={{ background: colors.gray50 }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6" style={{ color: colors.charcoal }}>
            📚 Sur le même sujet
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { title: 'Licenciement pour faute', href: '/procedures/licenciement-faute' },
              { title: 'Rupture conventionnelle', href: '/droit-travail/rupture-conventionnelle' },
              { title: 'Prud\'hommes', href: '/procedures/prudhommes' },
              { title: 'Indemnités de licenciement', href: '/droit-travail/indemnites-licenciement' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md flex items-center gap-2"
                style={{ background: colors.white, color: colors.bluePrimary, border: `1px solid ${colors.gray200}` }}
              >
                {link.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
