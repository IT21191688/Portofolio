// // import React, { useState, useEffect } from "react";

// // export default function Home() {
// //   const [typedText, setTypedText] = useState("");
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);

// //   const textArray = [
// //     "Software Engineer",
// //     "Full Stack Developer",
// //     "React Specialist",
// //     "Cinema Tech Expert",
// //     "Payment Integration Pro",
// //   ];

// //   useEffect(() => {
// //     const currentWord = textArray[currentIndex];
// //     const shouldDelete = charIndex === currentWord.length + 1;
// //     const shouldMoveToNext = charIndex === 0 && isDeleting;

// //     if (shouldMoveToNext) {
// //       setIsDeleting(false);
// //       setCurrentIndex((prev) => (prev + 1) % textArray.length);
// //       return;
// //     }

// //     const timeout = setTimeout(
// //       () => {
// //         if (!isDeleting && shouldDelete) {
// //           setIsDeleting(true);
// //           return;
// //         }

// //         if (isDeleting) {
// //           setCharIndex((prev) => prev - 1);
// //         } else {
// //           setCharIndex((prev) => prev + 1);
// //         }
// //       },
// //       isDeleting ? 50 : 120
// //     );

// //     setTypedText(currentWord.substring(0, charIndex));

// //     return () => clearTimeout(timeout);
// //   }, [charIndex, currentIndex, isDeleting, textArray]);

// //   return (
// //     <>
// //       <section id="hero" className="hero-section">
// //         {/* Animated Background Particles */}
// //         <div className="hero-particles">
// //           {[...Array(20)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="particle"
// //               style={{
// //                 "--delay": `${i * 0.5}s`,
// //                 "--x": `${Math.random() * 100}%`,
// //                 "--y": `${Math.random() * 100}%`,
// //                 "--size": `${Math.random() * 4 + 2}px`,
// //               }}
// //             ></div>
// //           ))}
// //         </div>

// //         <div className="hero-content">
// //           <div className="hero-text">
// //             <br />
// //             <br />
// //             <br />
// //             <div className="greeting fade-in-up">
// //               <span className="wave">👋</span>
// //               <span>Hello, I'm</span>
// //             </div>

// //             <h1 className="hero-name fade-in-up">
// //               <span className="gradient-text name-first">Sadeepa</span>
// //               <span className="gradient-text name-last">Ruwanpura</span>
// //             </h1>

// //             <div className="hero-role fade-in-up">
// //               <span>I'm a </span>
// //               <span className="typed-text">
// //                 {typedText}
// //                 <span className="cursor">|</span>
// //               </span>
// //             </div>

// //             <p className="hero-description fade-in-up">
// //               Associate Software Engineer specializing in modern web
// //               technologies, cinema management systems, and payment integrations.
// //               Passionate about creating innovative solutions that enhance user
// //               experiences and drive business growth.
// //             </p>

// //             <div className="hero-cta fade-in-up">
// //               <a href="#contact" className="modern-btn primary">
// //                 <span>💬</span>
// //                 Get In Touch
// //               </a>
// //               <a href="#projects" className="modern-btn secondary">
// //                 <span>🚀</span>
// //                 View My Work
// //               </a>
// //             </div>

// //             <div className="hero-stats fade-in-up">
// //               <div className="stat-item">
// //                 <div className="stat-number gradient-text">1+</div>
// //                 <div className="stat-label">Years Experience</div>
// //               </div>
// //               <div className="stat-divider"></div>
// //               <div className="stat-item">
// //                 <div className="stat-number gradient-text">15+</div>
// //                 <div className="stat-label">Projects Completed</div>
// //               </div>
// //               <div className="stat-divider"></div>
// //               <div className="stat-item">
// //                 <div className="stat-number gradient-text">3</div>
// //                 <div className="stat-label">Active Systems</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="hero-visual fade-in-right">
// //             <div className="visual-container">
// //               <div className="code-window floating">
// //                 <div className="window-header">
// //                   <div className="window-controls">
// //                     <span className="control red"></span>
// //                     <span className="control yellow"></span>
// //                     <span className="control green"></span>
// //                   </div>
// //                   <div className="window-title">sadeepa-portfolio.jsx</div>
// //                 </div>
// //                 <div className="code-content">
// //                   <div className="code-line">
// //                     <span className="keyword">const</span>
// //                     <span className="variable"> developer</span>
// //                     <span className="operator"> = </span>
// //                     <span className="punctuation">{"{"}</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="property"> name</span>
// //                     <span className="punctuation">: </span>
// //                     <span className="string">'Sadeepa Ruwanpura'</span>
// //                     <span className="punctuation">,</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="property"> role</span>
// //                     <span className="punctuation">: </span>
// //                     <span className="string">
// //                       'Associate Software Engineer'
// //                     </span>
// //                     <span className="punctuation">,</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="property"> skills</span>
// //                     <span className="punctuation">: [</span>
// //                     <span className="string">'React'</span>
// //                     <span className="punctuation">, </span>
// //                     <span className="string">'Node.js'</span>
// //                     <span className="punctuation">, </span>
// //                     <span className="string">'Cinema Tech'</span>
// //                     <span className="punctuation">],</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="property"> specialties</span>
// //                     <span className="punctuation">: [</span>
// //                     <span className="string">'POS Systems'</span>
// //                     <span className="punctuation">, </span>
// //                     <span className="string">'Payment Gateways'</span>
// //                     <span className="punctuation">],</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="property"> passion</span>
// //                     <span className="punctuation">: </span>
// //                     <span className="string">'Innovation & Excellence'</span>
// //                   </div>
// //                   <div className="code-line">
// //                     <span className="punctuation">{"}"}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="tech-orbs">
// //                 <div className="tech-orb orb-1">⚛️</div>
// //                 <div className="tech-orb orb-2">🚀</div>
// //                 <div className="tech-orb orb-3">💾</div>
// //                 <div className="tech-orb orb-4">🎬</div>
// //                 <div className="tech-orb orb-5">💳</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <div className="scroll-indicator bounce">
// //           <div className="scroll-text">Discover More</div>
// //           <div className="scroll-arrow">↓</div>
// //         </div>
// //       </section>

