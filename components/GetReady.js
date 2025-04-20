"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
    FiBarChart2,
    FiGlobe,
    FiAward,
    FiUsers
} from 'react-icons/fi';

// Animated stat item
const StatItem = ({ number, label, icon, delay }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <div className="text-indigo-600 mb-3 text-3xl">
                {icon}
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className="text-3xl font-bold text-gray-800 mb-1"
            >
                {number}
            </motion.div>
            <div className="text-gray-600">{label}</div>
        </motion.div>
    );
};

// Feature item with hover animation
const FeatureItem = ({ title, description, delay }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <h3 className="font-bold text-indigo-600 mb-2 text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function GetReady() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { number: "95%", label: "Success Rate", icon: <FiBarChart2 />, delay: 0.2 },
        { number: "50+", label: "Countries", icon: <FiGlobe />, delay: 0.3 },
        { number: "1000+", label: "Students", icon: <FiUsers />, delay: 0.4 },
        { number: "200+", label: "Universities", icon: <FiAward />, delay: 0.5 }
    ];

    const features = [
        {
            title: "Expert Guidance",
            description: "Personalized advice for your educational journey from seasoned counselors.",
            delay: 0.6
        },
        {
            title: "Global Opportunities",
            description: "Access to top-ranked universities worldwide with tailored program matching.",
            delay: 0.7
        },
        {
            title: "Visa Support",
            description: "Complete assistance with visa applications and preparation for interviews.",
            delay: 0.8
        },
        {
            title: "Scholarship Assistance",
            description: "Help finding and applying for financial aid and scholarship opportunities.",
            delay: 0.9
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
            {/* Background decorator elements */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/3 right-0 w-48 h-48 bg-purple-200 rounded-full opacity-40 blur-2xl"></div>

            <div className="container mx-auto px-4">
                {/* Section heading with animation */}
                <div ref={ref} className="text-center mb-16">
                    <motion.span
                        className="inline-block text-indigo-600 font-semibold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        YOUR FUTURE AWAITS
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Get Ready
                    </motion.h2>

                    <motion.div
                        className="h-1 w-24 bg-indigo-600 mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Dream big. Study abroad. Achieve more. That&apos;s what CareerGrad Global can help you do.
                        We are your one-stop solution for overseas education guidance.
                    </motion.p>
                </div>

                {/* Main content area with animations */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left column - Image with animated border */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="absolute -inset-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur"
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        />

                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/education.webp"
                                alt="Education Counselling"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-xl"
                            />

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -right-5 -bottom-5 bg-white px-4 py-2 rounded-lg shadow-lg text-indigo-600 font-bold"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    opacity: { delay: 0.8, duration: 0.5 },
                                    scale: { delay: 0.8, duration: 0.5 },
                                    y: {
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                Trusted by 1000+ Students
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right column - Content */}
                    <div className="lg:w-1/2">
                        {/* Animated heading */}
                        <motion.h3
                            className="text-3xl font-bold text-gray-800 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Your Pathway to Global Education
                        </motion.h3>

                        {/* Animated paragraph */}
                        <motion.p
                            className="text-gray-600 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            We provide comprehensive support throughout your international education journey,
                            from selecting the right program to securing admissions and navigating visa requirements.
                            Our expert team will be with you every step of the way.
                        </motion.p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    delay={feature.delay}
                                />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <motion.button
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Schedule a Free Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StatItem
                                key={index}
                                number={stat.number}
                                label={stat.label}
                                icon={stat.icon}
                                delay={stat.delay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}