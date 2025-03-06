"use client";

import Link from 'next/link';
import { FiTwitter, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiX } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { title: 'Services', href: '/#services' },
    { title: 'Portfolio', href: '/#work' },
    { title: 'About', href: '/#about' },
    { title: 'Contact', href: '/#contact' },
  ];
  
  const serviceLinks = [
    { title: 'Web Development', href: '/#services' },
    { title: 'Mobile Apps', href: '/#services' },
    { title: 'UI/UX Design', href: '/#services' },
    { title: 'Cloud Solutions', href: '/#services' },
  ];

  const legalLinks = [
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-primary">Saturn</span>Tech
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We design and develop custom software solutions that help businesses solve complex problems and achieve their goals.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://x.com/patricksaturnor" icon={<FiX />} label="Twitter" />
              <SocialLink href="https://www.linkedin.com/in/copycodervanjiro/" icon={<FiLinkedin />} label="LinkedIn" />
              <SocialLink href="mailto:devsaturnlabs@gmail.com" icon={<FiMail />} label="Email" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-3 rounded-r-md flex items-center justify-center transition-colors"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SaturnTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;