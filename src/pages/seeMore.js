import React from "react";
import Navbar from "../components/Navbar";
import SeemoreCarousel from "../components/SeemoreCarousel";
import SeemoreDetails from "../components/SeemoreDetails";
import SeemoreRating from "../components/SeemoreRating";
import SeemoreTable from "../components/SeemoreTable";
import SeemoreButtons from "../components/SeemoreButtons";
import Footer from "../components/Footer";

function SeeMore() {
  return (
    <>
      <Navbar />
      <SeemoreCarousel />
      <SeemoreDetails />
      <SeemoreRating />
      <SeemoreTable />
      <SeemoreButtons />
      <Footer />
    </>
  );
}

export default SeeMore;