// //       <style jsx>{`
// //         .hero-section {
// //           min-height: 100vh;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           position: relative;
// //           padding: 2rem;
// //           overflow: hidden;
// //         }

// //         .hero-particles {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           pointer-events: none;
// //           z-index: 1;
// //         }

// //         .particle {
// //           position: absolute;
// //           left: var(--x);
// //           top: var(--y);
// //           width: var(--size);
// //           height: var(--size);
// //           background: linear-gradient(
// //             45deg,
// //             var(--primary-color),
// //             var(--secondary-color)
// //           );
// //           border-radius: 50%;
// //           opacity: 0.6;
// //           animation: particleFloat 15s linear infinite;
// //           animation-delay: var(--delay);
// //         }

// //         @keyframes particleFloat {
// //           0% {
// //             transform: translateY(100vh) rotate(0deg);
// //             opacity: 0;
// //           }
// //           10% {
// //             opacity: 0.6;
// //           }
// //           90% {
// //             opacity: 0.6;
// //           }
// //           100% {
// //             transform: translateY(-100px) rotate(360deg);
// //             opacity: 0;
// //           }
// //         }

// //         .hero-content {
// //           display: grid;
// //           grid-template-columns: 1.2fr 1fr;
// //           gap: 4rem;
// //           max-width: 1200px;
// //           width: 100%;
// //           align-items: center;
// //           z-index: 2;
// //           position: relative;
// //         }

// //         .greeting {
// //           display: flex;
// //           align-items: center;
// //           gap: 0.75rem;
// //           font-size: 1.3rem;
// //           color: var(--text-secondary);
// //           margin-bottom: 1.5rem;
// //           font-weight: 500;
// //         }

// //         .wave {
// //           animation: wave 2s ease-in-out infinite;
// //           font-size: 1.5rem;
// //         }

// //         @keyframes wave {
// //           0%,
// //           50%,
// //           100% {
// //             transform: rotate(0deg);
// //           }
// //           25% {
// //             transform: rotate(20deg);
// //           }
// //           75% {
// //             transform: rotate(-10deg);
// //           }
// //         }

// //         .hero-name {
// //           font-size: clamp(3rem, 8vw, 5rem);
// //           font-weight: 800;
// //           line-height: 1;
// //           margin-bottom: 1.5rem;
// //           display: flex;
// //           flex-direction: column;
// //           gap: 0.5rem;
// //         }

// //         .name-first,
// //         .name-last {
// //           display: block;
// //           background-size: 300% 300%;
// //           animation: gradientShift 4s ease-in-out infinite;
// //         }

// //         .name-first {
// //           animation-delay: 0s;
// //         }

// //         .name-last {
// //           animation-delay: 1s;
// //         }

// //         .hero-role {
// //           font-size: 1.8rem;
// //           margin-bottom: 2rem;
// //           height: 4rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 0.5rem;
// //           font-weight: 500;
// //         }

// //         .typed-text {
// //           color: var(--primary-color);
// //           font-weight: 700;
// //           background: linear-gradient(
// //             135deg,
// //             var(--primary-color),
// //             var(--secondary-color)
// //           );
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }

// //         .cursor {
// //           animation: blink 1s infinite;
// //           color: var(--tertiary-color);
// //           font-weight: 300;
// //         }

// //         @keyframes blink {
// //           0%,
// //           50% {
// //             opacity: 1;
// //           }
// //           51%,
// //           100% {
// //             opacity: 0;
// //           }
// //         }

// //         .hero-description {
// //           font-size: 1.2rem;
// //           line-height: 1.8;
// //           color: var(--text-secondary);
// //           margin-bottom: 3rem;
// //           max-width: 600px;
// //         }

// //         .hero-cta {
// //           display: flex;
// //           gap: 1.5rem;
// //           margin-bottom: 4rem;
// //           flex-wrap: wrap;
// //         }

// //         .modern-btn {
// //           font-size: 1.1rem;
// //           padding: 1rem 2rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 0.5rem;
// //         }

// //         .modern-btn span {
// //           font-size: 1.2rem;
// //         }

// //         .hero-stats {
// //           display: flex;
// //           align-items: center;
// //           gap: 2rem;
// //           flex-wrap: wrap;
// //         }

// //         .stat-item {
// //           text-align: center;
// //         }

// //         .stat-number {
// //           font-size: 2.5rem;
// //           font-weight: 800;
// //           display: block;
// //           line-height: 1;
// //         }

// //         .stat-label {
// //           color: var(--text-secondary);
// //           font-size: 0.9rem;
// //           margin-top: 0.5rem;
// //           font-weight: 500;
// //         }

// //         .stat-divider {
// //           width: 2px;
// //           height: 40px;
// //           background: linear-gradient(
// //             to bottom,
// //             var(--primary-color),
// //             var(--secondary-color)
// //           );
// //           border-radius: 1px;
// //         }

