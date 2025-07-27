import React, { useState, useEffect } from "react";

export default function Resume() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          name: "React.js",
          level: 95,
          description: "Advanced component architecture, hooks, context",
        },
        {
          name: "Next.js",
          level: 90,
          description: "SSR, SSG, API routes, performance optimization",
        },
        {
          name: "TypeScript",
          level: 90,
          description: "Strong typing, interfaces, generics",
        },
        {
          name: "JavaScript",
          level: 95,
          description: "ES6+, async/await, modern patterns",
        },
        {
          name: "React Native",
          level: 85,
          description: "Cross-platform mobile development",
        },
        {
          name: "HTML/CSS",
          level: 95,
          description: "Semantic HTML, modern CSS, animations",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Utility-first styling, responsive design",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: 90,
          description: "Express, middleware, API development",
        },
        {
          name: "Nest.js",
          level: 85,
          description: "Modular architecture, decorators, guards",
        },
        {
          name: "Express.js",
          level: 90,
          description: "RESTful APIs, middleware, routing",
        },
        {
          name: "Python",
          level: 80,
          description: "Flask, data processing, automation",
        },
        {
          name: "RESTful APIs",
          level: 95,
          description: "Design, documentation, best practices",
        },
        {
          name: "JWT Authentication",
          level: 90,
          description: "Secure token-based auth",
        },
      ],
    },
    database: {
      title: "Database & Storage",
      icon: "💾",
      skills: [
        {
          name: "MongoDB",
          level: 90,
          description: "Document modeling, aggregation, indexing",
        },
        {
          name: "PostgreSQL",
          level: 85,
          description: "Relational design, queries, optimization",
        },
        {
          name: "MySQL",
          level: 85,
          description: "Database design, stored procedures",
        },
        {
          name: "Firebase",
          level: 80,
          description: "Real-time database, authentication",
        },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        {
          name: "Git/GitHub",
          level: 95,
          description: "Version control, collaboration, CI/CD",
        },
        {
          name: "Docker",
          level: 80,
          description: "Containerization, deployment",
        },
        { name: "GCP", level: 75, description: "Cloud deployment, services" },
        {
          name: "CI/CD",
          level: 80,
          description: "Automated deployment pipelines",
        },
        { name: "Figma", level: 85, description: "UI/UX design, prototyping" },
      ],
    },
    specialized: {
      title: "Specialized Skills",
      icon: "🚀",
      skills: [
        {
          name: "Payment Gateways",
          level: 90,
          description: "Cardpointe, Windcave, Clover integration",
        },
        {
          name: "Cinema Systems",
          level: 95,
          description: "POS, Kiosk development & maintenance",
        },
        {
          name: "Real-time Systems",
          level: 85,
          description: "WebSockets, live updates",
        },
        {
          name: "E-commerce",
          level: 90,
          description: "Shopping carts, order processing",
        },
      ],
    },
  };

  const certifications = [
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2024",
      badge: "🍃",
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2024",
      badge: "⚛️",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      badge: "☁️",
    },
    {
      title: "Full-Stack Development Diploma",
      issuer: "Developers Stack Academy",
      date: "2024",
      badge: "🎓",
    },
  ];

  useEffect(() => {
    setAnimationTrigger(true);
    const timer = setTimeout(() => setAnimationTrigger(false), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Expertise</h2>
          <p>My technical skills and certifications in software development</p>
        </div>

        <div className="skills-content">
          {/* Category Navigation */}
          <div className="category-nav">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${
                  activeCategory === key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="skills-display modern-card">
            <div className="skills-header">
              <h3 className="gradient-text">
                {skillCategories[activeCategory].icon}{" "}
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className={`skills-grid ${animationTrigger ? "animate" : ""}`}>
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-description">{skill.description}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3 className="section-subtitle gradient-text">
              Professional Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card modern-card">
                  <div className="cert-badge">{cert.badge}</div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Proficiency Summary */}
          <div className="proficiency-summary">
            <h3 className="section-subtitle gradient-text">
              Technical Proficiency Summary
            </h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">💻</div>
                <div className="summary-content">
                  <h4>Full-Stack Development</h4>
                  <p>
                    Expert in modern web technologies with 1+ years of
                    professional experience
                  </p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🎬</div>
                <div className="summary-content">
                  <h4>Cinema Technology</h4>
                  <p>
                    Specialized in POS systems, kiosks, and entertainment
                    industry solutions
                  </p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">💳</div>
                <div className="summary-content">
                  <h4>Payment Integration</h4>
                  <p>
                    Expert in multiple payment gateway integrations and
                    financial systems
                  </p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🚀</div>
                <div className="summary-content">
                  <h4>Modern Architecture</h4>
                  <p>
                    Proficient in microservices, cloud deployment, and scalable
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skills-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .category-nav {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .category-btn:hover,
        .category-btn.active {
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-color: transparent;
          transform: translateY(-2px);
        }

        .category-icon {
          font-size: 1.2rem;
        }

        .skills-display {
          min-height: 400px;
        }

        .skills-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .skills-header h3 {
          font-size: 2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .skills-grid.animate {
          opacity: 0;
        }

        .skill-card {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
          background: var(--card-bg);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
        }

        .skill-percentage {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 1rem;
        }

        .skill-description {
          color: var(--text-light);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .skill-bar-container {
          background: rgba(255, 255, 255, 0.1);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 4px;
          animation: fillBar 1.5s ease-out;
          transform-origin: left;
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }

        .section-subtitle {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .cert-badge {
          font-size: 2.5rem;
          min-width: 60px;
          text-align: center;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .cert-issuer {
          color: var(--text-light);
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
        }

        .cert-date {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .summary-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .summary-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          background: var(--card-bg);
        }

        .summary-icon {
          font-size: 2rem;
          min-width: 50px;
          text-align: center;
        }

        .summary-content h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .summary-content p {
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .category-nav {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .certifications-grid,
          .summary-grid {
            grid-template-columns: 1fr;
          }

          .cert-card,
          .summary-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
