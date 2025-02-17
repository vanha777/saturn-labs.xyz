"use client";

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
      </div>
      {/* Center buttons with inset effect */}
      <div className="navbar-center flex gap-4 relative ">
        <div className="absolute inset-0 border-r-2 border-white/20 transform rotate-12 origin-top-right"></div>
        <div className="absolute inset-0 border-l-2 border-white/20 transform -rotate-12 origin-top-left"></div>
        <div className="relative flex gap-4 px-8 py-2 bg-black/10 backdrop-blur-sm">
          <button className="px-6 py-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/50 to-[#bc6c25]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 group-hover:shadow-[inset_0_0_8px_rgba(188,108,37,0.5)] transition-all"></div>
            <Link href="/about" className="relative text-white/90 font-medium group-hover:text-white transition-colors">About Us</Link>
          </button>
          <button className="px-6 py-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#bc6c25]/50 to-[#bc6c25]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 group-hover:shadow-[inset_0_0_8px_rgba(188,108,37,0.5)] transition-all"></div>
            <Link href="/contact" className="relative text-white/90 font-medium group-hover:text-white transition-colors">Contact Us</Link>
          </button>
        </div>
      </div>

      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;
