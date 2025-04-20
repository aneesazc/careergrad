"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
                : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="relative z-10">
                    <motion.div
                        className={`text-2xl font-bold transition-colors ${scrolled ? 'text-indigo-700' : 'text-white'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            Career Grad Global
                        </motion.span>
                    </motion.div>
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`focus:outline-none ${scrolled ? 'text-indigo-700' : 'text-white'}`}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 180, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiX size={28} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -180, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiMenu size={28} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {['HOME', 'CONTACT US', 'BLOG'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        >
                            <Link
                                href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`relative font-medium px-5 py-2 transition-all ${scrolled ? 'text-gray-700 hover:text-indigo-700' : 'text-gray-100 hover:text-white'
                                    }`}
                            >
                                <motion.span
                                    className="relative z-10"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.span>
                                <motion.span
                                    className="absolute inset-0 rounded-md -z-10"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileHover={{
                                        scale: 1,
                                        opacity: 1,
                                        backgroundColor: scrolled ? 'rgba(238, 242, 255, 0.7)' : 'rgba(255, 255, 255, 0.1)'
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSehIuDF5kuiM0rjvELIWha-czzpV9rzZf-kwhi0PZPA1t0-oA/viewform" target='_blank'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`font-medium px-6 py-2 rounded-full shadow-lg transition-all ${scrolled
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/30'
                                    : 'bg-white text-indigo-600 hover:bg-gray-100'
                                    }`}
                            >
                                BOOK ONLINE
                            </motion.button>
                        </Link>
                    </motion.div>
                </nav>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-indigo-900 to-purple-900 backdrop-blur-md"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="container mx-auto px-4 py-5">
                            <div className="flex flex-col space-y-4 py-3">
                                {['HOME', 'CONTACT US', 'BLOG'].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="font-medium text-white py-3 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                    className="pt-2"
                                >
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSehIuDF5kuiM0rjvELIWha-czzpV9rzZf-kwhi0PZPA1t0-oA/viewform"
                                        onClick={() => setIsMenuOpen(false)}
                                        target='_blank'
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white text-indigo-700 font-medium px-6 py-3 rounded-md w-full hover:bg-gray-100 transition-colors"
                                        >
                                            BOOK ONLINE
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}