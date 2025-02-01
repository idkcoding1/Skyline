import React from "react";
import AboutUs from "./About";
import ContactForm from "./Contactus";
import HeroSection from "./HeroSection";

const Home: React.FC = () => {
  return (
  <>
    <HeroSection/>
    <AboutUs/>
    <ContactForm/>
    </>
  
  );
};

export default Home;