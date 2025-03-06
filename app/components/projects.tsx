'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const showcaseProjects = [
    {
      title: "Account Abstraction",
      description: "Developed an innovative account abstraction solution using Base's modular architecture, enabling seamless wallet interactions and gas-less transactions. Won Base sponsorship prize for best implementation.",
      image: "/showcase1.jpeg",
      link: "https://ethglobal.com/showcase/vanderlinde-bwgz6",
      tags: ["Base", "Solidity", "Account Abstraction"]
    },
    {
      title: "A First-Ever UBI On-Chain",
      description: "We're taking a bold step to recreate a Universal Basic Income (UBI) experiment in New York, this time on the blockchain to ensure transparency, trust, and guaranteed distribution.",
      image: "/showcase2.jpeg",
      link: "https://ethglobal.com/showcase/saturn-foundation-4vzhb",
      tags: ["Worldcoin", "Solidity", "UBI"]
    },
    {
      title: "A Groundbreaking Gaming Universe",
      description: "We provide game developers with a powerful tool to transform in-game items into real digital assets registered on the blockchain, offering players 100% ownership and the ability to withdraw items seamlessly.",
      image: "/showcase3.jpeg",
      link: "https://ethglobal.com/showcase/metaloot-x5810",
      tags: ["Solana", "NFT", "Games"]
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards Winning</h2>
          <p className="text-lg text-gray-600">
            Explore our recent achievements in technology hackathons, showcasing our technical expertise and innovative problem-solving skills.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} className="bg-white text-primary h-12 w-12 rounded-full flex items-center justify-center">
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <span>Ready to discuss your project?</span>
            <FiExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;