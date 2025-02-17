"use client";

import { FaDiscord, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="btm-nav z-50 bg-black/30 backdrop-blur-sm">
            <button
                onClick={() => window.open("https://x.com/TheSaturnFund", "_blank", "noopener noreferrer")}
                className="relative overflow-hidden group bg-transparent"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/50 to-[#bc6c25]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 group-hover:shadow-[inset_0_0_8px_rgba(188,108,37,0.5)] transition-all"></div>
                <FaXTwitter className="h-8 w-8 relative text-white/90 group-hover:text-white transition-colors" />
                <span className="btm-nav-label relative text-white/90 group-hover:text-white transition-colors">Twitter</span>
            </button>
            <button
                onClick={() => window.open("https://discord.gg/U7WJBdCtjv", "_blank", "noopener noreferrer")}
                className="relative overflow-hidden group bg-transparent"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/50 to-[#bc6c25]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 group-hover:shadow-[inset_0_0_8px_rgba(188,108,37,0.5)] transition-all"></div>
                <FaDiscord className="h-8 w-8 relative text-white/90 group-hover:text-white transition-colors" />
                <span className="btm-nav-label relative text-white/90 group-hover:text-white transition-colors">Discord</span>
            </button>
            <button 
                onClick={() => window.open("mailto:contact@saturnlabs.org", "_blank", "noopener noreferrer")}
                className="relative overflow-hidden group bg-transparent"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/50 to-[#bc6c25]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 group-hover:shadow-[inset_0_0_8px_rgba(188,108,37,0.5)] transition-all"></div>
                <FaEnvelope className="h-8 w-8 relative text-white/90 group-hover:text-white transition-colors" />
                <span className="btm-nav-label relative text-white/90 group-hover:text-white transition-colors">Email</span>
            </button>
        </div>
    )
}

export default Footer
