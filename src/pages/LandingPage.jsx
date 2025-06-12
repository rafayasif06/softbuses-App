import React from "react";

import { SmallScreenHeader } from "../components/SmallScreenHeader";
import { LargeScreenHeader } from "../components/LargeScreenHeader";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import Services from "../components/Services";
import { Projects } from "../components/Projects";

export const LandingPage = () => {
  return (
    <div>
      <SmallScreenHeader />
      <LargeScreenHeader/>
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
};
