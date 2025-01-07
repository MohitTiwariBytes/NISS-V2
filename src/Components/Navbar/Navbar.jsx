import { React, useEffect, useRef, useState } from "react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    // Desktop Navigation Animation

    const slideUp = (ref) => {
        const spans = ref.current.querySelectorAll("span");
        gsap.to(spans[0], {
            rotateX: -84,
            opacity: 0,
            top: "-13px",
            ease: "power3.inOut",
            duration: 0.5,
        });
        gsap.to(spans[1], {
            top: "-24px",
            ease: "power3.inOut",
            duration: 0.5,
        });
    };

    const slideDown = (ref) => {
        const spans = ref.current.querySelectorAll("span");
        gsap.to(spans[0], {
            opacity: 1,
            rotateX: 0,
            top: "0px",
            ease: "power3.inOut",
            duration: 0.5,
        });
        gsap.to(spans[1], {
            top: "40px",
            ease: "power3.inOut",
            duration: 0.5,
        });
    };

    // Mobile Menu Animation    

    useEffect(() => {
        gsap.set(".menu", { top: "-100%" })
        gsap.set(".item span", { top: "100px" })
        gsap.set("#adss", { opacity: 0, })
    }, [])


    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            gsap.fromTo(".line2", {
                top: '0',
                opacity: 1,
            }, {
                top: "-5px",
                opacity: 0,
                duration: 0.4,
                ease: "power4.inOut"
            })
            gsap.fromTo(".line1", {
                top: '0',
            }, {
                top: "5px",
                duration: 0.4,
                ease: "power4.inOut"
            })

            gsap.fromTo(".menu", {
                top: "-100%"
            }, {
                top: "0px",
                ease: CustomEase.create("custom", "0.76, 0, 0.24, 1"),
                duration: 1,
                onComplete: () => {
                    gsap.fromTo(".item span", {
                        top: "100px"
                    }, {
                        top: "0px",
                        ease: "power2.inOut",
                        duration: 1,
                        stagger: 0.02,
                    })

                    gsap.to("#adss", { opacity: 1, ease: "power1.inOut", duration: 0.6 })
                }
            })
        }

        else {
            gsap.fromTo(".line2", {
                top: '-5px',
                opacity: 0,
            }, {
                top: "0",
                opacity: 1,
                duration: 0.4,
                ease: "power1.inOut"
            })
            gsap.fromTo(".line1", {
                top: '5px',
            }, {
                top: "0",
                duration: 0.4,
                ease: "power1.inOut"
            })


            gsap.to("#adss", { opacity: 0, ease: "power1.inOut", duration: 0.6 })

            gsap.fromTo(".item span", {
                top: "0px"
            }, {
                top: "100px",
                ease: "power2.inOut",
                duration: 1,
                stagger: 0.02,
                onComplete: () => {
                    gsap.fromTo(".menu", {
                        top: "0"
                    }, {
                        top: "-100%",
                        ease: CustomEase.create("custom", "0.76, 0, 0.24, 1"),
                        duration: 1
                    })
                }
            })


        }
    }

    return (
        <>

            {/* Mobile Menu */}

            < div className="sdad" >
                <div onClick={handleClick} className="menuBtn">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div >

            <div className="menu">
                <div className="items">
                    <Link to="/">
                        <div className="item">
                            <span>H</span>
                            <span>O</span>
                            <span>M</span>
                            <span>E</span>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="item">
                            <span>A</span>
                            <span>B</span>
                            <span>O</span>
                            <span>U</span>
                            <span>T</span>
                        </div>
                    </Link>
                    <Link to="/work">
                        <div className="item">
                            <span>W</span>
                            <span>O</span>
                            <span>R</span>
                            <span>K</span>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="item">
                            <span>G</span>
                            <span>E</span>
                            <span>T</span>
                            <span> </span>
                            <span>I</span>
                            <span>N</span>
                            <span> </span>
                            <span>T</span>
                            <span>O</span>
                            <span>U</span>
                            <span>C</span>
                            <span>H</span>
                        </div>
                    </Link>
                </div>
                <span id="adss">© 2025 New India Software Solutions</span>
            </div>

            {/* Main Navbar */}

            <div className="main-navbar">
                <div className="navbar">
                    <div className="logo-nav">
                        <Link to={"/"}>
                            <img src={logoTransparent} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}

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
        </>
    );
}
