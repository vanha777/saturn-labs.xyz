'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

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
      icon: <FiTwitter className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://twitter.com'
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

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-gray-600">
            Ready to transform your ideas into reality? Get in touch with us to discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            className="md:col-span-2 bg-primary/5 p-8 rounded-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-white p-3 rounded-full text-primary">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Email</h4>
                  <a href="mailto:info@saturntech.dev" className="text-gray-600 hover:text-primary transition-colors">info@saturntech.dev</a>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-white p-3 rounded-full text-primary">
                  <FiPhone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">+1 (234) 567-890</a>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-white p-3 rounded-full text-primary">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Office</h4>
                  <p className="text-gray-600">123 Tech Boulevard, San Francisco, CA 94105</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div className="mt-12 space-y-4" variants={itemVariants}>
              <h4 className="font-medium text-gray-900 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
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
            </motion.div>
            
            <motion.div 
              className="mt-10 bg-primary p-6 rounded-lg text-white"
              variants={itemVariants}
            >
              <h4 className="font-bold text-lg mb-3">Schedule a Discovery Call</h4>
              <p className="mb-4 text-white/90">Book a free 30-minute call to discuss your project requirements.</p>
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 bg-white shadow-sm rounded-xl p-8 border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Send Us a Message
            </motion.h3>
            
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-3"
                  placeholder="John Doe"
                  required
                />
              </motion.div>
              
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-3"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-3"
                    placeholder="+1 (234) 567-890"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-3"
                  placeholder="Project Inquiry"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-3"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <FiSend className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;