'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiLinkedin, FiMail, FiArrowUpRight, FiX } from 'react-icons/fi';

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
      role: "Product Egnineer",
      bio: "Product strategist with expertise in user experience and market analysis.",
      image: "/founder11.jpeg",
      linkedin: "https://www.linkedin.com/in/copycodervanjiro/",
      email: "vanha101096@gmail.com",
      x: "https://x.com/patricksaturnor"
    },
    {
      name: "Roman Lobanov",
      role: "Chief Technology Officer",
      bio: "Over 10 years experience building enterprise software solutions. Expert in cloud architecture and blockchain technology.",
      image: "/founder2.jpeg",
      linkedin: "https://www.linkedin.com/in/roman-lobanov-b8122198/",
      email: "complexia701@gmail.com",
      x: "https://x.com/ComplexiaSC"
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Driving Digital Transformation</h2>
          <p className="text-lg text-gray-600">
            At SaturnTech, we combine technical expertise with business acumen to deliver software solutions that drive measurable results.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-70"></div>
              {/* Replace with actual company image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Our Story</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Legacy of Innovation</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2015, SaturnTech began with a simple mission: to create software that makes a difference. 
              Our founders recognized that many organizations struggled to find development partners who truly understood
              their business goals, not just technical requirements.
            </p>
            
            <p className="text-gray-600 mb-6">
              Today, we're proud to have grown into a full-service software development agency with over 50 experts across
              design, development, and strategy. We've delivered 200+ successful projects for clients ranging from startups to enterprise organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p className="text-gray-700 font-medium">Discovery</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <p className="text-gray-700 font-medium">Strategy</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <p className="text-gray-700 font-medium">Development</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <p className="text-gray-700 font-medium">Launch</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise from top tech companies and startups, united by a passion for building exceptional software.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-1/3">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex items-center space-x-4">
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <FiX className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <FiMail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <FiLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <span>Join Our Team</span>
            <FiArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}