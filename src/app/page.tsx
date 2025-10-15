"use client";

import DecryptedText from "@/components/DecryptedText";
// import CountUp from "@/components/CountUp";

import Image from "next/image";
import headshot from "@/assets/IMG_2262.jpg";
import "./homepage.css";

export default function Home() {
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
                            <Image
                                src={headshot}
                                alt={"headshot"}
                                width="250"
                                className="headshot-img"
                            />
                        </div>

                        <div className="lines-of-code">
                            <p>Content Coming Soon</p>
                        </div>

                        {/* <div className="lines-of-code">
                                <strong>Total Lines of Code:</strong>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <CountUp
                                        from={2000}
                                        to={10000}
                                        separator=","
                                        direction="up"
                                        duration={0.2}
                                    />
                                    <p>+</p>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
