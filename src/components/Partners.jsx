import Marquee from "react-fast-marquee";
import img1 from "../assets/part1.jpg";
import img2 from "../assets/part2.jpg";
import img3 from "../assets/part3.jpg";
import img4 from "../assets/part4.jpg";

const partners = [img1, img2, img3, img4];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Nos Partenaires</h2>
        <p className="text-gray-600 mt-2">Ils nous font confiance</p>
      </div>
      <Marquee gradient={false} speed={40} pauseOnHover>
        {partners.map((logo, index) => (
          <div key={index} className="mx-8">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-40 rounded-full w-auto"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default PartnersSection;
