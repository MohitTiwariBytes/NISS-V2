import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./SecondSection.css";
import star from "../../.././assets/star.svg"

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };

        const text = "Our Journey . . .";
        setWords(text.split(" "));
    }, []);

    useEffect(() => {
        // animation for the text
        gsap.fromTo(".asf span", {
            top: "100px"
        }, {
            top: "0px",
            ease: "power1.out",
            duration: 0.4,
            stagger: 0.03,
            scrollTrigger: {
                trigger: ".main-second-section",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        //animation for the bento cards

        gsap.fromTo(".bento div", {
            top: "150px"
        }, {
            top: "0px",
            ease: "power2.out",
            duration: 0.4,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".main-second-section",
                start: "top 40%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                markers: false,
            }
        });
    }, []);

    return (
        <div className="main-second-section">
            <div className="secondSection">
                <div className="asf-headline">
                    <h1 id="text-sdsd">
                        {words.map((word, index) => (
                            <div className="asf" style={{ overflow: "hidden" }} key={index}>
                                <span>{word}</span>
                            </div>
                        ))}
                    </h1>
                </div>
                <div className="safa">
                    <div className="bento">
                        <div className="bento-1">
                            <div className="star-side">
                                <img src={star} alt="" />
                            </div>
                            <div className="title-num">
                                <h1>2022</h1>
                            </div>
                            <div className="desc-sac">
                                <span>In <strong>2022</strong>, our company was founded, and we started working on our very first projects. This year marked the beginning of our journey, and we were excited to begin making our mark in the industry.</span>
                            </div>
                        </div>
                        <div className="bento-2">
                            <div className="star-side">
                                <img src={star} alt="" />
                            </div>
                            <div className="title-num">
                                <h1>2023</h1>
                            </div>
                            <div className="desc-sac">
                                <span>In <strong>2023</strong>, we grew and expanded our range of services. We started offering dynamic web applications, which allowed us to provide more advanced and interactive websites to our clients. This expansion helped us meet the changing needs of the market and attract new customers.</span>
                            </div>
                        </div>
                        <div className="bento-3">
                            <div className="star-side">
                                <img src={star} alt="" />
                            </div>
                            <div className="title-num">
                                <h1>2024</h1>
                            </div>
                            <div className="desc-sac">
                                <span>By <strong>2024</strong>, we reached a major milestone in our journey – successfully completing <strong>100 projects</strong>. This achievement was a significant reflection of our team's dedication, hard work, and commitment to delivering high-quality solutions. Over the past year, we had the opportunity to work with a wide range of clients, helping them bring their ideas to life and solving their unique challenges. Reaching 100 completed projects not only showed how far we had come, but it also highlighted the trust and satisfaction our clients had in our services. We took a moment to celebrate this accomplishment, but it also motivated us to keep pushing forward and continuing to grow as a company.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
