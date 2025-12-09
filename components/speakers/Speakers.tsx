"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  specialty: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "MARÍA TORRES",
      specialty: "CrossFit & HIIT",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 2,
      name: "CARLOS RUIZ",
      specialty: "Yoga & Mindfulness",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 3,
      name: "ANDREA LÓPEZ",
      specialty: "Nutrición Deportiva",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 4,
      name: "JORGE MARTÍN",
      specialty: "Powerlifting",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 5,
      name: "LAURA SÁNCHEZ",
      specialty: "Pilates & Wellness",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 6,
      name: "PABLO GARCÍA",
      specialty: "Entrenamiento Funcional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      instagram: "#",
      linkedin: "#",
    },
  ];

  return (
    <section id="speakers" className="py-24 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="gradient-neon-text">SPEAKERS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Los mejores entrenadores y especialistas del fitness mundial
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden border border-[--color-neon-cyan]/20 hover:border-[--color-neon-cyan]/60 transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  
                  {/* Social Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {speaker.instagram && (
                      <a
                        href={speaker.instagram}
                        className="p-2 rounded-full glass hover:bg-[--color-neon-cyan]/20 transition-colors"
                      >
                        <Instagram size={18} className="text-[--color-neon-cyan]" />
                      </a>
                    )}
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        className="p-2 rounded-full glass hover:bg-[--color-neon-cyan]/20 transition-colors"
                      >
                        <Linkedin size={18} className="text-[--color-neon-cyan]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight mb-2 text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-[--color-neon-green] font-bold text-sm uppercase tracking-wide">
                    {speaker.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
