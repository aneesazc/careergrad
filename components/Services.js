"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiFileText, FiGlobe } from 'react-icons/fi';

// Enhanced service card with animations
const ServiceCard = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative"
    >
      <div className="group">
        <motion.div 
          className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 z-10 h-full flex flex-col"
          whileHover={{ y: -10 }}
        >
          {/* Animated background gradient on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            layoutId={`gradient-bg-${index}`}
          />
          
          {/* Icon with animation */}
          <motion.div 
            className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <span className="text-3xl">{icon}</span>
          </motion.div>
          
          {/* Title with underline animation */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
            <motion.div 
              className="h-1 w-10 bg-indigo-500 rounded"
              whileHover={{ width: 60 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Description */}
          <p className="text-gray-600 flex-grow">{description}</p>
          
          {/* Animated button */}
          <motion.button
            className="mt-6 text-indigo-600 font-medium flex items-center gap-1 group-hover:text-indigo-800 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn More 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-indigo-100 rounded-xl -z-10 opacity-50" />
    </motion.div>
  );
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const services = [
    {
      icon: <FiBook />,
      title: "Education Counselling",
      description: "We offer a complimentary one-hour service to go over the application process with the student and their family. After this initial consultation, we follow up with a personalized strategy tailored to your educational goals."
    },
    {
      icon: <FiFileText />,
      title: "Application Process",
      description: "Our experts are available on an hourly basis to guide families through finding the right college, crafting compelling applications, preparing for standardized testing, and navigating the entire admissions journey."
    },
    {
      icon: <FiGlobe />,
      title: "Visa Application",
      description: "We provide a comprehensive service that includes evaluating academic records, establishing achievable goals, providing step-by-step visa guidance, and advocating for students throughout the application process."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden w-full" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-30 -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-30 -z-10" />
      
      <div className="container mx-auto px-4 w-full">
        <div ref={ref} className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Our Services
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive guidance to help you achieve your international education dreams
          </motion.p>
        </div>
        
        {/* Services Grid with enhanced card design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Start Your Journey Today
          </motion.button>
          
          <motion.p
            className="text-gray-600 mt-6 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Join thousands of students who have successfully launched their international education with our guidance
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}