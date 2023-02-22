import React from "react";
import Hero from "../components/hero";
import MonteCarloLagos from "../components/monteCarloLagos";
import MonteCarloSection from "../components/monteCarloSection";
import ThreePictures from "../components/threePictures";
import Map from "../components/map";
import Banner from "../components/banner";
import ClusterImages from "../components/clusterImages";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <MonteCarloSection />
      <MonteCarloLagos />
      <ThreePictures />
      <Map />
      <Banner />
      <ClusterImages />
    </div>
  );
};

export default LandingPage;
