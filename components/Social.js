"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

// Social media icon with animations
const SocialIcon = ({ icon, url, color, delay }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg text-${color} transition-all duration-300 hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        backgroundColor: color === 'indigo-600' ? '#4F46E5' : '#FFFFFF',
        color: color === 'indigo-600' ? '#FFFFFF' : color
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-3xl">{icon}</span>
    </motion.a>
  );
};

export default function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      url: "https://facebook.com", 
      color: "blue-600",
      delay: 0.1
    },
    { 
      icon: <FaInstagram />, 
      url: "https://instagram.com", 
      color: "pink-600",
      delay: 0.2 
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com", 
      color: "blue-400",
      delay: 0.3
    },
    { 
      icon: <FaLinkedinIn />, 
      url: "https://linkedin.com", 
      color: "blue-700",
      delay: 0.4
    },
    { 
      icon: <FaYoutube />, 
      url: "https://youtube.com", 
      color: "red-600",
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden w-full bg-gradient-to-b from-white to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-96 -left-96 w-192 h-192 rounded-full bg-indigo-100 opacity-20 -z-10"></div>
        <div className="absolute -bottom-96 -right-96 w-192 h-192 rounded-full bg-purple-100 opacity-20 -z-10"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 max-w-4xl relative z-10 w-full">
        <div ref={ref} className="text-center mb-16">
          {/* Section heading with animation */}
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Us
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-indigo-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay updated with the latest opportunities, tips, and success stories.
            Follow us on social media to join our educational community.
          </motion.p>
        </div>
        
        {/* Social icons grid with animations */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <SocialIcon 
              key={index}
              icon={social.icon}
              url={social.url}
              color={social.color}
              delay={social.delay}
            />
          ))}
        </div>
        
        {/* Newsletter signup section */}
        <motion.div 
          className="mt-20 bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative gradient background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-10 -z-10"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">Get the latest updates, tips, and opportunities delivered to your inbox</p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <motion.input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              initial={{ width: "100%", opacity: 0.8 }}
              whileFocus={{ scale: 1.01, opacity: 1 }}
              transition={{ duration: 0.2 }}
              required
            />
            
            <motion.button 
              type="submit" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
          
          <motion.p 
            className="text-xs text-gray-500 mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Career Grad Global.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}