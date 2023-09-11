import React from "react";
import Header from "../components/Header";
import CoursesForm from "../components/CoursesForm";
import Footer from "../components/Footer";

function UpdateCourse() {
    return (
        <>
          <Header />
          <CoursesForm type="Update"/>
          <Footer />
        </>
      );
  }
  
  export default UpdateCourse;