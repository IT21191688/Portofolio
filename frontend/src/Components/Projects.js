import React, { useState } from "react";
import { Link } from "react-router-dom";
import hospital from '../Images/hospitalmanagements.png'
import finance from '../Images/financemanagement.png'
import gaming from '../Images/oninegaming.png'
import exam from '../Images/onlineexamination.png'
import more from '../Images/ProjectManagement.jpg'
import educode from '../Images/educode.png'
import divlink from '../Images/divlink.png'
import devstack from '../Images/devstack.png'


export default function Projects() {

    return (
        <div id="main">
            <section id="projects" class="about">
                <div class="container">
                    <div class="section-title">
                        <h2>Projects</h2>
                    </div>

                    <div class="row">

                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={hospital} alt="Project 1 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Hospital Management System</h5>
                                    <p class="card-text">MEDIXO E-Health is a dynamic hospital management system meticulously crafted using the MERN stack (MongoDB, Express.js, React, Node.js). This comprehensive platform is engineered to revolutionize healthcare management and delivery by optimizing processes and elevating patient care. It equips patients, doctors, and administrators with the tools they need to excel within the healthcare ecosystem.</p>
                                    <a href="https://github.com/IT21191688/ITP-Project" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={finance} alt="Project 2 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Finance Management Application</h5>
                                    <p class="card-text">FinancialNavigator is a multifaceted mobile application meticulously designed for Android, using the powerful Kotlin programming language. This comprehensive app empowers users to take control of their financial situation, set and achieve their financial goals, and navigate their professional journey with confidence.</p><br></br><br></br>
                                    <a href="https://github.com/IT21191688/Finance-Management-Mobile-Application" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={gaming} alt="Project 3 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Online Game Searching and Playing System</h5>
                                    <p class="card-text">The Online Game Search Platform is a Java-based application tailored exclusively for game enthusiasts. This platform serves as a user-friendly tool to discover and explore a vast array of online games. Its primary function is to streamline the process of finding exciting online games to play, enhancing the gaming experience for users.</p><br></br>
                                    <a href="https://github.com/IT21191688/-Online-Game-Searching-and-Playing-Site" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={exam} alt="Project 4 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Online Examination System</h5>
                                    <p class="card-text">The Online Examination System is a web-based platform built using HTML, CSS, JavaScript, and PHP, designed to facilitate efficient and secure online assessments. This system offers a user-friendly interface for both administrators and examinees, providing a seamless and convenient way to conduct exams.</p><br></br>
                                    <a href="https://github.com/IT21191688/Online-Examination-System" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <center>
                                    <img class="card-img-top" src={divlink} alt="Project 4 Image" style={{ height: '160px', width: '100px' }} /></center>
                                <div class="card-body">
                                    <h5 class="card-title">DIV Link Mobile Application</h5>
                                    <p class="card-text">DivLink, created with React Native and a TypeScript backend, is a vital application for Divisional Secretary Offices. It streamlines administrative tasks, improves data management, and enhances communication. With its user-friendly interface, DivLink empowers efficient and productive operations, making it an essential tool for effective divisional sector management.</p>
                                    <a href="https://github.com/IT21191688/Uee.git" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={educode} alt="Project 4 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Edu Code</h5>
                                    <p class="card-text">In the system, I took a pivotal role in developing a unique Online Code Editor with Voice Recognition, enhancing code editing capabilities, and enabling real-time voice command transcription through the 'Voice Recognition System.' Additionally, I strengthened security and access control by implementing user authentication with JWT tokens, contributing to an exceptional coding experience.</p>
                                    <a href="https://github.com/IT21191688/SPM_Project-MERN-" class="btn btn-primary">Code</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={devstack} alt="Project 4 Image" style={{ height: '160px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">The Shop E-Commerce</h5>
                                    <p class="card-text">Within the system, I designed and made a lively online shop using special tools like
                                        MERN stack, TypeScript, React (Vite), and Cloudinary for pictures. I organized how
                                        users, products, orders, reviews, shopping carts, payments, and help services work
                                        together. I also added good ways to create reports and send emails, making
                                        shopping easier for everyone.</p>
                                    <a href="https://github.com/IT21191688/e-commerce-dev-backend" class="btn btn-primary">Backend</a>&nbsp;
                                    <a href="https://github.com/IT21191688/e-commerce-dev-frontend" class="btn btn-primary">Frontend</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mt-3">
                            <div class="card">
                                <img class="card-img-top" src={more} alt="Project 4 Image" style={{ height: '160px' }} />
                                <div class="card-body"><br></br><br></br><br></br><br></br><br></br>
                                    <h3 class="card-title">More Projects</h3>
                                    <h5 class="card-text">Git Profile</h5><br></br><br></br>
                                    <a href="https://github.com/IT21191688" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}