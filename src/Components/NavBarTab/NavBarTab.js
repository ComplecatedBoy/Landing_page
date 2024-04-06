import React from "react";
import SolutionTab from './SolutionTab'
import FeatureTab from './FeatureTab'
import ResourceTab from './ResourceTab'

function NavBarTab({ curNavLinkOpen }) {
  return (
    <div className="bg-white hidden lg:block absolute left-0 right-0 mt-24 z-30 border-t-2 border-black/10 shadow-lg">
        {curNavLinkOpen==='solution' && <SolutionTab ></SolutionTab>}
        {curNavLinkOpen==='feature' && <FeatureTab></FeatureTab>}
        {curNavLinkOpen==='resource'&& <ResourceTab></ResourceTab>}
    </div>
  );
}

export default NavBarTab;
