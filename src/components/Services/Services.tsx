import { FaTicketAlt, FaUsers, FaBookOpen, FaLock, FaChartLine, FaSyncAlt, FaHeadset, FaCogs, FaMobileAlt, FaLightbulb, FaRocket, FaCheckCircle, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <FaTicketAlt className="text-white text-5xl" />,
      title: "Ticket Management",
      description: "Create, assign, track, and manage customer tickets effortlessly with our intuitive dashboard.",
      badge: "Advanced"
    },
    {
      icon: <FaBookOpen className="text-white text-5xl" />,
      title: "Knowledge Base",
      description: "Reduce repeated questions with a well-structured library of FAQs, guides, and troubleshooting documentation.",
    },
    {
      icon: <FaLock className="text-white text-5xl" />,
      title: "User Authentication",
      description: "Secure access with modern login & registration, keeping user data safe and protected at all times.",
      badge: "Secure"
    },
    {
      icon: <FaChartLine className="text-white text-5xl" />,
      title: "Admin Dashboard",
      description: "Gain insights with interactive dashboards showing ticket stats, team performance, and productivity metrics.",
    },
    {
      icon: <FaSyncAlt className="text-white text-5xl" />,
      title: "Real-Time Updates",
      description: "Instant updates, notifications, and ticket status changes without refreshing your page.",
    },
    {
      icon: <FaHeadset className="text-white text-5xl" />,
      title: "24/7 Support",
      description: "Our system ensures customers always have a place to submit concerns, even outside business hours.",
      badge: "Popular"
    },
    {
      icon: <FaUsers className="text-white text-5xl" />,
      title: "Team Collaboration",
      description: "Assign tickets, leave comments, and work together efficiently as a team in real-time.",
    },
    {
      icon: <FaCogs className="text-white text-5xl" />,
      title: "Custom Workflows",
      description: "Adapt ticket flows to your business needs, automating repetitive tasks and approvals.",
    },
    {
      icon: <FaBookOpen className="text-white text-5xl" />,
      title: "Reporting & Analytics",
      description: "Generate detailed reports on tickets, performance metrics, and customer satisfaction.",
      badge: "Insights"
    },
    {
      icon: <FaMobileAlt className="text-white text-5xl" />,
      title: "Mobile Access",
      description: "Manage tickets and monitor team performance from anywhere with our fully responsive mobile interface.",
    },
    {
      icon: <FaLightbulb className="text-white text-5xl" />,
      title: "Smart Automation",
      description: "Automate repetitive tasks, ticket assignments, and notifications to save time and increase efficiency.",
      badge: "AI-Powered"
    },
    {
      icon: <FaRocket className="text-white text-5xl" />,
      title: "Performance Boost",
      description: "Optimized for speed and reliability to handle high ticket volumes without delays.",
    },
  ];

  const stats = [
    { label: "Tickets Resolved", value: 1200, icon: <FaCheckCircle className="text-yellow-400 text-5xl mb-4 mx-auto" /> },
    { label: "Happy Customers", value: 850, icon: <FaSmile className="text-pink-500 text-5xl mb-4 mx-auto" /> },
    { label: "Support Agents", value: 25, icon: <FaUsers className="text-indigo-500 text-5xl mb-4 mx-auto" /> },
  ];

  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">

      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center text-indigo-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We provide innovative tools and solutions designed to elevate customer support, enhance team productivity,
        and deliver an exceptional customer experience.
      </motion.p>

      {/* Stats Section */}
      <motion.div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-2xl shadow-lg text-gray-800 hover:scale-105 transition-transform flex flex-col items-center">
            {stat.icon}
            <h3 className="text-3xl font-bold">{stat.value}+</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Badge */}
            {service.badge && (
              <span className="absolute top-4 right-4 bg-yellow-400 text-indigo-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                {service.badge}
              </span>
            )}

            <motion.div 
              className="w-20 h-20 flex items-center justify-center mb-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              {service.icon}
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
            <p className="text-white">{service.description}</p>

            {/* Decorative floating shapes */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
          </motion.div>
        ))}
      </div>

      {/* Highlight + Book Event CTA */}
      <motion.div className="mt-16 max-w-6xl mx-auto bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 text-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why Choose Our Customer Support System?</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
          Fast ticket resolution, seamless team collaboration, and advanced analytics help your business
          deliver exceptional service that delights your customers every time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-800 font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-lg"
          >
            Try it Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-indigo-800 font-bold px-10 py-4 rounded-2xl shadow-xl hover:bg-yellow-500 transition-all text-lg"
          >
            Book Your Event
          </motion.button>
        </div>

        {/* Subtle background shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full animate-pulse-slow"></div>
      </motion.div>

    </div>
  );
}
