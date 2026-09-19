# Darshan Chaluvaraju - Personal Portfolio Website

A static personal portfolio website designed for **Darshan Chaluvaraju** — Senior DevOps / DevSecOps Engineer & Platform Specialist with 13+ years of experience.

## ✨ Features

- **⚡ Zero Build Tool Overhead:** Pure, high-performance HTML5, modern CSS3, and vanilla JavaScript. No `npm`, Webpack, or Node.js runtime required.
- **🌓 Dark & Light Mode Support:** Built-in theme switcher that respects system OS preference and persists selections across visits via `localStorage`.
- **🛡️ Enterprise DevSecOps & SSDLC Spotlight:** Interactive 5-phase breakdown detailing the Viridien SSDLC transformation, CISO approval, DHI container hardening, and air-gapped Kubernetes delivery.
- **📊 Interactive Dual Skills Matrix:** Filterable category tabs covering *DevSecOps*, *CI/CD & Source Control*, *Containers & Cloud*, *IaC & Automation*, *AI & Emerging Tech*, and *Leadership & Mentorship*.
- **📈 13+ Year Career Timeline:** Interactive chronicle spanning engagements at *Viridien (CGG)*, *Amadeus Software Labs*, *Alten Calsoft Labs*, *Exilant (Apple)*, and *Infosys (Apple)*.
- **📜 Certifications & Education:** Highlighted badges for *Azure AI Engineer Associate*, *IIT Delhi Quantum Computing & ML*, *Hugging Face AI Agents*, *Microsoft OpenHack*, *VTU Computer Science Engineering Degree*, and *CKA/CKS In-Preparation*.
- **🤖 Beyond the Terminal:** Personal curiosity section highlighting autonomous AI agent experiments, quantum ML exploration, knowledge sharing, home lab setups, and travel.
- **📋 One-Click Email Copy & CV Print:** Integrated toast notification for email copying and print-optimized CSS stylesheet (`@media print`) for instant PDF generation.

---

## 📁 Directory Structure

```
darshan-portfolio/
├── index.html              # Main webpage with semantic layout and SEO metadata
├── css/
│   └── styles.css          # Responsive styling, CSS variables, glassmorphism, print CSS
├── js/
│   └── script.js           # Theme toggle, SSDLC stepper, skill filters, copy-to-clipboard
└── README.md               # Project documentation and deployment guides
```

---

## 🚀 How to Run Locally

### Option 1: Direct in Browser
Simply double-click `index.html` or open it in Google Chrome, Safari, Firefox, or Edge:
```bash
open index.html
```

### Option 2: Local Python Server (Recommended)
From inside the `darshan-portfolio` folder, run:
```bash
python3 -m http.server 8080
```
Then visit [`http://localhost:8080`](http://localhost:8080) in your browser.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Fastest)
1. Push this folder to a GitHub repository (e.g. `darshan-portfolio` or `username.github.io`).
2. Go to repository **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/`.

### 2. Netlify
1. Drag and drop the `darshan-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Instant SSL and custom domain linking.

### 3. Cloudflare Pages / Vercel
1. Connect your GitHub repository.
2. Set Build Command to blank / None.
3. Set Output Directory to `.` or root.
4. Deploy in seconds with global edge CDN.

---

## ✏️ Customization Tips

- **Change Personal Details:** Open `index.html` and search for any text (e.g., location, email, LinkedIn handle) to edit.
- **Update Skills or Milestones:** Add new cards inside `<div class="skills-grid">` or timeline entries in `<div class="timeline">`.
- **Change Colors:** Modify `--accent-primary` or `--accent-secondary` in `css/styles.css`.
