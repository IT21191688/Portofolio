import React, { useState } from "react";
import SadeepaLakshan_CV from './SadeepaLakshan_CV.pdf'
import { Link } from "react-scroll";

export default function Main() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <header id="header">
            <div class="d-flex flex-column">

                <div class="profile">
                    <img src="assets/img/profileImg.jpg" alt="" class="img-fluid rounded-circle"></img>
                    <h1 class="text-light"><a href="index.html">Sadeepa Ruwanpura</a></h1>
                    <div class="social-links mt-3 text-center">
                        <a href="https://github.com/IT21191688" class="github"><i class="bx bxl-github"></i></a>
                        <a href="https://www.facebook.com/sadeepa.lakshan.16906/" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/sadeepa-lakshan-a3099a215/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><Link style={{ cursor: "pointer" }} to='hero' spy={true} smooth={true} offset={-40} duration={200} onClick={closeMenu} className="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></Link></li>
                        <li><Link style={{ cursor: "pointer" }} to='about' spy={true} smooth={true} offset={-40} duration={200} onClick={closeMenu} className="nav-link scrollto active"><i class="bx bx-home"></i> <span>About</span></Link></li>
                        <li><Link style={{ cursor: "pointer" }} to='skills' spy={true} smooth={true} offset={-40} duration={200} onClick={closeMenu} className="nav-link scrollto active"><i class="bx bx-home"></i> <span>Skills</span></Link></li>
                        <li><Link style={{ cursor: "pointer" }} to='contact' spy={true} smooth={true} offset={0} duration={200} onClick={closeMenu} className="nav-link scrollto active"><i class="bx bx-home"></i> <span>Contact</span></Link></li>
                    </ul>
                </nav>
            </div>
            <br></br>
            <a href={SadeepaLakshan_CV}
                download="Sadeeepa-Ruwanpura-CV"
                target="_blank"
                rel="noreferrer" type="button" class="btn btn-success">Download CV</a>
        </header>
    )
}