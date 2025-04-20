// "use client";

// import { useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, useInView } from 'framer-motion';
// import { FiSearch, FiCalendar, FiClock, FiUser, FiArrowRight, FiTag } from 'react-icons/fi';

// // Sample blog data
// const blogPosts = [
//     {
//         id: 1,
//         title: "Top 10 Universities for International Students in 2025",
//         excerpt: "Discover the most international student-friendly universities around the world with excellent programs and support systems.",
//         date: "April 10, 2025",
//         author: "Sarah Johnson",
//         readTime: "5 min read",
//         imagePath: "/images/education.jpg",
//         category: "University Guide"
//     },
//     {
//         id: 2,
//         title: "How to Prepare for Your Student Visa Interview",
//         excerpt: "Essential tips and strategies to help you ace your student visa interview and increase your chances of approval.",
//         date: "March 25, 2025",
//         author: "Michael Chen",
//         readTime: "4 min read",
//         imagePath: "/images/visa.jpg",
//         category: "Visa Tips"
//     },
//     {
//         id: 3,
//         title: "Scholarship Opportunities for International Students",
//         excerpt: "A comprehensive guide to finding and applying for scholarships to fund your international education journey.",
//         date: "March 15, 2025",
//         author: "Emma Rodriguez",
//         readTime: "6 min read",
//         imagePath: "/images/application.jpg",
//         category: "Scholarships"
//     },
//     {
//         id: 4,
//         title: "Adapting to Life in a New Country: A Student's Guide",
//         excerpt: "Practical advice on how to overcome culture shock and thrive in your new environment as an international student.",
//         date: "March 5, 2025",
//         author: "David Wilson",
//         readTime: "7 min read",
//         imagePath: "/images/education.jpg",
//         category: "Student Life"
//     },
//     {
//         id: 5,
//         title: "5 Common Mistakes to Avoid in Your College Application",
//         excerpt: "Learn about the pitfalls that many students encounter and how to ensure your application stands out for the right reasons.",
//         date: "February 20, 2025",
//         author: "Jessica Martinez",
//         readTime: "5 min read",
//         imagePath: "/images/application.jpg",
//         category: "Application Tips"
//     },
//     {
//         id: 6,
//         title: "The Impact of Studying Abroad on Career Prospects",
//         excerpt: "How an international education can significantly enhance your employability and career trajectory in today's global job market.",
//         date: "February 10, 2025",
//         author: "Robert Johnson",
//         readTime: "8 min read",
//         imagePath: "/images/education.jpg",
//         category: "Career Development"
//     }
// ];

// // Blog post card component with animations
// const BlogCard = ({ post, index }) => {
//     return (
//         <motion.article
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="group"
//         >
//             <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="relative">
//                     {/* Featured image */}
//                     <div className="relative h-60 overflow-hidden">
//                         <Image
//                             src={post.imagePath}
//                             alt={post.title}
//                             fill
//                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                         />

//                         {/* Category badge */}
//                         <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                             {post.category}
//                         </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                         {/* Meta information */}
//                         <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
//                             <div className="flex items-center">
//                                 <FiCalendar className="mr-2 text-indigo-500" />
//                                 <span>{post.date}</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <FiClock className="mr-2 text-indigo-500" />
//                                 <span>{post.readTime}</span>
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
//                             {post.title}
//                         </h2>

//                         {/* Excerpt */}
//                         <p className="text-gray-600 mb-4 line-clamp-2">
//                             {post.excerpt}
//                         </p>

//                         {/* Author and read more */}
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2">
//                                     <FiUser />
//                                 </div>
//                                 <span className="text-sm text-gray-600">{post.author}</span>
//                             </div>

//                             <motion.div
//                                 whileHover={{ x: 5 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 <Link href="#" className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
//                                     Read More
//                                     <FiArrowRight className="ml-1 group-hover:ml-2 transition-all duration-300" />
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.article>
//     );
// };

// export default function Blog() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     // Filter posts based on search query
//     const filteredPosts = searchQuery
//         ? blogPosts.filter(post =>
//             post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             post.category.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//         : blogPosts;

//     // Categories for filter buttons
//     const categories = [...new Set(blogPosts.map(post => post.category))];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20">
//             <div className="container mx-auto px-4">
//                 {/* Page heading with animation */}
//                 <div ref={ref} className="text-center mb-16 max-w-3xl mx-auto">
//                     <motion.h1
//                         className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Our Blog
//                     </motion.h1>

//                     <motion.div
//                         className="h-1 w-24 bg-indigo-600 mx-auto mb-6"
//                         initial={{ width: 0 }}
//                         animate={isInView ? { width: 96 } : { width: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                     />

//                     <motion.p
//                         className="text-xl text-gray-600 max-w-2xl mx-auto"
//                         initial={{ opacity: 0 }}
//                         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                     >
//                         Insights, tips, and guidance to help you navigate your international education journey
//                     </motion.p>
//                 </div>

//                 {/* Search and filter section */}
//                 <motion.div
//                     className="mb-12 max-w-4xl mx-auto"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                 >
//                     <div className="flex flex-col md:flex-row gap-6">
//                         {/* Search input */}
//                         <div className="relative flex-grow">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <FiSearch className="text-gray-500" />
//                             </div>
//                             <input
//                                 type="text"
//                                 placeholder="Search articles..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             />
//                         </div>

//                         {/* Category filters */}
//                         <div className="flex flex-wrap gap-2">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
//                                 onClick={() => setSearchQuery('')}
//                             >
//                                 All
//                             </motion.button>

//                             {categories.map((category, index) => (
//                                 <motion.button
//                                     key={index}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className="px-4 py-2 rounded-full bg-white text-gray-800 text-sm font-medium border border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
//                                     onClick={() => setSearchQuery(category)}
//                                 >
//                                     {category}
//                                 </motion.button>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Blog posts grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredPosts.map((post, index) => (
//                         <BlogCard key={post.id} post={post} index={index} />
//                     ))}
//                 </div>

//                 {/* Empty state when no posts match search */}
//                 {filteredPosts.length === 0 && (
//                     <motion.div
//                         className="text-center py-16"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <div className="text-indigo-500 text-5xl mb-4">🔍</div>
//                         <h3 className="text-2xl font-bold text-gray-800 mb-2">No Results Found</h3>
//                         <p className="text-gray-600 mb-6">We couldn't find any posts matching your search.</p>
//                         <button
//                             onClick={() => setSearchQuery('')}
//                             className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//                         >
//                             Clear Search
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Newsletter subscription */}
//                 <motion.div
//                     className="mt-20 bg-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     {/* Decorative elements */}
//                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full opacity-30"></div>
//                     <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600 rounded-full opacity-30"></div>

//                     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//                         <div className="md:w-1/2">
//                             <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
//                             <p className="opacity-90 mb-6 md:mb-0">
//                                 Get the latest articles, tips, and opportunities delivered directly to your inbox.
//                             </p>
//                         </div>

//                         <div className="md:w-1/2">
//                             <form className="flex flex-col sm:flex-row gap-3">
//                                 <input
//                                     type="email"
//                                     placeholder="Your email address"
//                                     className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
//                                     required
//                                 />

//                                 <motion.button
//                                     type="submit"
//                                     className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     Subscribe
//                                 </motion.button>
//                             </form>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Pagination */}
//                 <div className="mt-12 flex justify-center">
//                     <nav className="flex items-center space-x-2">
//                         <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
//                             Previous
//                         </button>

//                         <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
//                             1
//                         </button>

//                         <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
//                             2
//                         </button>

//                         <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
//                             3
//                         </button>

//                         <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
//                             Next
//                         </button>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// }