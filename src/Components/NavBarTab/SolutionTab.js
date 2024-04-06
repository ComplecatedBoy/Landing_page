import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faFilm,
  faPen,
  faClipboardList,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function SolutionTab() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faBuilding} />,
      title: "Studio Founder",
      desc: "Double your pre-production capacity and grow your studio.",
    },
    {
      icon: <FontAwesomeIcon icon={faClipboardList} />,
      title: "Producers",
      desc: "Perfect your pre-production process for happy creatives and clients.",
    },
    {
      icon: <FontAwesomeIcon icon={faPen} />,
      title: "Creatives",
      desc: "Maximize your hourly rate with dramatically  faster storyboarding.",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} />,
      title: "Filmmakers",
      desc: " Start shooting your film faster with intuitive, easy to use software.",
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: "Students",
      desc: "Complete storyboarding project in a fraction of the time.",
    },
  ];

  return (
    <div className="mt-12 mx-12 mb-8">
      <div className="grid grid-cols-3 text-sm  gap-4 w-full">
        {features.map((f, idx) => {
          return (
            <div
              key={idx}
              className="transition flex items-center gap-2 p-4 hover:bg-stone-100 rounded-lg "
            >
              <div className="bg-grey-200 bg-stone-100 w-20 h-20 grid place-items-center border-4 border-stone-200 rounded-full text-xl">
                {f.icon}
              </div>
              <div className="text-start flex-1">
                <h1 className="font-semibold">{f.title}</h1>
                <p className="text-stone-800/70"> {f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SolutionTab;
