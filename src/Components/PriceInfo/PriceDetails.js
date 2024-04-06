import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function PriceInfoTab({ prices, currency,isAnnual }) {
  let price = prices[currency];
  console.log(prices, currency);

  return (
    <div className="grid grid-cols-1 mt-3 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      <div className=" bg-white lg:border-e border-grey-100/50 rounded-xl lg:rounded-r-none">
        <div className="text-2xl px-4 py-6 font-semibold border-b border-grey-100/50">
          Agency
        </div>
        <div className="text-2xl px-4 py-6 border-b border-grey-100/50">
          <span className="text-base me-2"><FontAwesomeIcon icon={price.Symbol}/></span>
          <span className="text-4xl">{price.AgencyPrice}</span>
          <span className="text-xs text-stone-900/40">/month{isAnnual&& ",billed yearly"}</span>
        </div>
        <div className="text-lg px-4 py-4 border-b border-grey-100/50">
          <button className="border-[2px] border-black p-1 w-full rounded-lg"> Get Started </button>
        </div >
        <div className="px-4 py-6 text-base">
            <div className="mb-4">For Video Agencies</div>
            <ul className="font-light text-sm">
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">10</span> Users</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">500</span> Storyboards</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">{isAnnual? "9,600":"800"}</span> AI Image Credits{!isAnnual && "/month"}</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Project-based access</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Team invite link</li>
            </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl lg:rounded-none">
        <div className="text-2xl px-4 py-6 font-semibold border-b border-grey-100/50">
          Group
        </div>
        <div className="text-2xl px-4 py-6 border-b border-grey-100/50">
          <span className="text-base me-2"><FontAwesomeIcon icon={price.Symbol}/></span>
          <span className="text-4xl">{price.GroupPrice}</span>
          <span className="text-xs text-stone-900/40">/month{isAnnual&& ",billed yearly"}</span>
        </div>
        <div className="text-lg px-4 py-4 border-b border-grey-100/50">
          <button className="border-[2px] border-black p-1 w-full rounded-lg"> Get Started </button>
        </div >
        <div className="px-4 py-6 text-base">
            <div className="mb-4">For Small Teams</div>
            <ul className="font-light text-sm">
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">5</span> Users</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">200</span> Storyboards</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">{isAnnual? "3,000":"250"}</span> AI Image Credits{!isAnnual && "/month"}</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Team editing</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Team comments</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Real-time updates</li>
            </ul>
        </div>
      </div>
      <div className="bg-gradient-to-l from-red-200/70 to-red-200 rounded-xl lg:rounded-none ">
        <div className="text-2xl px-4 py-6 font-semibold border-b border-red-100/50">
          Individual
        </div>
        <div className="text-2xl px-4 py-6 border-b border-red-100/50">
          <span className="text-base me-2"><FontAwesomeIcon icon={price.Symbol}/></span>
          <span className="text-4xl">{price.IndividualPrice}</span>
          <span className="text-xs text-stone-900/40">/month{isAnnual&& ",billed yearly"}</span>
        </div>
        <div className="text-lg px-4 py-4 border-b border-red-100/50">
          <button className="p-1 w-full rounded-lg bg-gradient-to-r from-red-400/70 hover:shadow to-yellow-300/80"> Get Started </button>
        </div >
        <div className="px-4 py-6 text-base">
            <div className="mb-4">Best for freelancers</div>
            <ul className="font-light text-sm">
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold"></span>Single Users</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">100</span> Storyboards</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold">{isAnnual? "1,200":"100"}</span> AI Image Credits{!isAnnual && "/month"}</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Remove Boords branding</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Custom text fields</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Version management</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Multiple export formats</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Password protection</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Guest commenting</li>

            </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl lg:rounded-l-none">
        <div className="text-2xl px-4 py-6 font-semibold border-b border-grey-100/50">
          Free
        </div>
        <div className="text-2xl px-4 py-6 border-b border-grey-100/50">
          <span className="text-base me-2"><FontAwesomeIcon icon={price.Symbol}/></span>
          <span className="text-4xl">0</span>
          <span className="text-xs text-stone-900/40"> No credit card required</span>
        </div>
        <div className="text-lg px-4 py-4 border-b border-grey-100/50">
          <button className="border border-black/30 p-1 w-full rounded-lg transition hover:bg-stone-500/10"> Get Started </button>
        </div >
        <div className="px-4 py-6 text-base">
            <div className="mb-4">Essential Storyboarding</div>
            <ul className="font-light text-sm">
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold"> 2</span> Storyboards</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> <span className="font-semibold"> 10</span> frame limit</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-400"/> Watermarked images</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default PriceInfoTab;
