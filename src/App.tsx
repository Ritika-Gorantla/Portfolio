import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function About() {
  return (
    <section id="about" style={{ padding: '4rem 0', background: '#fff' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2>About Me</h2>
        <p>Results-oriented Full Stack Developer with two years of experience in building scalable web applications, specializing in modern JavaScript frameworks, RESTful APIs, and Salesforce development. Proven ability to deliver high-impact solutions and drive measurable improvements in user experience and system performance.</p>
        <p style={{ fontStyle: 'italic', color: '#444' }}>
          Outside of work, I love painting, reading, and building apps in my free time.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: '4rem 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2>Professional Experience</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '2rem' }}>
            <b>Software Engineer</b><br />
            Deloitte USI · Jul 2023 – Present
            <ul>
              <li>Led full-stack development for Nutricia's patient management system using Salesforce LWC, Apex, and React, improving appointment and prescription workflows.</li>
              <li>Implemented secure role-based access control with Salesforce Flows and Apex, automating scheduling and supply tracking — reduced manual workload by 80%.</li>
              <li>Optimized React-based front-end using lazy loading, virtual DOM tuning, and API batching, reducing page load times by 35%.</li>
              <li>Developed a scalable multi-tier insurance platform for TransAmerica (10,000+ users), delivering a responsive UI via Salesforce LWC.</li>
              <li>Enhanced API and dashboard performance with asynchronous data loading and optimized SOQL, improving speed by 50% and cutting server response times by 40%.</li>
            </ul>
          </li>
          <li style={{ marginBottom: '2rem' }}>
            <b>Software Engineering Intern</b><br />
            Kreeas Technologies · Mar 2023 – May 2023
            <ul>
              <li>Built interactive financial risk dashboards using Angular and NgxCharts, reducing financial reporting time by 60%.</li>
              <li>Leveraged RxJS for reactive state management, increasing dashboard performance by 70%.</li>
            </ul>
          </li>
          <li style={{ marginBottom: '2rem' }}>
            <b>Software Engineering Intern</b><br />
            Intelekt.ai · Sep 2021 – Nov 2021
            <ul>
              <li>Created a chatbot solution using Node.js and Dialogflow, improving engagement by 60%.</li>
              <li>Built responsive UIs with React and Bootstrap, increasing user interaction by 45% through better navigation and cross-device support.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 0', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2>Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '2rem' }}>
            <b>
              <a href="https://ritika-gorantla.github.io/usepopcorn/" target="_blank" rel="noopener noreferrer">
                usepopcorn – Interactive React Movie App
              </a>
            </b>
            <br />
            An interactive, educational React app I built to dive deep into React's core concepts! 🍿
            <ul>
              <li>🔍 Search any movie using the OMDb API — each keystroke triggers real‑time state updates</li>
              <li>📈 Instantly updating results count as you type</li>
              <li>⭐ Add films to your personal "Watched" list and watch stats recalculate live</li>
              <li>❌ Delete movies with confirmation popups — see DOM removal and cleanup in action</li>
              <li>🌳 Fiber Tree visualizer shows exactly which components update and why</li>
              <li>⚡ Reconciliation demo compares old vs. new Virtual DOM, side by side</li>
              <li>🔄 Lifecycle walkthrough (mount → render → commit → cleanup) at the click of a button</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              <b>Why I built it:</b> Over the past 2 years, I've loved building pixel‑perfect, performant UIs — and wanted to go beyond the surface. This project is where my curiosity met creativity—turning React's complex internals into something developers can actually see, click through, and learn from. It's built to help anyone who wants to master React, and reflects my passion for turning complexity into clarity.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function UIShowcase() {
  const images = [
    { src: `${import.meta.env.BASE_URL}uia.png`, alt: "UI Screenshot A" },
    { src: `${import.meta.env.BASE_URL}uib.png`, alt: "UI Screenshot B" },
    { src: `${import.meta.env.BASE_URL}uic.png`, alt: "UI Screenshot C" },
    { src: `${import.meta.env.BASE_URL}uid.png`, alt: "UI Screenshot D" },
  ];

  return (
    <section id="ui-showcase" style={{ padding: '4rem 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2>Some of the UIs I Developed</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {images.map((img) => (
            <div key={img.src} style={{ flex: '1 1 40%', maxWidth: '45%', minWidth: 250, marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 8 }}
              />
              <span style={{ fontSize: '1rem', color: '#333', textAlign: 'center' }}>{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '4rem 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:ritikagorantla@gmail.com">ritikagorantla@gmail.com</a> | Phone: 8309660927 | India
        </p>
        <p>
          <a href="https://github.com/Ritika-Gorantla" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/ritika-gorantla-719546207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <div id="skills"><Skills /></div>
        <Experience />
        <Projects />
        <UIShowcase />
        <Contact />
      </Router>
    </ThemeProvider>
  );
}

export default App; 