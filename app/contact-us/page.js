"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.message.trim()) errors.message = 'Message is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FiPhone className="text-2xl" />,
            title: "Phone",
            info: "+1 (234) 567-8900",
            delay: 0.1
        },
        {
            icon: <FiMail className="text-2xl" />,
            title: "Email",
            info: "info@careergradglobal.com",
            delay: 0.2
        },
        {
            icon: <FiMapPin className="text-2xl" />,
            title: "Office",
            info: "123 Education Avenue, New York, NY 10001",
            delay: 0.3
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20">
            <div className="container mx-auto px-4">
                {/* Page heading with animation */}
                <div ref={ref} className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.h1>

                    <motion.div
                        className="h-1 w-24 bg-indigo-600 mx-auto mb-6"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Have questions or ready to start your journey? We're here to help with your overseas education needs.
                    </motion.p>
                </div>

                {/* Contact information cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.info}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Form and Map section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                            <h2 className="text-2xl font-bold">Send Us a Message</h2>
                            <p className="opacity-80">We'll get back to you as soon as possible</p>
                        </div>

                        <div className="p-8">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-500 mb-6">
                                        <FiCheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-8">Your message has been sent successfully. We'll get back to you soon.</p>
                                    <motion.button
                                        onClick={() => setIsSubmitted(false)}
                                        className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <motion.div
                                                whileFocus={{ scale: 1.01 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'
                                                        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                                                />
                                            </motion.div>
                                            {formErrors.name && (
                                                <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <motion.div
                                                whileFocus={{ scale: 1.01 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                                        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                                                />
                                            </motion.div>
                                            {formErrors.email && (
                                                <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                            Phone Number (Optional)
                                        </label>
                                        <motion.div
                                            whileFocus={{ scale: 1.01 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                            />
                                        </motion.div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div
                                            whileFocus={{ scale: 1.01 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'
                                                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                                            />
                                        </motion.div>
                                        {formErrors.subject && (
                                            <p className="mt-1 text-red-500 text-sm">{formErrors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div
                                            whileFocus={{ scale: 1.01 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'
                                                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                                            ></textarea>
                                        </motion.div>
                                        {formErrors.message && (
                                            <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                                        )}
                                    </div>

                                    <div className="text-right">
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 float-right"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <FiSend />
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Map and office hours */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Map (placeholder) */}
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                            <div className="relative h-80 bg-gray-300">
                                {/* This would be replaced with an actual map component or iframe */}
                                <div className="absolute inset-0 bg-pattern-grid bg-opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <p>Interactive Map Would Be Here</p>
                                </div>
                            </div>
                        </div>

                        {/* Office hours */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Office Hours</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Monday - Friday</span>
                                    <span className="text-indigo-600 font-semibold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="h-px bg-gray-200"></div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Saturday</span>
                                    <span className="text-indigo-600 font-semibold">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="h-px bg-gray-200"></div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Sunday</span>
                                    <span className="text-indigo-600 font-semibold">Closed</span>
                                </div>
                            </div>

                            <div className="mt-8 bg-indigo-50 rounded-lg p-4">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Note:</span> Appointments are recommended.
                                    Walk-ins are welcome but may experience wait times.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}