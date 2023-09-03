import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function MyCourses() {
    return (
        <>
          <Navbar />
          <Cards title="My courses"/>
          <Footer />
        </>
      );
  }
  
  export default MyCourses;