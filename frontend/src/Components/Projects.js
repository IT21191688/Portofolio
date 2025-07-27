// import React, { useState } from "react";
// // Import images from the correct path
// import hospitalImg from "../Images/hospitalmanagements.png";
// import financeImg from "../Images/financemanagement.png";
// import gamingImg from "../Images/oninegaming.png";
// import examImg from "../Images/onlineexamination.png";
// import projectMgmtImg from "../Images/ProjectManagement.jpg";
// import educodeImg from "../Images/educode.png";
// import divlinkImg from "../Images/divlink.png";
// import devstackImg from "../Images/devstack.png";

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [hoveredProject, setHoveredProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "CINEpoint POS System",
//       category: "professional",
//       image: "/assets/img/cinepoint.png", // Professional project image
//       description:
//         "Complete Point of Sale system for cinemas featuring ticket sales, concession management, voucher sales, private hire bookings, reservations, and credit memo processing.",
//       technologies: [
//         "React.js",
//         "TypeScript",
//         "Node.js",
//         "MongoDB",
//         "Payment Gateways",
//       ],
//       features: [
//         "Real-time Processing",
//         "Payment Integration",
//         "Inventory Management",
//         "Reporting",
//       ],
//       status: "Active Development",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "🎬",
//     },
//     {
//       id: 2,
//       title: "CINEstand Kiosk Software",
//       category: "professional",
//       image: "/assets/img/cinestand.png", // Professional project image
//       description:
//         "Interactive self-service kiosk application enabling customers to purchase tickets, select seats, view movie details, and buy concessions through intuitive interfaces.",
//       technologies: [
//         "React.js",
//         "TypeScript",
//         "Real-time APIs",
//         "Touch Interface",
//       ],
//       features: [
//         "Seat Selection",
//         "Movie Browsing",
//         "Self-service",
//         "Touch Optimized",
//       ],
//       status: "Active Maintenance",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "🖥️",
//     },
//     {
//       id: 3,
//       title: "Payment Terminal Integration",
//       category: "professional",
//       image: "/assets/img/payment-terminal.png", // Professional project image
//       description:
//         "Robust middle-server architecture connecting POS and kiosk systems with multiple payment terminals including Cardpointe, Windcave, and Clover-UK.",
//       technologies: [
//         "Node.js",
//         "Express.js",
//         "Payment APIs",
//         "Security Protocols",
//       ],
//       features: [
//         "Multi-gateway Support",
//         "Secure Processing",
//         "Real-time Validation",
//         "Error Handling",
//       ],
//       status: "Production",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "💳",
//     },
//     {
//       id: 4,
//       title: "The Shop E-Commerce Platform",
//       category: "training",
//       image: devstackImg,
//       description:
//         "Complete e-commerce solution built with modern stack including user authentication, product management, shopping cart, and order processing with MERN stack, TypeScript, and Cloudinary integration.",
//       technologies: [
//         "Nest.js",
//         "Next.js",
//         "PostgreSQL",
//         "Docker",
//         "CI/CD",
//         "TypeScript",
//         "Cloudinary",
//       ],
//       features: [
//         "User Authentication",
//         "Product Catalog",
//         "Shopping Cart",
//         "Order Management",
//         "Payment Integration",
//         "Report Generation",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/e-commerce-dev-backend",
//       live: "#",
//       icon: "🛒",
//     },
//     {
//       id: 5,
//       title: "EduCode Programming Environment",
//       category: "academic",
//       image: educodeImg,
//       description:
//         "Online code editor with voice recognition capabilities, enabling real-time voice command transcription and secure user authentication with JWT tokens.",
//       technologies: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Voice Recognition",
//         "JWT",
//       ],
//       features: [
//         "Voice Commands",
//         "Code Editor",
//         "Real-time Collaboration",
//         "JWT Authentication",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/SPM_Project-MERN-",
//       live: "#",
//       icon: "📝",
//     },
//     {
//       id: 6,
//       title: "DevLink Mobile Application",
//       category: "academic",
//       image: divlinkImg,
//       description:
//         "Mobile job application platform with efficient appointment scheduling functionality for enhanced user and administrator experience using React Native and TypeScript.",
//       technologies: ["React Native", "TypeScript", "MongoDB", "Node.js"],
//       features: [
//         "Job Applications",
//         "Appointment Scheduling",
//         "Mobile Optimized",
//         "Admin Panel",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/Uee",
//       live: "#",
//       icon: "📱",
//     },
//     {
//       id: 7,
//       title: "Hospital Management System",
//       category: "academic",
//       image: hospitalImg,
//       description:
//         "MEDIXO E-Health system for comprehensive hospital management including appointment management, patient records, and healthcare delivery optimization built with MERN stack.",
//       technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
//       features: [
//         "Appointment Management",
//         "Patient Records",
//         "Report Generation",
//         "Email Automation",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/ITP-Project",
//       live: "#",
//       icon: "🏥",
//     },
//     {
//       id: 8,
//       title: "Finance Management App",
//       category: "academic",
//       image: financeImg,
//       description:
//         "FinancialNavigator mobile application for Android using Kotlin, empowering users to manage finances and achieve financial goals with SQLite database.",
//       technologies: ["Kotlin", "SQLite", "Android Studio", "XML"],
//       features: [
//         "Financial Planning",
//         "Goal Setting",
//         "Expense Tracking",
//         "Reports",
//       ],
//       status: "Completed",
//       github:
//         "https://github.com/SadeepaLakahan/Finance-Management-Mobile-Application",
//       live: "#",
//       icon: "💰",
//     },
//     {
//       id: 9,
//       title: "Online Gaming Platform",
//       category: "academic",
//       image: gamingImg,
//       description:
//         "Online Game Search Platform is a Java-based application tailored exclusively for game enthusiasts to discover and explore a vast array of online games.",
//       technologies: ["Java", "MySQL", "Swing", "JDBC"],
//       features: [
//         "Game Search",
//         "User Profiles",
//         "Game Reviews",
//         "Recommendations",
//       ],
//       status: "Completed",
//       github:
//         "https://github.com/SadeepaLakahan/-Online-Game-Searching-and-Playing-Site",
//       live: "#",
//       icon: "🎮",
//     },
//     {
//       id: 10,
//       title: "Online Examination System",
//       category: "academic",
//       image: examImg,
//       description:
//         "Web-based platform built using HTML, CSS, JavaScript, and PHP, designed to facilitate efficient and secure online assessments with timer functionality.",
//       technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
//       features: [
//         "Online Exams",
//         "Timer Function",
//         "Auto Grading",
//         "Result Reports",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/Online-Examination-System",
//       live: "#",
//       icon: "📋",
//     },
//   ];

//   const categories = [
//     { key: "all", label: "All Projects", icon: "🚀" },
//     { key: "professional", label: "Professional", icon: "💼" },
//     { key: "training", label: "Training", icon: "🎓" },
//     { key: "academic", label: "Academic", icon: "📚" },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active Development":
//         return "#3b82f6";
//       case "Active Maintenance":
//         return "#10b981";
//       case "Production":
//         return "#8b5cf6";
//       case "Completed":
//         return "#6b7280";
//       default:
//         return "#6b7280";
//     }
//   };

//   return (
//     <section id="projects" className="section">
//       <div className="container">
//         <div className="section-title">
//           <h2>Featured Projects</h2>
//           <p>
//             A showcase of my professional work, training projects, and academic
//             achievements
//           </p>
//         </div>

//         {/* Filter Navigation */}
//         <div className="filter-nav">
//           {categories.map((category) => (
//             <button
//               key={category.key}
//               className={`filter-btn ${
//                 activeFilter === category.key ? "active" : ""
//               }`}
//               onClick={() => setActiveFilter(category.key)}
//             >
//               <span className="filter-icon">{category.icon}</span>
//               <span className="filter-label">{category.label}</span>
//               <span className="project-count">
//                 {category.key === "all"
//                   ? projects.length
//                   : projects.filter((p) => p.category === category.key).length}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="project-card modern-card"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="project-image">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   onError={(e) => {
//                     e.target.src = projectMgmtImg; // Fallback to ProjectManagement image
//                   }}
//                 />
//                 <div className="project-overlay">
//                   <div className="project-actions">
//                     {project.github !== "#" && (
//                       <a
//                         href={project.github}
//                         className="action-btn"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="View Source Code"
//                       >
//                         <i className="fab fa-github"></i>
//                       </a>
//                     )}
//                     {project.live !== "#" && (
//                       <a
//                         href={project.live}
//                         className="action-btn"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Live Demo"
//                       >
//                         <i className="fas fa-external-link-alt"></i>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-content">
//                 <div className="project-header">
//                   <div className="project-title-row">
//                     <span className="project-icon">{project.icon}</span>
//                     <h3 className="project-title">{project.title}</h3>
//                   </div>
//                   <div
//                     className="project-status"
//                     style={{
//                       backgroundColor: `${getStatusColor(project.status)}20`,
//                       color: getStatusColor(project.status),
//                     }}
//                   >
//                     {project.status}
//                   </div>
//                 </div>

//                 <p className="project-description">{project.description}</p>

//                 <div className="project-features">
//                   <h5>Key Features:</h5>
//                   <div className="features-grid">
//                     {project.features.map((feature, index) => (
//                       <span key={index} className="feature-tag">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-tech">
//                   <h5>Technologies:</h5>
//                   <div className="tech-stack">
//                     {project.technologies.map((tech, index) => (
//                       <span key={index} className="tech-tag">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-links">
//                   {project.github !== "#" && (
//                     <a
//                       href={project.github}
//                       className="project-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fab fa-github"></i>
//                       View Code
//                     </a>
//                   )}
//                   {project.live !== "#" && (
//                     <a
//                       href={project.live}
//                       className="project-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fas fa-external-link-alt"></i>
//                       Live Demo
//                     </a>
//                   )}
//                   {project.github === "#" && project.live === "#" && (
//                     <span className="project-note">
//                       💼 Professional Project - Private Repository
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* More Projects Card */}
//         <div className="more-projects-section">
//           <div className="more-projects-card modern-card">
//             <div className="more-projects-content">
//               <div className="more-icon">🔗</div>
//               <h3>More Projects</h3>
//               <p>Explore my complete portfolio on GitHub</p>
//               <a
//                 href="https://github.com/SadeepaLakahan"
//                 className="modern-btn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="fab fa-github"></i>
//                 Visit GitHub Profile
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Project Statistics */}
//         <div className="project-stats">
//           <div className="stats-grid">
//             <div className="stat-card">
//               <div className="stat-icon">💼</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {projects.filter((p) => p.category === "professional").length}
//                 </div>
//                 <div className="stat-label">Professional Projects</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">🚀</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {projects.filter((p) => p.status.includes("Active")).length}
//                 </div>
//                 <div className="stat-label">Active Projects</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">⚡</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {[...new Set(projects.flatMap((p) => p.technologies))].length}
//                 </div>
//                 <div className="stat-label">Technologies Used</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">🎯</div>
//               <div className="stat-content">
//                 <div className="stat-number">{projects.length}</div>
//                 <div className="stat-label">Total Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//         }

