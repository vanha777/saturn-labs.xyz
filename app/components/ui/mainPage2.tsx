"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const MainHero = () => {
    return (
        <div className="relative min-h-screen w-full bg-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue-100/50 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 pt-32 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                            Transforming Ideas
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Elevate Your <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Digital Presence</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-600 mb-10 max-w-xl"
                    >
                        We're passionate about building awesome digital experiences - from sleek websites and powerful apps to smart automation tools that make life easier. Let's create something amazing together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <a href="#contact" className="btn bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                            Get a Free Consultation
                            <FiArrowRight className="ml-2" />
                        </a>
                        <a href="#services" className="btn bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                            View Our Services
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">10+</div>
                            <div className="text-sm text-gray-500">Projects Completed</div>
                        </div>
                        {/* <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">50+</div>
                            <div className="text-sm text-gray-500">Team Members</div>
                        </div> */}
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">10+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">99%</div>
                            <div className="text-sm text-gray-500">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </div>

                <div className="hidden md:block w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative z-20 bg-white p-2 rounded-2xl shadow-2xl">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                                <img
                                    src="/ourStory2.jpeg"
                                    alt="Our Story"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-16 h-16 bg-accent rounded-lg -rotate-12 shadow-lg"></div>
                        <div className="absolute -bottom-5 right-10 transform w-24 h-24 bg-primary/10 rounded-full"></div>
                        <div className="absolute top-10 right-10 w-10 h-10 bg-primary/20 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MainHero;