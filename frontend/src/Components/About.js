import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div id="main">
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                        <h2>About</h2>
                        <p>I'm an undergraduate with expertise in system
                            administration skills, software development skills,
                            and good communication skills, looking for an
                            opportunity to start a successful professional career
                            in Software development</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profileImg.jpg" class="img-fluid" alt=""></img>
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Developer in Sri Lanka.</h3>

                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>5 July 2000</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+94713477746</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Colombo,Sri Lanka</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>undergraduate at SLIIT(3rd Year)</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sadeepalakshan0804@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}