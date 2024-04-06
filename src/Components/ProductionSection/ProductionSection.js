import {
  faArrowRight,
  faMagicWandSparkles,
  faCommentDots,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Quotation from "../../assests/Quotation";
import QuotationSection from "../QuotationSection";
import CtaSection from "../CtaSection";

function ProductionSection() {
  return (
    <>
      <div className="p-8 md:px-12 lg:p-12  w-full bg-white">
        <div className="flex relative flex-col gap-4 lg:gap-8 lg:justify-center lg:text-center">
          <div className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
            <h1>10x Your Pre-Production Pipeline</h1>
          </div>
          <p className="max-w-2xl lg:text-lg text-stone-800/90 lg:mx-auto">
            Boords helps you achieve a fast, hassle-free pre-production process
            so you can spend more time being creative. You'll wonder how you
            lived without it...
          </p>
        </div>
        <div className="mt-8 md:mt-16 md:p-8 w-full">
          <div className="w-full mb-8 rounded grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-black md:order-2 rounded">
              <video
                className="w-full rounded"
                src="/Script_to_Image_Fast.mp4"
                muted
                loop
                autoPlay
                no-controls
              ></video>
            </div>
            <div className="md:order-1 rounded md:flex items-center justify-center">
              <div className="p-4 rounded md:p-8 lg:p-16">
                <button className="border rounded border-stone-600/20 p-1 px-2 mb-8">
                  {" "}
                  <FontAwesomeIcon
                    className="text-red-400 me-2"
                    icon={faMagicWandSparkles}
                  ></FontAwesomeIcon>
                  Create
                </button>
                <h1 className=" text-xl md:text-4xl lg:5xl font-semibold mb-3">
                  Easy-to-Use, Professional Power...
                </h1>
                <p className="text-base md:text-lg text-black/70">
                  Boords makes it easy for anyone in your organization to create
                  client-ready storyboards with a simple drag-and-drop
                  interface, image & script generation, and a vast stock
                  illustration and photo library.
                </p>
                <button className="group mt-8 text-lg">
                  <span className="underline transition  font-semibold rounded group-hover:no-underline group-hover:bg-red-200 p-1 me-2">
                    Learn More
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:mt-24 rounded grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-black md:order-1 rounded">
              <video
                className="w-full rounded"
                src="/commenting.mp4"
                muted
                loop
                autoPlay
                no-controls
              ></video>
            </div>
            <div className="md:order-1 rounded md:flex items-center justify-center">
              <div className="p-4 rounded md:p-8 lg:p-16">
                <button className="border rounded border-stone-600/20 p-1 px-2 mb-8">
                  {" "}
                  <FontAwesomeIcon
                    className="text-red-400 me-2"
                    icon={faCommentDots}
                  ></FontAwesomeIcon>
                  Collabrate
                </button>
                <h1 className=" text-xl md:text-4xl lg:5xl font-semibold mb-3">
                  Centralize Team Communication...
                </h1>
                <p className="text-base md:text-lg text-black/70">
                  Boords helps you establish clear communication between
                  creatives and clients with commenting, approvals, real-time
                  updates, and more. Say goodbye to confusing email threads and
                  missing feedback.
                </p>
                <button className="group mt-8 text-lg">
                  <span className="underline transition  font-semibold rounded group-hover:no-underline group-hover:bg-red-200 p-1 me-2">
                    Learn More
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="p-8 mb-12 md:p-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#ffeacd] via-[#ffeacd] to-[#deedf3]">
                <QuotationSection name={Quotation[1].name} position={Quotation[1].position} comment={Quotation[1].comment} image={Quotation[1].image}></QuotationSection>
                <CtaSection>Try Boords free</CtaSection>
        </div>

      <div className="px-8 md:px-12 lg:w-full bg-white">
        <div className="mt-8 md:p-8 w-full">
          <div className="w-full mb-8  rounded grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-black md:order-2 rounded">
              <video
                className="w-full rounded"
                src="/Storyboard_to_Animatic.mp4"
                muted
                loop
                autoPlay
                no-controls
              ></video>
            </div>
            <div className="md:order-1 rounded md:flex items-center justify-center">
              <div className="p-4 rounded md:p-8 lg:p-16">
                <button className="border rounded border-stone-600/20 p-1 px-2 mb-8">
                  {" "}
                  <FontAwesomeIcon
                    className="text-red-400 me-2"
                    icon={faArrowsSpin}
                  ></FontAwesomeIcon>
                  Iterate
                </button>
                <h1 className=" text-xl md:text-4xl lg:5xl font-semibold mb-3">
                  Fewer Client Curveballs...
                </h1>
                <p className="text-base md:text-lg text-black/70">
                  Quickly make changes to your storyboards for faster sign-off
                  with animatics, versioning, frame statuses and more. Ensure
                  everyone is on the same page and avoid unexpected (and costly)
                  changes in production.
                </p>
                <button className="group mt-8 text-lg">
                  <span className="underline transition  font-semibold rounded group-hover:no-underline group-hover:bg-red-200 p-1 me-2">
                    Learn More
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:mt-24 mb-12  rounded grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-black md:order-1 rounded">
              <video
                className="w-full rounded"
                src="/export.mp4"
                muted
                loop
                autoPlay
                no-controls
              ></video>
            </div>
            <div className="md:order-1 rounded md:flex items-center justify-center">
              <div className="p-4 rounded md:p-8 lg:p-16">
                <button className="border rounded border-stone-600/20 p-1 px-2 mb-8">
                  {" "}
                  <FontAwesomeIcon
                    className="text-red-400 me-2"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                  Export
                </button>
                <h1 className=" text-xl md:text-4xl lg:5xl font-semibold mb-3">
                  Move Seamlessly Into Production
                </h1>
                <p className="text-base md:text-lg text-black/70">
                  Move seamlessly from storyboard to production with multiple
                  export options, including presentation links, customizable
                  PDF, MP4 animatics, and more.
                </p>
                <button className="group mt-8 text-lg">
                  <span className="underline transition  font-semibold rounded group-hover:no-underline group-hover:bg-red-200 p-1 me-2">
                    Learn More
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8  md:p-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#ffeacd] via-[#ffeacd] to-[#deedf3]">
                <QuotationSection name={Quotation[2].name} position={Quotation[2].position} comment={Quotation[2].comment} image={Quotation[2].image}></QuotationSection>
                <CtaSection>Try Boords free</CtaSection>
        </div>
    </>
  );
}

export default ProductionSection;
