"use client"

import {useEffect, useState} from "react";
import DecryptedText from "@/components/DecryptedText";
import Image from "next/image";
import headshot from "@/assets/IMG_2262.jpg"
import "./homepage.css"

export default function Home() {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Effect hook to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            // If the page is scrolled down more than 100px, hide the scroll indicator
            if (window.scrollY > 100) {
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
                <div style={{ display:"flex", flexDirection: "row", fontSize: 16, width: "100%", justifyContent: "end" }}>
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
          </div>
          {showScrollIndicator && (
              <div className="scroll-indicator">
                  <p className="scroll-text">Scroll Down</p>
                  <p className="chevron">&#x21E9;</p>
              </div>
          )}
          <div className="additional-content">
              <h2>About Me</h2>
              <p>
                  I am a passionate full-stack developer with experience in building robust and scalable web applications.
                  I love coding, exploring new technologies, and collaborating with teams to bring innovative ideas to life.
              </p>
          </div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
          <div><p>Test</p></div>
    </div>
      </main>

  );
}
