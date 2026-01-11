'use client';

import Link from 'next/link';
import { Download, ExternalLink, FileText, Check, ArrowRight } from 'lucide-react';
import { 
  Breadcrumb, 
  SuccessCallout,
  InfoCallout,
  FAQSection,
  HubLinkCard,
  FormCard
} from '@/components/ui';
import Stepper from '@/components/ui/Stepper';

const steps = [
  { id: 1, title: 'État civil', description: 'Cases A à F' },
  { id: 2, title: 'Revenus', description: 'Cases 1 à 5' },
  { id: 3, title: 'Charges', description: 'Cases 6 à 7' },
  { id: 4, title: 'Réductions', description: 'Cases 7 à 8' },
  { id: 5, title: 'Signature', description: 'Validation' },
];

const relatedForms = [
  { cerfa: '2042-RICI', title: 'Réductions et crédits d\'impôt', href: '/formulaires/cerfa-2042-rici' },
  { cerfa: '2044', title: 'Revenus fonciers', href: '/formulaires/cerfa-2044' },
  { cerfa: '2047', title: 'Revenus étrangers', href: '/formulaires/cerfa-2047' },
];

const faqItems = [
  {
    question: "Puis-je déclarer en version papier ?",
    answer: "La déclaration en ligne est obligatoire si votre résidence principale est équipée d'un accès internet. Toutefois, si vous n'êtes pas en mesure d'utiliser internet, vous pouvez demander un formulaire papier auprès de votre centre des finances publiques."
  },
  {
    question: "Quelle est la date limite de déclaration ?",
    answer: "Les dates varient selon votre département et le mode de déclaration. En 2026, la date limite pour la déclaration papier est fixée mi-mai, et pour la déclaration en ligne, les dates s'échelonnent de fin mai à début juin selon les zones."
  },
  {
    question: "Comment corriger une erreur après envoi ?",
    answer: "Vous pouvez modifier votre déclaration en ligne jusqu'à la date limite. Après cette date, un service de correction en ligne est ouvert de août à décembre. Vous pouvez aussi adresser une réclamation à votre centre des impôts."
  },
];

export default function Cerfa2042Page() {
  return (
    <>
      {/* Header */}
      <section className="bg-fj-gray-50 pt-24 pb-8 border-b border-fj-gray-200">
        <div className="container-fj">
          <Breadcrumb 
            items={[
              { label: 'Formulaires', href: '/formulaires' },
              { label: 'CERFA 2042', href: '/formulaires/cerfa-2042' },
            ]}
          />
        </div>
      </section>

      {/* Main Card */}
      <section className="py-12 bg-fj-white">
        <div className="container-fj">
          <div className="max-w-3xl mx-auto">
            {/* Download Card */}
            <div className="bg-white rounded-card border-2 border-fj-gray-200 p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-fj-gray-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-10 h-10 text-fj-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-fj-gray-500 uppercase">CERFA 2042</span>
                    <span className="px-2 py-0.5 bg-success/10 text-success text-xs font-medium rounded">
                      Version 2026
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-charcoal mb-2">
                    Déclaration de revenus
                  </h1>
                  <p className="text-fj-gray-500 text-sm mb-4">
                    PDF • 4 pages • Mis à jour le 01/01/2026
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-france-red hover:bg-france-red-light text-white font-semibold rounded-xl transition-colors">
                      <Download className="w-5 h-5" />
                      Télécharger le PDF
                    </button>
                    <a 
                      href="https://www.impots.gouv.fr/accueil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-fj-gray-100 hover:bg-fj-gray-200 text-fj-gray-700 font-medium rounded-xl transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Remplir en ligne
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-12 space-y-10">
              {/* What is it */}
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  À quoi sert ce formulaire ?
                </h2>
                <p className="text-fj-gray-700 leading-relaxed">
                  Le <strong>CERFA 2042</strong> est le formulaire principal de déclaration des revenus pour les particuliers résidant en France. Il permet de déclarer l&apos;ensemble de vos revenus (salaires, pensions, revenus fonciers...) et charges déductibles de l&apos;année précédente.
                </p>
              </section>

              {/* Who should fill it */}
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  Qui doit le remplir ?
                </h2>
                
                <SuccessCallout title="VOUS ÊTES CONCERNÉ SI">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Vous résidez en France</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Vous avez perçu des revenus en 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Vous n&apos;êtes pas rattaché au foyer fiscal de vos parents</span>
                    </li>
                  </ul>
                </SuccessCallout>
              </section>

              {/* Guide */}
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-6">
                  Guide de remplissage
                </h2>
                
                <div className="bg-fj-gray-50 rounded-card p-6 mb-6">
                  <Stepper steps={steps} currentStep={1} />
                </div>

                <div className="space-y-6">
                  <div className="p-5 bg-white rounded-lg border border-fj-gray-200">
                    <h3 className="font-semibold text-charcoal mb-2">
                      Étape 1 : État civil (cases A à F)
                    </h3>
                    <p className="text-fj-gray-600 text-sm">
                      Renseignez votre situation au 1er janvier 2025 : célibataire, marié(e), pacsé(e), veuf(ve), divorcé(e). Indiquez également les informations sur votre conjoint et vos personnes à charge.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-lg border border-fj-gray-200">
                    <h3 className="font-semibold text-charcoal mb-2">
                      Étape 2 : Revenus (cases 1 à 5)
                    </h3>
                    <p className="text-fj-gray-600 text-sm">
                      Déclarez vos revenus d&apos;activité (salaires, pensions), vos revenus de capitaux mobiliers, et vos plus-values. Les montants sont généralement pré-remplis.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-lg border border-fj-gray-200">
                    <h3 className="font-semibold text-charcoal mb-2">
                      Étape 3 : Charges déductibles (cases 6 à 7)
                    </h3>
                    <p className="text-fj-gray-600 text-sm">
                      Renseignez vos charges déductibles : CSG, pensions alimentaires versées, épargne retraite (PERP, PER)...
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-lg border border-fj-gray-200">
                    <h3 className="font-semibold text-charcoal mb-2">
                      Étape 4 : Réductions et crédits d&apos;impôt (cases 7 à 8)
                    </h3>
                    <p className="text-fj-gray-600 text-sm">
                      Déclarez vos dépenses ouvrant droit à réduction ou crédit d&apos;impôt : dons, emploi à domicile, frais de garde... Utilisez le formulaire 2042-RICI complémentaire si nécessaire.
                    </p>
                  </div>
                </div>

                <InfoCallout>
                  La plupart des informations sont <strong>pré-remplies</strong> par l&apos;administration. Vérifiez attentivement les montants et corrigez si nécessaire.
                </InfoCallout>
              </section>

              {/* Related Forms */}
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  📄 Formulaires complémentaires
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedForms.map((form) => (
                    <FormCard 
                      key={form.cerfa} 
                      cerfa={`CERFA ${form.cerfa}`}
                      title={form.title}
                      href={form.href}
                      downloadUrl="#"
                    />
                  ))}
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-4">
                  📚 Pour aller plus loin
                </h2>
                <div className="flex flex-wrap gap-2">
                  <HubLinkCard title="Comprendre l'Impôt sur le Revenu" href="/droit-fiscal/impot-sur-le-revenu" />
                  <HubLinkCard title="Le prélèvement à la source" href="/droit-fiscal/impot-sur-le-revenu/prelevement-source" />
                </div>
              </section>

              {/* FAQ */}
              <section>
                <FAQSection items={faqItems} />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

