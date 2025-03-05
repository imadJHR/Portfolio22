import { useState } from "react";
import {
  Instagram,
  BarChart,
  Users,
  Zap,
  Camera,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const InstagramManagementDetails = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const features = [
    {
      icon: <Camera className="h-10 w-10 text-pink-500" />,
      title: "Création de Contenu",
      description:
        "Contenu visuel attrayant et engageant, adapté à votre marque et à votre audience.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-pink-500" />,
      title: "Planification Stratégique",
      description:
        "Calendrier de publication optimisé pour maximiser l'engagement et la visibilité.",
    },
    {
      icon: <Users className="h-10 w-10 text-pink-500" />,
      title: "Engagement Communautaire",
      description:
        "Interaction active avec vos abonnés pour renforcer la fidélité et l'engagement.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-pink-500" />,
      title: "Analyse et Rapports",
      description:
        "Suivi détaillé des performances et ajustements stratégiques basés sur les données.",
    },
  ];

  const pricingPlans = [
    {
      name: "Débutant",
      price: "2000",
      features: [
        "Gestion de 3 posts par semaine",
        "Création de contenu basique",
        "Réponse aux commentaires",
        "Rapport mensuel",
        "Support par email",
      ],
      popular: false,
    },
    {
      name: "Professionnel",
      price: "4000",
      features: [
        "Gestion de 5 posts par semaine",
        "Création de contenu avancée",
        "Stories hebdomadaires",
        "Gestion des messages privés",
        "Analyse bi-mensuelle",
        "Support prioritaire",
      ],
      popular: true,
    },
    {
      name: "Entreprise",
      price: "6000",
      features: [
        "Gestion de 7 posts par semaine",
        "Contenu premium et Reels",
        "Stories quotidiennes",
        "Gestion complète de la communauté",
        "Stratégie de croissance personnalisée",
        "Rapport hebdomadaire",
        "Manager de compte dédié",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      company: "Boutique Mode Éthique",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Depuis que nous avons confié notre compte Instagram à cette équipe, notre engagement a triplé et nos ventes en ligne ont augmenté de 40%. C'est incroyable !",
    },
    {
      name: "Thomas Dubois",
      company: "Restaurant Le Gourmet",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Leur gestion de notre Instagram a complètement transformé notre présence en ligne. Nous avons maintenant une clientèle fidèle qui suit nos publications quotidiennes.",
    },
    {
      name: "Emma Leroy",
      company: "Studio de Yoga ZenLife",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "L'équipe a su capturer l'essence de notre studio et la transmettre à travers Instagram. Nos cours sont maintenant complets grâce à cette visibilité accrue.",
    },
  ];

  const faqs = [
    {
      question: "Pourquoi ai-je besoin d'un service de gestion Instagram ?",
      answer:
        "Un service de gestion Instagram professionnel peut vous aider à maintenir une présence cohérente et engageante, à créer du contenu de qualité, à interagir efficacement avec votre audience, et à analyser vos performances pour une croissance continue. Cela vous permet de vous concentrer sur votre cœur de métier tout en bénéficiant d'une stratégie Instagram optimisée.",
    },
    {
      question: "Comment mesurez-vous le succès de la gestion de compte ?",
      answer:
        "Nous utilisons plusieurs métriques clés pour mesurer le succès, notamment la croissance du nombre d'abonnés, le taux d'engagement (likes, commentaires, partages), la portée des publications, le trafic vers votre site web, et les conversions si applicable. Nous fournissons des rapports réguliers détaillant ces métriques et nos stratégies pour une amélioration continue.",
    },
    {
      question: "Puis-je avoir un mot à dire sur le contenu publié ?",
      answer:
        "Absolument ! Nous travaillons en étroite collaboration avec vous pour comprendre votre marque, vos objectifs et vos préférences. Bien que nous gérions la création et la publication du contenu, vous avez toujours le dernier mot. Nous pouvons établir un processus de validation qui vous convient, que ce soit une approbation hebdomadaire ou au cas par cas.",
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer:
        "Les résultats peuvent varier en fonction de plusieurs facteurs, notamment votre secteur d'activité, votre audience cible et votre point de départ. Généralement, nos clients commencent à voir une amélioration de l'engagement dans les premières semaines. Pour une croissance significative et durable, nous recommandons un engagement d'au moins 3 à 6 mois.",
    },
    {
      question: "Gérez-vous aussi la publicité Instagram ?",
      answer:
        "Oui, nous pouvons intégrer la gestion de campagnes publicitaires Instagram à nos services. Cela inclut la création de publicités ciblées, la gestion du budget publicitaire, et l'optimisation des campagnes pour maximiser votre retour sur investissement. C'est un excellent moyen d'amplifier votre croissance et d'atteindre des objectifs spécifiques.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestion Professionnelle de Comptes Instagram
            </h1>
            <p className="text-xl mb-8">
              Propulsez votre marque sur Instagram avec notre expertise en
              gestion de compte. Augmentez votre visibilité, engagez votre
              audience et convertissez vos abonnés en clients fidèles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/devis"}>
                <Button className="bg-white text-purple-700 hover:bg-purple-50">
                  Commencer maintenant
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-between px-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
                  <span className="font-semibold text-sm">Votre_Marque</span>
                </div>
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div className="mt-14 p-4 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 flex items-center justify-around px-4">
                <BarChart className="h-6 w-6 text-gray-600" />
                <Users className="h-6 w-6 text-gray-600" />
                <Zap className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Services de Gestion Instagram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour maximiser votre impact sur Instagram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour assurer le succès de votre compte
              Instagram
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Audit et Stratégie</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Analyse de votre compte et élaboration d'une stratégie
                personnalisée
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Création de Contenu
              </h3>
              <p className="text-center text-gray-600 max-w-xs">
                Production de contenu visuel et textuel engageant et cohérent
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Publication et Engagement
              </h3>
              <p className="text-center text-gray-600 max-w-xs">
                Gestion des publications et interaction avec votre communauté
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Analyse et Optimisation
              </h3>
              <p className="text-center text-gray-600 max-w-xs">
                Suivi des performances et ajustements pour une croissance
                continue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
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
                  plan.popular ? "ring-2 ring-purple-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                    Populaire
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}DH</span>
                    <span className="text-gray-600">/mois</span>
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
                        ? "bg-purple-600 hover:bg-purple-700"
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
      </section>

      {/*  <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment notre gestion Instagram a transformé ces
              entreprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
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
              Tout ce que vous devez savoir sur notre service de gestion
              Instagram
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre présence Instagram ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez les entreprises qui ont déjà boosté leur visibilité et
            leurs ventes grâce à notre expertise en gestion de compte Instagram.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={"/devis"}>
              <Button className="bg-white text-purple-700 hover:bg-purple-50">
                Commencer maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramManagementDetails;
