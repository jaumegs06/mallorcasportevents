"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Award, Dumbbell, Brain, Briefcase, Network, Star, GraduationCap, Sparkles, ChevronDown, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/navbar/LanguageSwitcher";

export default function FitnessWeekend2027Page() {
  const t = useTranslations('fitnessWeekend');
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      title: t('ambassadors.roles.leader'),
      subtitle: t('ambassadors.roles.strategic'),
      image: "/mfw-2027/michael-wagner.png",
      description: "Con más de 25 años liderando la transformación digital del fitness en Europa"
    },
    {
      name: "Israel Malebre",
      country: "España",
      title: t('ambassadors.roles.reference'),
      subtitle: t('ambassadors.roles.trajectory'),
      image: "/mfw-2027/israel-malebre.png",
      description: "Pionero del fitness funcional en España y mentor de generaciones"
    }
  ];

  const experienceZones = [
    {
      icon: <Dumbbell size={40} />,
      title: t('experience.expo.title'),
      description: t('experience.expo.description'),
      features: [t('experience.expo.features.0'), t('experience.expo.features.1'), t('experience.expo.features.2')]
    },
    {
      icon: <GraduationCap size={40} />,
      title: t('experience.classes.title'),
      description: t('experience.classes.description'),
      features: [t('experience.classes.features.0'), t('experience.classes.features.1'), t('experience.classes.features.2')]
    },
    {
      icon: <Brain size={40} />,
      title: t('experience.mindBody.title'),
      description: t('experience.mindBody.description'),
      features: [t('experience.mindBody.features.0'), t('experience.mindBody.features.1'), t('experience.mindBody.features.2')]
    },
    {
      icon: <Briefcase size={40} />,
      title: t('experience.conference.title'),
      description: t('experience.conference.description'),
      features: [t('experience.conference.features.0'), t('experience.conference.features.1'), t('experience.conference.features.2')]
    }
  ];

  const pricingTiers = [
    {
      name: t('tickets.basic.name'),
      price: "149€",
      features: [
        t('tickets.basic.features.0'),
        t('tickets.basic.features.1'),
        t('tickets.basic.features.2'),
        t('tickets.basic.features.3'),
        t('tickets.basic.features.4')
      ],
      highlight: false,
      type: "presencial"
    },
    {
      name: t('tickets.premium.name'),
      price: "399€",
      features: [
        t('tickets.premium.features.0'),
        t('tickets.premium.features.1'),
        t('tickets.premium.features.2'),
        t('tickets.premium.features.3'),
        t('tickets.premium.features.4'),
        t('tickets.premium.features.5')
      ],
      highlight: true,
      type: "presencial"
    },
    {
      name: t('tickets.vip.name'),
      price: "799€",
      features: [
        t('tickets.vip.features.0'),
        t('tickets.vip.features.1'),
        t('tickets.vip.features.2'),
        t('tickets.vip.features.3'),
        t('tickets.vip.features.4'),
        t('tickets.vip.features.5'),
        t('tickets.vip.features.6')
      ],
      highlight: false,
      type: "presencial"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-orange selection:text-black">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black border-white/20' : 'bg-black/40 backdrop-blur-lg border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-neon-orange rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <div className="text-xl font-black skew-title">
                <span className="text-neon-orange uppercase italic">
                  MALLORCA FITNESS WEEKEND 2027
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: t('nav.evento'), id: 'evento' },
                { label: t('nav.speakers'), id: 'speakers' },
                { label: t('nav.experience'), id: 'experience' },
                { label: t('nav.destination'), id: 'destination' },
                { label: t('nav.tickets'), id: 'tickets' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-bold text-gray-300 hover:text-neon-orange transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('entradas')}
                className="px-6 py-3 btn-ironman rounded-none">
                {t('nav.reserveVip')}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover opacity-40 grayscale contrast-125"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-strong-man-training-with-a-tire-in-a-gym-23004-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* VIP Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-24 right-8 bg-[--color-ironman-red] text-white px-6 py-2 font-black text-sm skew-title tracking-widest shadow-2xl"
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 leading-none flex flex-col items-center">
              <span className="block text-white skew-title">{t('hero.title')}</span>
              <span className="block text-neon-orange scale-110 -mt-2">
                {t('hero.ultimate')}
              </span>
              <span className="block text-[--color-ironman-red] bg-white text-black px-4 -mt-2 skew-title">{t('hero.elite')}</span>
            </h1>

            <p className="text-2xl sm:text-3xl md:text-5xl text-white mb-4 font-black tracking-widest uppercase italic bg-[--color-ironman-red] inline-block px-6 py-2 skew-title">
              {t('hero.date')}
            </p>
            <p className="text-xl sm:text-2xl text-gray-400 mt-6 font-bold flex items-center justify-center gap-2 uppercase tracking-widest">
              <MapPin size={24} className="text-neon-orange" />
              Calvià, Mallorca
            </p>

            {/* Countdown */}
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-bold">
                {t('hero.countdownTitle')}
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { value: timeLeft.days, label: t('hero.days') },
                  { value: timeLeft.hours, label: t('hero.hours') },
                  { value: timeLeft.minutes, label: t('hero.minutes') },
                  { value: timeLeft.seconds, label: t('hero.seconds') }
                ].map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="bg-zinc-900 border-l-4 border-[--color-ironman-red] p-4 sm:p-6 min-w-[80px] sm:min-w-[120px] shadow-2xl skew-title"
                  >
                    <div className="text-3xl sm:text-5xl font-black text-white mb-1">
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm uppercase tracking-widest text-[#e20613] font-black">
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
                className="px-12 py-6 btn-ironman text-2xl rounded-none transition-all flex items-center gap-4"
              >
                {t('hero.reserve')} <Zap size={24} className="animate-pulse" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('evento')}
                className="px-12 py-6 border-4 border-white text-white font-black text-2xl rounded-none hover:bg-white hover:text-black transition-all w-full sm:w-auto uppercase tracking-tighter"
              >
                {t('hero.seeProgram')}
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
          <ChevronDown size={32} className="text-neon-orange" />
        </motion.div>
      </section>

      {/* Sobre el Evento - La Promesa */}
      <section id="evento" className="py-32 bg-zinc-950 clip-diagonal ring-1 ring-white/10" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 skew-title">
              <span className="text-white">
                {t('promise.title')}
              </span>
            </h2>
            <p className="text-2xl sm:text-4xl text-[--color-ironman-red] font-black mb-8 tracking-widest italic">
              {t('promise.subtitle')}
            </p>
            <p className="text-2xl text-zinc-400 max-w-4xl mx-auto leading-tight font-medium"
              dangerouslySetInnerHTML={{ __html: t('promise.description') }} />
          </motion.div>

          {/* 4 Iconos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <GraduationCap size={48} />, title: t('promise.cards.formation.title'), desc: t('promise.cards.formation.desc') },
              { icon: <Briefcase size={48} />, title: t('promise.cards.business.title'), desc: t('promise.cards.business.desc') },
              { icon: <Award size={48} />, title: t('promise.cards.performance.title'), desc: t('promise.cards.performance.desc') },
              { icon: <Network size={48} />, title: t('promise.cards.connection.title'), desc: t('promise.cards.connection.desc') }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 border-2 border-neon-orange/30 rounded-2xl p-8 text-center hover:border-neon-orange/60 hover:bg-white/10 transition-all group"
              >
                <div className="w-20 h-20 bg-[--color-ironman-red] rounded-none flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-white skew-title">{item.title}</h3>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Los Embajadores */}
      <section id="speakers" className="py-24 bg-slate-900 clip-diagonal" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[--color-ironman-red] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              ⭐ {t('ambassadors.authority')} ⭐
            </span>
            <h2 className="text-5xl sm:text-7xl font-black mb-6 skew-title">
              <span className="text-white">
                {t('ambassadors.title')}
              </span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto uppercase font-bold tracking-widest">
              {t('ambassadors.subtitle')}
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
                <div className="bg-zinc-900 border-l-8 border-[--color-ironman-red] rounded-none overflow-hidden hover:bg-zinc-800 transition-all shadow-2xl">
                  {/* Image */}
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={ambassador.image}
                      alt={ambassador.name}
                      fill
                      className="object-cover image-dramatic group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    <div className="absolute top-4 right-4 bg-[--color-ironman-red] text-white px-4 py-1 font-black text-xs skew-title">
                      {ambassador.country}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-4xl font-black mb-2 text-white skew-title">{ambassador.name}</h3>
                    <p className="text-[--color-ironman-red] font-black text-xl mb-2 tracking-tighter">{ambassador.title}</p>
                    <p className="text-zinc-500 font-bold text-sm mb-4 uppercase tracking-widest">{ambassador.subtitle}</p>
                    <p className="text-zinc-400 font-medium leading-tight">{index === 0 ? t('ambassadors.descriptions.michael') : t('ambassadors.descriptions.israel')}</p>
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
              {t('ambassadors.moreComing')}
            </p>
            <p className="text-sm text-neon-orange font-bold">
              {t('ambassadors.newsletterPrompt')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zonas de Experiencia */}
      <section id="experiencia" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 clip-diagonal" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-8 skew-title">
              <span className="text-white">
                {t('experience.title')}
              </span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto uppercase font-bold tracking-[0.2em]">
              {t('experience.subtitle')}
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
                className="backdrop-blur-md bg-zinc-900 border-l-4 border-zinc-800 rounded-none p-8 hover:border-[--color-ironman-red] transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[--color-ironman-red] rounded-none flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-white">{zone.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-3 text-white skew-title italic">{zone.title}</h3>
                    <p className="text-zinc-400 mb-6 font-medium leading-tight">{zone.description}</p>
                    <ul className="space-y-3">
                      {zone.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs font-black tracking-widest uppercase italic">
                          <div className="w-4 h-1 bg-[--color-ironman-red]"></div>
                          <span className="text-zinc-300">{feature}</span>
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
      <section id="sponsors" className="py-24 bg-slate-900 overflow-hidden clip-diagonal" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="text-neon-orange">
                {t('sponsors.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('sponsors.description')}
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
            <p className="text-gray-500 text-sm">{t('sponsors.contact')} <a href="mailto:oficinatecnica@onicestudio.com" className="text-neon-orange font-bold hover:underline">{t('sponsors.link')}</a></p>
          </motion.div>
        </div>
      </section>

      {/* Jornada Puertas Abiertas */}
      <section className="py-24 bg-gradient-to-r from-orange-900 to-orange-800 clip-diagonal" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              {t('residents.title')}
            </h2>
            <p className="text-3xl font-black text-amber-400 mb-4">
              {t('residents.promise')}
            </p>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t('residents.description') }} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-orange-900 font-black text-lg rounded-full hover:bg-amber-400 hover:text-black transition-all"
            >
              {t('residents.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="entradas" className="py-24 bg-slate-950 clip-diagonal" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="text-neon-orange uppercase italic">
                {t('tickets.title')}
              </span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto uppercase font-black tracking-[0.3em] mb-4">
              {t('tickets.subtitle')}
            </p>
            <p className="text-lg text-neon-orange font-bold mb-2">
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
                className={`rounded-none p-10 transition-all hover:-translate-y-4 ${tier.highlight
                  ? 'bg-zinc-900 border-t-8 border-[--color-ironman-red] shadow-[0_30px_60px_-15px_rgba(226,6,19,0.3)] z-10'
                  : 'bg-zinc-950 border border-zinc-800'
                  }`}
              >
                {tier.highlight && (
                  <div className="bg-[--color-ironman-red] text-white text-xs font-black px-6 py-2 inline-block mb-6 skew-title tracking-[0.2em]">
                    ⭐ ELITE CHOICE ⭐
                  </div>
                )}
                <h3 className="text-3xl font-black mb-4 text-white skew-title">{tier.name}</h3>
                <div className="mb-8">
                  <span className="text-7xl font-black text-white italic">
                    {tier.price}
                  </span>
                </div>
                <ul className="space-y-5 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 border-b border-zinc-800 pb-3">
                      <Zap size={18} className={tier.highlight ? "text-[--color-ironman-red] flex-shrink-0" : "text-zinc-600 flex-shrink-0"} />
                      <span className="text-zinc-300 text-sm font-bold uppercase tracking-widest leading-none">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/fitness-weekend/checkout?package=${encodeURIComponent(tier.name)}&price=${encodeURIComponent(tier.price)}`}
                  className={`w-full py-6 btn-ironman text-2xl rounded-none text-center block ${tier.highlight
                    ? 'shadow-2xl brightness-110'
                    : 'bg-white text-black hover:bg-zinc-200'
                    }`}
                >
                  {t('tickets.reserve')}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-zinc-950 clip-diagonal ring-1 ring-white/10" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-8 skew-title">
              <span className="text-white">{t('newsletter.title')}</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 uppercase font-black tracking-widest leading-tight"
              dangerouslySetInnerHTML={{ __html: t('newsletter.subtitle') }} />

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                className="flex-1 px-8 py-5 bg-zinc-900 border-2 border-zinc-800 text-white font-black rounded-none focus:outline-none focus:border-[--color-ironman-red] transition-all uppercase tracking-widest"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-5 btn-ironman text-xl rounded-none disabled:opacity-50"
              >
                {isSubmitting ? "..." : t('newsletter.button')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-[--color-ironman-red] py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Info */}
            <div>
              <h3 className="text-3xl font-black mb-6 text-white skew-title">
                MFW 2027
              </h3>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-6">
                CALVIÀ, MALLORCA<br />
                14-15-16 MAYO 2027
              </p>
              <div className="flex items-start gap-2 text-zinc-400 text-xs font-black tracking-tighter uppercase">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[--color-ironman-red]" />
                <span>Moli de Calvià / Recinto Firal<br />Calvià, Mallorca, España</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xl font-black mb-6 text-white skew-title">{t('footer.navigation')}</h4>
              <ul className="space-y-3">
                {[
                  { label: t('nav.evento'), id: 'evento' },
                  { label: t('nav.speakers'), id: 'speakers' },
                  { label: t('nav.experience'), id: 'experience' },
                  { label: t('nav.destination'), id: 'destination' },
                  { label: t('nav.tickets'), id: 'tickets' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-zinc-500 hover:text-white transition-colors font-black uppercase tracking-widest text-xs">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto y Redes */}
            <div>
              <h4 className="text-xl font-black mb-6 text-white skew-title">{t('footer.contact')}</h4>
              <div className="space-y-4 mb-8">
                <a href="mailto:info@mfw2027.com" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors font-black uppercase tracking-widest text-xs">
                  <Mail size={16} className="text-[--color-ironman-red]" />
                  <span>info@mfw2027.com</span>
                </a>
              </div>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram size={20} />, link: "https://www.instagram.com/mallorcafitweekend/?hl=es" },
                  { icon: <Facebook size={20} />, link: "https://www.facebook.com/mallorcafitweekend/?locale=es_ES" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-[--color-ironman-red] hover:border-transparent transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="border-t border-zinc-800 pt-8 mb-8">
            <h4 className="text-center text-xs font-black text-zinc-600 uppercase tracking-[0.3em] mb-8">
              ORGANIZADORES Y PATROCINADORES
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:opacity-100 transition-opacity">
              <span className="text-white font-black text-xl italic skew-title">CALVIA</span>
              <span className="text-white font-black text-xl italic skew-title">ONICE</span>
              <span className="text-white font-black text-xl italic skew-title">NIKE</span>
              <span className="text-white font-black text-xl italic skew-title">RED BULL</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-900 pt-8 text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            <p>
              © 2027 MALLORCA FITNESS WEEKEND. OPERADO POR <span className="text-white">MALLORCA SPORT EVENTS</span>
            </p>
          </div>
        </div>
      </footer>
    </div >
  );
}
