import React ,{useState} from "react";
import { SideBarNav,SideBarNavLink} from '../SideBarNav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import SideBarOptionData from "../../assests/SideBarOptionData";

function SideBar({ isSideBar, toggleSideBar }) {
    const[sideBarOption,setSideBarOption]=useState('');
  return (
    <div
      className={
        "bg-black px-8 md:px-16 md:py-8 py-2 z-50 lg:hidden text-white fixed w-screen h-screen " +
        (isSideBar ? "" : "hidden")
      }
    >
    <div className="flex  flex-col  h-full">
        <div className="flex justify-between items-center">
            <a href="#" className="text-2xl  md:text-3xl font-bold">
            NavBar
            </a>
            <FontAwesomeIcon
            icon={faXmark}
            className="lg:hidden size-[20px] md:size-[25px]"
            onClick={() => toggleSideBar()}
            />
        </div>
        <div className="flex-1 flex flex-col justify-between mt-2 lg:mb-0 mb-4">
            <div className="font-light relative pt-16">
                {sideBarOption!=='' && <button onClick={()=>setSideBarOption('')} className="absolute top-2 left-0 text-white/80 text-[12px] px-4 py-1 bg-white/10 flex  items-center justify-center rounded-full"><FontAwesomeIcon icon={faChevronLeft} /> <span className="text-lg ms-2">Back</span></button>}
                {sideBarOption==='' && <SideBarNav setSideBarOption={setSideBarOption}></SideBarNav>}
                {sideBarOption!=='' && <SideBarNavLink data={SideBarOptionData[sideBarOption]}></SideBarNavLink>}
            </div> 
            <div className="">
                <a href="#" className="block border-t-2 border-white/30 py-2">
                    Sign in
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}

export default SideBar;
