"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCard, ArrowLeft, CheckCircle2, Upload, Info, Banknote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function CheckoutContent() {
    const searchParams = useSearchParams();
    const packageName = searchParams.get("package") || "Experiencia Fitness";
    const price = searchParams.get("price") || "0€";

    const [step, setStep] = useState(1);
    const [isUploading, setIsUploading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleProceedToPayment = () => {
        setStep(2);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setIsUploading(true);
            // Simular subida
            setTimeout(() => {
                setIsUploading(false);
                setIsSuccess(true);
            }, 2000);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle2 size={48} className="text-white" />
                </motion.div>
                <h2 className="text-4xl font-black mb-4">¡PAGO RECIBIDO!</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Hemos recibido tu comprobante de transferencia. Nuestro equipo verificará el pago y recibirás un email de confirmación con tu entrada oficial en las próximas 24-48 horas.
                </p>
                <Link
                    href="/fitness-weekend"
                    className="inline-block px-10 py-4 bg-orange-500 text-white font-black rounded-full hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
                >
                    VOLVER AL EVENTO
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <Link href="/fitness-weekend" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Resumen */}
                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-4">Resumen del Pedido</h2>
                        <h3 className="text-3xl font-black mb-2">{packageName.toUpperCase()}</h3>
                        <p className="text-5xl font-black text-white mb-6 font-mono">{price}</p>

                        <div className="space-y-4 border-t border-white/10 pt-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">Acceso completo todas las jornadas</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">Certificado oficial de asistencia</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">Welcome pack premium</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 flex gap-4">
                        <Info className="text-blue-400 flex-shrink-0" size={24} />
                        <p className="text-sm text-blue-200 leading-relaxed">
                            Para completar tu inscripción, debes realizar una transferencia bancaria y adjuntar el comprobante en el siguiente paso. Tu plaza no quedará reservada hasta que validemos el pago.
                        </p>
                    </div>
                </div>

                {/* Pasos de Pago */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    {step === 1 ? (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CreditCard size={40} className="text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">¿Todo listo?</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Al hacer clic en el botón verás los datos bancarios para realizar la transferencia. Recuerda guardar el comprobante para subirlo aquí mismo.
                            </p>
                            <button
                                onClick={handleProceedToPayment}
                                className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xl rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/80 transition-all"
                            >
                                PROCEDER AL PAGO
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                                    <Banknote className="text-orange-500" />
                                    Datos de Transferencia
                                </h3>
                                <div className="bg-black/40 rounded-2xl p-6 space-y-4 font-mono text-xs sm:text-sm border border-white/5">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-gray-500 uppercase text-[10px] tracking-widest">Beneficiario</p>
                                        <p className="text-white font-bold uppercase truncate">Mallorca Sport Events SL</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-gray-500 uppercase text-[10px] tracking-widest">IBAN (MOCK DATA)</p>
                                        <p className="text-white font-bold select-all">ES21 0000 0000 0000 0000 0000</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-gray-500 uppercase text-[10px] tracking-widest">Concepto</p>
                                        <p className="text-orange-400 font-bold select-all truncate">{packageName.replace(/ /g, '_').toUpperCase()}_MALLORCA_2027</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                                    <Upload className="text-orange-500" />
                                    Adjuntar Comprobante
                                </h3>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        disabled={isUploading}
                                        accept="image/*,.pdf"
                                    />
                                    <div className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${isUploading ? 'bg-white/5 border-orange-500/50' : 'border-white/20 hover:border-orange-500/50 hover:bg-white/5 group-hover:border-orange-500/50'}`}>
                                        {isUploading ? (
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                                <p className="text-orange-500 font-bold">Subiendo captura...</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <Upload size={24} className="text-gray-400" />
                                                </div>
                                                <p className="text-gray-400 font-bold">Haz clic o arrastra tu captura aquí</p>
                                                <p className="text-xs text-gray-500 mt-2">Formatos: JPG, PNG, PDF (Máx. 5MB)</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-4">
            <Suspense fallback={<div className="text-center py-20">Cargando pasarela...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    );
}
