import React, { useState } from "react";
import Switch from "react-switch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faDollarSign,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import PriceInfoTab from "./PriceDetails";

function PriceInfo() {
  const [isAnnual, SetIsAnnual] = useState(false);
  const [currency, SetCurrency] = useState("USD");

  const prices = [
    {
      USD: {
        Symbol: faDollarSign,
        AgencyPrice: 119,
        GroupPrice: 49,
        IndividualPrice: 29,
      },
      EUR:{
        Symbol:faEuroSign,
        AgencyPrice:107,
        GroupPrice:44,
        IndividualPrice:25
      },
      GBP:{
        Symbol:faSterlingSign,
        AgencyPrice:95,
        GroupPrice:39,
        IndividualPrice:22
      }
    },
    {
      USD: {
        Symbol: faDollarSign,
        AgencyPrice: 99,
        GroupPrice: 39,
        IndividualPrice: 25,
      },
      EUR:{
        Symbol:faEuroSign,
        AgencyPrice:89,
        GroupPrice:35,
        IndividualPrice:21
      },
      GBP:{
        Symbol: faSterlingSign,
        AgencyPrice:79,
        GroupPrice:31,
        IndividualPrice:19
      }
    },
  ];

  return (
    <div className="p-8 md:px-12 lg:p-16 w-full bg-[#ffeacd]">
      <div className="flex relative flex-col gap-4 lg:gap-8 lg:justify-center lg:text-center">
        <div className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
          <h1>The ShortCut to Effective</h1>
          <h1>StoryBoards</h1>
        </div>
        <p className="max-w-2xl lg:text-xl text-stone-800/90 lg:mx-auto">
          Get the modern storyboarding tool loved by video professionals. All
          plans come with a risk-free 30-day money-back guarantee.
        </p>
        <div className="text-stone-700/60 text-sm flex lg:mx-auto items-center gap-2 font-semibold">
          <span>Monthly</span>
          <Switch
            onChange={() => SetIsAnnual(!isAnnual)}
            onColor="transparent"
            offColor="transparent"
            onHandleColor="#fff"
            offHandleColor="#fff"
            checkedIcon=""
            height={25}
            uncheckedIcon=""
            activeBoxShadow="transparent"
            className={
              "transition-colors px-[.5px] " +
              (isAnnual
                ? "bg-gradient-to-l from-red-500 to-yellow-300"
                : "bg-black/50")
            }
            checked={isAnnual}
          />
          <span>
            Yearly <span className="text-600/60 font-normal">( Save 20% )</span>
          </span>{" "}
        </div>
        <div className="absolute hidden sm:block font-bold bg-white rounded-[10px] text-stone-700/80  text-sm right-0 bottom-0">
          <button
            className={
              " transition px-2 py-[2px] border-2 border-stone-400 border-r-0 rounded-l-[10px] " +
              (currency === "USD" && " border-2 border-stone-800 ")
            }
            onClick={() => SetCurrency("USD")}
          >
            USD
          </button>
          <button
            className={
              " transition px-2 py-[2px] border-2 border-stone-400 border-r-0 " +
              (currency === "USD" && "border-l-stone-800 ") +
              (currency === "EUR" && " border-stone-800 ")
            }
            onClick={() => SetCurrency("EUR")}
          >
            EUR
          </button>
          <button
            className={
              "transition px-2 py-[2px] border-2 border-stone-400 rounded-r-[10px]  " +
              (currency === "EUR" && " border-l-stone-800 ") +
              (currency === "GBP" && " border-stone-800 ")
            }
            onClick={() => SetCurrency("GBP")}
          >
            GBP
          </button>
        </div>
      </div>
      <div className="mt-12 w-full">
        <PriceInfoTab prices={isAnnual?prices[1]:prices[0]} currency={currency} isAnnual={isAnnual}></PriceInfoTab>
      </div>
    </div>
  );
}

export default PriceInfo;
