// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// export default function Main() {
//   const [click, setClick] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   console.log("Active Section:", activeSection);
//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { to: "hero", icon: "🏠", label: "Home" },
//     { to: "about", icon: "👨‍💻", label: "About" },
//     { to: "experience", icon: "💼", label: "Experience" },
//     { to: "skills", icon: "⚡", label: "Skills" },
//     { to: "projects", icon: "🚀", label: "Projects" },
//     { to: "contact", icon: "📧", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* Fixed Header */}
//       <header className={`fixed-header ${scrolled ? "scrolled" : ""}`}>
//         <div className="header-content">
//           <div className="logo">
//             <span className="gradient-text">SR</span>
//           </div>

//           <nav className={`nav-menu ${click ? "active" : ""}`}>
//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={closeMenu}
//                 className="nav-link"
//                 activeClass="nav-active"
//                 onSetActive={() => setActiveSection(item.to)}
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 <span className="nav-label">{item.label}</span>
//               </Link>
//             ))}
//           </nav>

//           <div className="header-actions">
//             <a
//               href="/Sadeepa-Ruwanpura-CV.pdf"
//               download="Sadeepa-Ruwanpura-CV"
//               className="modern-btn"
//             >
//               📄 Download CV
//             </a>

//             <button className="mobile-toggle" onClick={handleClick}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </header>

//       <style jsx>{`
//         .fixed-header {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           padding: 1rem 2rem;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           background: rgba(10, 10, 10, 0.1);
//           backdrop-filter: blur(20px);
//         }

//         .fixed-header.scrolled {
//           background: rgba(10, 10, 10, 0.9);
//           border-bottom: 1px solid rgba(255, 107, 107, 0.2);
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
//         }

//         .header-content {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .logo {
//           font-size: 2.5rem;
//           font-weight: 800;
//           position: relative;
//         }

//         .logo::after {
//           content: "";
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-radius: 2px;
//         }

//         .nav-menu {
//           display: flex;
//           gap: 0.5rem;
//           align-items: center;
//         }

//         .nav-link {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           color: var(--text-primary);
//           text-decoration: none;
//           padding: 0.75rem 1.5rem;
//           border-radius: 50px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           cursor: pointer;
//           position: relative;
//           font-weight: 500;
//           border: 1px solid transparent;
//         }

//         .nav-link::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-radius: 50px;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: -1;
//         }

//         .nav-link:hover::before,
//         .nav-link.nav-active::before {
//           opacity: 1;
//         }

//         .nav-link:hover,
//         .nav-link.nav-active {
//           transform: translateY(-2px);
//           color: white;
//           border-color: rgba(255, 107, 107, 0.3);
//         }

//         .nav-icon {
//           font-size: 1.2rem;
//           filter: drop-shadow(0 0 8px currentColor);
//         }

//         .header-actions {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .mobile-toggle {
//           display: none;
//           flex-direction: column;
//           gap: 4px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0.5rem;
//           transition: all 0.3s ease;
//         }

//         .mobile-toggle span {
//           width: 25px;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           border-radius: 2px;
//         }

//         .mobile-toggle:hover span {
//           background: linear-gradient(
//             90deg,
//             var(--secondary-color),
//             var(--tertiary-color)
//           );
//         }

//         .nav-menu.active .mobile-toggle span:nth-child(1) {
//           transform: rotate(45deg) translate(8px, 8px);
//         }

//         .nav-menu.active .mobile-toggle span:nth-child(2) {
//           opacity: 0;
//         }

//         .nav-menu.active .mobile-toggle span:nth-child(3) {
//           transform: rotate(-45deg) translate(8px, -8px);
//         }

//         @media (max-width: 1024px) {
//           .nav-menu {
//             position: fixed;
//             top: 80px;
//             left: 0;
//             right: 0;
//             background: rgba(10, 10, 10, 0.95);
//             backdrop-filter: blur(20px);
//             flex-direction: column;
//             padding: 2rem;
//             transform: translateY(-100%);
//             transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//             border-bottom: 1px solid rgba(255, 107, 107, 0.2);
//             gap: 1rem;
//           }

//           .nav-menu.active {
//             transform: translateY(0);
//           }

//           .mobile-toggle {
//             display: flex;
//           }

