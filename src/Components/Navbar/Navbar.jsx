import { React, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";
import logoTransparent from "../../assets/logoTransparentBlack.png";
import { Link } from "react-router-dom";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function Navbar() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const contactRef = useRef(null);

    const slideUp = (ref) => {
        const spans = ref.current.querySelectorAll("span");
        gsap.to(spans[0], {
            rotateX: -84,
            opacity: 0,
            top: "-13px",
            ease: "power2.inOut",
            duration: 0.5,
        });
        gsap.to(spans[1], {
            top: "-24px",
            ease: "power2.inOut",
            duration: 0.5,
        });
    };

    const slideDown = (ref) => {
        const spans = ref.current.querySelectorAll("span");
        gsap.to(spans[0], {
            opacity: 1,
            rotateX: 0,
            top: "0px",
            ease: "power2.inOut",
            duration: 0.5,
        });
        gsap.to(spans[1], {
            top: "40px",
            ease: "power2.inOut",
            duration: 0.5,
        });
    };

    return (
        <div className="main-navbar">
            <div className="navbar">
                <div className="logo-nav">
                    <Link to={"/"}>
                        <img src={logoTransparent} alt="Logo" />
                    </Link>
                </div>
                <div className="menuBtn">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <div className="menu"></div>

                <div className="navigation">
                    <Link to="/">
                        <div className="navigator">
                            <div
                                className="sdsds"
                                ref={homeRef}
                                onMouseEnter={() => slideUp(homeRef)}
                                onMouseLeave={() => slideDown(homeRef)}
                            >
                                <span className="text">HOME</span>
                                <span className="duplicate-text">HOME</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="navigator">
                            <div
                                className="sdsds"
                                ref={aboutRef}
                                onMouseEnter={() => slideUp(aboutRef)}
                                onMouseLeave={() => slideDown(aboutRef)}
                            >
                                <span className="text">ABOUT</span>
                                <span className="duplicate-text">ABOUT</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/work">
                        <div className="navigator">
                            <div
                                className="sdsds"
                                ref={workRef}
                                onMouseEnter={() => slideUp(workRef)}
                                onMouseLeave={() => slideDown(workRef)}
                            >
                                <span className="text">WORK</span>
                                <span className="duplicate-text">WORK</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="navigator">
                            <div
                                className="sdsds"
                                ref={contactRef}
                                onMouseEnter={() => slideUp(contactRef)}
                                onMouseLeave={() => slideDown(contactRef)}
                            >
                                <span className="text">GET IN TOUCH  →</span>
                                <span className="duplicate-text">GET IN TOUCH →</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
