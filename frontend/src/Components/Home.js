import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [typedText, setTypedText] = useState('');
    const textArray = ['Student', 'Developer'];
    let currentIndex = 0;

    useEffect(() => {
        const timeout = setInterval(() => {
            const nextIndex = currentIndex === textArray.length - 1 ? 0 : currentIndex + 1;
            setTypedText(textArray[nextIndex]);
            currentIndex = nextIndex;
        }, 2000);

        return () => clearTimeout(timeout);
    }, [currentIndex, textArray]);


    return (
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in" style={{ marginRight: "100px", marginTop: "100px" }}>
                <h2>Sadeepa Ruwanpura</h2>
                <h2> I'm <span style={{ color: "#d97307" }}>{typedText}</span></h2>
            </div>
        </section>
    )
}