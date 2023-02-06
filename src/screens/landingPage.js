import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import MonteCarloSection from "../components/monteCarloSection";

const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Hero />
      <MonteCarloSection />
    </div>
  );
};

export default LandingPage;
