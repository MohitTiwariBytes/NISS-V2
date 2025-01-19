import React from "react";
import gsap from "gsap";
import ReactLenis from "lenis/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
    return (
        <ReactLenis root>
            <div className="main-home-page">
                <Navbar></Navbar>
                <div className="homePage">
                    <FirstSection></FirstSection>
                    <SecondSection></SecondSection>
                    <div className="seasid">

                    </div>
                </div>
            </div>
        </ReactLenis>
    )
}