import React from "react";
import FeatureTabCol from "./FeatureTabCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faCommentDots,
  faArrowsSpin,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

function FeatureTab() {
  const features = [
    {
      heading: { icon: faWandMagicSparkles, title: "Create" },
      links: [
        {
          name: "be creative",
          desc: "be creative people be creative",
          isAifeature: true,
        },
        {
          name: "be creative",
          desc: "be creative people be creative",
          isAifeature: true,
        },
        {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
      ],
    },
    {
        heading: { icon: faCommentDots, title: "Collabrate" },
        links: [
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
              name: "be creative",
              desc: "be creative people be creative",
              isAifeature: true,
            },
        ],
      },
      {
        heading: { icon: faArrowsSpin, title: "Iterate" },
        links: [
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
              name: "be creative",
              desc: "be creative people be creative",
              isAifeature: true,
            },
        ],
      },
      {
        heading: { icon: faArrowUpRightDots, title: "Export" },
        links: [
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
            name: "be creative",
            desc: "be creative people be creative",
            isAifeature: true,
          },
          {
              name: "be creative",
              desc: "be creative people be creative",
              isAifeature: true,
            },
        ],
      },
  ]

  return (
    <div  className=" z-9 mt-12 mx-12 mb-8">
      <div className=" grid grid-cols-4 text-sm ms-auto gap-4 w-full">
        {features.map((f, idx) => {
          return <FeatureTabCol data={f}></FeatureTabCol>
        })}
      </div>
    </div>
  );
}

export default FeatureTab;