import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start bg-body-tertiary mt-5 mb-auto">
      <div className="text-center p-3">
        © {currentYear} Copyright
      </div>
    </footer>
  );
}

export default Footer;
