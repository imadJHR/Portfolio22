"use client";

import { useState } from "react";
import {
  BarChart,
  Search,
  Mail,
  Megaphone,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const DigitalMarketingDetails = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const services = [
    {
      icon: <Search className="h-10 w-10 text-blue-500" />,
      title: "SEO",
      description:
        "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne.",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-blue-500" />,
      title: "Publicité en Ligne",
      description:
        "Campagnes publicitaires ciblées sur Google Ads, Facebook Ads et autres plateformes.",
    },
    {
      icon: <Mail className="h-10 w-10 text-blue-500" />,
      title: "Email Marketing",
      description:
        "Stratégies d'email marketing pour fidéliser vos clients et générer des ventes.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Marketing de Contenu",
      description:
        "Création et distribution de contenu pertinent pour attirer et engager votre audience.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Analyse et Reporting",
      description:
        "Suivi détaillé des performances et optimisation continue de vos campagnes.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Marketing des Médias Sociaux",
      description:
        "Gestion et optimisation de votre présence sur les réseaux sociaux.",
    },
  ];

  const caseStudies = [
    {
      client: "E-commerce Mode",
      image: "/placeholder.svg?height=200&width=300",
      results: "Augmentation de 150% des ventes en ligne",
      description:
        "Grâce à une stratégie SEO ciblée et des campagnes publicitaires optimisées, nous avons considérablement augmenté le trafic qualifié et les conversions.",
    },
    {
      client: "Start-up SaaS",
      image: "/placeholder.svg?height=200&width=300",
      results: "300% d'augmentation des leads qualifiés",
      description:
        "Une combinaison de marketing de contenu, d'email marketing et de publicité sur LinkedIn a permis d'attirer et de convertir des prospects B2B de haute qualité.",
    },
    {
      client: "Restaurant Local",
      image: "/placeholder.svg?height=200&width=300",
      results: "200% d'augmentation des réservations en ligne",
      description:
        "Une stratégie de marketing local, incluant SEO local et campagnes Google Ads géolocalisées, a considérablement augmenté la visibilité et les réservations.",
    },
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      price: "999",
      features: [
        "Audit marketing digital",
        "Optimisation SEO de base",
        "Gestion de 2 réseaux sociaux",
        "1 campagne publicitaire par mois",
        "Rapport mensuel",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "1999",
      features: [
        "Tout du plan Essentiel",
        "SEO avancé",
        "Gestion de 4 réseaux sociaux",
        "3 campagnes publicitaires par mois",
        "Création de contenu (2 articles/mois)",
        "Email marketing",
        "Rapport bi-mensuel",
      ],
      popular: true,
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      features: [
        "Stratégie marketing complète",
        "SEO technique et content marketing",
        "Gestion complète des réseaux sociaux",
        "Campagnes publicitaires illimitées",
        "Création de contenu premium",
        "Marketing automation",
        "Analyse et optimisation continue",
        "Manager de compte dédié",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question:
        "Combien de temps faut-il pour voir des résultats en marketing digital ?",
      answer:
        "Les résultats en marketing digital varient selon plusieurs facteurs, notamment votre secteur, la concurrence, et les canaux utilisés. Généralement, certaines actions comme la publicité en ligne peuvent générer des résultats rapides (quelques jours ou semaines), tandis que d'autres comme le SEO peuvent prendre plusieurs mois pour montrer leur plein potentiel. Nous établissons des attentes réalistes et fournissons des rapports réguliers pour suivre les progrès.",
    },
    {
      question:
        "Comment mesurez-vous le ROI de vos services de marketing digital ?",
      answer:
        "Nous utilisons une variété d'outils et de métriques pour mesurer le ROI, adaptés à vos objectifs spécifiques. Cela peut inclure le suivi des conversions, l'analyse du trafic web, le coût par acquisition, le taux d'engagement sur les réseaux sociaux, et plus encore. Nous établissons des KPIs clairs dès le début et fournissons des rapports détaillés montrant comment nos efforts impactent votre résultat net.",
    },
    {
      question: "Pouvez-vous travailler avec mon équipe marketing interne ?",
      answer:
        "Absolument ! Nous sommes habitués à collaborer avec les équipes internes et pouvons adapter notre approche pour compléter vos ressources existantes. Que vous ayez besoin d'un support complet ou d'une expertise spécifique dans certains domaines, nous pouvons nous intégrer de manière transparente à votre équipe pour maximiser les résultats.",
    },
    {
      question:
        "Comment restez-vous à jour avec les changements constants en marketing digital ?",
      answer:
        "Notre équipe s'engage dans une formation continue et participe régulièrement à des conférences et des webinaires du secteur. Nous sommes également en contact étroit avec les principales plateformes (Google, Facebook, etc.) pour rester informés des dernières mises à jour. Cette veille constante nous permet d'ajuster rapidement nos stratégies pour garantir les meilleurs résultats pour nos clients.",
    },
    {
      question:
        "Quelle est votre approche en matière de confidentialité des données et de conformité RGPD ?",
      answer:
        "La confidentialité des données et la conformité RGPD sont au cœur de notre approche. Nous mettons en œuvre des pratiques strictes de protection des données dans toutes nos activités de marketing digital. Cela inclut l'obtention du consentement approprié pour la collecte de données, la mise en place de politiques de confidentialité transparentes, et l'utilisation sécurisée des données client. Nous nous assurons également que toutes nos stratégies marketing sont conformes aux réglementations en vigueur.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-r from-blue-600 to-green-400 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Propulsez votre entreprise avec le Marketing Digital
            </h1>
            <p className="text-xl mb-8">
              Des stratégies sur mesure pour augmenter votre visibilité en
              ligne, attirer plus de clients et booster vos ventes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/devis"}>
                <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-lg">
                  Démarrer maintenant
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md grid grid-cols-1 gap-6">
              {/* Modern card design with hover effects */}
              <div className="transform transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur border-none shadow-lg rounded-lg p-6">
                <div className="flex flex-row items-center space-x-4 pb-2">
                  <div className="rounded-full bg-blue-100 p-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl text-blue-700 font-semibold">
                    Analyse de données
                  </h2>
                </div>
                <p className="text-gray-600 text-base">
                  Insights précis pour des décisions éclairées basées sur des
                  métriques pertinentes
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur border-none shadow-lg rounded-lg p-6">
                <div className="flex flex-row items-center space-x-4 pb-2">
                  <div className="rounded-full bg-green-100 p-2">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl text-green-700 font-semibold">
                    SEO optimisé
                  </h2>
                </div>
                <p className="text-gray-600 text-base">
                  Améliorez votre visibilité sur les moteurs de recherche avec
                  nos techniques avancées
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur border-none shadow-lg rounded-lg p-6">
                <div className="flex flex-row items-center space-x-4 pb-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Megaphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl text-purple-700 font-semibold">
                    Campagnes ciblées
                  </h2>
                </div>
                <p className="text-gray-600 text-base">
                  Atteignez votre audience idéale avec précision pour maximiser
                  l'impact de vos campagnes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Services de Marketing Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche holistique pour maximiser votre présence en ligne et
              votre croissance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour assurer le succès de votre stratégie
              marketing digitale
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Audit et Analyse</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Évaluation approfondie de votre présence digitale actuelle
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Stratégie Personnalisée
              </h3>
              <p className="text-center text-gray-600 max-w-xs">
                Développement d'un plan marketing adapté à vos objectifs
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mise en Œuvre</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Exécution experte des tactiques marketing choisies
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Analyse et Optimisation
              </h3>
              <p className="text-center text-gray-600 max-w-xs">
                Suivi continu et ajustements pour maximiser les résultats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/*   <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Réussites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à atteindre leurs
              objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{study.client}</h3>
                  <p className="text-green-600 font-semibold mb-4">
                    {study.results}
                  </p>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      {/*<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Forfaits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les besoins et budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-blue-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                    Populaire
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    {plan.price !== "Sur mesure" && (
                      <span className="text-gray-600">/mois</span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Choisir ce forfait
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services de marketing
              digital
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {activeQuestion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeQuestion === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à booster votre présence digitale ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez les entreprises qui ont déjà transformé leur marketing
            digital et atteint de nouveaux sommets grâce à notre expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={"/devis"}>
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Commencer maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingDetails;
