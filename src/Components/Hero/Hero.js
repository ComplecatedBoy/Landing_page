import React from "react";
import CtaSection from "../CtaSection";

function Hero() {
  return (
    <div className="bg-green-100 lg:pt-24 w-full  bg-gradient-to-b from-white via-[#ffeacd] to-[#ffeacd]">
      <div className="text-center p-8 lg:pb-8 pt-20 lg:p-16">
        <div className=" leading-12 font-semibold text-3xl md:text-6xl">
          <h1>The Shortcut to</h1>
          <h1 className="">
            <span className="text-[#e37d9b]" style={{ position: "relative" }}>
              Effective
              <span
                style={{ position: "absolute" }}
                className=" left-0 w-full bottom-0"
              >
                <img className="w-full " src="/underline-heavy.svg"></img>
              </span>
            </span>{" "}
            StoryBoards
          </h1>
        </div>
        <div className="max-w-2xl md:font-light text-black md:px-4 mx-auto mt-8">
          <p className="text-sm md:text-2xl">
            Boords is the modern storyboarding tool that helps video
            professionals create client-ready storyboards 10x faster.
          </p>
        </div>
        <div className="mx-auto max-w-72 md:max-w-full">
          <CtaSection>Get Started for free</CtaSection>
        </div>
        
      </div>
      <div className="text-center uppercase pb-8  md:pb-16 text-xs md:text-base font-bold text-stone-700/80">
        BOORDS IS TRUSTED BY THE WORLD'S LEADING VIDEO AGENCIES.
      </div>
    </div>
  );
}

export default Hero;
