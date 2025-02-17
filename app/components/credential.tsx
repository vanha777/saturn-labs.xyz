'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Credential = () => {
  const [isClient, setIsClient] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="py-16 pb-60"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why choose a venture studio?</h2>
            <p className="text-xl">You can go with a venture studio like us, or you can hire employees. If you hire, you have to retain, train, and build a team. Whereas with a venture studio, you get immediate access to a world class team ready to build, launch, and scale your project. We know how to work together, we know the technology, and we know the market. And chances are, we're already working on something similar.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-base-200 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Build for equity</h3>
              <p>Let us build your project in exchange for equity. We're not looking for a quick exit. We're looking for a long term relationship. We want to be your partner in building a better future. If you're building something amazing, we want to hear from you!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-base-200 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Build for cash</h3>
              <p>We'll take your project on as a contract. We build your project and you pay us (crypto or fiat). Simple as that. The relationship will last through building, launching, scaling, maintaining, and ultimately, all the way to the moon. Hopefully.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/Saturn-Foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Credential;
