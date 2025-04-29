"use client"

import DecryptedText from "@/components/DecryptedText";
import Image from "next/image";
import headshot from "@/assets/IMG_2262.jpg"
import "./homepage.css"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
      </main>
    </div>
  );
}