// //         .hero-visual {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }

// //         .visual-container {
// //           position: relative;
// //           width: 100%;
// //           max-width: 450px;
// //         }

// //         .code-window {
// //           background: rgba(0, 0, 0, 0.6);
// //           border-radius: 15px;
// //           overflow: hidden;
// //           width: 100%;
// //           border: 1px solid rgba(255, 107, 107, 0.2);
// //           backdrop-filter: blur(20px);
// //           box-shadow: 0 20px 60px rgba(255, 107, 107, 0.1);
// //         }

// //         .window-header {
// //           background: rgba(0, 0, 0, 0.3);
// //           padding: 1rem 1.5rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 1rem;
// //           border-bottom: 1px solid rgba(255, 107, 107, 0.1);
// //         }

// //         .window-controls {
// //           display: flex;
// //           gap: 0.5rem;
// //         }

// //         .control {
// //           width: 12px;
// //           height: 12px;
// //           border-radius: 50%;
// //           position: relative;
// //         }

// //         .control.red {
// //           background: #ff5f56;
// //           box-shadow: 0 0 10px rgba(255, 95, 86, 0.5);
// //         }
// //         .control.yellow {
// //           background: #ffbd2e;
// //           box-shadow: 0 0 10px rgba(255, 189, 46, 0.5);
// //         }
// //         .control.green {
// //           background: #27ca3f;
// //           box-shadow: 0 0 10px rgba(39, 202, 63, 0.5);
// //         }

// //         .window-title {
// //           color: var(--text-secondary);
// //           font-size: 0.9rem;
// //           font-weight: 500;
// //         }

// //         .code-content {
// //           padding: 1.5rem;
// //           font-family: "Fira Code", "Consolas", monospace;
// //           font-size: 0.9rem;
// //           line-height: 1.8;
// //         }

// //         .code-line {
// //           margin-bottom: 0.5rem;
// //           transition: all 0.3s ease;
// //         }

// //         .code-line:hover {
// //           background: rgba(255, 107, 107, 0.05);
// //           border-radius: 4px;
// //           padding: 0 0.5rem;
// //           margin: 0 -0.5rem 0.5rem;
// //         }

// //         .keyword {
// //           color: #ff6b6b;
// //           font-weight: 600;
// //         }
// //         .variable {
// //           color: #4ecdc4;
// //         }
// //         .operator {
// //           color: #ffd93d;
// //         }
// //         .property {
// //           color: #6c5ce7;
// //         }
// //         .string {
// //           color: #a8e6cf;
// //         }
// //         .punctuation {
// //           color: #ff8a95;
// //         }

// //         .tech-orbs {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           pointer-events: none;
// //         }

// //         .tech-orb {
// //           position: absolute;
// //           width: 60px;
// //           height: 60px;
// //           background: var(--card-bg);
// //           border: 1px solid var(--border-color);
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 1.5rem;
// //           backdrop-filter: blur(10px);
// //           animation: techFloat 6s ease-in-out infinite;
// //         }

// //         .orb-1 {
// //           top: 10%;
// //           right: -10%;
// //           animation-delay: 0s;
// //         }

// //         .orb-2 {
// //           top: 30%;
// //           left: -15%;
// //           animation-delay: 1s;
// //         }

// //         .orb-3 {
// //           bottom: 30%;
// //           right: -5%;
// //           animation-delay: 2s;
// //         }

// //         .orb-4 {
// //           bottom: 10%;
// //           left: -10%;
// //           animation-delay: 3s;
// //         }

// //         .orb-5 {
// //           top: 50%;
// //           right: -20%;
// //           animation-delay: 4s;
// //         }

// //         @keyframes techFloat {
// //           0%,
// //           100% {
// //             transform: translateY(0) rotate(0deg);
// //             opacity: 0.6;
// //           }
// //           50% {
// //             transform: translateY(-20px) rotate(180deg);
// //             opacity: 1;
// //           }
// //         }

// //         .scroll-indicator {
// //           position: absolute;
// //           bottom: 3rem;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           text-align: center;
// //           z-index: 2;
// //         }

// //         .scroll-text {
// //           color: var(--text-secondary);
// //           font-size: 0.9rem;
// //           margin-bottom: 0.5rem;
// //           font-weight: 500;
// //         }

// //         .scroll-arrow {
// //           color: var(--primary-color);
// //           font-size: 1.5rem;
// //           animation: bounce 2s infinite;
// //         }

// //         /* Animation delays for stagger effect */
// //         .fade-in-up:nth-of-type(1) {
// //           animation-delay: 0.1s;
// //         }
// //         .fade-in-up:nth-of-type(2) {
// //           animation-delay: 0.2s;
// //         }
// //         .fade-in-up:nth-of-type(3) {
// //           animation-delay: 0.3s;
// //         }
// //         .fade-in-up:nth-of-type(4) {
// //           animation-delay: 0.4s;
// //         }
// //         .fade-in-up:nth-of-type(5) {
// //           animation-delay: 0.5s;
// //         }
// //         .fade-in-up:nth-of-type(6) {
// //           animation-delay: 0.6s;
// //         }

// //         .fade-in-right {
// //           animation-delay: 0.4s;
// //         }

// //         @media (max-width: 1024px) {
// //           .hero-content {
// //             grid-template-columns: 1fr;
// //             gap: 3rem;
// //             text-align: center;
// //           }

// //           .hero-name {
// //             font-size: clamp(2.5rem, 8vw, 4rem);
// //           }

// //           .hero-role {
// //             justify-content: center;
// //             font-size: 1.5rem;
// //           }

