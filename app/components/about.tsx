'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/ui/footer'
import Navbar from "../components/ui/navbar";

export default function About() {
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

  const teamMembers = [
    {
      name: "Patrick Ha",
      role: "Saturnors",
      image: "/founder11.jpeg",
      linkedin: "https://x.com/patricksaturnor",
      email: "vanha101096@gmail.com"
    },
    {
      name: "Roman Lobanov",
      role: "Saturnors",
      image: "/founder2.jpeg",
      linkedin: "https://x.com/ComplexiaSC",
      email: "complexia701@gmail.com"
    }
  ]

  const showcaseProjects = [
    {
      title: "EthGlobal Hackathon - Sydney - 05/2024",
      description: "PoolPrize (WorldCoin), Best use of 4337 Account Abstraction (Base) prize from EthGlobal 05/2024 in Sydney.",
      image: "/showcase1.jpeg",
      link: "https://ethglobal.com/showcase/vanderlinde-bwgz6",
    },
    {
      title: "EthGlobal Hackathon - Singapore - 09/2024",
      description: "PoolPrize (WorldCoin) prize from EthGlobal 09/2024 in Singapore.",
      image: "/showcase2.jpeg",
      link: "https://ethglobal.com/showcase/saturn-foundation-4vzhb",
    },
    {
      title: "EthGlobal Hackathon - Bangkok - 11/2024",
      description: "Finalist prize from EthGlobal 11/2024 in Thailand.",
      image: "/showcase3.jpeg",
      link: "https://ethglobal.com/showcase/metaloot-x5810",
    }
  ]

  return (

    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      {/* <div className="absolute inset-0 bg-black">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#bc6c25] rounded-full filter blur-[120px] opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#9945FF] rounded-full filter blur-[120px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#bc6c25] rounded-full filter blur-[150px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/85" />
            </div> */}

      <Navbar />

      <motion.div
        className="relative z-10 px-6 py-24 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold my-32 mb-8">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-[#0CC0DF] to-[#bc6c25] bg-clip-text text-transparent">
              Team
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="prose prose-lg prose-invert max-w-none"
        >

          <div className="my-48"></div>

          {/* Team Members Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/50 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0CC0DF]/20 group"
              >
                <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center scale-75 group-hover:scale-85 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0CC0DF] transition-colors">{member.name}</h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9945FF] hover:text-[#0CC0DF] transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Poke me
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-[#9945FF] hover:text-[#0CC0DF] transition-colors flex items-center gap-2 mt-2 group-hover:translate-x-2 duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  Email me
                </a>
              </motion.div>
            ))}
          </div>

          {/* Carousel Section using DaisyUI */}
          <motion.div variants={itemVariants} className="my-24 pt-40">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Community <span className="bg-gradient-to-r from-[#0CC0DF] to-[#bc6c25] bg-clip-text text-transparent">Milestones</span>
            </h2>

            <div className="carousel w-full">
              {showcaseProjects.map((project, index) => (
                <div
                  key={index}
                  id={`slide${index}`}
                  className="carousel-item relative w-full"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="relative w-[800px] h-[450px] mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#bc6c25] text-white rounded-lg hover:bg-[#bc6c25]/80 transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index === 0 ? showcaseProjects.length - 1 : index - 1}`}
                      className="btn btn-circle bg-[#bc6c25] border-none hover:bg-[#bc6c25]/50"
                    >❮</a>
                    <a
                      href={`#slide${index === showcaseProjects.length - 1 ? 0 : index + 1}`}
                      className="btn btn-circle bg-[#bc6c25] border-none hover:bg-[#bc6c25]/50"
                    >❯</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
              {showcaseProjects.map((_, index) => (
                <a
                  key={index}
                  href={`#slide${index}`}
                  className="btn btn-xs bg-black/50 border-none hover:bg-[#0CC0DF]/50"
                >
                  {index + 1}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="my-48"></div>

          <div className="my-48"></div>

          <div className="my-48"></div>

        </motion.div>
      </motion.div>
      {/* <Footer /> */}
    </section>


  )
}