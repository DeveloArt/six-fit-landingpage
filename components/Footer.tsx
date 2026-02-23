import React from 'react';
import { Link } from 'react-router-dom';
import {SiFacebook, SiLinkedin, SiX} from 'react-icons/si';

const Footer: React.FC = () => {
    return (
    <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/imgs/logo.png" alt="Logo" className="w-15 h-15" />
          </div>
          
          {/* Links */}
          <div className="flex gap-8 text-sm text-slate-400">
            <Link to="/privacy-policy" className="hover:text-green-500 hover:bg-clip-text transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-green-500 hover:bg-clip-text transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-500 hover:bg-clip-text transition-colors">Support</a>
          </div>
          
          {/* Socials */}
          {/* 
          <div className="flex gap-4">
            {[SiX, SiFacebook, SiLinkedin].map((SocialIcon, i) => (
              <a 
                key={i} 
                href={i==0 ? 'https://x.com' : i==1 ? 'https://www.facebook.com' : 'https://www.linkedin.com'}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sixfit hover:text-white transition-all"
              >
                <SocialIcon size={20}/>
              </a>
            ))}
          </div>
          */}
        </div>
        
        <div className="text-center text-xs text-slate-400 border-t border-slate-800 pt-8">
          &copy; 2026 Six Fit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;