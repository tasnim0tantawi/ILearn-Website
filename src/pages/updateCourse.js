import React from "react";
import Navbar from "../components/Navbar";
import CoursesForm from "../components/CoursesForm";
import Footer from "../components/Footer";

function UpdateCourse() {
    return (
        <>
          <Navbar />
          <CoursesForm type="Update"/>
          <Footer />
        </>
      );
  }
  
  export default UpdateCourse;