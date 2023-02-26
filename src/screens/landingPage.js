import React from "react";
import Hero from "../components/hero";
import MonteCarloLagos from "../components/monteCarloLagos";
import MonteCarloSection from "../components/monteCarloSection";
import ThreePictures from "../components/threePictures";
import Map from "../components/map";
import Banner from "../components/banner";
import ClusterImages from "../components/clusterImages";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <div className="">
      <Helmet prioritizeSeoTags>
        <title>Monte Carlo Lagos</title>
        <meta name="Monte Carlo Lagos" content="Beachfront, Real estate, Epe, Estates, Resort, Residences" />
        <link rel="canonical" href="/" />
      </Helmet>

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
