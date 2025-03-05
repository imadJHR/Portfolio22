import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CEO de StartupX",
    text: "Nemsi Media a transformé notre présence digitale ! Leur expertise est exceptionnelle.",
    image: "/client1.jpg",
  },
  {
    name: "Sophie Martin",
    role: "Fondatrice de Creatix",
    text: "Une équipe talentueuse et réactive. Nos conversions ont explosé grâce à eux !",
    image: "/client2.jpg",
  },
  {
    name: "David Leroy",
    role: "Directeur Marketing, TechFlow",
    text: "Leur approche créative et stratégique a eu un impact énorme sur notre marque.",
    image: "/client3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-purple-600 font-bold mb-10"
        >
          Ce que disent nos clients
        </motion.h2>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg italic mb-4">“{testimonial.text}”</p>
                <div className="flex items-center justify-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
