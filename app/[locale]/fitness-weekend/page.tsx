"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Award, Dumbbell, Brain, Briefcase, Network, Star, GraduationCap, Sparkles, ChevronDown, Mail, Phone, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FitnessWeekend2027Page() {
  const params = useParams();
  const locale = params.locale as string;
  const eventDate = new Date("2027-05-14T09:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aquí iría la lógica de envío real
    setTimeout(() => {
      alert(`¡Gracias! ${email} ha sido registrado para recibir novedades.`);
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const ambassadors = [
    {
      name: "Michael Alois Wagner",
      country: "Austria",
      title: "Líder Mundial Industria Fitness",
      subtitle: "Asesor Estratégico Internacional",
      image: "/mfw-2027/michael-wagner.png",
      description: "Con más de 25 años liderando la transformación digital del fitness en Europa"
    },
    {
      name: "Israel Malebre",
      country: "España",
      title: "Referencia Nacional del Fitness",
      subtitle: "25 Años de Trayectoria",
      image: "/mfw-2027/israel-malebre.png",
      description: "Pionero del fitness funcional en España y mentor de generaciones"
    }
  ];

  const experienceZones = [
    {
      icon: <Dumbbell size={40} />,
      title: "Fitness Expo",
      description: "Últimas tendencias y tecnología del sector fitness mundial",
      features: ["Equipamiento innovador", "Demos en vivo", "Networking comercial"]
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Actividades Dirigidas",
      description: "Masterclasses en directo con los mejores entrenadores internacionales",
      features: ["CrossFit Elite", "HIIT Avanzado", "Yoga Premium"]
    },
    {
      icon: <Brain size={40} />,
      title: "Cuerpo y Mente",
      description: "Zona de wellness dedicada al equilibrio integral",
      features: ["Yoga & Meditación", "Pilates Reformer", "Mindfulness"]
    },
    {
      icon: <Briefcase size={40} />,
      title: "Conference Area",
      description: "Ponencias sobre gestión, salud corporativa y liderazgo",
      features: ["Business Fitness", "Management", "Liderazgo"]
    }
  ];

  const pricingTiers = [
    {
      name: "ACCESO BÁSICO",
      price: "149€",
      features: [
        "Acceso 2 días completos",
        "Fitness Expo",
        "3 Masterclasses a elegir",
        "Material del evento",
        "Certificado digital"
      ],
      highlight: false,
      type: "presencial"
    },
    {
      name: "PREMIUM EXPERIENCE",
      price: "399€",
      features: [
        "Todo lo incluido en Básico",
        "Acceso ilimitado a masterclasses",
        "Conference Area VIP",
        "Kit premium Mallorca Sport Events",
        "Networking exclusivo",
        "Cena de gala"
      ],
      highlight: true,
      type: "presencial"
    },
    {
      name: "VIP ULTIMATE ELITE",
      price: "799€",
      features: [
        "Todo lo incluido en Premium",
        "2 noches alojamiento 4* en Calvià",
        "Desayunos incluidos",
        "Meet & Greet con speakers",
        "Acceso exclusivo zonas VIP",
        "Gift premium",
        "Servicio concierge"
      ],
      highlight: false,
      type: "presencial"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <div className="text-xl font-black">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  MALLORCA FITNESS WEEKEND 2027
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {['EVENTO', 'SPEAKERS', 'EXPERIENCIA', 'DESTINO', 'ENTRADAS'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('entradas')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black rounded-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all">
                RESERVAR VIP
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mfw-2027/hero.png"
            alt="MFW 2027"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60"></div>
        </div>

        {/* VIP Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 right-8 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-full font-black text-sm shadow-2xl shadow-amber-500/50"
        >
          ⭐ VIP EXPERIENCE
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
              <span className="block text-white">MALLORCA FITNESS WEEKEND 2027</span>
              <span className="block bg-gradient-to-r from-blue-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                THE ULTIMATE
              </span>
              <span className="block text-amber-400">ELITE</span>
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl text-orange-400 mb-4 font-black">
              14, 15 Y 16 DE MAYO 2027
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 font-bold flex items-center justify-center gap-2">
              <MapPin size={24} className="text-orange-400" />
              Calvià, Mallorca
            </p>

            {/* Countdown */}
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-bold">
                CUENTA ATRÁS PARA LA EXCELENCIA
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { value: timeLeft.days, label: "DÍAS" },
                  { value: timeLeft.hours, label: "HORAS" },
                  { value: timeLeft.minutes, label: "MIN" },
                  { value: timeLeft.seconds, label: "SEG" }
                ].map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="backdrop-blur-md bg-white/10 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-6 min-w-[80px] sm:min-w-[120px]"
                  >
                    <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-bold">
                      {unit.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('entradas')}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xl rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/80 transition-all w-full sm:w-auto"
              >
                RESERVA TU EXPERIENCIA VIP
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('evento')}
                className="px-10 py-5 border-4 border-white text-white font-black text-xl rounded-full hover:bg-white hover:text-slate-950 transition-all w-full sm:w-auto"
              >
                VER PROGRAMA
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-orange-400" />
        </motion.div>
      </section>

      {/* Sobre el Evento - La Promesa */}
      <section id="evento" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                MUCHO MÁS QUE UN ENCUENTRO
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-white font-bold mb-4">
              MALLORCA FITNESS WEEKEND es una convocatoria a la excelencia
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Durante dos días, <span className="text-orange-400 font-bold">Calvià será el epicentro del fitness mundial</span>, combinando formación certificada, masterclasses internacionales y networking de alto nivel por MALLORCA FITNESS WEEKEND.
            </p>
          </motion.div>

          {/* 4 Iconos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <GraduationCap size={48} />, title: "FORMACIÓN", desc: "Certificaciones oficiales" },
              { icon: <Briefcase size={48} />, title: "NEGOCIO", desc: "Estrategia y gestión" },
              { icon: <Award size={48} />, title: "PERFORMANCE", desc: "Excelencia deportiva" },
              { icon: <Network size={48} />, title: "CONEXIÓN", desc: "Networking élite" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 border-2 border-blue-500/30 rounded-2xl p-8 text-center hover:border-orange-400/60 hover:bg-white/10 transition-all group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-black mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Los Embajadores */}
      <section id="speakers" className="py-24 bg-slate-900" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-black text-sm uppercase tracking-wider mb-4 block">
              ⭐ AUTORIDAD MUNDIAL
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                LOS EMBAJADORES
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Líderes reconocidos internacionalmente que transformarán tu visión del fitness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {ambassadors.map((ambassador, index) => (
              <motion.div
                key={ambassador.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border-4 border-amber-500/30 rounded-3xl overflow-hidden hover:border-amber-400/80 transition-all hover:shadow-2xl hover:shadow-amber-500/20">
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={ambassador.image}
                      alt={ambassador.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                    {/* Country Badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-black text-xs">
                      {ambassador.country}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-black mb-2 text-white">{ambassador.name}</h3>
                    <p className="text-orange-400 font-black text-lg mb-2">{ambassador.title}</p>
                    <p className="text-blue-400 font-bold text-sm mb-4">{ambassador.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{ambassador.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Speakers Coming */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-400 mb-4">
              <Sparkles className="inline mr-2" size={20} />
              Nuevos formadores internacionales confirmándose semanalmente
            </p>
            <p className="text-sm text-orange-400 font-bold">
              Suscríbete a la newsletter para ser el primero en enterarte
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zonas de Experiencia */}
      <section id="experiencia" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                ZONAS DE EXPERIENCIA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4 áreas diseñadas para transformar tu conocimiento y red profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceZones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 border-2 border-blue-500/20 rounded-2xl p-8 hover:border-orange-400/60 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-white">{zone.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-white">{zone.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{zone.description}</p>
                    <ul className="space-y-2">
                      {zone.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patrocinadores / Sponsors */}
      <section id="sponsors" className="py-24 bg-slate-900 overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                CON EL APOYO DE:
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Marcas e instituciones que apuestan por la excelencia en el fitness y el deporte
            </p>
          </motion.div>

          {/* Sponsors Grid - Placeholders for now */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full max-w-[200px] h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-8 grayscale hover:grayscale-0 hover:bg-white/10 transition-all border-dashed"
              >
                <span className="text-gray-500 font-bold tracking-widest text-xs">SPONSOR {i}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 inline-block"
          >
            <p className="text-gray-500 text-sm">¿Quieres ser patrocinador? <a href="mailto:oficinatecnica@onicestudio.com" className="text-orange-400 font-bold hover:underline">Contacta con nosotros</a></p>
          </motion.div>
        </div>
      </section>

      {/* Jornada Puertas Abiertas */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              🏡 COMPROMISO LOCAL
            </h2>
            <p className="text-3xl font-black text-amber-400 mb-4">
              "EL DEPORTE ES SALUD"
            </p>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Jornada de Puertas Abiertas con <span className="font-black">acceso gratuito para residentes de Calvià</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-900 font-black text-lg rounded-full hover:bg-amber-400 hover:text-black transition-all"
            >
              SOY RESIDENTE - MÁS INFO
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="entradas" className="py-24 bg-slate-950" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                ELIGE TU EXPERIENCIA
              </span>
            </h2>
            <p className="text-lg text-orange-400 font-bold mb-2">
              ⚠️ Los precios aumentarán progresivamente con la confirmación de nuevos formadores
            </p>
            <p className="text-gray-400">Mejor precio: Compra ahora</p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-md rounded-3xl p-8 transition-all hover:scale-105 ${tier.highlight
                  ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-4 border-amber-400 shadow-2xl shadow-amber-500/30'
                  : 'bg-white/5 border-2 border-blue-500/30'
                  }`}
              >
                {tier.highlight && (
                  <div className="bg-amber-400 text-black text-xs font-black px-4 py-1 rounded-full inline-block mb-4">
                    ⭐ MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-black mb-4 text-white">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">/persona</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Star size={20} className={tier.highlight ? "text-amber-400 flex-shrink-0" : "text-blue-400 flex-shrink-0"} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/fitness-weekend/checkout?package=${encodeURIComponent(tier.name)}&price=${encodeURIComponent(tier.price)}`}
                  className={`w-full py-4 rounded-full font-black text-lg transition-all text-center block ${tier.highlight
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black hover:shadow-xl hover:shadow-amber-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600'
                    }`}
                >
                  RESERVAR AHORA
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-orange-900" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border-2 border-amber-400/50 rounded-3xl p-12 text-center"
          >
            <Mail size={48} className="text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">
              SÉ EL PRIMERO EN SABER
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuevos speakers internacionales, ofertas exclusivas y contenido premium directamente en tu email
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black rounded-full hover:shadow-xl hover:shadow-amber-500/50 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "ENVIANDO..." : "SUSCRIBIRME"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-500/20 py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Info */}
            <div>
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                MALLORCA FITNESS WEEKEND 2027
              </h3>
              <p className="text-gray-400 mb-4">
                Mallorca Fitness Weekend<br />
                The Ultimate Elite<br />
                14-15-16 Mayo 2027
              </p>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>Moli de Calvià / Recinto Firal<br />Calvià, Mallorca, España</span>
              </div>
            </div>

            {/* Enlaces */}
            <div>
              <h4 className="text-lg font-black mb-4 text-white">NAVEGACIÓN</h4>
              <ul className="space-y-2">
                {['Sobre el Evento', 'Speakers', 'Zonas de Experiencia', 'Destino Calvià', 'Pricing'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-').replace('zonas-de-experiencia', 'experiencia').replace('destino-calvià', 'destino').replace('sobre-el-evento', 'evento'))}
                      className="text-gray-400 hover:text-orange-400 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto y Redes */}
            <div>
              <h4 className="text-lg font-black mb-4 text-white">CONTACTO</h4>
              <div className="space-y-3 mb-6">
                <a href="mailto:info@mfw2027.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail size={16} />
                  <span>info@mfw2027.com</span>
                </a>
                <a href="tel:+34971000000" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone size={16} />
                  <span>+34 971 000 000</span>
                </a>
              </div>

              <h4 className="text-sm font-black mb-3 text-gray-400 uppercase tracking-wide">Síguenos</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram size={20} />, link: "#" },
                  { icon: <Facebook size={20} />, link: "#" },
                  { icon: <Linkedin size={20} />, link: "#" },
                  { icon: <Twitter size={20} />, link: "#" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="border-t border-blue-500/20 pt-8 mb-8">
            <h4 className="text-center text-sm font-black text-gray-400 uppercase tracking-wide mb-6">
              Organizadores y Patrocinadores
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Mallorca Sport Events', 'Ayuntamiento Calvià', 'Partners'].map((sponsor, idx) => (
                <div key={idx} className="text-gray-500 font-bold text-sm">
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-500/20 pt-8 text-center text-sm text-gray-500">
            <p>
              © 2027 Mallorca Fitness Weekend. Organizado por <span className="text-white font-bold">Mallorca Sport Events</span>
            </p>
            <p className="mt-2">Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}
