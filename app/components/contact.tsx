'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import processCommand from '../ultilities/mod';

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
    // {
    //   icon: <FiGithub className="h-5 w-5" />,
    //   name: 'GitHub',
    //   url: 'https://github.com'
    // },
    // {
    //   icon: <FiLinkedin className="h-5 w-5" />,
    //   name: 'LinkedIn',
    //   url: 'https://linkedin.com'
    // }
  ];

  // Add new state for chat functionality
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      (messagesEndRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to scroll to bottom when messages change
  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  // Function to handle user message and generate response
  const handleSendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Show typing indicator
    setIsTyping(true);
    const input = inputMessage.toLowerCase();
    const response = await processCommand(input);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsTyping(false);

  };

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
                  <a href="mailto:devsaturnlabs@gmail.com" className="text-gray-600 hover:text-primary transition-colors">devsaturnlabs@gmail.com</a>
                </div>
              </motion.div>

              {/* <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-white p-3 rounded-full text-primary">
                  <FiPhone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">+1 (234) 567-890</a>
                </div>
              </motion.div> */}

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-white p-3 rounded-full text-primary">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Remote Office</h4>
                  <p className="text-gray-600">Hawthorn, Australia, VIC, 3123</p>
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
                href="https://calendly.com/vanha101096/30min"
                className="inline-flex items-center bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-3 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg rounded-xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="p-6 border-b border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-400 mr-3 animate-pulse"></span>
                AI Assistant
              </h3>
              <p className="text-gray-400 text-sm mt-1">Tell me how can we help your business</p>
            </motion.div>

            <motion.div
              className="h-96 overflow-y-auto p-6 bg-gray-800/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.isBot
                          ? 'bg-gray-700 text-white rounded-tl-none'
                          : 'bg-primary text-white rounded-tr-none'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </motion.div>

            <motion.div
              className="p-4 border-t border-gray-700"
              variants={itemVariants}
            >
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Type your message here..."
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white p-3 rounded-r-lg transition-colors"
                >
                  <FiSend className="h-5 w-5" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                For detailed inquiries, consider booking a discovery call
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;