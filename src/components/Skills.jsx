// src/components/Skills.jsx
import React from "react";

const skills = [
  "Kubernetes",
  "Terraform",
  "AWS/GCP",
  "CI/CD (GitHub Actions, Jenkins)",
  "Monitoring (Prometheus, Grafana, Pixie)",
  "Linux",
  "Python",
  "Go",
  "Docker",
  "Helm",
  "PostgreSQL",
  "Incident Management"
];

const Skills = () => (
  <section className="bg-white py-10 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Skills</h2>
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
