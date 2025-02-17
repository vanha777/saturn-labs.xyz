'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"
import Navbar from "../components/ui/navbar"

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const contacts = [
        {
            icon: <FaXTwitter className="text-4xl" />,
            label: 'X',
            href: 'https://x.com/TheSaturnFund',
        },
        {
            icon: <FaDiscord className="text-4xl" />,
            label: 'Discord',
            href: 'https://discord.gg/U7WJBdCtjv',
        },
        {
            icon: <FaEnvelope className="text-4xl" />,
            label: 'Email',
            href: 'mailto:vanha101096@gmail.com',
        },
    ]

    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#bc6c25] rounded-full filter blur-[120px] opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#9945FF] rounded-full filter blur-[120px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#bc6c25] rounded-full filter blur-[150px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/85" />
            </div>

            <Navbar />

            <motion.div
                className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold my-32 mb-8">
                        <span className="text-white">Get in </span>
                        <span className="bg-gradient-to-r from-[#0CC0DF] to-[#bc6c25] bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-3 mt-16"
                    variants={containerVariants}
                >
                    {contacts.map((contact, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Link
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center p-8 bg-black/50 rounded-xl backdrop-blur-sm hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0CC0DF]/20 group"
                            >
                                <div className="text-[#0CC0DF] group-hover:text-[#bc6c25] transition-colors duration-300">
                                    {contact.icon}
                                </div>
                                <span className="mt-4 text-xl font-medium text-white group-hover:text-[#0CC0DF] transition-colors">
                                    {contact.label}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