// //           .hero-cta {
// //             justify-content: center;
// //           }

// //           .hero-stats {
// //             justify-content: center;
// //           }

// //           .visual-container {
// //             max-width: 400px;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .hero-section {
// //             padding: 1rem;
// //             min-height: 90vh;
// //           }

// //           .hero-name {
// //             font-size: clamp(2rem, 8vw, 3rem);
// //             margin-bottom: 1rem;
// //           }

// //           .hero-role {
// //             font-size: 1.2rem;
// //             height: 3rem;
// //           }

// //           .hero-description {
// //             font-size: 1rem;
// //             margin-bottom: 2rem;
// //           }

// //           .hero-cta {
// //             flex-direction: column;
// //             gap: 1rem;
// //             margin-bottom: 3rem;
// //           }

// //           .modern-btn {
// //             width: 100%;
// //             justify-content: center;
// //           }

// //           .hero-stats {
// //             flex-direction: column;
// //             gap: 1.5rem;
// //           }

// //           .stat-divider {
// //             width: 40px;
// //             height: 2px;
// //           }

// //           .visual-container {
// //             max-width: 320px;
// //           }

// //           .code-content {
// //             font-size: 0.8rem;
// //             padding: 1rem;
// //           }

// //           .tech-orb {
// //             width: 50px;
// //             height: 50px;
// //             font-size: 1.2rem;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .greeting {
// //             font-size: 1.1rem;
// //           }

// //           .hero-name {
// //             font-size: clamp(1.8rem, 8vw, 2.5rem);
// //           }

// //           .hero-role {
// //             font-size: 1rem;
// //           }

// //           .hero-description {
// //             font-size: 0.9rem;
// //           }

// //           .stat-number {
// //             font-size: 2rem;
// //           }

// //           .visual-container {
// //             max-width: 280px;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";

// export default function Home() {
//   const [typedText, setTypedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const textArray = [
//     "Software Engineer",
//     "Full Stack Developer",
//     "React Specialist",
//     "Cinema Tech Expert",
//     "Payment Integration Pro",
//   ];

//   useEffect(() => {
//     const currentWord = textArray[currentIndex];
//     const shouldDelete = charIndex === currentWord.length + 1;
//     const shouldMoveToNext = charIndex === 0 && isDeleting;

//     if (shouldMoveToNext) {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % textArray.length);
//       return;
//     }

//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting && shouldDelete) {
//           setIsDeleting(true);
//           return;
//         }

//         if (isDeleting) {
//           setCharIndex((prev) => prev - 1);
//         } else {
//           setCharIndex((prev) => prev + 1);
//         }
//       },
//       isDeleting ? 50 : 120
//     );

//     setTypedText(currentWord.substring(0, charIndex));

//     return () => clearTimeout(timeout);
//   }, [charIndex, currentIndex, isDeleting, textArray]);

//   return (
//     <>
//       <section id="hero" className="hero-section">
//         {/* Animated Background Particles */}
//         <div className="hero-particles">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="particle"
//               style={{
//                 "--delay": `${i * 0.5}s`,
//                 "--x": `${Math.random() * 100}%`,
//                 "--y": `${Math.random() * 100}%`,
//                 "--size": `${Math.random() * 4 + 2}px`,
//               }}
//             ></div>
//           ))}
//         </div>

//         <div className="hero-content">
//           <div className="hero-text">
//             <div className="greeting fade-in-up">
//               <span className="wave">👋</span>
//               <span>Hello, I'm</span>
//             </div>

//             <h1 className="hero-name fade-in-up">
//               <span className="gradient-text name-first">Sadeepa</span>
//               <span className="gradient-text name-last">Ruwanpura</span>
//             </h1>

//             <div className="hero-role fade-in-up">
//               <span>I'm a </span>
//               <span className="typed-text">
//                 {typedText}
//                 <span className="cursor">|</span>
//               </span>
//             </div>

//             <p className="hero-description fade-in-up">
//               Associate Software Engineer specializing in modern web
//               technologies, cinema management systems, and payment integrations.
//               Passionate about creating innovative solutions that enhance user
//               experiences and drive business growth.
//             </p>

//             <div className="hero-cta fade-in-up">
//               <a href="#contact" className="modern-btn primary">
//                 <span>💬</span>
//                 Get In Touch
//               </a>
//               <a href="#projects" className="modern-btn secondary">
//                 <span>🚀</span>
//                 View My Work
//               </a>
//             </div>

//             <div className="hero-stats fade-in-up">
//               <div className="stat-item">
//                 <div className="stat-number gradient-text">1+</div>
//                 <div className="stat-label">Years Experience</div>
//               </div>
//               <div className="stat-divider"></div>
//               <div className="stat-item">
//                 <div className="stat-number gradient-text">15+</div>
//                 <div className="stat-label">Projects Completed</div>
//               </div>
//               <div className="stat-divider"></div>
//               <div className="stat-item">
//                 <div className="stat-number gradient-text">3</div>
//                 <div className="stat-label">Active Systems</div>
//               </div>
//             </div>
//           </div>