//         .filter-nav {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 3rem;
//           flex-wrap: wrap;
//         }

//         .filter-btn {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1rem 1.5rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 50px;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-weight: 500;
//           position: relative;
//         }

//         .filter-btn:hover,
//         .filter-btn.active {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
//         }

//         .filter-icon {
//           font-size: 1.2rem;
//         }

//         .project-count {
//           background: rgba(255, 255, 255, 0.2);
//           padding: 0.25rem 0.5rem;
//           border-radius: 10px;
//           font-size: 0.8rem;
//           font-weight: 600;
//         }

//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//           gap: 2rem;
//           margin-bottom: 3rem;
//         }

//         .project-card {
//           overflow: hidden;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
//         }

//         .project-image {
//           position: relative;
//           height: 250px;
//           overflow: hidden;
//           border-radius: 15px 15px 0 0;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//         }

//         .project-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .project-card:hover .project-image img {
//           transform: scale(1.1);
//         }

//         .project-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }

//         .project-actions {
//           display: flex;
//           gap: 1rem;
//         }

//         .action-btn {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: var(--primary-color);
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           font-size: 1.2rem;
//         }

//         .action-btn:hover {
//           background: var(--secondary-color);
//           transform: scale(1.1);
//         }

//         .project-content {
//           padding: 1.5rem;
//         }

//         .project-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 1rem;
//         }

//         .project-title-row {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .project-icon {
//           font-size: 1.5rem;
//         }

//         .project-title {
//           font-size: 1.3rem;
//           font-weight: 600;
//           color: white;
//           margin: 0;
//         }

//         .project-status {
//           padding: 0.25rem 0.75rem;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           white-space: nowrap;
//         }

//         .project-description {
//           color: var(--text-secondary);
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }

//         .project-features,
//         .project-tech {
//           margin-bottom: 1.5rem;
//         }

//         .project-features h5,
//         .project-tech h5 {
//           color: var(--primary-color);
//           margin-bottom: 0.75rem;
//           font-size: 0.9rem;
//           font-weight: 600;
//         }

//         .features-grid,
//         .tech-stack {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//         }

//         .feature-tag {
//           background: rgba(16, 185, 129, 0.2);
//           color: #10b981;
//           padding: 0.25rem 0.75rem;
//           border-radius: 15px;
//           font-size: 0.8rem;
//           font-weight: 500;
//         }

//         .tech-tag {
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           color: white;
//           padding: 0.25rem 0.75rem;
//           border-radius: 15px;
//           font-size: 0.8rem;
//           transition: all 0.3s ease;
//         }

//         .tech-tag:hover {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//         }

//         .project-links {
//           display: flex;
//           gap: 1rem;
//           margin-top: 1rem;
//           flex-wrap: wrap;
//         }

//         .project-link {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 25px;
//           color: white;
//           text-decoration: none;
//           font-size: 0.9rem;
//           transition: all 0.3s ease;
//         }

//         .project-link:hover {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//           transform: translateY(-2px);
//         }

//         .project-note {
//           color: var(--text-secondary);
//           font-size: 0.85rem;
//           font-style: italic;
//           padding: 0.5rem 0;
//         }

//         .more-projects-section {
//           margin-bottom: 3rem;
//         }

