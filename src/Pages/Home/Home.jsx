import React from "react";
import gsap from "gsap";
import ReactLenis from "lenis/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar";


gsap.registerPlugin(ScrollTrigger)


export default function Home() {
    return (
        <ReactLenis root>
            <div className="main-home-page">
                <Navbar></Navbar>
                <div className="homePage">
                </div>
            </div>
        </ReactLenis>
    )
}