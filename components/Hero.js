"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
            {/* Background with gradient and overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 bg-fixed">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            </div>

            {/* Animated particle effects */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white"
                        initial={{
                            x: Math.random() * 100 - 50 + "%",
                            y: Math.random() * 100 - 50 + "%"
                        }}
                        animate={{
                            x: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%"
                            ],
                            y: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%"
                            ],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ opacity: 0.2 + Math.random() * 0.5 }}
                    />
                ))}
            </div>

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute -left-20 top-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply blur-xl opacity-30"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute -right-20 bottom-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-xl opacity-30"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <motion.div
                className="absolute left-1/3 -bottom-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply blur-xl opacity-30"
                animate={{
                    x: [0, 20, 0],
                    y: [0, 20, 0]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-0 sm:px-4 z-10 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full"
                >
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white text-lg md:text-xl font-light mb-4 tracking-wider"
                    >
                        YOUR PATHWAY TO GLOBAL EDUCATION
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        <span className="block">Career Grad</span>
                        <span className="relative">
                            Global
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            ></motion.span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
                    >
                        Guiding Your Next Step to Academic Excellence Worldwide
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="#" className="group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                            >
                                BOOK ONLINE
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: 5 }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 0.6
                                    }}
                                >
                                    <FiArrowRight />
                                </motion.span>
                            </motion.div>
                        </Link>
                        <Link href="#services">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                EXPLORE SERVICES
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        delay: 1.5,
                        duration: 1.5,
                        y: {
                            repeat: Infinity,
                            duration: 1.5
                        }
                    }}
                >
                    <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-white rounded-full mt-2"
                            animate={{ y: [0, 15, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}