"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "¿Es una competición?",
        answer: "No, es una marcha ciclodeportiva no competitiva. El objetivo es completar el recorrido en grupo, respetando las normas de tráfico y disfrutando de la experiencia y el compañerismo."
    },
    {
        question: "¿Qué incluye la inscripción presencial?",
        answer: "Incluye maillot oficial Gobik, avituallamientos líquidos y sólidos, asistencia mecánica en ruta, coche escoba, seguros, transporte de equipaje entre etapas y cena de clausura."
    },
    {
        question: "¿Cómo funciona el alojamiento?",
        answer: "Ofrecemos un 'Pack Hotel' opcional que incluye las 2 noches de hotel (Ciudad Real y Córdoba) en régimen de media pensión. Puedes añadirlo durante el proceso de inscripción."
    },
    {
        question: "¿Qué nivel físico se requiere?",
        answer: "Se recomienda tener experiencia en largas distancias. Aunque el ritmo es controlado, son 3 etapas consecutivas de 150-200km cada una. Habrá grupos de diferentes velocidades."
    },
    {
        question: "¿Puedo participar con bicicleta eléctrica?",
        answer: "Sí, las e-bikes son bienvenidas. Tendremos puntos de carga en los avituallamientos principales, pero es responsabilidad del participante gestionar la autonomía de su batería."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
                        <HelpCircle size={32} className="text-[#1e3a8a]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-gray-900">
                        PREGUNTAS FRECUENTES
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Resolvemos tus dudas para que solo te preocupes de pedalear
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-[#ec4899]" />
                                ) : (
                                    <ChevronDown className="text-gray-400" />
                                )}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
