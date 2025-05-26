// src/components/Experience.jsx
import React from "react";

const Experience = () => (
  <section className="bg-gray-50 py-10 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Experience</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-700">DevOps Engineer | UK Tech Firm</h3>
        <p className="text-gray-600">2023 – Present</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Architected and managed scalable Kubernetes clusters on AWS.</li>
          <li>Implemented observability tools (Prometheus, Grafana, Pixie) to improve system reliability.</li>
          <li>Reduced CI/CD deployment time by 40% via automation and optimization.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-700">SRE | India-based FinTech</h3>
        <p className="text-gray-600">2020 – 2023</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Led site reliability initiatives for a high-traffic trading platform.</li>
          <li>Worked closely with development teams to enforce SLOs and improve MTTR.</li>
          <li>Designed real-time alerting systems using ELK stack and custom Python scripts.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
