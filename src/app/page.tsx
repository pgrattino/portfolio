"use client"

import {useEffect, useState} from "react";

import DecryptedText from "@/components/DecryptedText";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

import Image from "next/image";
import headshot from "@/assets/IMG_2262.jpg"
import "./homepage.css"

import typeScriptLogo from "@/assets/ts-logo-256.png"
import javascriptLogo from "@/assets/javascript-240.png"
import cppLogo from "@/assets/cpp_logo.png"
import CountUp from "@/components/SpotlightCard/CountUp";

const pythonURL = "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"

export default function Home() {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Effect hook to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="homepage">
                <div className="top-content">
                    <div className="top-wrapper">
                        <div className="header-container">
                            <div className="heading-text">
                                <DecryptedText
                                    text="Peyton Grattino"
                                    animateOn="view"
                                    speed={60}
                                    maxIterations={30}
                                    sequential={true}
                                    revealDirection={"end"}
                                />
                                <DecryptedText
                                    text="Full Stack Developer"
                                    animateOn="view"
                                    speed={60}
                                    maxIterations={30}
                                    sequential={true}
                                    revealDirection={"end"}
                                />
                                <div className="subheading-text">
                                    <p>📍</p>
                                    <DecryptedText
                                        text="Grand Junction, CO"
                                        animateOn="view"
                                        speed={60}
                                        maxIterations={30}
                                        sequential={true}
                                        revealDirection={"end"}
                                    />
                                </div>
                            </div>
                            <Image src={headshot} alt={"headshot"} width="250" className="headshot-img"/>
                        </div>
                        <div className="lines-of-code">
                            <p>Total Lines of Code: </p>
                            <CountUp from={2000}
                                     to={10000}
                                     separator=","
                                     direction="up"
                                     duration={.2}/>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                {showScrollIndicator && (
                    <div className="scroll-indicator">
                        <p className="scroll-text">Scroll Down</p>
                        <p className="chevron">&#x21E9;</p>
                    </div>
                )}


                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName='float-text-container'
                    textClassName='float-text'
                >
                    Skills
                </ScrollFloat>
                <div>
                    <p><strong>Languages</strong></p>
                    <div className="lang-logo-container">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <Image src={typeScriptLogo} alt={"Typescript"} width="250" height="250"/>
                        </SpotlightCard>
                        <div className="lang-logo">
                            <Image src={pythonURL} alt={"Python Logo"} width="250" height="250"/>
                        </div>
                        <div className="lang-logo">
                            <Image src={javascriptLogo} alt={"Javascript"} width="250" height="250"/>
                        </div>
                        <div className="lang-logo">
                            <Image src={cppLogo} alt={"C++"} width="250" height="250"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p><strong>Frameworks</strong></p>
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Next.js</p>
                </div>
                <div>
                    <p><strong>Tools</strong></p>
                    <p>Docker</p>
                    <p>Git</p>
                    <p>Strapi</p>
                    <p>Linux</p>
                </div>
            </div>
        </main>

    );
}