//           .nav-link {
//             width: 100%;
//             justify-content: center;
//             padding: 1rem 2rem;
//             font-size: 1.1rem;
//           }

//           .header-actions {
//             gap: 0.5rem;
//           }

//           .modern-btn {
//             padding: 0.75rem 1.5rem;
//             font-size: 0.9rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .fixed-header {
//             padding: 1rem;
//           }

//           .logo {
//             font-size: 2rem;
//           }

//           .nav-menu {
//             top: 70px;
//             padding: 1.5rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .logo {
//             font-size: 1.8rem;
//           }

//           .modern-btn {
//             padding: 0.6rem 1.2rem;
//             font-size: 0.8rem;
//           }

//           .nav-link {
//             padding: 0.8rem 1.5rem;
//             font-size: 1rem;
//           }
//         }

//         /* Enhanced animations */
//         @keyframes headerSlideIn {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .fixed-header {
//           animation: headerSlideIn 0.5s ease-out;
//         }

//         .nav-link {
//           overflow: hidden;
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           );
//           transition: left 0.6s;
//         }

//         .nav-link:hover::after {
//           left: 100%;
//         }
//       `}</style>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Main() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  console.log("Active Section:", activeSection);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "hero", icon: "🏠", label: "Home" },
    { to: "about", icon: "👨‍💻", label: "About" },
    { to: "experience", icon: "💼", label: "Experience" },
    { to: "skills", icon: "⚡", label: "Skills" },
    { to: "projects", icon: "🚀", label: "Projects" },
    { to: "contact", icon: "📧", label: "Contact" },
  ];

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/assets/cv/Sadeepa-Ruwanpura-CV.pdf"; // Update this path to match your CV location
    link.download = "Sadeepa-Ruwanpura-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className={`fixed-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <div className="logo">
            <span className="gradient-text">SR</span>
          </div>

          <nav className={`nav-menu ${click ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="nav-link"
                activeClass="nav-active"
                onSetActive={() => setActiveSection(item.to)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              onClick={handleDownloadCV}
              className="modern-btn"
              title="Download CV"
            >
              📄 Download CV
            </button>

            <button
              className={`mobile-toggle ${click ? "active" : ""}`}
              onClick={handleClick}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(10, 10, 10, 0.1);
          backdrop-filter: blur(20px);
        }

        .fixed-header.scrolled {
          background: rgba(10, 10, 10, 0.9);
          border-bottom: 1px solid rgba(255, 107, 107, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 2.5rem;
          font-weight: 800;
          position: relative;
          cursor: pointer;
        }

        .logo::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 2px;
        }

        .nav-menu {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          font-weight: 500;
          border: 1px solid transparent;
        }

        .nav-link::before {
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
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover::before,
        .nav-link.nav-active::before {
          opacity: 1;
        }

        .nav-link:hover,
        .nav-link.nav-active {
          transform: translateY(-2px);
          color: white;
          border-color: rgba(255, 107, 107, 0.3);
        }

        .nav-icon {
          font-size: 1.2rem;
          filter: drop-shadow(0 0 8px currentColor);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-toggle span {
          width: 25px;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-color),
            var(--secondary-color)
          );
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .mobile-toggle:hover span {
          background: linear-gradient(
            90deg,
            var(--secondary-color),
            var(--tertiary-color)
          );
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        @media (max-width: 1024px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(255, 107, 107, 0.2);
            gap: 1rem;
          }

          .nav-menu.active {
            transform: translateY(0);
          }

          .mobile-toggle {
            display: flex;
          }

          .nav-link {
            width: 100%;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 1.1rem;
          }

          .header-actions {
            gap: 0.5rem;
          }

          .modern-btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .fixed-header {
            padding: 1rem;
          }

          .logo {
            font-size: 2rem;
          }

          .nav-menu {
            top: 70px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 1.8rem;
          }

          .modern-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }

          .nav-link {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }

        /* Enhanced animations */
        @keyframes headerSlideIn {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .fixed-header {
          animation: headerSlideIn 0.5s ease-out;
        }

        .nav-link {
          overflow: hidden;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s;
        }

        .nav-link:hover::after {
          left: 100%;
        }
      `}</style>
    </>
  );
}
