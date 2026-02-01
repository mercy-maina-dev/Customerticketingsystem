import hme from "../../assets/images/hme.jpg";
import { motion } from "framer-motion";
import { FaTicketAlt, FaUsers, FaChartLine, FaHandsHelping, FaSmile, FaCheckCircle, FaUserTie, FaUser, FaUserAlt, FaMale, FaFemale } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  message: string;
  gender: "male" | "female";
}

const testimonials: Testimonial[] = [
  { name: "Alice", message: "This system made managing tickets so easy!", gender: "female" },
  { name: "Bob", message: "Fast and reliable customer support platform.", gender: "male" },
  { name: "Clara", message: "I love how intuitive and clean everything looks.", gender: "female" },
];

const agents = [
  { icon: <FaUserTie className="text-6xl text-indigo-600" />, name: "Alamin Juma", role: "Support Lead", description: "Expert in resolving customer issues quickly and efficiently." },
  { icon: <FaUser className="text-6xl text-indigo-600" />, name: "Fatima Ali", role: "Customer Support Agent", description: "Handles tickets and responds to inquiries promptly." },
  { icon: <FaUserAlt className="text-6xl text-indigo-600" />, name: "John Doe", role: "Technical Support", description: "Solves technical issues efficiently." },
];

export default function Home() {
  const customer = useSelector((state: RootState) => state.customer.customer);
  const FN = customer?.FN;
  const LN = customer?.LN;

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [ticketsResolved, setTicketsResolved] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [supportAgents, setSupportAgents] = useState(0);

  // Carousel autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated counters
  useEffect(() => {
    let tr = 0, hc = 0, sa = 0;
    const interval = setInterval(() => {
      if(tr < 1200) tr += 10;
      if(hc < 850) hc += 5;
      if(sa < 25) sa += 1;

      setTicketsResolved(tr > 1200 ? 1200 : tr);
      setHappyCustomers(hc > 850 ? 850 : hc);
      setSupportAgents(sa > 25 ? 25 : sa);

      if(tr >= 1200 && hc >= 850 && sa >= 25) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-600 text-white overflow-x-hidden relative">

      {/* Hero Section */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          {FN ? (
            <span>HELLO WELCOME TO OUR CUSTOMER SUPPORT TICKETING SYSTEM! {FN} {LN}</span>
          ) : <span>WELCOME TO THE CUSTOMER SUPPORT TICKETING SYSTEM!</span>}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
          Manage customer issues effortlessly. Assign tickets, track progress, and provide fast, reliable support — all in one powerful platform.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
          Get Started
        </motion.button>

        <motion.div
          className="mt-12 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={hme} alt="Support System" className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Tickets Resolved", value: ticketsResolved, icon: <FaCheckCircle className="text-yellow-400 text-5xl mb-4 mx-auto" /> },
            { label: "Happy Customers", value: happyCustomers, icon: <FaSmile className="text-pink-500 text-5xl mb-4 mx-auto" /> },
            { label: "Support Agents", value: supportAgents, icon: <FaUsers className="text-indigo-500 text-5xl mb-4 mx-auto" /> },
          ].map((c) => (
            <motion.div
              key={c.label}
              className="bg-white p-8 rounded-2xl shadow-lg text-gray-800 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {c.icon}
              <h3 className="text-3xl font-bold">{c.value}+</h3>
              <p className="mt-2">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        className="py-16 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Track Tickets", icon: <FaTicketAlt />, description: "Monitor ticket status in real-time.", color: "bg-purple-500" },
            { title: "Assign Tasks", icon: <FaUsers />, description: "Easily assign tasks to your team.", color: "bg-pink-500" },
            { title: "Customer Insights", icon: <FaChartLine />, description: "Analyze customer interactions.", color: "bg-indigo-500" },
            { title: "Fast Support", icon: <FaHandsHelping />, description: "Resolve issues quickly and efficiently.", color: "bg-yellow-500" },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              className={`${feature.color} p-6 rounded-2xl shadow-lg text-white flex flex-col items-center text-center hover:scale-105 transition-transform`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* HOW IT WORKS Timeline */}
      <motion.div
        className="py-16 px-6 bg-white text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-12">HOW IT WORKS</h2>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          {[
            { step: "Submit Ticket", description: "Customer submits a ticket with issue details." },
            { step: "Assign Task", description: "Admin assigns the ticket to the right agent." },
            { step: "Resolve Issue", description: "Agent resolves the issue and updates the ticket." },
          ].map((s, idx) => (
            <motion.div
              key={s.step}
              className="bg-indigo-700 text-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform flex-1"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{s.step}</h3>
              <p>{s.description}</p>
              {idx < 2 && <div className="hidden md:block w-full h-1 bg-yellow-400 mt-4 rounded-full"></div>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">WHAT OUR USERS SAY</h2>
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg text-gray-800 flex flex-col items-center text-center max-w-md mx-auto"
          key={testimonials[carouselIndex].name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials[carouselIndex].gender === "male" ? <FaMale className="text-indigo-500 text-4xl mb-4" /> : <FaFemale className="text-pink-500 text-4xl mb-4" />}
          <h3 className="font-bold text-xl">{testimonials[carouselIndex].name}</h3>
          <p className="mt-2 text-sm md:text-base">{testimonials[carouselIndex].message}</p>
        </motion.div>
      </motion.div>

      {/* Meet Our Agents */}
      <motion.div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 drop-shadow-lg">MEET OUR SUPPORT AGENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <motion.div key={idx} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
              {agent.icon}
              <h3 className="font-bold text-xl mb-1 mt-4 text-gray-900">{agent.name}</h3>
              <p className="text-indigo-600 font-semibold">{agent.role}</p>
              <p className="text-gray-700 mt-2 text-center">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="py-16 px-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white text-center rounded-3xl mx-6 my-16 shadow-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Manage Your Support Effortlessly?</h2>
        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" }} whileTap={{ scale: 0.95 }} className="bg-white text-purple-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
          Get Started Now
        </motion.button>
      </motion.div>

      {/* Floating Contact Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-xl hover:bg-purple-700 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
      >
        <FaHandsHelping className="text-2xl" />
      </motion.button>

    </div>
  );
}
