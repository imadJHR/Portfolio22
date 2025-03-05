import { useState } from "react";
import {
  Smartphone,
  Share2,
  Lock,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import img1 from "../assets/cartNFC.png";
import img2 from "../assets/nfc2.png";
import { Link } from "react-router-dom";

const NFCCardDetails = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      title: "Partage Instantané",
      description:
        "Partagez vos coordonnées professionnelles en un simple toucher avec n'importe quel smartphone compatible NFC.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-purple-500" />,
      title: "Profil Digital",
      description:
        "Liez votre carte à un profil digital complet avec tous vos réseaux sociaux et coordonnées.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-500" />,
      title: "Sécurisé",
      description:
        "Technologie sécurisée avec protection des données et contrôle total sur les informations partagées.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Écologique",
      description:
        "Solution écologique qui réduit l'utilisation de cartes de visite papier traditionnelles.",
    },
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      price: "49",
      features: [
        "5 cartes NFC personnalisées",
        "Profil digital basique",
        "Statistiques de base",
        "Support par email",
      ],
      popular: false,
    },
    {
      name: "Professionnel",
      price: "89",
      features: [
        "10 cartes NFC personnalisées",
        "Profil digital avancé",
        "Statistiques détaillées",
        "Intégration réseaux sociaux",
        "Support prioritaire",
      ],
      popular: true,
    },
    {
      name: "Entreprise",
      price: "199",
      features: [
        "25 cartes NFC personnalisées",
        "Profil digital premium",
        "Statistiques avancées",
        "Intégration CRM",
        "Design personnalisé",
        "Support dédié",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Comment fonctionne une carte NFC ?",
      answer:
        "Une carte NFC (Near Field Communication) contient une puce qui transmet des informations lorsqu'elle est placée près d'un smartphone compatible. Il suffit de toucher ou d'approcher votre carte du téléphone pour partager instantanément vos coordonnées ou rediriger vers votre profil digital.",
    },
    {
      question:
        "Les cartes NFC sont-elles compatibles avec tous les smartphones ?",
      answer:
        "La plupart des smartphones modernes (iPhone et Android) sont équipés de la technologie NFC. Pour les iPhone, les modèles à partir de l'iPhone XS prennent en charge la lecture NFC sans application. Pour les modèles Android, la majorité des appareils sortis après 2015 sont compatibles.",
    },
    {
      question: "Puis-je modifier les informations sur ma carte NFC ?",
      answer:
        "Oui, c'est l'un des grands avantages des cartes NFC. Les informations ne sont pas stockées directement sur la carte mais sur votre profil digital. Vous pouvez modifier votre profil à tout moment et les changements seront immédiatement disponibles lorsque quelqu'un scanne votre carte.",
    },
    {
      question: "Quelle est la durée de vie d'une carte NFC ?",
      answer:
        "Les cartes NFC ont une durée de vie très longue, généralement plus de 10 ans. La puce NFC n'a pas de batterie et s'active uniquement lorsqu'elle est à proximité d'un appareil compatible, ce qui lui permet de fonctionner indéfiniment sans usure.",
    },
    {
      question: "Est-ce que je peux personnaliser le design de ma carte NFC ?",
      answer:
        "Absolument ! Nous offrons une personnalisation complète de vos cartes NFC. Vous pouvez choisir parmi nos modèles existants ou créer un design entièrement sur mesure avec votre logo, vos couleurs et votre mise en page préférée.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-800 to-purple-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cartes NFC Professionnelles
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transformez votre façon de réseauter avec nos cartes de visite NFC
              innovantes. Partagez vos coordonnées en un simple toucher.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/devis"}>
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  Commander maintenant
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-96">
              {/* Première image */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-2xl shadow-2xl transform rotate-6 overflow-hidden">
                <img
                  src={img2}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Deuxième image */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-2xl shadow-2xl transform -rotate-3 overflow-hidden">
                <img
                  src={img1}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça fonctionne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple pour révolutionner votre façon de partager vos
              coordonnées professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Choisissez votre design
              </h3>
              <p className="text-gray-600">
                Sélectionnez parmi nos modèles ou créez un design personnalisé
                qui représente votre marque.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Configurez votre profil
              </h3>
              <p className="text-gray-600">
                Créez votre profil digital avec vos coordonnées, réseaux sociaux
                et informations professionnelles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partagez en un toucher</h3>
              <p className="text-gray-600">
                Recevez vos cartes et commencez à partager vos informations
                instantanément avec un simple toucher.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions pour les Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions NFC pour les Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimisez l'expérience de vos clients et simplifiez vos opérations
              avec nos cartes NFC spécialement conçues pour les restaurants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte NFC pour Menus Numériques */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Menus Numériques
              </h3>
              <p className="text-gray-600">
                Remplacez vos menus papier par des menus numériques accessibles
                via une simple carte NFC. Mettez à jour vos offres en temps réel
                sans imprimer de nouveaux menus.
              </p>
            </div>

            {/* Carte NFC pour Réservations */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Réservations Faciles
              </h3>
              <p className="text-gray-600">
                Permettez à vos clients de réserver une table directement en
                scannant une carte NFC. Simplifiez le processus de réservation
                et réduisez les erreurs.
              </p>
            </div>

            {/* Carte NFC pour Programmes de Fidélité */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Programmes de Fidélité
              </h3>
              <p className="text-gray-600">
                Créez un programme de fidélité numérique avec des cartes NFC.
                Les clients peuvent accumuler des points et recevoir des
                récompenses en scannant leur carte.
              </p>
            </div>

            {/* Carte NFC pour Paiements */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Paiements Sans Contact
              </h3>
              <p className="text-gray-600">
                Intégrez des options de paiement sans contact via des cartes NFC
                pour offrir une expérience de paiement rapide et sécurisée à vos
                clients.
              </p>
            </div>

            {/* Carte NFC pour Feedback */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Feedback Clients
              </h3>
              <p className="text-gray-600">
                Collectez des avis clients en temps réel en permettant à vos
                clients de scanner une carte NFC pour accéder à un formulaire de
                feedback.
              </p>
            </div>

            {/* Carte NFC pour Événements */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4"></div>
              <h3 className="text-xl text-purple-600 font-bold mb-2">
                Gestion des Événements
              </h3>
              <p className="text-gray-600">
                Utilisez des cartes NFC pour gérer les inscriptions et les accès
                lors d'événements spéciaux organisés dans votre restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Caractéristiques principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages qui font de nos cartes NFC la solution
              idéale pour les professionnels modernes
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

      {/* Pricing 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tarifs simples et transparents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez l'offre qui correspond le mieux à vos besoins
              professionnels
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
      </section>*/}

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos cartes NFC
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
      <section className="py-20 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à moderniser votre réseau professionnel ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Rejoignez les milliers de professionnels qui ont déjà adopté nos
            cartes NFC pour se démarquer et faciliter leurs connexions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={"/devis"}>
              <Button className="bg-white text-purple-700 hover:bg-blue-50">
                Commander maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFCCardDetails;
