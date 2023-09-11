import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

function LogIn() {
  return (
    <>
      <Navbar />
      <Form type="Login" />
      <Footer />
    </>
  );
}

export default LogIn;
