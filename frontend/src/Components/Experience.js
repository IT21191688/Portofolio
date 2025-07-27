import React, { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "LayoutIndex (Pvt) Ltd",
      role: "Associate Software Engineer",
      period: "November 2024 - Present",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      logo: "🏢",
      achievements: [
        "Leading the development and ongoing maintenance of comprehensive cinema management solutions including POS systems, self-service kiosks, and payment terminal integrations, ensuring continuous optimization and enhanced customer experiences.",
        "Developing & maintaining CINEpoint POS Application using React.js, featuring ticket sales, concession management, voucher sales, private hire bookings, reservations, and credit memo processing with secure user authentication and responsive design.",
        "Engineering & maintaining CINEstand Kiosk Software with React and TypeScript, enabling customers to purchase tickets, select seats, view movie details, and buy concessions through intuitive interfaces.",
        "Developed robust middle-server architecture connecting POS and kiosk systems with multiple payment terminals (Cardpointe, Windcave, Clover-UK), ensuring secure transaction processing and implementing updates for new payment methods.",
        "Enhanced system performance through continuous maintenance of responsive interfaces, real-time seat selection algorithms, movie information displays, and promotional content management.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Payment Gateways",
        "REST APIs",
      ],
    },
    {
      company: "LayoutIndex (Pvt) Ltd",
      role: "Intern Full-Stack Developer",
      period: "May 2024 - November 2024",
      location: "Colombo, Sri Lanka",
      type: "Internship",
      logo: "💻",
      achievements: [
        "Gained comprehensive experience in full-stack development while contributing to enterprise-level applications and expanding technical expertise across modern development stacks.",
        "Built a complete e-commerce platform using Nest.js backend, Next.js frontend, and PostgreSQL database during initial development phase, implementing user authentication, product management, shopping cart functionality, and order processing with modern DevOps practices.",
        "Transitioned to cinema management solutions development, contributing to CINEpoint POS and CINEstand kiosk applications using React.js and gaining experience with payment system integrations.",
        "Applied containerization with Docker, established CI/CD pipelines, and utilized cloud deployment strategies for production-ready applications.",
        "Developed RESTful APIs with comprehensive documentation, implemented secure authentication mechanisms, and optimized database queries for enhanced performance.",
      ],
      technologies: [
        "Nest.js",
        "Next.js",
        "PostgreSQL",
        "React.js",
        "Docker",
        "CI/CD",
        "REST APIs",
      ],
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Nest.js", level: 85 },
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 95 },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
          <p>My journey in software development and the impact I've made</p>
        </div>

        <div className="experience-content">
          {/* Experience Timeline */}
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="timeline-marker">
                  <span className="company-logo">{exp.logo}</span>
                </div>
                <div className="timeline-content">
                  <div className="company-info">
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-details">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="experience-details modern-card">
            <div className="detail-header">
              <div className="role-info">
                <h3 className="gradient-text">{experiences[activeTab].role}</h3>
                <h4>{experiences[activeTab].company}</h4>
                <p className="period">{experiences[activeTab].period}</p>
              </div>
            </div>

            <div className="achievements">
              <h5>Key Achievements & Responsibilities</h5>
              <ul>
                {experiences[activeTab].achievements.map(
                  (achievement, index) => (
                    <li key={index}>{achievement}</li>
                  )
                )}
              </ul>
            </div>

            <div className="technologies">
              <h5>Technologies Used</h5>
              <div className="tech-tags">
                {experiences[activeTab].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="skills-overview">
          <h3 className="gradient-text">Technical Proficiency</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .experience-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .experience-timeline {
          position: relative;
        }

        .experience-timeline::before {
          content: "";
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--primary-color),
            var(--secondary-color)
          );
        }

        .timeline-item {
          position: relative;
          padding-left: 80px;
          margin-bottom: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeline-item:hover,
        .timeline-item.active {
          transform: translateX(10px);
        }

        .timeline-marker {
          position: absolute;
          left: 15px;
          top: 0;
          width: 30px;
          height: 30px;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--bg-dark);
        }

        .company-logo {
          font-size: 1rem;
        }

        .timeline-content {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .timeline-item.active .timeline-content {
          background: var(--card-bg);
          border-color: var(--primary-color);
        }

        .role-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .company-name {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .period,
        .location {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .job-type {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          width: fit-content;
        }

        .job-type.full-time {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .job-type.internship {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .experience-details {
          height: fit-content;
        }

        .detail-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .achievements h5,
        .technologies h5 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .achievements li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: var(--text-light);
        }

        .achievements li::before {
          content: "▶";
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-size: 0.8rem;
        }

        .technologies {
          margin-top: 2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          color: white;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          transform: translateY(-2px);
        }

        .skills-overview {
          text-align: center;
        }

        .skills-overview h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-weight: 600;
        }

        .skill-percentage {
          color: var(--primary-color);
          font-weight: 600;
        }

        .skill-bar {
          background: rgba(255, 255, 255, 0.1);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 4px;
          transition: width 1s ease;
        }

        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline-item {
            padding-left: 60px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
