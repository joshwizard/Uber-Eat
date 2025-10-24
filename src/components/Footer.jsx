// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-center py-4 text-rose-700 font-medium border-t border-rose-200">
      © {new Date().getFullYear()} Uber Eat. All rights reserved.
    </footer>
  );
};

export default Footer;
