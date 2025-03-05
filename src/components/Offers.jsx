import { MousePointer2, CreditCard, Instagram, BarChart, Laptop } from "lucide-react";
import { Button } from "./ui/button";
import img1 from "../assets/cartNFC.jpg";
import img2 from "../assets/gestioninsta.png";
import img3 from "../assets/marketing.png";
import img4 from "../assets/siteweb.png";
import { Link } from "react-router-dom";

const Offers = () => {
  const services = [
    {
      title: "Conception de Cartes NFC",
      description:
        "Cartes professionnelles modernes avec technologie NFC intégrée",
      icon: <CreditCard className="w-10 h-10 text-blue-500" />,
      image: img1,
      href: "/nfc",
    },
    {
      title: "Gestion de Comptes Instagram",
      description:
        "Optimisation et gestion professionnelle de votre présence Instagram",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
      image: img2,
      href: "/gestion-instagram",
    },
    {
      title: "Marketing Digital",
      description:
        "Stratégies de marketing digital pour développer votre entreprise",
      icon: <BarChart className="w-10 h-10 text-green-500" />,
      image: img3,
      href: "/marketing-digital",
    },
    {
      title: "Création de Site Web",
      description:
        "Développement de sites web modernes et performants pour votre entreprise",
      icon: <Laptop className="w-10 h-10 text-purple-500" />,
      image: img4,
      href: "/site-web",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-gray-50" id="offers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Explorez Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions numériques innovantes pour propulser votre entreprise
            vers le succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{service.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                  {service.icon}
                </div>

                <Link to={service.href}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 mt-4 group">
                    En savoir plus
                    <MousePointer2 className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
