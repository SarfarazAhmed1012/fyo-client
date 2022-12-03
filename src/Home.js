import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <WhatGPT3 />
      {/* <Features /> */}
      {/* <Brand /> */}
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
