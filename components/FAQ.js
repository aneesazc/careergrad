"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const FAQItem = ({ question, answer, isOpen, toggleOpen, index }) => {
    const answerHeight = useRef(null);

    return (
        <motion.div
            className="mb-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="border border-gray-200 hover:border-indigo-200 rounded-lg overflow-hidden bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                <button
                    className="flex justify-between items-center w-full text-left p-5 focus:outline-none"
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                >
                    <motion.h3
                        className="text-lg font-medium text-gray-800"
                        animate={{ color: isOpen ? "#4F46E5" : "#1F2937" }}
                        transition={{ duration: 0.2 }}
                    >
                        {question}
                    </motion.h3>

                    <motion.div
                        animate={{
                            backgroundColor: isOpen ? "rgba(79, 70, 229, 0.1)" : "rgba(243, 244, 246, 1)",
                            rotate: isOpen ? 180 : 0
                        }}
                        transition={{
                            duration: 0.3,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-indigo-600"
                    >
                        <FiChevronDown size={18} />
                    </motion.div>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div
                                ref={answerHeight}
                                className="px-5 pb-5 text-gray-600 border-t border-gray-100"
                            >
                                <p>{answer}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const faqs = [
        {
            question: "What does an educational consultant do?",
            answer: "An educational consultant provides expert guidance on educational planning, school/college selection, application strategies, and navigating admissions processes. They help students identify the best educational opportunities that align with their goals, abilities, and interests, while providing personalized support throughout the entire application journey."
        },
        {
            question: "When should we meet with you?",
            answer: "The ideal time to meet is at least 12-18 months before your intended start date. This gives us enough time to create a comprehensive strategy, work on applications, prepare for standardized tests, and meet all deadlines. However, we can still provide valuable assistance even if you're on a tighter timeline. Contact us to discuss your specific situation."
        },
        {
            question: "Can you guarantee that my child will get into their first choice school?",
            answer: "While we cannot guarantee acceptance to any specific institution, we significantly enhance your chances by leveraging our expertise, developing compelling applications, and highlighting your strengths. Our track record demonstrates success in helping students gain admission to competitive programs. We focus on finding the best fit for each student and preparing applications that showcase their unique qualities."
        },
        {
            question: "What makes your service different from other educational consultants?",
            answer: "Our approach combines deep expertise in global education systems with personalized attention to each student&apos;s unique needs and goals. We maintain direct relationships with admissions officers at top institutions worldwide, provide honest assessment of chances, and offer comprehensive support from initial consultation through enrollment. Our counselors undergo continuous professional development to stay current with changing admissions trends."
        },
        {
            question: "How do you help with scholarship applications?",
            answer: "We provide comprehensive scholarship assistance including identifying scholarship opportunities matched to your profile, guidance on application requirements, essay review and editing, interview preparation, and strategic advice on positioning yourself as a strong candidate. Our counselors have extensive experience with major global scholarship programs and can help you navigate complex application processes."
        },
        {
            question: "What are your fees and payment structure?",
            answer: "Our fees vary based on the level of service and support required. We offer packages ranging from hourly consultations to comprehensive application support. We begin with a complimentary initial consultation to understand your needs before recommending the appropriate service level. Detailed fee information will be provided during this consultation, and we offer flexible payment plans to accommodate different budgets."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative bg-gradient-to-b from-indigo-50 to-white" id="faq">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 -z-10 blur-3xl"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                {/* Section heading with animation */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FiHelpCircle size={28} />
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <motion.div
                        className="h-1 w-24 bg-indigo-600 mx-auto mb-6"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="text-gray-600 mb-12"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Find answers to common questions about our services and the application process.
                        If you can&apos;t find what you&apos;re looking for, please contact us.
                    </motion.p>
                </div>

                {/* FAQ accordion */}
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggleOpen={() => toggleFAQ(index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-gray-600 mb-6">
                        Still have questions? We&apos;re here to help.
                    </p>
                    <motion.a
                        href="/contact-us"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}