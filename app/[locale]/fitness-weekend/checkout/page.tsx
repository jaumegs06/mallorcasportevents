"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCard, ArrowLeft, CheckCircle2, Upload, Info, Banknote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/navbar/LanguageSwitcher";

function CheckoutContent() {
    const t = useTranslations('fitnessWeekend.checkout');
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
                <h2 className="text-4xl font-black mb-4 uppercase">{t('success.title')}</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    {t('success.description')}
                </p>
                <Link
                    href="/fitness-weekend"
                    className="inline-block px-10 py-4 btn-ironman text-white font-black rounded-none shadow-xl"
                >
                    {t('success.backButton')}
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <Link href="/fitness-weekend" className="flex items-center text-gray-400 hover:text-white transition-colors uppercase font-black tracking-widest text-xs">
                    <ArrowLeft size={20} className="mr-2" />
                    {t('navigation.back')}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Resumen */}
                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-none p-8 backdrop-blur-sm">
                        <h2 className="text-sm font-black text-[--color-ironman-red] uppercase tracking-widest mb-4">{t('summary.title')}</h2>
                        <h3 className="text-3xl font-black mb-2 skew-title">{packageName.toUpperCase()}</h3>
                        <p className="text-5xl font-black text-white mb-6 font-mono italic">{price}</p>

                        <div className="space-y-4 border-t border-white/10 pt-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[--color-ironman-red] mt-1 flex-shrink-0" />
                                <p className="text-zinc-300 uppercase font-bold text-xs tracking-widest">{t('summary.features.access')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[--color-ironman-red] mt-1 flex-shrink-0" />
                                <p className="text-zinc-300 uppercase font-bold text-xs tracking-widest">{t('summary.features.certificate')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[--color-ironman-red] mt-1 flex-shrink-0" />
                                <p className="text-zinc-300 uppercase font-bold text-xs tracking-widest">{t('summary.features.welcomePack')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[--color-ironman-red]/10 border border-[--color-ironman-red]/20 rounded-none p-6 flex gap-4">
                        <Info className="text-[--color-ironman-red] flex-shrink-0" size={24} />
                        <p className="text-sm text-zinc-400 leading-tight font-medium">
                            {t('info.transferNotice')}
                        </p>
                    </div>
                </div>

                {/* Pasos de Pago */}
                <div className="bg-white/5 border border-white/10 rounded-none p-8 backdrop-blur-sm">
                    {step === 1 ? (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-[--color-ironman-red]/20 rounded-none flex items-center justify-center mx-auto mb-6">
                                <CreditCard size={40} className="text-[--color-ironman-red]" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 skew-title italic uppercase">{t('step1.ready')}</h3>
                            <p className="text-zinc-500 mb-8 leading-tight font-medium uppercase text-xs tracking-widest">
                                {t('step1.description')}
                            </p>
                            <button
                                onClick={handleProceedToPayment}
                                className="w-full py-5 btn-ironman text-white font-black text-xl rounded-none transition-all uppercase italic tracking-tighter"
                            >
                                {t('step1.button')}
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-xl font-black mb-4 flex items-center gap-2 skew-title italic uppercase">
                                    <Banknote className="text-[--color-ironman-red]" />
                                    {t('step2.data')}
                                </h3>
                                <div className="bg-black/40 rounded-none p-6 space-y-4 font-mono text-xs sm:text-sm border border-white/5">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-500 uppercase text-[10px] tracking-widest font-black">{t('step2.beneficiary')}</p>
                                        <p className="text-white font-bold uppercase truncate">Mallorca Sport Events SL</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-500 uppercase text-[10px] tracking-widest font-black">{t('step2.iban')}</p>
                                        <p className="text-white font-bold select-all">ES21 0000 0000 0000 0000 0000</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-500 uppercase text-[10px] tracking-widest font-black">{t('step2.concept')}</p>
                                        <p className="text-[--color-ironman-red] font-bold select-all truncate">{packageName.replace(/ /g, '_').toUpperCase()}_MALLORCA_2027</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-black mb-4 flex items-center gap-2 skew-title italic uppercase">
                                    <Upload className="text-[--color-ironman-red]" />
                                    {t('step2.uploadTitle')}
                                </h3>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        disabled={isUploading}
                                        accept="image/*,.pdf"
                                    />
                                    <div className={`border-2 border-dashed rounded-none p-12 text-center transition-all ${isUploading ? 'bg-white/5 border-[--color-ironman-red]/50' : 'border-white/20 hover:border-[--color-ironman-red]/50 hover:bg-white/5 group-hover:border-[--color-ironman-red]/50'}`}>
                                        {isUploading ? (
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 border-4 border-[--color-ironman-red] border-t-transparent rounded-full animate-spin mb-4"></div>
                                                <p className="text-[--color-ironman-red] font-black uppercase text-xs tracking-widest">{t('step2.uploading')}</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <Upload size={24} className="text-zinc-500" />
                                                </div>
                                                <p className="text-zinc-400 font-black uppercase text-xs tracking-widest">{t('step2.uploadButton')}</p>
                                                <p className="text-[10px] text-zinc-600 mt-2 font-bold">{t('step2.uploadFormats')}</p>
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
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 relative">
            <div className="fixed top-8 right-8 z-50">
                <LanguageSwitcher />
            </div>
            <Suspense fallback={<div className="text-center py-20">Cargando pasarela...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    );
}
