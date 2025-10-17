import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <motion.section 
    id={id} 
    className={`py-20 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        {title}
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
      </h2>
      {children}
    </div>
  </motion.section>
);

export default Section;