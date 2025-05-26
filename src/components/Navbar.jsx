// src/components/Navbar.jsx
import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <span className="text-xl font-semibold text-gray-800">My Portfolio</span>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
