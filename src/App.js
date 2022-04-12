import React from "react";
import Nav from "./components/Nav";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import SignUp from "./components/SignUp";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Nav/>
      <HeroSection />
      <Features />
      <SignUp />
      <FooterSection />

    </>
  );
}

export default App;
