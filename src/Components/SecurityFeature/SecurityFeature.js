import React from "react";

function SecurityFeature() {
  return (
    <div className="p-8 md:px-12 lg:p-16 w-full bg-white">
      <div className="flex relative flex-col gap-4 lg:gap-8 lg:justify-center lg:text-center">
        <div className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
          <h1>Secure, Private, Professional</h1>
        </div>
        <p className="max-w-2xl lg:text-lg text-stone-800/90 lg:mx-auto">
          We know controlling who sees what - be it teammates or clients - is
          crucial. Boords helps you keep storyboards private with password
          protection, project-level access control, and custom workspace URLs.
        </p>
      </div>
      <div className=" mt-8 md:mt-24 w-full">
        <div className="w-full mb-16 bg-black border-[3px] border-black rounded grid grid-cols-1 md:grid-cols-2">
          <div className="bg-red-100 md:order-2  rounded-tl md:rounded-tl-none rounded-tr rounded-bl-none md:rounded-bl-none md:rounded-br rounded-br-none">
            <video
              className="w-full  rounded-tl md:rounded-tl-none rounded-tr rounded-bl-none md:rounded-bl-none md:rounded-br rounded-br-none"
              src="/6._Share_with_Confidence.mp4"
              muted
              loop
              autoPlay
              no-controls
            ></video>
          </div>
          <div className="bg-white md:order-1 md:flex items-center justify-center rounded-bl rounded-br md:rounded-br-none rounded-tr-none rounded-tl-none md:rounded-tl ">
            <div className="p-4 md:p-8 lg:p-16">
            <h1 className=" text-xl md:text-3xl lg:4xl font-semibold mb-3">Share with Confidence</h1>
            <p className="text-base md:text-lg">Never share something you don't want clients to see. Share links to specific storyboard versions, with or without comments.</p>
            </div>
          </div>
        </div>
        <div className="w-full mb-16 lg:mt-8 bg-black border-[3px] border-black rounded grid grid-cols-1 md:grid-cols-2">
          <div className="bg-black rounded-tl md:rounded-tr-none rounded-tr rounded-bl-none md:rounded-bl md:rounded-br-none rounded-br-none">
            <video
              className="w-full rounded-tl md:rounded-tr-none rounded-tr rounded-bl-none md:rounded-bl md:rounded-br-none rounded-br-none"
              src="/7._Completely_Confidential.mp4"
              muted
              loop
              autoPlay
              no-controls
            ></video>
          </div>
          <div className="bg-white   md:flex items-center justify-center rounded-bl rounded-br  md:rounded-bl-none md:rounded-br rounded-tl-none rounded-tr-none md:rounded-tr">
          <div className="p-4 md:p-8 lg:p-16">
            <h1 className="  text-xl md:text-3xl lg:4xl font-semibold mb-3">Completely Confidential</h1>
            <p className="text-base md:text-lg">All content you upload to or create within Boords is completely hidden from everyone, including the Boords team, unless you choose to share it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityFeature;
