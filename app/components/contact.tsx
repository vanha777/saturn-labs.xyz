'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiX, FiGithub, FiLinkedin, FiCode, FiCpu, FiLayers, FiDatabase, FiShield, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    {
      icon: <FiX className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://x.com/patricksaturnor'
    },
    {
      icon: <FiGithub className="h-5 w-5" />,
      name: 'GitHub',
      url: 'https://github.com'
    },
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    }
  ];

  const services = [
    {
      icon: <FiCode className="h-8 w-8" />,
      title: "Metaloot.app",
      description: "Play to earn platform, launch game and receive rewards",
      features: ["Next.js", "TypeScript", "Solana Blockchain", "Shuttle.rs"],
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/fire.jpg",
      imageAlt: "Metaloot.app Project Showcase",
      url: "https://metaloot.app"
    },
    {
      icon: <FiCpu className="h-8 w-8" />,
      title: "Metaloot.dev",
      description: "Use APIs to integrate your games with blockchain",
      features: ["Smart Contracts", "DeFi", "NFTs", "Web3 Integration"],
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/banner.png",
      imageAlt: "Metaloot.dev Project Showcase",
      url: "https://metaloot.dev"
    },
    {
      icon: <FiLayers className="h-8 w-8" />,
      title: "Biztouch",
      description: "Custom engrave business cards with apps in order to exchange business information",
      features: ["NFC", "Apple-pass", "Google-pass"],
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/biztouch.jpeg",
      imageAlt: "Biztouch Project Showcase",
      url: "https://biz-touch.vercel.app/"
    },
    {
      icon: <FiDatabase className="h-8 w-8" />,
      title: "ShipNext",
      description: "Build any mobile app from existing website",
      features: ["Rust", "Cli", "Developer-tools"],
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/shipnext.jpeg",
      imageAlt: "ShipNext Project Showcase",
      url: "https://shipnext-fast.vercel.app/"
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: "Moosy",
      description: "A booking system for small nail & salons business (On-Going)",
      features: ["Booking system", "Next.js", "Supabase", "Serverless-infrastructure"],
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/moosy.jpeg",
      imageAlt: "Moosy Project Showcase",
      url: "https://github.com/vanha777/moody/tree/mobile"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We've Built</h2>
          <p className="text-lg text-gray-600">
            Explore our portfolio of innovative projects and solutions
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group block"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-primary/5 rounded-xl p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Contact us to discuss your project requirements</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:devsaturnlabs@gmail.com"
                className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FiMail className="mr-2" />
                Email Us
              </a>
              <a
                href="https://calendly.com/vanha101096/30min"
                className="inline-flex items-center bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book a Call
              </a>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-sm transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;