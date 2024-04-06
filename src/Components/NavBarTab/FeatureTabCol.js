import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function FeatureTabCol({ data }) {
  const { heading, links } = data;
  return (
    <div>
      <div className=" text-sm text-stone-700/70 flex gap-2 px-2 items-center">
        <FontAwesomeIcon icon={heading.icon}></FontAwesomeIcon>
        <p className="hover:underline uppercase font-semibold">{heading.title}</p>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        {links.map((link, idx) => {
          return (
            <div key={idx} className="group">
              <h1 className="capitalize text-lg">
                <span className=" transition rounded  group-hover:bg-red-100 px-2">
                  {link.name}
                </span>
                {link.isAifeature && (
                  <span className="px-2 ms-2 rounded bg-red-100">AI</span>
                )}
              </h1>
              <p className=" px-2 text-sm opacity-70">{link.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureTabCol;