//           <div className="hero-visual fade-in-right">
//             <div className="visual-container">
//               <div className="code-window floating">
//                 <div className="window-header">
//                   <div className="window-controls">
//                     <span className="control red"></span>
//                     <span className="control yellow"></span>
//                     <span className="control green"></span>
//                   </div>
//                   <div className="window-title">sadeepa-portfolio.jsx</div>
//                 </div>
//                 <div className="code-content">
//                   <div className="code-line">
//                     <span className="keyword">const</span>
//                     <span className="variable"> developer</span>
//                     <span className="operator"> = </span>
//                     <span className="punctuation">{"{"}</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="property"> name</span>
//                     <span className="punctuation">: </span>
//                     <span className="string">'Sadeepa Ruwanpura'</span>
//                     <span className="punctuation">,</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="property"> role</span>
//                     <span className="punctuation">: </span>
//                     <span className="string">
//                       'Associate Software Engineer'
//                     </span>
//                     <span className="punctuation">,</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="property"> skills</span>
//                     <span className="punctuation">: [</span>
//                     <span className="string">'React'</span>
//                     <span className="punctuation">, </span>
//                     <span className="string">'Node.js'</span>
//                     <span className="punctuation">, </span>
//                     <span className="string">'Cinema Tech'</span>
//                     <span className="punctuation">],</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="property"> specialties</span>
//                     <span className="punctuation">: [</span>
//                     <span className="string">'POS Systems'</span>
//                     <span className="punctuation">, </span>
//                     <span className="string">'Payment Gateways'</span>
//                     <span className="punctuation">],</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="property"> passion</span>
//                     <span className="punctuation">: </span>
//                     <span className="string">'Innovation & Excellence'</span>
//                   </div>
//                   <div className="code-line">
//                     <span className="punctuation">{"}"}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="tech-orbs">
//                 <div className="tech-orb orb-1">⚛️</div>
//                 <div className="tech-orb orb-2">🚀</div>
//                 <div className="tech-orb orb-3">💾</div>
//                 <div className="tech-orb orb-4">🎬</div>
//                 <div className="tech-orb orb-5">💳</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="scroll-indicator bounce">
//           <div className="scroll-text">Discover More</div>
//           <div className="scroll-arrow">↓</div>
//         </div>
//       </section>

//       <style jsx>{`
//         .hero-section {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           padding: 2rem;
//           padding-top: 100px; /* Add top padding for header */
//           overflow: hidden;
//         }

//         .hero-particles {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .particle {
//           position: absolute;
//           left: var(--x);
//           top: var(--y);
//           width: var(--size);
//           height: var(--size);
//           background: linear-gradient(
//             45deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-radius: 50%;
//           opacity: 0.6;
//           animation: particleFloat 15s linear infinite;
//           animation-delay: var(--delay);
//         }

//         @keyframes particleFloat {
//           0% {
//             transform: translateY(100vh) rotate(0deg);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.6;
//           }
//           90% {
//             opacity: 0.6;
//           }
//           100% {
//             transform: translateY(-100px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .hero-content {
//           display: grid;
//           grid-template-columns: 1.2fr 1fr;
//           gap: 4rem;
//           max-width: 1200px;
//           width: 100%;
//           align-items: center;
//           z-index: 2;
//           position: relative;
//         }

//         .greeting {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           font-size: 1.3rem;
//           color: var(--text-secondary);
//           margin-bottom: 1.5rem;
//           font-weight: 500;
//         }

//         .wave {
//           animation: wave 2s ease-in-out infinite;
//           font-size: 1.5rem;
//         }

//         @keyframes wave {
//           0%,
//           50%,
//           100% {
//             transform: rotate(0deg);
//           }
//           25% {
//             transform: rotate(20deg);
//           }
//           75% {
//             transform: rotate(-10deg);
//           }
//         }

//         .hero-name {
//           font-size: clamp(3rem, 8vw, 5rem);
//           font-weight: 800;
//           line-height: 1;
//           margin-bottom: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }

//         .name-first,
//         .name-last {
//           display: block;
//           background-size: 300% 300%;
//           animation: gradientShift 4s ease-in-out infinite;
//         }

//         .name-first {
//           animation-delay: 0s;
//         }

//         .name-last {
//           animation-delay: 1s;
//         }

//         .hero-role {
//           font-size: 1.8rem;
//           margin-bottom: 2rem;
//           height: 4rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-weight: 500;
//         }

//         .typed-text {
//           color: var(--primary-color);
//           font-weight: 700;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .cursor {
//           animation: blink 1s infinite;
//           color: var(--tertiary-color);
//           font-weight: 300;
//         }

//         @keyframes blink {
//           0%,
//           50% {
//             opacity: 1;
//           }
//           51%,
//           100% {
//             opacity: 0;
//           }
//         }

//         .hero-description {
//           font-size: 1.2rem;
//           line-height: 1.8;
//           color: var(--text-secondary);
//           margin-bottom: 3rem;
//           max-width: 600px;
//         }

//         .hero-cta {
//           display: flex;
//           gap: 1.5rem;
//           margin-bottom: 4rem;
//           flex-wrap: wrap;
//         }

//         .modern-btn {
//           font-size: 1.1rem;
//           padding: 1rem 2rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .modern-btn span {
//           font-size: 1.2rem;
//         }

//         .hero-stats {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//           flex-wrap: wrap;
//         }

//         .stat-item {
//           text-align: center;
//         }

//         .stat-number {
//           font-size: 2.5rem;
//           font-weight: 800;
//           display: block;
//           line-height: 1;
//         }

//         .stat-label {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           margin-top: 0.5rem;
//           font-weight: 500;
//         }

//         .stat-divider {
//           width: 2px;
//           height: 40px;
//           background: linear-gradient(
//             to bottom,
//             var(--primary-color),
//             var(--secondary-color)
//           );
//           border-radius: 1px;
//         }

