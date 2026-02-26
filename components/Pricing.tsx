import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing: React.FC = () => {
    const features = [
        "Unlimited Workout Plans",
        "Custom Routine Builder",
        "Progress Tracking & Analytics",
        "Video Demonstrations",
        "Offline Mode Support",
        "No Ads, No Distractions"
    ];

    return (
        <section id="pricing" className="bg-background-dark py-20 relative overflow-hidden">
            {/* Background Decorations */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-transparent bg-clip-text bg-green-500 font-semibold tracking-wide uppercase text-base mb-3">Pricing</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Premium Fitness, <span className = "bg-clip-text">Completely Free</span>
                    </h3>
                </div>

                <div className="max-w-md mx-auto">
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col h-full">
                            <div className="mb-6">
                                <h4 className="text-xl font-semibold text-white mb-2">Full Access</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-white">$0</span>
                                    <span className="text-slate-400">/ forever</span>
                                </div>
                                <p className="text-sm text-slate-400 mt-4">
                                    Join us early and lock in free access to all core features for life.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8 grow">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                            <FaCheck size={12} />
                                        </div>
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;