//         .more-projects-card {
//           text-align: center;
//           padding: 3rem 2rem;
//           background: linear-gradient(
//             135deg,
//             rgba(255, 107, 107, 0.1),
//             rgba(78, 205, 196, 0.1)
//           );
//         }

//         .more-projects-content {
//           max-width: 400px;
//           margin: 0 auto;
//         }

//         .more-icon {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .more-projects-card h3 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .more-projects-card p {
//           color: var(--text-secondary);
//           margin-bottom: 2rem;
//           font-size: 1.1rem;
//         }

//         .project-stats {
//           margin-top: 3rem;
//         }

//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 1.5rem;
//         }

//         .stat-card {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 15px;
//           transition: all 0.3s ease;
//         }

//         .stat-card:hover {
//           transform: translateY(-5px);
//           border-color: var(--primary-color);
//           background: var(--card-bg);
//         }

//         .stat-icon {
//           font-size: 2rem;
//           min-width: 50px;
//           text-align: center;
//         }

//         .stat-number {
//           font-size: 2rem;
//           font-weight: 700;
//           color: var(--primary-color);
//           line-height: 1;
//         }

//         .stat-label {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           margin-top: 0.25rem;
//         }

//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }

//           .filter-nav {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 0.5rem;
//           }

//           .filter-btn {
//             padding: 0.75rem 1rem;
//             font-size: 0.9rem;
//           }

//           .project-header {
//             flex-direction: column;
//             gap: 1rem;
//           }

//           .project-links {
//             flex-direction: column;
//           }

//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 480px) {
//           .stats-grid {
//             grid-template-columns: 1fr;
//           }

//           .stat-card {
//             flex-direction: column;
//             text-align: center;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
// import React, { useState } from "react";
// // Import images from the correct path
// import hospitalImg from "../Images/hospitalmanagements.png";
// import financeImg from "../Images/financemanagement.png";
// import gamingImg from "../Images/oninegaming.png";
// import examImg from "../Images/onlineexamination.png";
// import projectMgmtImg from "../Images/ProjectManagement.jpg";
// import educodeImg from "../Images/educode.png";
// import divlinkImg from "../Images/divlink.png";
// import devstackImg from "../Images/devstack.png";

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [hoveredProject, setHoveredProject] = useState(null);

//   console.log(hoveredProject);
//   const projects = [
//     {
//       id: 1,
//       title: "CINEpoint POS System",
//       category: "professional",
//       image: "/assets/img/cinepoint.png", // Professional project image
//       description:
//         "Complete Point of Sale system for cinemas featuring ticket sales, concession management, voucher sales, private hire bookings, reservations, and credit memo processing.",
//       technologies: [
//         "React.js",
//         "TypeScript",
//         "Node.js",
//         "MongoDB",
//         "Payment Gateways",
//       ],
//       features: [
//         "Real-time Processing",
//         "Payment Integration",
//         "Inventory Management",
//         "Reporting",
//       ],
//       status: "Active Development",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "🎬",
//     },
//     {
//       id: 2,
//       title: "CINEstand Kiosk Software",
//       category: "professional",
//       image: "/assets/img/cinestand.png", // Professional project image
//       description:
//         "Interactive self-service kiosk application enabling customers to purchase tickets, select seats, view movie details, and buy concessions through intuitive interfaces.",
//       technologies: [
//         "React.js",
//         "TypeScript",
//         "Real-time APIs",
//         "Touch Interface",
//       ],
//       features: [
//         "Seat Selection",
//         "Movie Browsing",
//         "Self-service",
//         "Touch Optimized",
//       ],
//       status: "Active Maintenance",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "🖥️",
//     },
//     {
//       id: 3,
//       title: "Payment Terminal Integration",
//       category: "professional",
//       image: "/assets/img/payment-terminal.png", // Professional project image
//       description:
//         "Robust middle-server architecture connecting POS and kiosk systems with multiple payment terminals including Cardpointe, Windcave, and Clover-UK.",
//       technologies: [
//         "Node.js",
//         "Express.js",
//         "Payment APIs",
//         "Security Protocols",
//       ],
//       features: [
//         "Multi-gateway Support",
//         "Secure Processing",
//         "Real-time Validation",
//         "Error Handling",
//       ],
//       status: "Production",
//       github: "#", // Professional project - no public repo
//       live: "#",
//       icon: "💳",
//     },
//     {
//       id: 4,
//       title: "The Shop E-Commerce Platform",
//       category: "training",
//       image: devstackImg,
//       description:
//         "Complete e-commerce solution built with modern stack including user authentication, product management, shopping cart, and order processing with MERN stack, TypeScript, and Cloudinary integration.",
//       technologies: [
//         "Nest.js",
//         "Next.js",
//         "PostgreSQL",
//         "Docker",
//         "CI/CD",
//         "TypeScript",
//         "Cloudinary",
//       ],
//       features: [
//         "User Authentication",
//         "Product Catalog",
//         "Shopping Cart",
//         "Order Management",
//         "Payment Integration",
//         "Report Generation",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/e-commerce-dev-backend",
//       live: "#",
//       icon: "🛒",
//     },
//     {
//       id: 5,
//       title: "EduCode Programming Environment",
//       category: "academic",
//       image: educodeImg,
//       description:
//         "Online code editor with voice recognition capabilities, enabling real-time voice command transcription and secure user authentication with JWT tokens.",
//       technologies: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Voice Recognition",
//         "JWT",
//       ],
//       features: [
//         "Voice Commands",
//         "Code Editor",
//         "Real-time Collaboration",
//         "JWT Authentication",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/SPM_Project-MERN-",
//       live: "#",
//       icon: "📝",
//     },
//     {
//       id: 6,
//       title: "DevLink Mobile Application",
//       category: "academic",
//       image: divlinkImg,
//       description:
//         "Mobile job application platform with efficient appointment scheduling functionality for enhanced user and administrator experience using React Native and TypeScript.",
//       technologies: ["React Native", "TypeScript", "MongoDB", "Node.js"],
//       features: [
//         "Job Applications",
//         "Appointment Scheduling",
//         "Mobile Optimized",
//         "Admin Panel",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/Uee",
//       live: "#",
//       icon: "📱",
//     },
//     {
//       id: 7,
//       title: "Hospital Management System",
//       category: "academic",
//       image: hospitalImg,
//       description:
//         "MEDIXO E-Health system for comprehensive hospital management including appointment management, patient records, and healthcare delivery optimization built with MERN stack.",
//       technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
//       features: [
//         "Appointment Management",
//         "Patient Records",
//         "Report Generation",
//         "Email Automation",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/ITP-Project",
//       live: "#",
//       icon: "🏥",
//     },
//     {
//       id: 8,
//       title: "Finance Management App",
//       category: "academic",
//       image: financeImg,
//       description:
//         "FinancialNavigator mobile application for Android using Kotlin, empowering users to manage finances and achieve financial goals with SQLite database.",
//       technologies: ["Kotlin", "SQLite", "Android Studio", "XML"],
//       features: [
//         "Financial Planning",
//         "Goal Setting",
//         "Expense Tracking",
//         "Reports",
//       ],
//       status: "Completed",
//       github:
//         "https://github.com/SadeepaLakahan/Finance-Management-Mobile-Application",
//       live: "#",
//       icon: "💰",
//     },
//     {
//       id: 9,
//       title: "Online Gaming Platform",
//       category: "academic",
//       image: gamingImg,
//       description:
//         "Online Game Search Platform is a Java-based application tailored exclusively for game enthusiasts to discover and explore a vast array of online games.",
//       technologies: ["Java", "MySQL", "Swing", "JDBC"],
//       features: [
//         "Game Search",
//         "User Profiles",
//         "Game Reviews",
//         "Recommendations",
//       ],
//       status: "Completed",
//       github:
//         "https://github.com/SadeepaLakahan/-Online-Game-Searching-and-Playing-Site",
//       live: "#",
//       icon: "🎮",
//     },
//     {
//       id: 10,
//       title: "Online Examination System",
//       category: "academic",
//       image: examImg,
//       description:
//         "Web-based platform built using HTML, CSS, JavaScript, and PHP, designed to facilitate efficient and secure online assessments with timer functionality.",
//       technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
//       features: [
//         "Online Exams",
//         "Timer Function",
//         "Auto Grading",
//         "Result Reports",
//       ],
//       status: "Completed",
//       github: "https://github.com/SadeepaLakahan/Online-Examination-System",
//       live: "#",
//       icon: "📋",
//     },
//   ];

