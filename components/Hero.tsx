import React from 'react';
import { analytics } from '../services/firebaseService';

interface StoreButtonProps {
  platform: 'ios' | 'android';
  onClick: () => void;
}

const StoreButton: React.FC<StoreButtonProps> = ({ platform, onClick }) => {
  const isIOS = platform === 'ios';

  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-colors duration-200 w-full sm:w-auto min-w-45 cursor-pointer ${
        isIOS ? 'bg-white text-slate-900 hover:bg-gray-300' : 'bg-transparent border border-white/30 text-white hover:bg-white/10'
      }`}
    >
      <span className={`material-icons text-3xl ${!isIOS ? 'text-gradient bg-green-500' : ''}`}>
        {isIOS ? 'apple' : 'android'}
      </span>
      <div className="text-left">
        <div className={`text-[10px] uppercase font-bold ${isIOS ? 'text-slate-500' : 'text-slate-400'}`}>
          {isIOS ? 'Download on the' : 'Get it on'}
        </div>
        <div className="text-lg font-bold leading-none">
          {isIOS ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </button>
  );
};

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

  type Platform = 'ios' | 'android';

  const STORE_URLS: Record<Platform, string> = {
    ios: APP_STORE_URL,
    android: GOOGLE_PLAY_URL,
  };

  const handleDownload = (platform?: Platform) => {
    analytics.logEvent('download_click', { platform });
    const device = platform ?? (detectDevice() as Platform);
    const targetUrl = STORE_URLS[device] || GOOGLE_PLAY_URL;

    window.open(targetUrl, '_blank');
  }

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
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleDownload()}
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <StoreButton platform="ios" onClick={() => handleDownload('ios')} />
                <StoreButton platform="android" onClick={() => handleDownload('android')} />
              </div>

            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              {/* <div className="flex items-center gap-2">
                <span className="material-icons text-gradient bg-green-500 text-xl">check_circle</span>
                <span>1,000+ Downloads</span>
              </div> */}
              <div className="flex items-center gap-2">
                <span className="material-icons text-gradient bg-green-500 text-xl">star</span>
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 relative">
            <div className="relative w-70 sm:w-[320px] h-145 sm:h-160 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl shadow-slate-900/50 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-background-dark relative">
                
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
                <div className="pt-12 px-6 pb-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider">Good Morning</p>
                      <h3 className="text-white font-bold text-lg">Alex Johnson</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-600">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdYLxigtBVKg7LMzzT4T5c7uvHetc1jvZBdbUh4W7ShHyU5T4AMxBwfJr2kAtKS0t93byQw6Wx3qSPr3WW-vlK6VcyWLhWJuZDEszdDYIb2prlkIqC5xGiHZuLs1j7aJ8Q1oKx5UrS5iFrnEj1xwjiIMSaJLlsQok0tayf1uflRWvF7vRHys7LYDBprpLGiOZP_9GFBdjdN589fIyGzAmNU22Ynjrpej1JQq_W1dZelfH9tXg8m5cjlogbTix00pVgEepfli01axNm" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Main Card */}
                  <div className="mx-0 bg-surface-dark/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-lg relative overflow-hidden group mb-4">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="material-icons text-6xl text-gradient bg-sixfit">fitness_center</span>
                    </div>
                    <div className="mb-2">
                      <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full">Active Challenge</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">5-Minute Plank</h2>
                    <div className="text-4xl font-extrabold text-white mb-2">2:30 <span className="text-sm font-normal text-slate-500">min</span></div>
                    <p className="text-gradient bg-green-500 text-sm font-medium flex items-center gap-1 mb-6">
                      <span className="material-icons text-sm">trending_up</span>
                      Goal: 100 Reps (+15%)
                    </p>
                    
                    {/* Chart */}
                    <div className="h-24 w-full flex items-end justify-between gap-1">
                      <div className="w-full bg-slate-700 rounded-t-lg h-[40%]"></div>
                      <div className="w-full bg-slate-700 rounded-t-lg h-[60%]"></div>
                      <div className="w-full bg-slate-700 rounded-t-lg h-[30%]"></div>
                      <div className="w-full bg-slate-700 rounded-t-lg h-[80%]"></div>
                      <div className="w-full bg-green-500 rounded-t-lg h-[65%] relative group-hover:scale-105 transition-transform origin-bottom">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow">Today</div>
                      </div>
                      <div className="w-full bg-slate-700 rounded-t-lg h-[45%]"></div>
                      <div className="w-full bg-slate-700 rounded-t-lg h-[55%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-1">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                      <div className="text-slate-400 text-xs mb-1">Calories</div>
                      <div className="text-white font-bold text-lg">480</div>
                    </div>
                    <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                      <div className="text-slate-400 text-xs mb-1">Heart Rate</div>
                      <div className="text-white font-bold text-lg">112 <span className="text-xs font-normal text-slate-500">bpm</span></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-white/5 py-4 px-6 flex justify-between items-center z-20">
                  <div className="flex flex-col items-center gap-1 text-transparent bg-green-500 bg-clip-text">
                    <span className="material-icons">home</span>
                    <span className="text-[10px]">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">bar_chart</span>
                    <span className="text-[10px]">Stats</span>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full -mt-8 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-green-500/40 text-white cursor-pointer hover:scale-110 transition-transform">
                    <span className="material-icons">add</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">emoji_events</span>
                    <span className="text-[10px]">Goals</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <span className="material-icons">person</span>
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