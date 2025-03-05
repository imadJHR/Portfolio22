import React, { useRef, useEffect, useState } from "react";
import { Sparkles, Zap, Rocket, Users } from "lucide-react";

const StatItem = ({ icon: Icon, value, suffix, label, delay }) => {
  const [counted, setCounted] = useState(0);
  const statRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = 16; // ~60fps
    const increment = Math.ceil(value / (duration / interval));
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCounted(value);
          clearInterval(counter);
        } else {
          setCounted(start);
        }
      }, interval);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div
      ref={statRef}
      className="flex flex-col items-center p-6 transform transition-all duration-700 ease-out opacity-0 translate-y-6"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="mb-4 relative">
        {/* Background circle with subtle animation */}
        <div className="absolute inset-0 rounded-full bg-blue-500/5 animate-pulse-subtle"></div>

        {/* Icon */}
        <div className="relative z-10 p-4 text-purple-600">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      </div>

      {/* Value with counter */}
      <div className="text-3xl font-bold mb-1 tabular-nums">
        {counted}
        <span className="ml-0.5">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Sparkles, value: 100, suffix: "%", label: "Satisfaction Client", delay: 0 },
    { icon: Rocket, value: 5, suffix: "+", label: "Années d'Expérience", delay: 400 },
  ];

  return (
    <section className="py-24 bg-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à fournir des services de qualité exceptionnelle avec une attention méticuleuse aux détails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;