"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FiMapPin,
    FiMail,
    FiPhone,
    FiArrowUp
} from 'react-icons/fi';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const footerLinks = {
        quickLinks: [
            { name: 'Home', href: '/' },
            { name: 'Contact Us', href: '/contact-us' },
            { name: 'Blog', href: '/blog' },
            { name: 'Services', href: '/#services' },
            { name: 'FAQs', href: '/#faq' }
        ],
        services: [
            { name: 'Education Counselling', href: '/#services' },
            { name: 'Application Process', href: '/#services' },
            { name: 'Visa Application', href: '/#services' },
            { name: 'Scholarship Guidance', href: '/#services' },
            { name: 'Test Preparation', href: '/#services' }
        ],
        resources: [
            { name: 'University Rankings', href: '#' },
            { name: 'Country Guides', href: '#' },
            { name: 'Visa Requirements', href: '#' },
            { name: 'Scholarship Database', href: '#' },
            { name: 'Student Stories', href: '#' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms and Conditions', href: '/terms-and-conditions' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Disclaimer', href: '#' }
        ]
    };

    const staggeredContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const footerItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Main footer content */}
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: About */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Career Grad Global</h3>
                        <p className="text-gray-400 mb-6">
                            Guiding students towards academic excellence and global opportunities since 2015.
                            Your trusted partner for overseas education guidance.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="text-indigo-400 mt-1"><FiMapPin /></div>
                                <p className="text-gray-400">123 Education Avenue, New York, NY 10001</p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="text-indigo-400 mt-1"><FiPhone /></div>
                                <p className="text-gray-400">+1 (234) 567-8900</p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="text-indigo-400 mt-1"><FiMail /></div>
                                <p className="text-gray-400">info@careergradglobal.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div
                        variants={staggeredContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link, index) => (
                                <motion.li key={index} variants={footerItem}>
                                    <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Services */}
                    <motion.div
                        variants={staggeredContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <motion.li key={index} variants={footerItem}>
                                    <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Resources */}
                    <motion.div
                        variants={staggeredContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <motion.li key={index} variants={footerItem}>
                                    <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Footer Bottom - CTA, Copyright and Legal */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Back to top button */}
                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FiArrowUp size={20} />
                        </motion.button>

                        {/* Copyright */}
                        <div className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Career Grad Global - All Rights Reserved.
                        </div>

                        {/* Legal links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {footerLinks.legal.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-500 text-sm hover:text-indigo-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Credit line */}
                    <div className="text-center text-gray-600 text-xs mt-8">
                        Designed and developed with Next.js 15 and Tailwind CSS
                    </div>
                </div>
            </div>
        </footer>
    );
}