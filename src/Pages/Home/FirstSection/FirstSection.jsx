import { React, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FirstSection.css";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export default function FirstSection() {
    useEffect(() => {
        // Initial animations for text elements
        gsap.fromTo(
            "#asdf h1",
            {
                top: "700px",
            },
            {
                top: "0px",
                ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
                duration: 1.1,
                stagger: 0.07,
            }
        );

        gsap.fromTo(
            "#asdf span",
            {
                top: "700px",
            },
            {
                top: "0px",
                ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
                duration: 1.1,
                stagger: 0.02,
                delay: 0.4,
            }
        );

        // Circular text setup
        const text = document.querySelector(".textCirc");
        const circularText = "Scroll Down • Scroll Down • ";
        text.innerHTML = circularText
            .split("")
            .map(
                (char, i) =>
                    `<span style="transform:rotate(${i * (360 / circularText.length)
                    }deg)">${char}</span>`
            )
            .join("");

        // Clear any existing ScrollTrigger instances
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        // Create scroll-triggered rotation for text only
        gsap.fromTo(
            ".textCirc",
            {
                rotation: 360,
            },
            {
                rotation: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".main-first-section-home",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 0.5,
                },
            }
        );
        gsap.to(
            ".circleScrollDown",
            {
                bottom: "+=200px",
                ease: "none",
                scrollTrigger: {
                    trigger: ".main-first-section-home",
                    start: "top 0%",
                    end: "bottom 20%",
                    scrub: 0.5,
                },
            },
        );

        // Scale animation based on screen size
        const scaleAnimation = () => {
            const scaleValue = window.matchMedia("(max-width: 960px)").matches ? 0.5 : 1;
            gsap.fromTo(
                ".circleScrollDown",
                { scale: 0 },
                {
                    scale: scaleValue,
                    ease: "power3",
                    duration: 0.8,
                    delay: 0.5,
                }
            );
        };

        scaleAnimation(); // Trigger the animation on load

        // Clean up on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="main-first-section-home">
            <div className="firstSectionHome">
                <div className="circleScrollDown">
                    <div className="logoCirc"></div>
                    <div className="textCirc">
                        <p></p>
                    </div>
                </div>
                <div className="left-asdg">
                    <h1 id="sdfa">
                        <h1 id="asdf" style={{ overflow: "hidden" }}>
                            <h1>CREATING</h1>
                        </h1>
                        <h1 id="asdf" style={{ overflow: "hidden" }}>
                            <h1>WEBSITES</h1>
                        </h1>
                        <h1 id="asdf" style={{ overflow: "hidden" }}>
                            <h1>THAT</h1>
                        </h1>
                        <h1
                            id="asdf"
                            style={{
                                overflow: "hidden",
                                fontStyle: "italic",
                                color: "#4e4e4e",
                            }}
                        >
                            <h1>- INSPIRES</h1>
                        </h1>

                    </h1>
                    <div className="smallTextSide">
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>We</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>are</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>a</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>website</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>design</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>agency</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>based</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>in</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>India,</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>known</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>for</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>creating</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>exceptional</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>websites</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>that</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>stands</span>
                        </span>
                        <span id="asdf" style={{ overflow: "hidden" }}>
                            <span>out.</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