//         .hero-visual {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .visual-container {
//           position: relative;
//           width: 100%;
//           max-width: 450px;
//         }

//         .code-window {
//           background: rgba(0, 0, 0, 0.6);
//           border-radius: 15px;
//           overflow: hidden;
//           width: 100%;
//           border: 1px solid rgba(255, 107, 107, 0.2);
//           backdrop-filter: blur(20px);
//           box-shadow: 0 20px 60px rgba(255, 107, 107, 0.1);
//         }

//         .window-header {
//           background: rgba(0, 0, 0, 0.3);
//           padding: 1rem 1.5rem;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           border-bottom: 1px solid rgba(255, 107, 107, 0.1);
//         }

//         .window-controls {
//           display: flex;
//           gap: 0.5rem;
//         }

//         .control {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           position: relative;
//         }

//         .control.red {
//           background: #ff5f56;
//           box-shadow: 0 0 10px rgba(255, 95, 86, 0.5);
//         }
//         .control.yellow {
//           background: #ffbd2e;
//           box-shadow: 0 0 10px rgba(255, 189, 46, 0.5);
//         }
//         .control.green {
//           background: #27ca3f;
//           box-shadow: 0 0 10px rgba(39, 202, 63, 0.5);
//         }

//         .window-title {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           font-weight: 500;
//         }

//         .code-content {
//           padding: 1.5rem;
//           font-family: "Fira Code", "Consolas", monospace;
//           font-size: 0.9rem;
//           line-height: 1.8;
//         }

//         .code-line {
//           margin-bottom: 0.5rem;
//           transition: all 0.3s ease;
//         }

//         .code-line:hover {
//           background: rgba(255, 107, 107, 0.05);
//           border-radius: 4px;
//           padding: 0 0.5rem;
//           margin: 0 -0.5rem 0.5rem;
//         }

//         .keyword {
//           color: #ff6b6b;
//           font-weight: 600;
//         }
//         .variable {
//           color: #4ecdc4;
//         }
//         .operator {
//           color: #ffd93d;
//         }
//         .property {
//           color: #6c5ce7;
//         }
//         .string {
//           color: #a8e6cf;
//         }
//         .punctuation {
//           color: #ff8a95;
//         }

//         .tech-orbs {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//         }

//         .tech-orb {
//           position: absolute;
//           width: 60px;
//           height: 60px;
//           background: var(--card-bg);
//           border: 1px solid var(--border-color);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 1.5rem;
//           backdrop-filter: blur(10px);
//           animation: techFloat 6s ease-in-out infinite;
//         }

//         .orb-1 {
//           top: 10%;
//           right: -10%;
//           animation-delay: 0s;
//         }

//         .orb-2 {
//           top: 30%;
//           left: -15%;
//           animation-delay: 1s;
//         }

//         .orb-3 {
//           bottom: 30%;
//           right: -5%;
//           animation-delay: 2s;
//         }

//         .orb-4 {
//           bottom: 10%;
//           left: -10%;
//           animation-delay: 3s;
//         }

//         .orb-5 {
//           top: 50%;
//           right: -20%;
//           animation-delay: 4s;
//         }

//         @keyframes techFloat {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 0.6;
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//             opacity: 1;
//           }
//         }

//         .scroll-indicator {
//           position: absolute;
//           bottom: 3rem;
//           left: 50%;
//           transform: translateX(-50%);
//           text-align: center;
//           z-index: 2;
//         }

//         .scroll-text {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           margin-bottom: 0.5rem;
//           font-weight: 500;
//         }

//         .scroll-arrow {
//           color: var(--primary-color);
//           font-size: 1.5rem;
//           animation: bounce 2s infinite;
//         }

//         /* Animation delays for stagger effect */
//         .fade-in-up:nth-of-type(1) {
//           animation-delay: 0.1s;
//         }
//         .fade-in-up:nth-of-type(2) {
//           animation-delay: 0.2s;
//         }
//         .fade-in-up:nth-of-type(3) {
//           animation-delay: 0.3s;
//         }
//         .fade-in-up:nth-of-type(4) {
//           animation-delay: 0.4s;
//         }
//         .fade-in-up:nth-of-type(5) {
//           animation-delay: 0.5s;
//         }
//         .fade-in-up:nth-of-type(6) {
//           animation-delay: 0.6s;
//         }

//         .fade-in-right {
//           animation-delay: 0.4s;
//         }

//         @media (max-width: 1024px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             gap: 3rem;
//             text-align: center;
//           }

//           .hero-name {
//             font-size: clamp(2.5rem, 8vw, 4rem);
//           }

//           .hero-role {
//             justify-content: center;
//             font-size: 1.5rem;
//           }

//           .hero-cta {
//             justify-content: center;
//           }

//           .hero-stats {
//             justify-content: center;
//           }

//           .visual-container {
//             max-width: 400px;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section {
//             padding: 1rem;
//             padding-top: 80px;
//             min-height: 90vh;
//           }

//           .hero-name {
//             font-size: clamp(2rem, 8vw, 3rem);
//             margin-bottom: 1rem;
//           }

//           .hero-role {
//             font-size: 1.2rem;
//             height: 3rem;
//           }

//           .hero-description {
//             font-size: 1rem;
//             margin-bottom: 2rem;
//           }

//           .hero-cta {
//             flex-direction: column;
//             gap: 1rem;
//             margin-bottom: 3rem;
//           }

//           .modern-btn {
//             width: 100%;
//             justify-content: center;
//           }

//           .hero-stats {
//             flex-direction: column;
//             gap: 1.5rem;
//           }

