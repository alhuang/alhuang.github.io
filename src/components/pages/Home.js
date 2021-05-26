import "../../App.css";
import HeroSection from "../HeroSection";
import React, { useEffect } from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import About from "./About";

function Home() {
  useEffect(() => {
    document.title = "Andrew Huang Portfolio";
  });
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Cards /> */}
      <About />
      <Footer />
    </>
  );
}

export default Home;
