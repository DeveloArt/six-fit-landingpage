import React from 'react';
import { analytics } from '../services/firebaseService';

const Hero: React.FC = () => {
  const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.bukos.minrepsapp&pli=1';
  const APP_STORE_URL = 'https://apps.apple.com/us/app/sixfit/id6751943924';

  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'ios';
    } else if (/android/i.test(userAgent)) {
      return 'android';
    }
    return 'unknown';
  };

  const handleDownloadClick = () => {
    analytics.logEvent('click_download_hero');
    
    const device = detectDevice();
    const targetUrl = device === 'ios' ? APP_STORE_URL : GOOGLE_PLAY_URL;
    
    window.open(targetUrl, '_blank');
  };

  const plans = [
    {
      text: "My Goals",
      subtitle: "Add your first goal",
    },
    {
      text: "My Custom Plans",
      subtitle: "Add your first plan",
    },
    {
      text: "My Max Trainings",
      subtitle: "Add First Max Workout",
    },
  ];

  const week = [
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
  ]
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="text-gradient bg-green-400">Six Fit:</span> Transform Your <span className="text-white">Body in 6 Weeks</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Choose from proven 6-week workout plans or create custom routines. Perfect for beginners and fitness enthusiasts who want structured, effective training at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                Download Now
              </button>
              <a 
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-semibold rounded-full text-slate-200 bg-transparent hover:bg-slate-800 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-icons text-gradient bg-green-500 text-xl">check_circle</span>
                <span>1,000+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-gradient bg-green-500 text-xl">star</span>
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 relative">
            <div className="relative w-70 sm:w-[320px] h-145 sm:h-160 bg-green-900 rounded-[3rem] border-8 border-green-900 shadow-2xl shadow-green-900/50 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#112217] relative">
                
                {/* Status Bar */}
                <div className="absolute top-0 w-full px-6 py-4 flex justify-between text-xs text-white z-20">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span className="material-icons text-[14px]">signal_cellular_alt</span>
                    <span className="material-icons text-[14px]">wifi</span>
                    <span className="material-icons text-[14px]">battery_full</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="pt-12 px-5 pb-20 h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Header Image */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 shrink-0 relative">
                    {/* fallback background just in case img doesn't load */}
                    <div className="absolute inset-0 bg-slate-800"></div>
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86lXJPz2HYaOvIB5gi98mdntMf0m72ZenfanM1D6xzw6bKw36jFwi-i-Ycq9g17rUI4iu8HJH7G752bF7tDXtC9GOxwtH3344xHqTP7J9aiR74pzauu2i_dy-a2KiJRb70mbp4vS-zGqDCdR-T2xs9PWL7PP5esoRZ2_6rf5DCvYh_noMLG-wr1H2u4733X627VRyWOoSondrpgg45C6TTz12bvp-kxlJGHxl4sxTdg9NeI7ERQLpH1VBbDIJBZGdkPfJvV4kPZjm" 
                      alt="Workout" 
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>

                  {/* Main Card */}
                  <div className="flex flex-col gap-6 mb-6">
                    {plans.map((plan, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="text-xl font-bold text-white">{plan.text}</h3>
                          <span className="material-icons text-green-500 text-2xl font-bold font-sans">+</span>
                        </div>
                        <div className="border border-white/10 p-3 rounded-2xl border-dashed w-max">
                          <p className="text-[11px] text-white font-semibold">{plan.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Weekly Activity</h3>
                    <div className="flex justify-between items-end h-32 px-4 py-4 bg-white/5 rounded-2xl">
                      {week.map((day, i) => (
                        <div key={day} className="flex flex-col items-center gap-3">
                          <div className="w-5 rounded-full bg-white/10 h-16"></div>
                          <span className="text-[10px] text-slate-400 font-medium">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                    <div className="flex gap-3">
                      <div className="flex-1 bg-white/5 p-4 rounded-2xl">
                        <div className="flex justify-between items-start mb-1">
                          <div className="text-white font-bold text-2xl">0 Days</div>
                          <span className="material-icons text-green-400 text-base">local_fire_department</span>
                        </div>
                        <div className="text-slate-400 text-xs font-medium mt-1">Current Streak</div>
                      </div>
                      <div className="flex-1 bg-white/5 p-4 rounded-2xl">
                        <div className="flex justify-between items-start mb-1">
                          <div className="text-white font-bold text-2xl">0</div>
                          <span className="material-icons text-green-400 text-base">fitness_center</span>
                        </div>
                        <div className="text-slate-400 text-xs font-medium mt-1">Workouts Done</div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full bg-[#112217] backdrop-blur-lg border-t border-white py-4 px-6 flex justify-between items-center z-20">
                  <div className="flex flex-col items-center gap-1 text-transparent bg-green-500 bg-clip-text">
                    <span className="material-icons">dashboard</span>
                    <span className="text-[10px]">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">fitness_center</span>
                    <span className="text-[10px]">Workouts</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">leaderboard</span>
                    <span className="text-[10px]">Progress</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">settings</span>
                    <span className="text-[10px]">Profile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-30 -right-12 lg:right-0 bg-surface-dark p-4 rounded-2xl shadow-xl border border-slate-800 animate-bounce delay-1000 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-orange-900/30 p-2 rounded-full text-orange-500">
                  <span className="material-icons text-xl">local_fire_department</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Streak</div>
                  <div className="text-sm font-bold text-white">12 Days 🔥</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;