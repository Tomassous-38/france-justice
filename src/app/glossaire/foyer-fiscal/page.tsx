import Link from 'next/link';
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import { Breadcrumb, ExampleCallout, HubLinkCard, CategoryTag } from '@/components/ui';

const relatedTerms = [
  { term: 'Quotient familial', slug: 'quotient-familial' },
  { term: 'Parts fiscales', slug: 'parts-fiscales' },
  { term: 'Déclaration de revenus', slug: 'declaration-revenus' },
  { term: 'Rattachement enfant majeur', slug: 'rattachement-enfant-majeur' },
  { term: 'Imposition commune', slug: 'imposition-commune' },
];

const relatedArticles = [
  { title: 'Comprendre l\'impôt sur le revenu', href: '/droit-fiscal/impot-sur-le-revenu' },
  { title: 'Le quotient familial expliqué', href: '/droit-fiscal/impot-sur-le-revenu/quotient-familial' },
  { title: 'Comment déclarer ses revenus', href: '/droit-fiscal/impot-sur-le-revenu/declaration-ligne' },
];

export default function FoyerFiscalPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-fj-gray-50 pt-24 pb-8 border-b border-fj-gray-200">
        <div className="container-fj">
          <Breadcrumb 
            items={[
              { label: 'Glossaire', href: '/glossaire' },
              { label: 'Foyer fiscal', href: '/glossaire/foyer-fiscal' },
            ]}
          />
          
          <div className="mt-6 max-w-3xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-2">
                  Foyer fiscal
                </h1>
                <p className="text-fj-gray-500 italic">
                  /fwa.je fis.kal/ • nom masculin
                </p>
              </div>
              <CategoryTag name="Droit fiscal" href="/droit-fiscal" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-fj">
          <div className="max-w-3xl">
            {/* Definition */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-france-blue-light" />
                Définition
              </h2>
              
              <div className="prose text-fj-gray-700 space-y-4">
                <p>
                  Le <strong>foyer fiscal</strong> désigne l&apos;ensemble des personnes inscrites sur une même déclaration de revenus. Il constitue l&apos;<strong>unité d&apos;imposition de base</strong> pour l&apos;impôt sur le revenu.
                </p>
                
                <p>Un foyer fiscal peut comprendre :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Une personne seule (célibataire, veuf, divorcé)</li>
                  <li>Un couple marié ou pacsé</li>
                  <li>Les enfants mineurs à charge</li>
                  <li>Les enfants majeurs rattachés (sous conditions)</li>
                </ul>

                <p>
                  Le nombre de <strong>parts fiscales</strong> attribuées au foyer dépend de sa composition. Ces parts sont utilisées pour calculer le <strong>quotient familial</strong>, qui permet de moduler l&apos;impôt en fonction de la situation familiale.
                </p>
              </div>
            </div>

            {/* Example */}
            <ExampleCallout>
              <p><strong>Marie et Pierre</strong> sont mariés avec 2 enfants mineurs.</p>
              <p className="mt-2">Leur foyer fiscal compte <strong>3 parts</strong> :</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>2 parts pour le couple</li>
                <li>0,5 part par enfant (×2)</li>
              </ul>
              <p className="mt-2 font-semibold">Total : 3 parts fiscales</p>
            </ExampleCallout>

            {/* Related Articles */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-charcoal mb-4">
                📚 Articles liés
              </h2>
              <ul className="space-y-2">
                {relatedArticles.map((article) => (
                  <li key={article.href}>
                    <Link 
                      href={article.href}
                      className="flex items-center gap-2 text-france-blue-light hover:text-france-blue transition-colors"
                    >
                      <span>•</span>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Terms */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-charcoal mb-4">
                🔗 Termes associés
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedTerms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossaire/${term.slug}`}
                    className="px-4 py-2 bg-fj-gray-50 border border-fj-gray-200 rounded-full text-sm text-fj-gray-700 hover:border-france-blue-light hover:text-france-blue-light transition-colors"
                  >
                    {term.term}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Reference */}
            <div className="mt-10 p-6 bg-fj-gray-50 rounded-card">
              <h2 className="text-lg font-bold text-charcoal mb-4">
                📖 Textes de référence
              </h2>
              <div className="space-y-3">
                <a 
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042907597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-fj-gray-200 hover:border-france-blue-light transition-colors group"
                >
                  <span className="text-fj-gray-700">Article 6 du Code général des impôts</span>
                  <ExternalLink className="w-4 h-4 text-fj-gray-400 group-hover:text-france-blue-light" />
                </a>
              </div>
              <p className="text-xs text-fj-gray-500 mt-3">
                Voir sur Légifrance →
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-10">
              <Link 
                href="/glossaire"
                className="inline-flex items-center gap-2 text-fj-gray-500 hover:text-france-blue-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au glossaire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

