
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <Navbar />

      <Home />

      
      <About />

    
      <Login />
      <Register />

      
      <Footer />
    </div>
  );
};

export default LandingPage;
