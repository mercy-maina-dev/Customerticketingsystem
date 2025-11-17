import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";

export default function About() {
  return (
    <div className="p-10 bg-linear-to-br from-white to-blue-50 min-h-screen">
      
      
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6 animate-fade-in-up">
        About Our Customer Support System
      </h1>

      
      <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-10 animate-fade-in-up animation-delay-200">
        Our platform empowers businesses to resolve customer issues with speed, transparency,
        and efficiency. Whether you're a small team or a large organization, our tools make
        support management easy and effective.
      </p>

      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        
        <div className="bg-white shadow-xl rounded-2xl p-6 animate-fade-in-up">
          <img
            src={about1}
            alt="Customer support mission illustration"
            className="rounded-xl mb-4 shadow-md"
          />
          <h2 className="text-xl font-bold text-indigo-700">Our Mission</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Our mission is to simplify how support teams handle customer requests—ensuring
            every issue gets attention and customers feel valued.
          </p>
        </div>

    
        <div className="bg-white shadow-xl rounded-2xl p-6 animate-fade-in-up animation-delay-300">
          <img
            src={about2}
            alt="Teamwork and collaboration illustration"
            className="rounded-xl mb-4 shadow-md"
          />
          <h2 className="text-xl font-bold text-indigo-700">Our Team</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We are a team of developers, designers, and support professionals dedicated to
            building modern tools that improve customer experience.
          </p>
        </div>

        
        <div className="bg-white shadow-xl rounded-2xl p-6 animate-fade-in-up animation-delay-500 md:col-span-2">
          <img
            src={about3}
            alt="Support tools and technology illustration"
            className="rounded-xl mb-4 shadow-md w-full h-72 object-cover"
          />
          <h2 className="text-xl font-bold text-indigo-700">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We focus on simplicity, performance, and reliability—ensuring your support 
            workflow runs smoothly from ticket creation to resolution.
          </p>
        </div>

      </div>
    </div>
  );
}