//   const categories = [
//     { key: "all", label: "All Projects", icon: "🚀" },
//     { key: "professional", label: "Professional", icon: "💼" },
//     { key: "training", label: "Training", icon: "🎓" },
//     { key: "academic", label: "Academic", icon: "📚" },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active Development":
//         return "#3b82f6";
//       case "Active Maintenance":
//         return "#10b981";
//       case "Production":
//         return "#8b5cf6";
//       case "Completed":
//         return "#6b7280";
//       default:
//         return "#6b7280";
//     }
//   };

//   return (
//     <section id="projects" className="section">
//       <div className="container">
//         <div className="section-title">
//           <h2>Featured Projects</h2>
//           <p>
//             A showcase of my professional work, training projects, and academic
//             achievements
//           </p>
//         </div>

//         {/* Filter Navigation */}
//         <div className="filter-nav">
//           {categories.map((category) => (
//             <button
//               key={category.key}
//               className={`filter-btn ${
//                 activeFilter === category.key ? "active" : ""
//               }`}
//               onClick={() => setActiveFilter(category.key)}
//             >
//               <span className="filter-icon">{category.icon}</span>
//               <span className="filter-label">{category.label}</span>
//               <span className="project-count">
//                 {category.key === "all"
//                   ? projects.length
//                   : projects.filter((p) => p.category === category.key).length}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="project-card modern-card"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="project-image">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   onError={(e) => {
//                     e.target.src = projectMgmtImg; // Fallback to ProjectManagement image
//                   }}
//                 />
//                 <div className="project-overlay">
//                   <div className="project-actions">
//                     {project.github !== "#" && (
//                       <a
//                         href={project.github}
//                         className="action-btn"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="View Source Code"
//                       >
//                         <i className="fab fa-github"></i>
//                       </a>
//                     )}
//                     {project.live !== "#" && (
//                       <a
//                         href={project.live}
//                         className="action-btn"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Live Demo"
//                       >
//                         <i className="fas fa-external-link-alt"></i>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-content">
//                 <div className="project-header">
//                   <div className="project-title-row">
//                     <span className="project-icon">{project.icon}</span>
//                     <h3 className="project-title">{project.title}</h3>
//                   </div>
//                   <div
//                     className="project-status"
//                     style={{
//                       backgroundColor: `${getStatusColor(project.status)}20`,
//                       color: getStatusColor(project.status),
//                     }}
//                   >
//                     {project.status}
//                   </div>
//                 </div>

//                 <p className="project-description">{project.description}</p>

//                 <div className="project-features">
//                   <h5>Key Features:</h5>
//                   <div className="features-grid">
//                     {project.features.map((feature, index) => (
//                       <span key={index} className="feature-tag">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-tech">
//                   <h5>Technologies:</h5>
//                   <div className="tech-stack">
//                     {project.technologies.map((tech, index) => (
//                       <span key={index} className="tech-tag">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-links">
//                   {project.github !== "#" && (
//                     <a
//                       href={project.github}
//                       className="project-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fab fa-github"></i>
//                       View Code
//                     </a>
//                   )}
//                   {project.live !== "#" && (
//                     <a
//                       href={project.live}
//                       className="project-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fas fa-external-link-alt"></i>
//                       Live Demo
//                     </a>
//                   )}
//                   {project.github === "#" && project.live === "#" && (
//                     <span className="project-note">
//                       💼 Professional Project - Private Repository
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* More Projects Card */}
//         <div className="more-projects-section">
//           <div className="more-projects-card modern-card">
//             <div className="more-projects-content">
//               <div className="more-icon">🔗</div>
//               <h3>More Projects</h3>
//               <p>Explore my complete portfolio on GitHub</p>
//               <a
//                 href="https://github.com/SadeepaLakahan"
//                 className="modern-btn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="fab fa-github"></i>
//                 Visit GitHub Profile
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Project Statistics */}
//         <div className="project-stats">
//           <div className="stats-grid">
//             <div className="stat-card">
//               <div className="stat-icon">💼</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {projects.filter((p) => p.category === "professional").length}
//                 </div>
//                 <div className="stat-label">Professional Projects</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">🚀</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {projects.filter((p) => p.status.includes("Active")).length}
//                 </div>
//                 <div className="stat-label">Active Projects</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">⚡</div>
//               <div className="stat-content">
//                 <div className="stat-number">
//                   {[...new Set(projects.flatMap((p) => p.technologies))].length}
//                 </div>
//                 <div className="stat-label">Technologies Used</div>
//               </div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-icon">🎯</div>
//               <div className="stat-content">
//                 <div className="stat-number">{projects.length}</div>
//                 <div className="stat-label">Total Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//         }

//         .filter-nav {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 3rem;
//           flex-wrap: wrap;
//         }

//         .filter-btn {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1rem 1.5rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 50px;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-weight: 500;
//           position: relative;
//         }

//         .filter-btn:hover,
//         .filter-btn.active {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
//         }

//         .filter-icon {
//           font-size: 1.2rem;
//         }

//         .project-count {
//           background: rgba(255, 255, 255, 0.2);
//           padding: 0.25rem 0.5rem;
//           border-radius: 10px;
//           font-size: 0.8rem;
//           font-weight: 600;
//         }

//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//           gap: 2rem;
//           margin-bottom: 3rem;
//         }

//         .project-card {
//           overflow: hidden;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
//         }

//         .project-image {
//           position: relative;
//           height: 250px;
//           overflow: hidden;
//           border-radius: 15px 15px 0 0;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//         }

//         .project-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .project-card:hover .project-image img {
//           transform: scale(1.1);
//         }

//         .project-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }

//         .project-actions {
//           display: flex;
//           gap: 1rem;
//         }

//         .action-btn {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: var(--primary-color);
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           font-size: 1.2rem;
//         }

