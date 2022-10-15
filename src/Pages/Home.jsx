import React from "react";
import AllFeatures from "../Components/AllFeatures";
import Blog from "../Components/Blog";
import Clients from "../Components/Clients";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HowWork from "../Components/HowWork";
import News from "../Components/News";
import OurServices from "../Components/OurServices";
import Pricing from "../Components/Pricing";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div className="h-full flex flex-col pt-4 xl:px-[16rem] lg:px-32 font-body">
      <Header />
      <Features />
      <OurServices />
      <AllFeatures />
      <HowWork />
      <Pricing />
      <Team />
      <Clients />
      <Blog />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
