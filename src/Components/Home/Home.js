import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Cards from "../Cards/Cards";
import HIW from "../HIW/HIW";
import FAQ from "../FAQ/FAQ";
import Plans from "../Plans/Plans";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div id="home" className="main">
      <Hero />
      <About />
      {/* <Cards /> */}
      <HIW />
      <FAQ />
      <Plans />
      <Contact />
    </div>
  );
};

export default Home;



