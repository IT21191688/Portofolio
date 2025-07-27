import React, { useEffect } from "react";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Main />
      <Home />
      <About />
      <Experience />
      <Resume />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
