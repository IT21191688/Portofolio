import React, { useState, useEffect } from "react";
import ProfileImg from "../Images/profileImg.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState("personal");

  // Force load Font Awesome
  useEffect(() => {
    // Remove any existing Font Awesome links
    const existingLinks = document.querySelectorAll(
      'link[href*="font-awesome"]'
    );
    existingLinks.forEach((link) => link.remove());

    // Add Font Awesome with a fresh load
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.head.appendChild(link);
  }, []);

  const personalInfo = [
    { icon: "🎂", label: "Birthday", value: "5 July 2000" },
    { icon: "📱", label: "Phone", value: "+94 713 477 746" },
    { icon: "🌍", label: "Location", value: "Colombo, Sri Lanka" },
    { icon: "🎓", label: "Age", value: "24 Years" },
    {
      icon: "🎯",
      label: "Degree",
      value: "BSc (Hons) IT - Software Engineering",
    },
    { icon: "✉️", label: "Email", value: "sadeepalakshan0804@gmail.com" },
    { icon: "💼", label: "Experience", value: "1+ Years Professional" },
    { icon: "🚀", label: "Status", value: "Available for opportunities" },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Modern Web Development",
      desc: "Passionate about React, Next.js, and cutting-edge frontend technologies",
      color: "var(--primary-color)",
    },
    {
      icon: "🎬",
      title: "Cinema Technology",
      desc: "Specializing in POS systems, kiosks, and entertainment industry solutions",
      color: "var(--secondary-color)",
    },
    {
      icon: "💳",
      title: "Payment Systems",
      desc: "Expert in payment gateway integrations and financial technology",
      color: "var(--tertiary-color)",
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      desc: "Building scalable applications with modern cloud technologies",
      color: "var(--quaternary-color)",
    },
    {
      icon: "🔧",
      title: "System Integration",
      desc: "Connecting different systems and creating seamless workflows",
      color: "var(--primary-color)",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      desc: "Always exploring new technologies and industry best practices",
      color: "var(--secondary-color)",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Professional Growth",
      description:
        "Promoted from Intern to Associate Software Engineer in 6 months",
      highlight: "6 Months",
    },
    {
      icon: "🎯",
      title: "Active Projects",
      description:
        "Currently maintaining 3 production systems serving real users",
      highlight: "3 Systems",
    },
    {
      icon: "💡",
      title: "Innovation Impact",
      description: "Developed payment integration supporting multiple gateways",
      highlight: "Multi-Gateway",
    },
    {
      icon: "🎓",
      title: "Academic Excellence",
      description:
        "4th year Software Engineering student with strong performance",
      highlight: "Top Student",
    },
  ];

  // Social links with Unicode alternatives as backup
  const socialLinks = [
    {
      url: "https://github.com/IT21191688",
      faIcon: "fab fa-github",
      unicode: "&#xf09b;", // GitHub unicode
      label: "GitHub",
      color: "#333",
    },
    {
      url: "https://www.linkedin.com/in/sadeepa-lakshan-a3099a215/",
      faIcon: "fab fa-linkedin",
      unicode: "&#xf08c;", // LinkedIn unicode
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      url: "mailto:sadeepalakshan0804@gmail.com",
      faIcon: "fas fa-envelope",
      unicode: "&#xf0e0;", // Envelope unicode
      label: "Email",
      color: "#ea4335",
    },
    {
      url: "https://wa.me/94713477746",
      faIcon: "fab fa-whatsapp",
      unicode: "&#xf232;", // WhatsApp unicode
      label: "WhatsApp",
      color: "#25d366",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            Discover my journey, skills, and passion for creating innovative
            software solutions
          </p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="profile-card modern-card">
              <div className="profile-image-container">
                <div className="profile-image floating">
                  <img
                    src={ProfileImg}
                    alt="Sadeepa Ruwanpura"
                    onError={(e) => {
                      e.target.src = "assets/img/profile123.jpg";
                    }}
                  />
                  <div className="image-overlay">
                    <div className="tech-badges">
                      <span className="tech-badge">⚛️</span>
                      <span className="tech-badge">🚀</span>
                      <span className="tech-badge">💾</span>
                      <span className="tech-badge">🎬</span>
                    </div>
                  </div>
                </div>
                <div className="profile-status">
                  <div className="status-indicator">
                    <div className="pulse-dot"></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>

              <div className="profile-info">
                <h3 className="gradient-text">Sadeepa Ruwanpura</h3>
                <p className="profile-role">Associate Software Engineer</p>
                <p className="profile-company">LayoutIndex (Pvt) Ltd</p>

                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="social-link"
                      target={
                        link.url.startsWith("mailto") ? "_self" : "_blank"
                      }
                      rel={
                        link.url.startsWith("mailto")
                          ? ""
                          : "noopener noreferrer"
                      }
                      title={link.label}
                      style={{ "--hover-color": link.color }}
                    >
                      <i className={link.faIcon}></i>
                      <span
                        className="social-fallback"
                        dangerouslySetInnerHTML={{ __html: link.unicode }}
                      ></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card modern-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-highlight gradient-text">
                      {achievement.highlight}
                    </div>
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="intro-section">
              <h3 className="gradient-text">
                Software Engineer from Sri Lanka
              </h3>
              <div className="intro-text">
                <p className="lead-paragraph">
                  I'm a passionate Associate Software Engineer with expertise in
                  modern web technologies, specializing in cinema management
                  systems and payment integrations. Currently pursuing my BSc
                  (Hons) in Information Technology at SLIIT while working
                  full-time at LayoutIndex.
                </p>
                <p>
                  With over a year of professional experience, I've developed
                  and maintained enterprise-level applications including POS
                  systems, self-service kiosks, and complex payment gateway
                  integrations. My journey combines academic excellence with
                  practical industry experience, allowing me to deliver
                  innovative solutions that enhance user experiences.
                </p>
                <p>
                  I'm particularly passionate about creating technology
                  solutions for the entertainment industry, having worked
                  extensively on cinema management systems that serve real
                  customers daily. My expertise spans from frontend React
                  applications to backend Node.js services, with a special focus
                  on payment processing and system integration.
                </p>
              </div>
            </div>

            <div className="info-tabs-section">
              <div className="tab-navigation">
                <button
                  className={`tab-btn ${
                    activeTab === "personal" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("personal")}
                >
                  <span className="tab-icon">👤</span>
                  Personal Info
                </button>
                <button
                  className={`tab-btn ${
                    activeTab === "interests" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("interests")}
                >
                  <span className="tab-icon">💡</span>
                  Interests & Expertise
                </button>
              </div>

              <div className="tab-content modern-card">
                {activeTab === "personal" && (
                  <div className="personal-tab fade-in-up">
                    <h4 className="tab-title gradient-text">
                      Personal Information
                    </h4>
                    <div className="info-grid">
                      {personalInfo.map((info, index) => (
                        <div key={index} className="info-item">
                          <div className="info-icon">{info.icon}</div>
                          <div className="info-content">
                            <span className="info-label">{info.label}</span>
                            {info.label === "Email" ? (
                              <a
                                href={`mailto:${info.value}`}
                                className="info-value clickable"
                              >
                                {info.value}
                              </a>
                            ) : info.label === "Phone" ? (
                              <a
                                href={`tel:+94713477746`}
                                className="info-value clickable"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="info-value">{info.value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "interests" && (
                  <div className="interests-tab fade-in-up">
                    <h4 className="tab-title gradient-text">
                      Areas of Expertise & Interest
                    </h4>
                    <div className="interests-grid">
                      {interests.map((interest, index) => (
                        <div key={index} className="interest-item">
                          <div
                            className="interest-icon"
                            style={{ "--accent-color": interest.color }}
                          >
                            {interest.icon}
                          </div>
                          <div className="interest-content">
                            <h5>{interest.title}</h5>
                            <p>{interest.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Font Awesome and fallback icons */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.2rem;
          position: relative;
          overflow: hidden;
        }

        .social-link i {
          font-family: "Font Awesome 6 Brands", "Font Awesome 6 Free";
          font-weight: 900;
          position: relative;
          z-index: 2;
        }

        .social-fallback {
          position: absolute;
          font-family: "Font Awesome 6 Brands", "Font Awesome 6 Free";
          font-weight: 900;
          font-size: 1.2rem;
          z-index: 1;
        }

        /* Hide fallback when Font Awesome icon is present */
        .social-link i:not(:empty) + .social-fallback {
          display: none;
        }

        /* Show fallback when Font Awesome fails */
        .social-link i:empty {
          display: none;
        }

        .social-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--hover-color, var(--primary-color));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          transform: translateY(-3px);
          border-color: var(--hover-color, var(--primary-color));
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .social-link:hover i,
        .social-link:hover .social-fallback {
          color: white;
        }

        .about-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-left {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: sticky;
          top: 100px;
        }

        .profile-card {
          text-align: center;
          padding: 2.5rem 2rem;
        }

        .profile-image-container {
          margin-bottom: 2rem;
        }

        .profile-image {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid transparent;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color),
            var(--tertiary-color)
          );
          padding: 2px;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          background: var(--bg-primary);
          display: block;
          margin: 0;
          padding: 0;
          transform: scale(0.85);
        }

        .image-overlay {
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          background: linear-gradient(
            45deg,
            rgba(255, 107, 107, 0.8),
            rgba(78, 205, 196, 0.8)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .profile-image:hover .image-overlay {
          opacity: 1;
        }

        .tech-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tech-badge {
          font-size: 1.5rem;
          animation: bounce 2s infinite;
          animation-delay: calc(var(--i, 0) * 0.2s);
        }

        .profile-status {
          margin-bottom: 1rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #10b981;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .profile-info h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .profile-role {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .profile-company {
          color: var(--primary-color);
          font-size: 1rem;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .achievement-card {
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
        }

        .achievement-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .achievement-highlight {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .achievement-card h4 {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .achievement-card p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
        }

        .intro-section {
          margin-bottom: 3rem;
        }

        .intro-section h3 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .intro-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .lead-paragraph {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .intro-text p {
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .tab-navigation {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          font-family: inherit;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .tab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50px;
          z-index: -1;
        }

        .tab-btn.active::before,
        .tab-btn:hover::before {
          opacity: 1;
        }

        .tab-btn.active,
        .tab-btn:hover {
          color: white !important;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .tab-icon {
          font-size: 1.2rem;
          position: relative;
          z-index: 2;
          color: inherit;
        }

        .tab-btn span:last-child {
          position: relative;
          z-index: 2;
          color: inherit;
        }

        .tab-content {
          padding: 2.5rem;
          min-height: 400px;
        }

        .tab-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
          background: rgba(255, 107, 107, 0.05);
        }

        .info-icon {
          font-size: 1.5rem;
          min-width: 40px;
          text-align: center;
        }

        .info-content {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .info-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
        }

        .info-value.clickable {
          color: var(--primary-color);
          transition: color 0.3s ease;
        }

        .info-value.clickable:hover {
          color: var(--secondary-color);
          text-decoration: underline;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .interest-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .interest-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--accent-color, var(--primary-color)),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .interest-item:hover::before {
          opacity: 1;
        }

        .interest-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          background: rgba(255, 107, 107, 0.03);
        }

        .interest-icon {
          font-size: 2.5rem;
          min-width: 60px;
          text-align: center;
          line-height: 1;
        }

        .interest-content h5 {
          color: var(--text-primary);
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .interest-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 1200px) {
          .about-content {
            grid-template-columns: 350px 1fr;
            gap: 3rem;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-left {
            position: static;
            flex-direction: row;
            gap: 2rem;
          }

          .profile-card {
            flex: 1;
          }

          .achievements-grid {
            flex: 1;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-left {
            flex-direction: column;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .tab-navigation {
            flex-direction: column;
            gap: 0.5rem;
          }

          .tab-btn {
            justify-content: center;
            padding: 0.8rem 1.5rem;
          }

          .tab-content {
            padding: 2rem 1.5rem;
          }

          .intro-section h3 {
            font-size: 1.8rem;
            text-align: center;
          }

          .interest-item {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }

          .interest-icon {
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .profile-image {
            width: 120px;
            height: 120px;
          }

          .profile-info h3 {
            font-size: 1.5rem;
          }

          .social-links {
            gap: 0.5rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .achievement-card {
            padding: 1rem;
          }

          .achievement-highlight {
            font-size: 1rem;
          }

          .tab-content {
            padding: 1.5rem 1rem;
            min-height: 300px;
          }

          .intro-section h3 {
            font-size: 1.5rem;
          }

          .lead-paragraph {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
