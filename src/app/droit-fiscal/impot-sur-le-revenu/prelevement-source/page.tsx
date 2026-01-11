'use client';

import Link from 'next/link';
import { Clock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { 
  Breadcrumb, 
  TOC, 
  MobileTOC,
  SuccessCallout,
  InfoCallout, 
  WarningCallout, 
  ExampleCallout,
  HubLinkCard,
  ArticleNavigation,
  FeedbackWidget,
  FAQSection,
  CategoryTag
} from '@/components/ui';

const tocItems = [
  { id: 'definition', title: 'Qu\'est-ce que le PAS ?', level: 2 },
  { id: 'calcul', title: 'Comment est calculé le PAS ?', level: 2 },
  { id: 'taux', title: 'Les différents taux', level: 2 },
  { id: 'modifier', title: 'Modifier son taux', level: 2 },
  { id: 'cas-particuliers', title: 'Cas particuliers', level: 2 },
  { id: 'faq', title: 'FAQ', level: 2 },
];

const relatedPages = [
  { title: 'Barème IR', href: '/droit-fiscal/impot-sur-le-revenu/bareme' },
  { title: 'Quotient familial', href: '/droit-fiscal/impot-sur-le-revenu/quotient-familial' },
  { title: 'Réductions d\'impôt', href: '/droit-fiscal/impot-sur-le-revenu/reductions' },
];

const faqItems = [
  {
    question: "Comment modifier mon taux de PAS ?",
    answer: "Vous pouvez modifier votre taux de prélèvement à la source directement depuis votre espace personnel sur impots.gouv.fr, rubrique \"Gérer mon prélèvement à la source\". La modification prendra effet sous 1 à 2 mois."
  },
  {
    question: "Le PAS est-il obligatoire ?",
    answer: "Oui, le prélèvement à la source est obligatoire pour tous les revenus concernés depuis le 1er janvier 2019. Vous ne pouvez pas y déroger, mais vous pouvez choisir entre différents types de taux."
  },
  {
    question: "Que se passe-t-il si je change d'employeur ?",
    answer: "Votre nouvel employeur appliquera automatiquement votre taux personnalisé transmis par l'administration fiscale. Si le taux n'est pas encore transmis, le taux neutre sera appliqué temporairement."
  },
];

export default function PrelevementSourcePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-fj-gray-50 pt-24 pb-8 border-b border-fj-gray-200">
        <div className="container-fj">
          <Breadcrumb 
            items={[
              { label: 'Droit Fiscal', href: '/droit-fiscal' },
              { label: 'Impôt sur le Revenu', href: '/droit-fiscal/impot-sur-le-revenu' },
              { label: 'Prélèvement à la Source', href: '/droit-fiscal/impot-sur-le-revenu/prelevement-source' },
            ]}
          />
          
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-3">
              Prélèvement à la Source (PAS)
            </h1>
            <p className="text-xl text-fj-gray-600">
              Fonctionnement, calcul et cas particuliers
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-fj-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min de lecture
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                Mis à jour le 10/01/2026
              </span>
              <span className="flex items-center gap-1">
                👁️ 12.4k lectures
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <CategoryTag name="Droit fiscal" href="/droit-fiscal" />
              <CategoryTag name="Impôt revenu" href="/droit-fiscal/impot-sur-le-revenu" />
              <CategoryTag name="Salaires" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-fj">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article Content */}
            <article className="max-w-3xl">
              {/* Summary Callout */}
              <SuccessCallout title="EN RÉSUMÉ">
                Le prélèvement à la source (PAS) est un mode de recouvrement de l&apos;impôt sur le revenu en vigueur depuis janvier 2019. L&apos;impôt est prélevé directement sur vos revenus par le collecteur (employeur, caisse de retraite...).
              </SuccessCallout>

              {/* Definition */}
              <section id="definition" className="scroll-mt-24 mt-10">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Qu&apos;est-ce que le PAS ?</h2>
                <p className="text-fj-gray-700 leading-relaxed mb-4">
                  Depuis le <strong>1er janvier 2019</strong>, l&apos;impôt sur le revenu est prélevé à la source. Concrètement, cela signifie que votre employeur — ou tout autre organisme versant des revenus — retient l&apos;impôt directement sur votre salaire avant de vous le verser.
                </p>
                <p className="text-fj-gray-700 leading-relaxed">
                  Cette réforme permet de <strong>supprimer le décalage d&apos;un an</strong> qui existait entre la perception des revenus et le paiement de l&apos;impôt. Votre impôt s&apos;adapte ainsi automatiquement à votre situation actuelle.
                </p>
              </section>

              {/* Calcul */}
              <section id="calcul" className="scroll-mt-24 mt-10">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Comment est calculé le PAS ?</h2>
                <p className="text-fj-gray-700 leading-relaxed mb-4">
                  Le montant prélevé est simple à calculer :
                </p>
                
                <div className="bg-fj-blue-light rounded-card p-6 my-6 text-center">
                  <div className="text-lg font-mono text-france-blue">
                    Montant prélevé = Revenu net × Taux
                  </div>
                </div>

                <ExampleCallout>
                  <strong>Marie</strong> gagne 2 500 € net par mois.<br />
                  Son taux de PAS est de <strong>7,5%</strong>.<br /><br />
                  Prélèvement mensuel = 2 500 × 7,5% = <strong>187,50 €</strong><br />
                  Salaire versé = 2 500 - 187,50 = <strong>2 312,50 €</strong>
                </ExampleCallout>
              </section>

              {/* Taux */}
              <section id="taux" className="scroll-mt-24 mt-10">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Les différents taux</h2>
                <p className="text-fj-gray-700 leading-relaxed mb-4">
                  Il existe <strong>3 types de taux</strong> :
                </p>
                
                <ul className="space-y-4 mt-6">
                  <li className="flex gap-4 p-4 bg-white rounded-lg border border-fj-gray-200">
                    <div className="w-10 h-10 rounded-full bg-france-blue flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Taux personnalisé</h4>
                      <p className="text-fj-gray-600 text-sm mt-1">
                        Calculé par l&apos;administration sur la base de votre dernière déclaration. C&apos;est le taux appliqué par défaut.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 p-4 bg-white rounded-lg border border-fj-gray-200">
                    <div className="w-10 h-10 rounded-full bg-france-blue-light flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Taux individualisé</h4>
                      <p className="text-fj-gray-600 text-sm mt-1">
                        Pour les couples : chacun a son propre taux basé sur ses revenus personnels. Utile en cas de revenus très différents.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 p-4 bg-white rounded-lg border border-fj-gray-200">
                    <div className="w-10 h-10 rounded-full bg-fj-gray-400 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Taux neutre</h4>
                      <p className="text-fj-gray-600 text-sm mt-1">
                        Taux par défaut appliqué si l&apos;administration ne connaît pas vos revenus, ou sur demande pour préserver la confidentialité.
                      </p>
                    </div>
                  </li>
                </ul>

                <InfoCallout>
                  Le taux neutre est un taux défini par une grille nationale. Il peut être plus élevé que votre taux personnalisé si vous avez des revenus modestes.
                </InfoCallout>
              </section>

              {/* Modifier */}
              <section id="modifier" className="scroll-mt-24 mt-10">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Modifier son taux</h2>
                <p className="text-fj-gray-700 leading-relaxed mb-4">
                  Vous pouvez demander à modifier votre taux de prélèvement dans plusieurs situations :
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-fj-gray-700 mb-4">
                  <li>Changement de situation familiale (mariage, naissance, divorce)</li>
                  <li>Variation significative des revenus</li>
                  <li>Souhait de confidentialité (passage au taux neutre)</li>
                </ul>

                <WarningCallout>
                  La modification du taux prend effet sous <strong>1 à 2 mois</strong>. En cas de baisse de revenus importante, pensez à faire la demande rapidement pour éviter un prélèvement trop élevé.
                </WarningCallout>
              </section>

              {/* Cas particuliers */}
              <section id="cas-particuliers" className="scroll-mt-24 mt-10">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Cas particuliers</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-fj-gray-50 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">🏠 Revenus fonciers</h4>
                    <p className="text-fj-gray-600 text-sm">
                      Le prélèvement prend la forme d&apos;acomptes mensuels ou trimestriels prélevés directement sur votre compte bancaire.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-fj-gray-50 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">💼 Indépendants</h4>
                    <p className="text-fj-gray-600 text-sm">
                      Les travailleurs indépendants versent des acomptes calculés sur leurs derniers revenus connus.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-fj-gray-50 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">🎓 Premiers revenus</h4>
                    <p className="text-fj-gray-600 text-sm">
                      Pour les jeunes entrant dans la vie active, le taux neutre s&apos;applique jusqu&apos;à la première déclaration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Forms */}
              <div className="mt-10 p-6 bg-fj-gray-50 rounded-card">
                <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Formulaires liés
                </h3>
                <Link
                  href="/formulaires/cerfa-2042"
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-fj-gray-200 hover:border-france-blue-light transition-colors"
                >
                  <div>
                    <span className="font-mono text-sm text-fj-gray-500">CERFA 2042</span>
                    <div className="font-medium text-charcoal">Déclaration de revenus</div>
                  </div>
                  <span className="text-france-blue-light">Télécharger →</span>
                </Link>
              </div>

              {/* Related Topics */}
              <div className="mt-8">
                <h3 className="font-semibold text-charcoal mb-4">Sur le même sujet</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedPages.map((page) => (
                    <HubLinkCard key={page.href} {...page} />
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <ArticleNavigation
                previous={{
                  title: 'Barème progressif',
                  href: '/droit-fiscal/impot-sur-le-revenu/bareme',
                }}
                next={{
                  title: 'Réductions d\'impôt',
                  href: '/droit-fiscal/impot-sur-le-revenu/reductions',
                }}
              />

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 mt-12">
                <FAQSection items={faqItems} />
              </section>

              {/* Feedback */}
              <div className="mt-12">
                <FeedbackWidget pageId="pas" />
              </div>
            </article>

            {/* Sidebar - TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TOC items={tocItems} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile TOC */}
      <MobileTOC items={tocItems} />
    </>
  );
}

