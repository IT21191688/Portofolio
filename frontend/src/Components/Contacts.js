import React, { useState } from "react";
import { Link } from "react-router-dom";
import successimg from "../Images/modal-success.png";
import unsuccessimg from "../Images/model-unsuccess.png";
import axios from "axios";

export default function Contacts() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [massage, setMassage] = useState("");


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMassage(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !subject || !massage) {
            //SsetIsError(true);
            alert("please fill out required filds")
        } else {
            btnClick(e)
        }



        setIsLoading(true);
        setIsError(false);

        // Simulating form submission with a timeout
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);

            // Reset form fields
            setName('');
            setEmail('');
            setSubject('');
            setMassage('');
        }, 4000);
    };



    function btnClick(e) {


        const validate = true;

        if (validate === true) {

            e.preventDefault();


            const formData = new FormData();

            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('massage', massage);




            axios.post("http://localhost:8030/contactDetails/addContact", formData).then(function () {

                alert("Contact Add Successfully Please Check the Email.");
                //successModel();

            }).catch(function (err) {

                alert(err);
                //unsuccessModel();

            })

        }


    }

    function validation() {







    }

    /*
    function successModel() {

        const modelBtn = document.getElementById("model-btn")
        modelBtn.click();

    }

    function unsuccessModel() {

        const modelBtn = document.getElementById("model-btn-fail")
        modelBtn.click();

    }

    */

    return (
        <div id="main">


            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>

                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>No.811,Susil Read,South Cannel,Udawalawa</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>sadeepalakshan0804@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+94713477746/+94789605879</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{ border: 0, width: "100%", height: "290px" }} allowfullscreen></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form method="post" encType="multipart/form-data" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" value={name} onChange={handleNameChange} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" value={email} onChange={handleEmailChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" value={subject} onChange={handleSubjectChange} required />
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" value={massage} onChange={handleMessageChange} required></textarea>
                                </div>
                                <div className="my-3">
                                    {isLoading && <div className="loading">Loading</div>}
                                    {isError && <div className="error-message">Please fill all the required fields.</div>}
                                    {isSent && <div className="sent-message">Your message has been sent. Thank you!</div>}
                                </div>
                                <div className="text-center"><button type="submit" onClick={handleSubmit}>Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}