//         .action-btn:hover {
//           background: var(--secondary-color);
//           transform: scale(1.1);
//         }

//         .project-content {
//           padding: 1.5rem;
//         }

//         .project-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 1rem;
//         }

//         .project-title-row {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .project-icon {
//           font-size: 1.5rem;
//         }

//         .project-title {
//           font-size: 1.3rem;
//           font-weight: 600;
//           color: white;
//           margin: 0;
//         }

//         .project-status {
//           padding: 0.25rem 0.75rem;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           white-space: nowrap;
//         }

//         .project-description {
//           color: var(--text-secondary);
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }

//         .project-features,
//         .project-tech {
//           margin-bottom: 1.5rem;
//         }

//         .project-features h5,
//         .project-tech h5 {
//           color: var(--primary-color);
//           margin-bottom: 0.75rem;
//           font-size: 0.9rem;
//           font-weight: 600;
//         }

//         .features-grid,
//         .tech-stack {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//         }

//         .feature-tag {
//           background: rgba(16, 185, 129, 0.2);
//           color: #10b981;
//           padding: 0.25rem 0.75rem;
//           border-radius: 15px;
//           font-size: 0.8rem;
//           font-weight: 500;
//         }

//         .tech-tag {
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           color: white;
//           padding: 0.25rem 0.75rem;
//           border-radius: 15px;
//           font-size: 0.8rem;
//           transition: all 0.3s ease;
//         }

//         .tech-tag:hover {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//         }

//         .project-links {
//           display: flex;
//           gap: 1rem;
//           margin-top: 1rem;
//           flex-wrap: wrap;
//         }

//         .project-link {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 25px;
//           color: white;
//           text-decoration: none;
//           font-size: 0.9rem;
//           transition: all 0.3s ease;
//         }

//         .project-link:hover {
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-color: transparent;
//           transform: translateY(-2px);
//         }

//         .project-note {
//           color: var(--text-secondary);
//           font-size: 0.85rem;
//           font-style: italic;
//           padding: 0.5rem 0;
//         }

//         .more-projects-section {
//           margin-bottom: 3rem;
//         }

//         .more-projects-card {
//           text-align: center;
//           padding: 3rem 2rem;
//           background: linear-gradient(
//             135deg,
//             rgba(255, 107, 107, 0.1),
//             rgba(78, 205, 196, 0.1)
//           );
//         }

//         .more-projects-content {
//           max-width: 400px;
//           margin: 0 auto;
//         }

//         .more-icon {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .more-projects-card h3 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .more-projects-card p {
//           color: var(--text-secondary);
//           margin-bottom: 2rem;
//           font-size: 1.1rem;
//         }

//         .project-stats {
//           margin-top: 3rem;
//         }

//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 1.5rem;
//         }

//         .stat-card {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem;
//           background: var(--glass-bg);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 15px;
//           transition: all 0.3s ease;
//         }

//         .stat-card:hover {
//           transform: translateY(-5px);
//           border-color: var(--primary-color);
//           background: var(--card-bg);
//         }

//         .stat-icon {
//           font-size: 2rem;
//           min-width: 50px;
//           text-align: center;
//         }

//         .stat-number {
//           font-size: 2rem;
//           font-weight: 700;
//           color: var(--primary-color);
//           line-height: 1;
//         }

//         .stat-label {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           margin-top: 0.25rem;
//         }

//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }

//           .filter-nav {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 0.5rem;
//           }

//           .filter-btn {
//             padding: 0.75rem 1rem;
//             font-size: 0.9rem;
//           }

//           .project-header {
//             flex-direction: column;
//             gap: 1rem;
//           }

//           .project-links {
//             flex-direction: column;
//           }

//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 480px) {
//           .stats-grid {
//             grid-template-columns: 1fr;
//           }

//           .stat-card {
//             flex-direction: column;
//             text-align: center;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
import React, { useState } from "react";

