export default function Services() {
  return (
    <div className="p-10 bg-linear-to-br from-white to-blue-50 min-h-screen">

      
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6 animate-fade-in-up">
        Our Services
      </h1>

      <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-12 animate-fade-in-up animation-delay-200">
        We offer a complete suite of tools designed to streamline customer support,
        improve response time, and enhance collaboration across your team.
      </p>

  
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition transform duration-300 animate-fade-in-up">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 7l9-4 9 4-9 4-9-4z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 7v6l9 4 9-4V7" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 13l9 4 9-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">Ticket Management</h2>
          <p className="text-gray-600 mt-2">
            Create, assign, track, and manage customer tickets effortlessly with our
            easy-to-use ticketing dashboard.
          </p>
        </div>

    
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300 animate-fade-in-up animation-delay-200">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h6l6 6v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">Knowledge Base</h2>
          <p className="text-gray-600 mt-2">
            Reduce repeated questions with a well-structured library of FAQs, guides,
            and troubleshooting documentation.
          </p>
        </div>

      
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300 animate-fade-in-up animation-delay-300">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M5 20h14" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">User Authentication</h2>
          <p className="text-gray-600 mt-2">
            Secure access with modern login & registration — keeping user data safe and
            protected at all times.
          </p>
        </div>

        
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300 animate-fade-in-up animation-delay-400">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 5h18M9 3v2m6-2v2M4 7h16v13H4z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">Admin Dashboard</h2>
          <p className="text-gray-600 mt-2">
            Gain insights with an interactive dashboard showing ticket stats, performance,
            and productivity metrics.
          </p>
        </div>

      
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300 animate-fade-in-up animation-delay-500">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16l4-4-4-4m8 8l-4-4 4-4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">Real-Time Updates</h2>
          <p className="text-gray-600 mt-2">
            Stay informed with instant updates, notifications, and ticket status changes
            without refreshing your page.
          </p>
        </div>

      
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:-translate-y-2 transition duration-300 animate-fade-in-up animation-delay-600">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 8v4l2 2m-2-6a9 9 0 11-9 9 9 9 0 019-9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-indigo-700">24/7 Support</h2>
          <p className="text-gray-600 mt-2">
            Our system ensures customers always have a place to submit concerns, even
            outside business hours.
          </p>
        </div>

      </div>
    </div>
  );
}
