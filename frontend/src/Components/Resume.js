import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Resume() {

    return (
        <div id="main">

            <section id="skills" class="skills section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div class="row skills-content">

                        <div class="col-lg-6" data-aos="fade-up">



                            <div class="progress">
                                <span class="skill">HTML <i class="val">100%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>

                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">CSS <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>

                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">React.js/Node.js <i class="val">95%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>

                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Boostrap <i class="val">95%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>

                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                            <div class="progress">
                                <span class="skill">PHP <i class="val">95%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>

                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Java<i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Kotlin <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Git <i class="val">95%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}