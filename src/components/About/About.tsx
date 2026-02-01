import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import { FaHandsHelping, FaUsers, FaLightbulb, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Alamin Juma", role: "Support Lead", description: "Expert in resolving customer issues quickly and efficiently." },
  { name: "Fatima Ali", role: "Customer Support Agent", description: "Handles tickets and responds to inquiries promptly." },
  { name: "John Doe", role: "Technical Support", description: "Solves technical issues efficiently." },
];

const faqs = [
  { q: "How do I submit a ticket?", a: "You can submit a ticket directly via the dashboard or mobile app." },
  { q: "Can I track my support requests?", a: "Yes, track them in real-time from your dashboard." },
  { q: "Is there a mobile app?", a: "Yes, our platform is fully responsive and has a mobile app." },
];

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen px-6 md:px-16 py-12">


      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold text-center text-indigo-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 animate-fade-in-up drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT OUR CUSTOMER SUPPORT TICKETING SYSTEM
      </motion.h1>
      <motion.p 
        className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Our platform empowers businesses to resolve customer issues with speed, transparency,
        and efficiency. Whether you're a small team or a large organization, our tools make
        support management seamless, intuitive, and highly effective.
      </motion.p>

     
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    
        <motion.div 
          className="bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-3xl transform hover:-translate-y-2 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={about1} alt="Customer support mission" className="rounded-xl mb-4 shadow-lg border-4 border-indigo-300 object-cover w-full h-64" />
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Simplifying the way support teams handle customer requests—ensuring every issue gets attention,
            every customer feels valued, and every interaction is smooth.
          </p>
          <FaHandsHelping className="text-indigo-500 text-5xl mt-4" />
        </motion.div>

       
        <motion.div 
          className="bg-gradient-to-br from-pink-100 to-yellow-100 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-3xl transform hover:-translate-y-2 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={about2} alt="Teamwork" className="rounded-xl mb-4 shadow-lg border-4 border-pink-300 object-cover w-full h-64" />
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            A passionate team of developers, designers, and support specialists working together 
            to build modern tools that enhance customer experience and satisfaction.
          </p>
          <FaUsers className="text-pink-500 text-5xl mt-4" />
        </motion.div>

    
        <motion.div 
          className="relative bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-3xl transform hover:-translate-y-2 md:col-span-2 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl z-0"></div>
          <img 
            src={about3} 
            alt="Support tools illustration" 
            className="rounded-3xl mb-6 shadow-2xl w-full h-96 object-cover object-top border-4 border-white z-0" 
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Why Choose Us?</h2>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
              We focus on simplicity, performance, and reliability—ensuring your support workflow
              runs smoothly from ticket creation to resolution. Our platform ensures faster resolutions
              and transparent communication with customers.
            </p>
            <FaShieldAlt className="text-white text-6xl mt-2" />
          </div>
        </motion.div>

      </div>


      <motion.div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Tickets Resolved", value: 1200 },
          { label: "Happy Customers", value: 850 },
          { label: "Support Agents", value: 25 },
          { label: "Avg Response Time (hrs)", value: 2 },
        ].map((stat) => (
          <motion.div 
            key={stat.label} 
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-3xl font-bold text-indigo-700">{stat.value}+</h3>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

   
      <motion.div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaUserTie className="text-indigo-600 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-indigo-500 font-semibold">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="py-16 px-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-indigo-900 text-center rounded-3xl mx-6 my-16 shadow-2xl" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Elevate Your Customer Support?</h2>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,0,0,0.3)" }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-indigo-900 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
          Get Started Today
        </motion.button>
      </motion.div>

    </div>
  );
}