//           .stat-divider {
//             width: 40px;
//             height: 2px;
//           }

//           .visual-container {
//             max-width: 320px;
//           }

//           .code-content {
//             font-size: 0.8rem;
//             padding: 1rem;
//           }

//           .tech-orb {
//             width: 50px;
//             height: 50px;
//             font-size: 1.2rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .greeting {
//             font-size: 1.1rem;
//           }

//           .hero-name {
//             font-size: clamp(1.8rem, 8vw, 2.5rem);
//           }

//           .hero-role {
//             font-size: 1rem;
//           }

//           .hero-description {
//             font-size: 0.9rem;
//           }

//           .stat-number {
//             font-size: 2rem;
//           }

//           .visual-container {
//             max-width: 280px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = [
    "Software Engineer",
    "Full Stack Developer",
    "React Specialist",
    "Cinema Tech Expert",
    "Payment Integration Pro",
  ];

  useEffect(() => {
    const currentWord = textArray[currentIndex];
    const shouldDelete = charIndex === currentWord.length + 1;
    const shouldMoveToNext = charIndex === 0 && isDeleting;

    if (shouldMoveToNext) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % textArray.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting && shouldDelete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setCharIndex((prev) => prev - 1);
        } else {
          setCharIndex((prev) => prev + 1);
        }
      },
      isDeleting ? 50 : 120
    );

    setTypedText(currentWord.substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, textArray]);

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Animated Background Particles */}
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                "--delay": `${i * 0.5}s`,
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
                "--size": `${Math.random() * 4 + 2}px`,
              }}
            ></div>
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting fade-in-up">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-name fade-in-up">
              <span className="gradient-text name-first">Sadeepa</span>
              <span className="gradient-text name-last">Ruwanpura</span>
            </h1>

            <div className="hero-role fade-in-up">
              <span>I'm a </span>
              <span className="typed-text">
                {typedText}
                <span className="cursor">|</span>
              </span>
            </div>

            <p className="hero-description fade-in-up">
              Associate Software Engineer specializing in modern web
              technologies, cinema management systems, and payment integrations.
              Passionate about creating innovative solutions that enhance user
              experiences and drive business growth.
            </p>

            <div className="hero-cta fade-in-up">
              <a href="#contact" className="modern-btn primary">
                <span>💬</span>
                Get In Touch
              </a>
              <a href="#projects" className="modern-btn secondary">
                <span>🚀</span>
                View My Work
              </a>
            </div>

            <div className="hero-stats fade-in-up">
              <div className="stat-item">
                <div className="stat-number gradient-text">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number gradient-text">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number gradient-text">3</div>
                <div className="stat-label">Active Systems</div>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-in-right">
            <div className="visual-container">
              <div className="code-window floating">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="window-title">sadeepa-portfolio.jsx</div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">const</span>
                    <span className="variable"> developer</span>
                    <span className="operator"> = </span>
                    <span className="punctuation">{"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="property"> name</span>
                    <span className="punctuation">: </span>
                    <span className="string">'Sadeepa Ruwanpura'</span>
                    <span className="punctuation">,</span>
                  </div>
                  <div className="code-line">
                    <span className="property"> role</span>
                    <span className="punctuation">: </span>
                    <span className="string">
                      'Associate Software Engineer'
                    </span>
                    <span className="punctuation">,</span>
                  </div>
                  <div className="code-line">
                    <span className="property"> skills</span>
                    <span className="punctuation">: [</span>
                    <span className="string">'React'</span>
                    <span className="punctuation">, </span>
                    <span className="string">'Node.js'</span>
                    <span className="punctuation">, </span>
                    <span className="string">'Cinema Tech'</span>
                    <span className="punctuation">],</span>
                  </div>
                  <div className="code-line">
                    <span className="property"> specialties</span>
                    <span className="punctuation">: [</span>
                    <span className="string">'POS Systems'</span>
                    <span className="punctuation">, </span>
                    <span className="string">'Payment Gateways'</span>
                    <span className="punctuation">],</span>
                  </div>
                  <div className="code-line">
                    <span className="property"> passion</span>
                    <span className="punctuation">: </span>
                    <span className="string">'Innovation & Excellence'</span>
                  </div>
                  <div className="code-line">
                    <span className="punctuation">{"}"}</span>
                  </div>
                </div>
              </div>

              <div className="tech-orbs">
                <div className="tech-orb orb-1">⚛️</div>
                <div className="tech-orb orb-2">🚀</div>
                <div className="tech-orb orb-3">💾</div>
                <div className="tech-orb orb-4">🎬</div>
                <div className="tech-orb orb-5">💳</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator bounce">
          <div className="scroll-text">Discover More</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          padding-top: 100px;
          overflow: hidden;
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          background: linear-gradient(
            45deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 50%;
          opacity: 0.6;
          animation: particleFloat 15s linear infinite;
          animation-delay: var(--delay);
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          width: 100%;
          align-items: center;
          z-index: 2;
          position: relative;
        }

        .greeting {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .wave {
          animation: wave 2s ease-in-out infinite;
          font-size: 1.5rem;
        }

        @keyframes wave {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .name-first,
        .name-last {
          display: block;
          background-size: 300% 300%;
          animation: gradientShift 4s ease-in-out infinite;
        }

        .name-first {
          animation-delay: 0s;
        }

        .name-last {
          animation-delay: 1s;
        }

        .hero-role {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          height: 4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .typed-text {
          color: var(--primary-color);
          font-weight: 700;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cursor {
          animation: blink 1s infinite;
          color: var(--tertiary-color);
          font-weight: 300;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .modern-btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modern-btn span {
          font-size: 1.2rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          display: block;
          line-height: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .stat-divider {
          width: 2px;
          height: 40px;
          background: linear-gradient(
            to bottom,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 1px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-container {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .code-window {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          border: 1px solid rgba(255, 107, 107, 0.2);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(255, 107, 107, 0.1);
        }

        .window-header {
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(255, 107, 107, 0.1);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
        }

        .control.red {
          background: #ff5f56;
          box-shadow: 0 0 10px rgba(255, 95, 86, 0.5);
        }
        .control.yellow {
          background: #ffbd2e;
          box-shadow: 0 0 10px rgba(255, 189, 46, 0.5);
        }
        .control.green {
          background: #27ca3f;
          box-shadow: 0 0 10px rgba(39, 202, 63, 0.5);
        }

        .window-title {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .code-content {
          padding: 1.5rem;
          font-family: "Fira Code", "Consolas", monospace;
          font-size: 0.9rem;
          line-height: 1.8;
        }

        .code-line {
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .code-line:hover {
          background: rgba(255, 107, 107, 0.05);
          border-radius: 4px;
          padding: 0 0.5rem;
          margin: 0 -0.5rem 0.5rem;
        }

        .keyword {
          color: #ff6b6b;
          font-weight: 600;
        }
        .variable {
          color: #4ecdc4;
        }
        .operator {
          color: #ffd93d;
        }
        .property {
          color: #6c5ce7;
        }
        .string {
          color: #a8e6cf;
        }
        .punctuation {
          color: #ff8a95;
        }

        .tech-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .tech-orb {
          position: absolute;
          width: 60px;
          height: 60px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          backdrop-filter: blur(10px);
          animation: techFloat 6s ease-in-out infinite;
        }

        .orb-1 {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          top: 30%;
          left: -15%;
          animation-delay: 1s;
        }

        .orb-3 {
          bottom: 30%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-4 {
          bottom: 10%;
          left: -10%;
          animation-delay: 3s;
        }

        .orb-5 {
          top: 50%;
          right: -20%;
          animation-delay: 4s;
        }

        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 2;
        }

        .scroll-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .scroll-arrow {
          color: var(--primary-color);
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }

        /* Animation delays for stagger effect */
        .fade-in-up:nth-of-type(1) {
          animation-delay: 0.1s;
        }
        .fade-in-up:nth-of-type(2) {
          animation-delay: 0.2s;
        }
        .fade-in-up:nth-of-type(3) {
          animation-delay: 0.3s;
        }
        .fade-in-up:nth-of-type(4) {
          animation-delay: 0.4s;
        }
        .fade-in-up:nth-of-type(5) {
          animation-delay: 0.5s;
        }
        .fade-in-up:nth-of-type(6) {
          animation-delay: 0.6s;
        }

        .fade-in-right {
          animation-delay: 0.4s;
        }

        /* FIXED RESPONSIVE STYLES */
        @media (max-width: 1200px) {
          .hero-content {
            gap: 3rem;
          }

          .visual-container {
            max-width: 400px;
          }
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 120px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-name {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }

          .hero-role {
            justify-content: center;
            font-size: 1.5rem;
          }

          .hero-cta {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .visual-container {
            max-width: 380px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 1rem;
            padding-top: 100px;
            min-height: 90vh;
          }

          .hero-content {
            gap: 2rem;
          }

          .greeting {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .hero-name {
            font-size: clamp(2rem, 8vw, 3rem);
            margin-bottom: 1rem;
          }

          .hero-role {
            font-size: 1.2rem;
            height: 3rem;
            flex-wrap: wrap;
            text-align: center;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 2rem;
            text-align: center;
          }

          .hero-cta {
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
            align-items: center;
          }

          .modern-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
            padding: 1rem 1.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .stat-divider {
            width: 40px;
            height: 2px;
          }

          .visual-container {
            max-width: 320px;
          }

          .code-content {
            font-size: 0.8rem;
            padding: 1rem;
          }

          .window-header {
            padding: 0.8rem 1rem;
          }

          .window-title {
            font-size: 0.8rem;
          }

          .tech-orb {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .scroll-indicator {
            bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 0.5rem;
            padding-top: 80px;
          }

          .greeting {
            font-size: 1rem;
            margin-bottom: 0.8rem;
          }

          .hero-name {
            font-size: clamp(1.8rem, 8vw, 2.5rem);
            margin-bottom: 0.8rem;
          }

          .hero-role {
            font-size: 1rem;
            height: auto;
            min-height: 2.5rem;
          }

          .hero-description {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .modern-btn {
            font-size: 0.9rem;
            padding: 0.8rem 1.2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }

          .visual-container {
            max-width: 280px;
          }

          .code-content {
            font-size: 0.7rem;
            padding: 0.8rem;
          }

          .tech-orb {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .scroll-text {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 360px) {
          .hero-section {
            padding: 0.25rem;
            padding-top: 70px;
          }

          .hero-name {
            font-size: clamp(1.5rem, 8vw, 2rem);
          }

          .hero-role {
            font-size: 0.9rem;
          }

          .hero-description {
            font-size: 0.85rem;
          }

          .modern-btn {
            font-size: 0.8rem;
            padding: 0.7rem 1rem;
          }

          .visual-container {
            max-width: 240px;
          }

          .code-content {
            font-size: 0.65rem;
            padding: 0.6rem;
          }

          .window-header {
            padding: 0.6rem 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
