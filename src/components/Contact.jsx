// src/components/Contact.jsx
import React from "react";

const Contact = () => (
  <section className="bg-gray-100 py-10 px-6 max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact</h2>
    <p className="text-lg text-gray-700 mb-4">
      Feel free to reach out for collaboration, consulting, or freelance opportunities.
    </p>
    <a
      href="mailto:your.email@example.com"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Email Me
    </a>
  </section>
);

export default Contact;
