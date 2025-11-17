export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-2xl font-bold text-white">Customer Support</h2>
          <p className="mt-3 text-sm leading-6">
            Your all-in-one solution for managing customer tickets, tracking issues,
            and delivering fast, reliable support.  
            Empower teams. Make customers happy.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Nairobi, Kenya</li>
            <li>📞 +254 712 345 678</li>
            <li>📧 support@customersystem.com</li>
            <li>🕒 Mon – Fri: 8:00 AM – 6:00 PM</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm">
            Subscribe to get updates, new features and important alerts.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Customer Support Ticketing System — All Rights Reserved.
      </div>
    </footer>
  );
}
