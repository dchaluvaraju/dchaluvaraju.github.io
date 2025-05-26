// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-10">
    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    <p className="text-sm mt-2">Built with React & Parcel</p>
  </footer>
);

export default Footer;
