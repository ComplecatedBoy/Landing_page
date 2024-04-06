import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faArrowDownWideShort,faHandSparkles,faWrench} from '@fortawesome/free-solid-svg-icons'

function CreativitySection() {
  return (
    <div className="creativity p-8 md:px-12 lg:p-16 w-full">
      <div className="flex relative flex-col gap-4 lg:gap-8 lg:justify-center lg:text-center">
        <div className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
          <h1>Creativity-Enabling AI Tools</h1>
        </div>
        <p className="max-w-2xl lg:text-base text-stone-800/90 lg:mx-auto">
          Use AI to enhance–not replace–your creative process. Dramatically
          increase your storyboarding capacity so you can handle more projects
          and create your best work.
        </p>
      </div>
      <div className="mt-12 roundec-xl grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <div className="mt-4 group rounded-xl">
          <div className="w-full rounded-xl">
            <img
              src="/CreativityImages/first.jpg"
              className="rounded-xl"
            ></img>
          </div>
          <div className="mt-4 md:mt-8">
            <FontAwesomeIcon className=" text-lg md:text-2xl text-blue-400" icon={faArrowDownWideShort}></FontAwesomeIcon>
            <h1 className="font-bold mt-3 transition group-hover:underline  text-xl md:text-3xl">Build Characters</h1>
            <p className=" text-lg mt-3 font-light md:text-xl">Create custom AI-generated characters to use across multiple storyboard frames.</p>
          </div>
        </div>
        <div className="mt-4 group rounded-xl">
          <div className="w-full rounded-xl">
            <img
              src="/CreativityImages/second.jpg"
              className="rounded-xl"
            ></img>
          </div>
          <div className="mt-4 md:mt-8">
            <FontAwesomeIcon className="  text-lg md:text-2xl text-blue-400" icon={faArrowDownWideShort}></FontAwesomeIcon>
            <h1 className="font-bold mt-3 transition group-hover:underline text-xl md:text-3xl">Plan your video</h1>
            <p className=" text-lg mt-3 font-light md:text-xl">Describe storyboard scenes to quickly generate expressive, character-driven images.</p>
          </div>
        </div>
        <div className="mt-4 group rounded-xl">
          <div className="w-full rounded-xl">
            <img
              src="/CreativityImages/third.jpg"
              className="rounded-xl"
            ></img>
          </div>
          <div className="mt-4 md:mt-8">
            <FontAwesomeIcon className="text-lg md:text-2xl text-blue-400" icon={faArrowDownWideShort}></FontAwesomeIcon>
            <h1 className="font-bold mt-3 transition group-hover:underline text-xl md:text-3xl">Create variations</h1>
            <p className=" text-lg mt-3 font-light md:text-xl"> Create subtle variations of existing images to build out storyboard sequences fast. </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreativitySection;
