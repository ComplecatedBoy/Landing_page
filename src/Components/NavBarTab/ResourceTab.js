import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faCircleRadiation,
  faClipboardList,
  faGraduationCap,
  faArrowRight,
  faBox
} from "@fortawesome/free-solid-svg-icons";

function ResourceTab() {
    const resources = [
        {
          icon: <FontAwesomeIcon icon={faBookAtlas} />,
          title: "Templates",
          desc: "Download professional video templates.",
        },
        {
          icon: <FontAwesomeIcon icon={faBookAtlas} />,
          title: "Storyboarding",
          desc: "Learn best practices for professional storyboards.",
        },
        {
          icon: <FontAwesomeIcon icon={faCircleRadiation} />,
          title: "Animatics",
          desc: "Learn why and how to create animatics.",
        },
        {
          icon: <FontAwesomeIcon icon={faBox} />,
          title: "Blog",
          desc: "Resources and information for modern video teams.",
        }
      ];
    

    return (<><div className="mt-12 mx-12 mb-8">
    <div className="grid grid-cols-3 max-w-4xl text-sm ms-auto  gap-4 w-full">
      {resources.map((r, idx) => {
        return (
          <div
            key={idx}
            className="transition flex group items-center gap-4 gap-y-16 rounded-lg "
          >
            <div className="transition self-start group-hover:text-red-500 opacity-80 text-lg">
              {r.icon}
            </div>
            <div className="text-start flex-1">
              <h1 className="font-semibold text-lg"><span className=' transition group-hover:underline'>{r.title}</span> <FontAwesomeIcon className='ms-2 group-hover:ms-4 transition' icon={faArrowRight}/></h1>
              <p className="text-stone-800/70 text-sm"> {r.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div></>  );
}

export default ResourceTab;