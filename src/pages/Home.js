import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import ServicesSection from "./ServicesSection";
import Portfolio from "./Portfolio";
import TestImonials from "./TestImonials";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="row ">
        <NavBar />
        {/* <!-- Header --> */}
        <Header />
        {/* <!-- About Section --> */}
        <About />
        {/* <!-- Services Section --> */}
        <ServicesSection />
        {/* <!-- Gallery Section --> */}
        <Portfolio />
        {/* <!-- Testimonials Section --> */}
        <TestImonials />
        {/*<!-- Contact Section -->*/}
        <Contact />
        {/* <!-- Footer Section --> */}
        <Footer />
      </div>
    );
  }
}
export default Home;
