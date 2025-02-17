'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Consumer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    let sponsors = [
        { name: "", logo: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/DanAi.png?t=2024-09-25T15%3A25%3A37.628Z" },
        { name: "", logo: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/biztouch.png?t=2024-09-25T15%3A25%3A46.550Z" },
        { name: "", logo: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/faceBook.svg?t=2024-09-25T15%3A25%3A54.850Z" },
        { name: "", logo: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/instargram.svg?t=2024-09-25T15%3A26%3A01.143Z" },
        { name: "", logo: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/tiktok.svg?t=2024-09-25T15%3A26%3A07.198Z" }
    ];

    return (
        <div className="container mx-auto p-4 md:p-20 bg-black/10 backdrop-blur-sm rounded-2xl text-gray-800 pb-20 md:pb-60">
            {/* First row: 2 columns on desktop, 1 column on mobile */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 mb-4`}>
                <div className="bg-transparent p-4 col-span-2 rounded-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#bc6c25]">Saturn Labs</h2>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Build what matters</h2>
                    <p className="text-base md:text-lg text-gray-600">Pitch us your idea—if it’s great, we’ll help you bring it to life.</p>
                </div>
                <div className="card border-2 border-[#bc6c25] shadow-md rounded-2xl">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <p className="text-3xl md:text-5xl font-bold text-[#bc6c25]">Saas</p>
                        <p className="text-sm md:text-2sm mt-2 text-gray-600">Software that solve real world problems.</p>
                    </div>
                </div>
            </div>

            {/* Second row: 3 columns on desktop, 1 column on mobile */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 mb-4`}>
                <div className="card bg-[#bc6c25] text-white shadow-md rounded-2xl">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <p className="text-3xl md:text-5xl font-bold">Blockchain</p>
                        <p className="text-sm md:text-2sm mt-2">Using Blockchain to bring transparency and trust to the world.</p>
                    </div>
                </div>
                <div className="card border-2 border-[#bc6c25] shadow-md rounded-2xl">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <p className="text-3xl md:text-5xl font-bold text-[#bc6c25]">DePin</p>
                        <p className="text-sm md:text-2sm mt-2 text-gray-600">Change the world with Decentrailized Physical Infrastructure.</p>
                    </div>
                </div>
                <div className="cursor-pointer card bg-[#bc6c25] text-white shadow-md rounded-2xl">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <p className="text-3xl md:text-5xl font-bold">AI</p>
                        <p className="text-sm md:text-2sm mt-2">AI is the future, and we are investing in it. LLM Wrappers, AI Agents, AI Infrastructure, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consumer;
