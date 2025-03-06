'use client';

import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiServer, FiLayers, FiCloud, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="h-7 w-7" />,
      title: "Custom Software Development",
      description: "We create tailor-made software solutions that address your unique business challenges and provide a competitive edge.",
      color: "blue"
    },
    {
      icon: <FiSmartphone className="h-7 w-7" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed for superior performance and exceptional user experience.",
      color: "indigo"
    },
    {
      icon: <FiServer className="h-7 w-7" />,
      title: "Web Application Development",
      description: "Modern, responsive, and scalable web apps built with the latest technologies for optimal performance.",
      color: "purple"
    },
    {
      icon: <FiLayers className="h-7 w-7" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user satisfaction and drive conversion through data-driven design.",
      color: "pink"
    },
    {
      icon: <FiCloud className="h-7 w-7" />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to modernize your IT operations and reduce costs.",
      color: "teal"
    },
    {
      icon: <FiShield className="h-7 w-7" />,
      title: "AI Implementation",
      description: "Automate manual tasks and streamline operations with custom AI solutions that save time and let you focus on growing your business.",
      color: "orange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personalized AI Automation for Businesses</h2>
          <p className="text-lg text-gray-600">
          We automate tasks, enhance user experiences, and boost data analytics with AI.
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
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            <span>Need a custom solution? Get in touch</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;