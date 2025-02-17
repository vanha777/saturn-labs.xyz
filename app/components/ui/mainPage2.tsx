"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const MainPage2 = () => {
    const emailRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        // Simplified animation for text overlay
        tl.fromTo(
            emailRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        ).to(emailRef.current, {
            duration: 2,
            backgroundImage: "linear-gradient(45deg, #ffffff, #808080)",
            backgroundSize: "200% 200%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.to(emailRef.current, {
            duration: 3,
            text: {
                value: '"Not everyone gets the chance to make a difference, but together, we can."',
                delimiter: ""
            },
            ease: "none",
            repeat: -1,
            repeatDelay: 1
        });
    }, [isMobile]);

    return (
        <div className="relative h-screen w-full bg-black overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Text Overlay Container */}
            <div className="relative z-10 h-full flex items-center">
                <div className="w-1/2 pl-8">
                    <h1
                        ref={emailRef}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        style={{ opacity: 0 }}
                    >
                        &nbsp;
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default MainPage2;