// Import images from the correct path - update these paths based on your actual image locations
import hospitalImg from "../Images/hospitalmanagements.png";
import financeImg from "../Images/financemanagement.png";
import gamingImg from "../Images/oninegaming.png";
import examImg from "../Images/onlineexamination.png";
import projectMgmtImg from "../Images/ProjectManagement.jpg";
import educodeImg from "../Images/educode.png";
import divlinkImg from "../Images/divlink.png";
import devstackImg from "../Images/devstack.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CINEpoint POS System",
      category: "professional",
      image: "/assets/img/cinepoint_pos.png", // Use your actual image or fallback
      description:
        "Complete Point of Sale system for cinemas featuring ticket sales, concession management, voucher sales, private hire bookings, reservations, and credit memo processing.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Payment Gateways",
      ],
      features: [
        "Real-time Processing",
        "Payment Integration",
        "Inventory Management",
        "Reporting",
      ],
      status: "Active Development",
      github: "#", // Professional project - no public repo
      live: "#",
      icon: "🎬",
    },
    {
      id: 2,
      title: "CINEstand Kiosk Software",
      category: "professional",
      image: "/assets/img/cinestand.png", // Use your actual image or fallback
      description:
        "Interactive self-service kiosk application enabling customers to purchase tickets, select seats, view movie details, and buy concessions through intuitive interfaces.",
      technologies: [
        "React.js",
        "TypeScript",
        "Real-time APIs",
        "Touch Interface",
      ],
      features: [
        "Seat Selection",
        "Movie Browsing",
        "Self-service",
        "Touch Optimized",
      ],
      status: "Active Maintenance",
      github: "#", // Professional project - no public repo
      live: "#",
      icon: "🖥️",
    },
    {
      id: 3,
      title: "Payment Terminal Integration",
      category: "professional",
      image: "/assets/img/payment-terminal.png", // Use your actual image or fallback
      description:
        "Robust middle-server architecture connecting POS and kiosk systems with multiple payment terminals including Cardpointe, Windcave, and Clover-UK.",
      technologies: [
        "Node.js",
        "Express.js",
        "Payment APIs",
        "Security Protocols",
      ],
      features: [
        "Multi-gateway Support",
        "Secure Processing",
        "Real-time Validation",
        "Error Handling",
      ],
      status: "Production",
      github: "#", // Professional project - no public repo
      live: "#",
      icon: "💳",
    },
    {
      id: 4,
      title: "The Shop E-Commerce Platform",
      category: "training",
      image: devstackImg,
      description:
        "Complete e-commerce solution built with modern stack including user authentication, product management, shopping cart, and order processing with MERN stack, TypeScript, and Cloudinary integration.",
      technologies: [
        "Nest.js",
        "Next.js",
        "PostgreSQL",
        "Docker",
        "CI/CD",
        "TypeScript",
        "Cloudinary",
      ],
      features: [
        "User Authentication",
        "Product Catalog",
        "Shopping Cart",
        "Order Management",
        "Payment Integration",
        "Report Generation",
      ],
      status: "Completed",
      github: "https://github.com/SadeepaLakahan/e-commerce-dev-backend",
      live: "#",
      icon: "🛒",
    },
    {
      id: 5,
      title: "EduCode Programming Environment",
      category: "academic",
      image: educodeImg,
      description:
        "Online code editor with voice recognition capabilities, enabling real-time voice command transcription and secure user authentication with JWT tokens.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Voice Recognition",
        "JWT",
      ],
      features: [
        "Voice Commands",
        "Code Editor",
        "Real-time Collaboration",
        "JWT Authentication",
      ],
      status: "Completed",
      github: "https://github.com/SadeepaLakahan/SPM_Project-MERN-",
      live: "#",
      icon: "📝",
    },
    {
      id: 6,
      title: "DevLink Mobile Application",
      category: "academic",
      image: divlinkImg,
      description:
        "Mobile job application platform with efficient appointment scheduling functionality for enhanced user and administrator experience using React Native and TypeScript.",
      technologies: ["React Native", "TypeScript", "MongoDB", "Node.js"],
      features: [
        "Job Applications",
        "Appointment Scheduling",
        "Mobile Optimized",
        "Admin Panel",
      ],
      status: "Completed",
      github: "https://github.com/SadeepaLakahan/Uee",
      live: "#",
      icon: "📱",
    },
    {
      id: 7,
      title: "Hospital Management System",
      category: "academic",
      image: hospitalImg,
      description:
        "MEDIXO E-Health system for comprehensive hospital management including appointment management, patient records, and healthcare delivery optimization built with MERN stack.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Appointment Management",
        "Patient Records",
        "Report Generation",
        "Email Automation",
      ],
      status: "Completed",
      github: "https://github.com/SadeepaLakahan/ITP-Project",
      live: "#",
      icon: "🏥",
    },
    {
      id: 8,
      title: "Finance Management App",
      category: "academic",
      image: financeImg,
      description:
        "FinancialNavigator mobile application for Android using Kotlin, empowering users to manage finances and achieve financial goals with SQLite database.",
      technologies: ["Kotlin", "SQLite", "Android Studio", "XML"],
      features: [
        "Financial Planning",
        "Goal Setting",
        "Expense Tracking",
        "Reports",
      ],
      status: "Completed",
      github:
        "https://github.com/SadeepaLakahan/Finance-Management-Mobile-Application",
      live: "#",
      icon: "💰",
    },
    {
      id: 9,
      title: "Online Gaming Platform",
      category: "academic",
      image: gamingImg,
      description:
        "Online Game Search Platform is a Java-based application tailored exclusively for game enthusiasts to discover and explore a vast array of online games.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      features: [
        "Game Search",
        "User Profiles",
        "Game Reviews",
        "Recommendations",
      ],
      status: "Completed",
      github:
        "https://github.com/SadeepaLakahan/-Online-Game-Searching-and-Playing-Site",
      live: "#",
      icon: "🎮",
    },
    {
      id: 10,
      title: "Online Examination System",
      category: "academic",
      image: examImg,
      description:
        "Web-based platform built using HTML, CSS, JavaScript, and PHP, designed to facilitate efficient and secure online assessments with timer functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Online Exams",
        "Timer Function",
        "Auto Grading",
        "Result Reports",
      ],
      status: "Completed",
      github: "https://github.com/SadeepaLakahan/Online-Examination-System",
      live: "#",
      icon: "📋",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: "🚀", shortLabel: "All" },
    {
      key: "professional",
      label: "Professional",
      icon: "💼",
      shortLabel: "Pro",
    },
    { key: "training", label: "Training", icon: "🎓", shortLabel: "Train" },
    { key: "academic", label: "Academic", icon: "📚", shortLabel: "Acad" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active Development":
        return "#3b82f6";
      case "Active Maintenance":
        return "#10b981";
      case "Production":
        return "#8b5cf6";
      case "Completed":
        return "#6b7280";
      default:
        return "#6b7280";
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>
            A showcase of my professional work, training projects, and academic
            achievements
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-nav">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                activeFilter === category.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.key)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-label">{category.label}</span>
              <span className="filter-label-short">{category.shortLabel}</span>
              <span className="project-count">
                {category.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === category.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card modern-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = projectMgmtImg; // Fallback to ProjectManagement image
                  }}
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="action-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source Code"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="action-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-row">
                    <span className="project-icon">{project.icon}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div
                    className="project-status"
                    style={{
                      backgroundColor: `${getStatusColor(project.status)}20`,
                      color: getStatusColor(project.status),
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h5>Key Features:</h5>
                  <div className="features-grid">
                    {project.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-tech">
                  <h5>Technologies:</h5>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                      <span className="link-text">View Code</span>
                      <span className="link-text-short">Code</span>
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="link-text">Live Demo</span>
                      <span className="link-text-short">Demo</span>
                    </a>
                  )}
                  {project.github === "#" && project.live === "#" && (
                    <span className="project-note">
                      💼 Professional Project - Private Repository
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Card */}
        <div className="more-projects-section">
          <div className="more-projects-card modern-card">
            <div className="more-projects-content">
              <div className="more-icon">🔗</div>
              <h3>More Projects</h3>
              <p>Explore my complete portfolio on GitHub</p>
              <a
                href="https://github.com/SadeepaLakahan"
                className="modern-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Statistics */}
        <div className="project-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">💼</div>
              <div className="stat-content">
                <div className="stat-number">
                  {projects.filter((p) => p.category === "professional").length}
                </div>
                <div className="stat-label">Professional Projects</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <div className="stat-number">
                  {projects.filter((p) => p.status.includes("Active")).length}
                </div>
                <div className="stat-label">Active Projects</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">
                  {[...new Set(projects.flatMap((p) => p.technologies))].length}
                </div>
                <div className="stat-label">Technologies Used</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Total Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .filter-nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .filter-btn {
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
            position: relative;
            min-height: 60px;
          }

          .filter-btn:hover,
          .filter-btn.active {
            background: linear-gradient(
              135deg,
              var(--primary-color),
              var(--secondary-color)
            );
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          }

          .filter-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
          }

          .filter-label {
            display: block;
          }

          .filter-label-short {
            display: none;
          }

          .project-count {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.5rem;
            border-radius: 10px;
            font-size: 0.8rem;
            font-weight: 600;
            flex-shrink: 0;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .project-card {
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          }

          .project-image {
            position: relative;
            height: 250px;
            overflow: hidden;
            border-radius: 15px 15px 0 0;
            background: linear-gradient(
              135deg,
              var(--primary-color),
              var(--secondary-color)
            );
            flex-shrink: 0;
          }

          .project-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .project-card:hover .project-image img {
            transform: scale(1.1);
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .project-overlay {
            opacity: 1;
          }

          .project-actions {
            display: flex;
            gap: 1rem;
          }

          .action-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.2rem;
          }

          .action-btn:hover {
            background: var(--secondary-color);
            transform: scale(1.1);
          }

          .project-content {
            padding: 1.5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
            gap: 1rem;
          }

          .project-title-row {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex: 1;
            min-width: 0;
          }

          .project-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
          }

          .project-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: white;
            margin: 0;
            word-wrap: break-word;
            hyphens: auto;
          }

          .project-status {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .project-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
          }

          .project-features,
          .project-tech {
            margin-bottom: 1.5rem;
          }

          .project-features h5,
          .project-tech h5 {
            color: var(--primary-color);
            margin-bottom: 0.75rem;
            font-size: 0.9rem;
            font-weight: 600;
          }

          .features-grid,
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .feature-tag {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          .tech-tag {
            background: var(--glass-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.8rem;
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            background: linear-gradient(
              135deg,
              var(--primary-color),
              var(--secondary-color)
            );
            border-color: transparent;
          }

          .project-links {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: auto;
          }

          .project-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--glass-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 25px;
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            flex: 1;
            justify-content: center;
            min-width: 100px;
          }

          .project-link:hover {
            background: linear-gradient(
              135deg,
              var(--primary-color),
              var(--secondary-color)
            );
            border-color: transparent;
            transform: translateY(-2px);
          }

          .link-text {
            display: inline;
          }

          .link-text-short {
            display: none;
          }

          .project-note {
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-style: italic;
            padding: 0.5rem 0;
            text-align: center;
            width: 100%;
          }

          .more-projects-section {
            margin-bottom: 3rem;
          }

          .more-projects-card {
            text-align: center;
            padding: 3rem 2rem;
            background: linear-gradient(
              135deg,
              rgba(255, 107, 107, 0.1),
              rgba(78, 205, 196, 0.1)
            );
          }

          .more-projects-content {
            max-width: 400px;
            margin: 0 auto;
          }

          .more-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .more-projects-card h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            background: linear-gradient(
              135deg,
              var(--primary-color),
              var(--secondary-color)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .more-projects-card p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-size: 1.1rem;
          }

          .project-stats {
            margin-top: 3rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
          }

          .stat-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem;
            background: var(--glass-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-color);
            background: var(--card-bg);
          }

          .stat-icon {
            font-size: 2rem;
            min-width: 50px;
            text-align: center;
            flex-shrink: 0;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            line-height: 1;
          }

          .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-top: 0.25rem;
          }

          /* Responsive Design */
          @media (max-width: 1200px) {
            .container {
              padding: 0 1.5rem;
            }

            .projects-grid {
              grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            }
          }

          @media (max-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 1.5rem;
            }

            .filter-btn {
              padding: 0.8rem 1.2rem;
              gap: 0.5rem;
            }

            .project-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }

            .project-status {
              align-self: flex-start;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }

            .filter-nav {
              gap: 0.5rem;
              margin-bottom: 2rem;
            }

            .filter-btn {
              padding: 0.6rem 1rem;
              gap: 0.5rem;
              min-height: 50px;
            }

            .filter-label {
              display: none;
            }

            .filter-label-short {
              display: block;
              font-size: 0.8rem;
            }

            .projects-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .project-card {
              max-width: 100%;
            }

            .project-image {
              height: 200px;
            }

            .project-content {
              padding: 1rem;
            }

            .project-title {
              font-size: 1.1rem;
            }

            .project-description {
              font-size: 0.9rem;
              margin-bottom: 1rem;
            }

            .project-features,
            .project-tech {
              margin-bottom: 1rem;
            }

            .project-links {
              flex-direction: column;
              gap: 0.5rem;
            }

            .project-link {
              flex: none;
              width: 100%;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }

            .stat-card {
              padding: 1rem;
              flex-direction: column;
              text-align: center;
              gap: 0.5rem;
            }

            .stat-icon {
              min-width: auto;
            }

            .more-projects-card {
              padding: 2rem 1rem;
            }

            .more-projects-card h3 {
              font-size: 1.5rem;
            }

            .more-icon {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 600px) {
            .filter-btn {
              padding: 0.5rem 0.8rem;
              gap: 0.3rem;
              min-height: 45px;
              font-size: 0.8rem;
            }

            .filter-icon {
              font-size: 1rem;
            }

            .project-count {
              padding: 0.2rem 0.4rem;
              font-size: 0.7rem;
            }

            .project-image {
              height: 180px;
            }

            .project-content {
              padding: 0.8rem;
            }

            .project-title {
              font-size: 1rem;
              line-height: 1.3;
            }

            .project-icon {
              font-size: 1.2rem;
            }

            .project-status {
              font-size: 0.7rem;
              padding: 0.2rem 0.5rem;
            }

            .project-description {
              font-size: 0.85rem;
              line-height: 1.5;
            }

            .feature-tag,
            .tech-tag {
              font-size: 0.7rem;
              padding: 0.2rem 0.5rem;
            }

            .project-features h5,
            .project-tech h5 {
              font-size: 0.8rem;
              margin-bottom: 0.5rem;
            }

            .project-link {
              padding: 0.4rem 0.8rem;
              font-size: 0.8rem;
              gap: 0.3rem;
            }

            .link-text {
              display: none;
            }

            .link-text-short {
              display: inline;
            }

            .action-btn {
              width: 40px;
              height: 40px;
              font-size: 1rem;
            }

            .stats-grid {
              grid-template-columns: 1fr;
              gap: 0.8rem;
            }

            .stat-card {
              padding: 0.8rem;
              flex-direction: row;
              text-align: left;
            }

            .stat-number {
              font-size: 1.5rem;
            }

            .stat-label {
              font-size: 0.8rem;
            }

            .more-projects-card {
              padding: 1.5rem 0.8rem;
            }

            .more-projects-card h3 {
              font-size: 1.3rem;
            }

            .more-projects-card p {
              font-size: 0.9rem;
            }

            .more-icon {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 0.8rem;
            }

            .filter-nav {
              gap: 0.3rem;
              margin-bottom: 1.5rem;
            }

            .filter-btn {
              padding: 0.4rem 0.6rem;
              gap: 0.2rem;
              min-height: 40px;
              font-size: 0.7rem;
              border-radius: 25px;
            }

            .filter-icon {
              font-size: 0.9rem;
            }

            .filter-label-short {
              font-size: 0.7rem;
            }

            .project-count {
              padding: 0.15rem 0.3rem;
              font-size: 0.65rem;
            }

            .projects-grid {
              gap: 1rem;
            }

            .project-image {
              height: 160px;
            }

            .project-content {
              padding: 0.6rem;
            }

            .project-title-row {
              gap: 0.5rem;
            }

            .project-title {
              font-size: 0.9rem;
              line-height: 1.2;
            }

            .project-icon {
              font-size: 1rem;
            }

            .project-status {
              font-size: 0.65rem;
              padding: 0.15rem 0.4rem;
            }

            .project-description {
              font-size: 0.8rem;
              line-height: 1.4;
              margin-bottom: 0.8rem;
            }

            .project-features,
            .project-tech {
              margin-bottom: 0.8rem;
            }

            .project-features h5,
            .project-tech h5 {
              font-size: 0.75rem;
              margin-bottom: 0.4rem;
            }

            .feature-tag,
            .tech-tag {
              font-size: 0.65rem;
              padding: 0.15rem 0.4rem;
            }

            .features-grid,
            .tech-stack {
              gap: 0.3rem;
            }

            .project-links {
              gap: 0.4rem;
            }

            .project-link {
              padding: 0.3rem 0.6rem;
              font-size: 0.7rem;
              gap: 0.2rem;
              border-radius: 20px;
            }

            .action-btn {
              width: 35px;
              height: 35px;
              font-size: 0.9rem;
            }

            .project-note {
              font-size: 0.75rem;
              padding: 0.3rem 0;
            }

            .more-projects-card {
              padding: 1rem 0.6rem;
            }

            .more-projects-card h3 {
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
            }

            .more-projects-card p {
              font-size: 0.8rem;
              margin-bottom: 1rem;
            }

            .more-icon {
              font-size: 1.8rem;
              margin-bottom: 0.5rem;
            }

            .modern-btn {
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
            }

            .stat-card {
              padding: 0.6rem;
            }

            .stat-icon {
              font-size: 1.5rem;
            }

            .stat-number {
              font-size: 1.3rem;
            }

            .stat-label {
              font-size: 0.75rem;
            }
          }

          @media (max-width: 380px) {
            .container {
              padding: 0 0.5rem;
            }

            .section-title h2 {
              font-size: 1.8rem;
            }

            .section-title p {
              font-size: 0.9rem;
            }

            .filter-nav {
              gap: 0.2rem;
            }

            .filter-btn {
              padding: 0.3rem 0.4rem;
              gap: 0.1rem;
              min-height: 35px;
              font-size: 0.65rem;
              border-radius: 20px;
            }

            .filter-icon {
              font-size: 0.8rem;
            }

            .filter-label-short {
              font-size: 0.65rem;
            }

            .project-count {
              padding: 0.1rem 0.25rem;
              font-size: 0.6rem;
            }

            .project-image {
              height: 140px;
            }

            .project-content {
              padding: 0.5rem;
            }

            .project-title {
              font-size: 0.85rem;
              line-height: 1.1;
            }

            .project-icon {
              font-size: 0.9rem;
            }

            .project-status {
              font-size: 0.6rem;
              padding: 0.1rem 0.3rem;
            }

            .project-description {
              font-size: 0.75rem;
              line-height: 1.3;
              margin-bottom: 0.6rem;
            }

            .project-features,
            .project-tech {
              margin-bottom: 0.6rem;
            }

            .project-features h5,
            .project-tech h5 {
              font-size: 0.7rem;
              margin-bottom: 0.3rem;
            }

            .feature-tag,
            .tech-tag {
              font-size: 0.6rem;
              padding: 0.1rem 0.3rem;
            }

            .project-links {
              gap: 0.3rem;
            }

            .project-link {
              padding: 0.25rem 0.4rem;
              font-size: 0.65rem;
              gap: 0.15rem;
              border-radius: 15px;
            }

            .action-btn {
              width: 30px;
              height: 30px;
              font-size: 0.8rem;
            }

            .more-projects-card {
              padding: 0.8rem 0.5rem;
            }

            .more-projects-card h3 {
              font-size: 1rem;
              margin-bottom: 0.4rem;
            }

            .more-projects-card p {
              font-size: 0.75rem;
              margin-bottom: 0.8rem;
            }

            .more-icon {
              font-size: 1.5rem;
              margin-bottom: 0.4rem;
            }

            .modern-btn {
              padding: 0.4rem 0.8rem;
              font-size: 0.7rem;
            }

            .stat-card {
              padding: 0.5rem;
              gap: 0.3rem;
            }

            .stat-icon {
              font-size: 1.2rem;
            }

            .stat-number {
              font-size: 1.1rem;
            }

            .stat-label {
              font-size: 0.7rem;
            }
          }

          @media (max-width: 320px) {
            .container {
              padding: 0 0.3rem;
            }

            .section-title {
              margin-bottom: 2rem;
            }

            .section-title h2 {
              font-size: 1.5rem;
            }

            .section-title p {
              font-size: 0.8rem;
            }

            .filter-nav {
              gap: 0.1rem;
              margin-bottom: 1rem;
            }

            .filter-btn {
              padding: 0.2rem 0.3rem;
              gap: 0.05rem;
              min-height: 30px;
              font-size: 0.6rem;
              border-radius: 15px;
            }

            .filter-icon {
              font-size: 0.7rem;
            }

            .filter-label-short {
              display: none;
            }

            .project-count {
              display: none;
            }

            .projects-grid {
              gap: 0.8rem;
            }

            .project-image {
              height: 120px;
            }

            .project-content {
              padding: 0.4rem;
            }

            .project-title-row {
              gap: 0.3rem;
            }

            .project-title {
              font-size: 0.8rem;
              line-height: 1;
            }

            .project-icon {
              font-size: 0.8rem;
            }

            .project-status {
              font-size: 0.55rem;
              padding: 0.05rem 0.2rem;
            }

            .project-description {
              font-size: 0.7rem;
              line-height: 1.2;
              margin-bottom: 0.5rem;
            }

            .project-features,
            .project-tech {
              margin-bottom: 0.5rem;
            }

            .project-features h5,
            .project-tech h5 {
              font-size: 0.65rem;
              margin-bottom: 0.2rem;
            }

            .feature-tag,
            .tech-tag {
              font-size: 0.55rem;
              padding: 0.05rem 0.2rem;
            }

            .features-grid,
            .tech-stack {
              gap: 0.2rem;
            }

            .project-links {
              gap: 0.2rem;
            }

            .project-link {
              padding: 0.2rem 0.3rem;
              font-size: 0.6rem;
              gap: 0.1rem;
              border-radius: 10px;
            }

            .action-btn {
              width: 25px;
              height: 25px;
              font-size: 0.7rem;
            }

            .project-note {
              font-size: 0.65rem;
              padding: 0.2rem 0;
            }

            .more-projects-section {
              margin-bottom: 1.5rem;
            }

            .more-projects-card {
              padding: 0.6rem 0.4rem;
            }

            .more-projects-card h3 {
              font-size: 0.9rem;
              margin-bottom: 0.3rem;
            }

            .more-projects-card p {
              font-size: 0.7rem;
              margin-bottom: 0.6rem;
            }

            .more-icon {
              font-size: 1.2rem;
              margin-bottom: 0.3rem;
            }

            .modern-btn {
              padding: 0.3rem 0.6rem;
              font-size: 0.65rem;
            }

            .project-stats {
              margin-top: 1.5rem;
            }

            .stats-grid {
              gap: 0.5rem;
            }

            .stat-card {
              padding: 0.4rem;
              gap: 0.2rem;
            }

            .stat-icon {
              font-size: 1rem;
            }

            .stat-number {
              font-size: 1rem;
            }

            .stat-label {
              font-size: 0.65rem;
              line-height: 1.1;
            }
          }

          /* Animation for smooth transitions */
          @media (prefers-reduced-motion: no-preference) {
            .project-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .filter-btn {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .project-link:hover,
            .action-btn:hover {
              transition: all 0.2s ease;
            }
          }

          /* Dark mode adjustments */
          @media (prefers-color-scheme: dark) {
            .project-note {
              color: rgba(255, 255, 255, 0.6);
            }
          }

          /* High contrast mode */
          @media (prefers-contrast: high) {
            .filter-btn {
              border-width: 2px;
            }

            .project-card {
              border-width: 2px;
            }

            .feature-tag,
            .tech-tag {
              border: 1px solid currentColor;
            }
          }

          /* Print styles */
          @media print {
            .project-overlay,
            .action-btn {
              display: none;
            }

            .project-card {
              break-inside: avoid;
              margin-bottom: 1rem;
            }

            .filter-nav {
              display: none;
            }
          }
        `}{" "}
      </style>
    </section>
  );
}
