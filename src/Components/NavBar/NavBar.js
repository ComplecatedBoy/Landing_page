import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import NavBarTab from "../NavBarTab";


function NavBar({ toggleModel }) {
    const [curNavLinkOpen,setCurNavLinkOpen]=useState("");

    const handleNavLinkOpen=(e,LinkName)=>{
        e.stopPropagation();
        console.log(LinkName)
        if(curNavLinkOpen===LinkName)setCurNavLinkOpen('');
        else 
        setCurNavLinkOpen(LinkName);
    }

  return (
    <>
  
    <div className="transition absolute top-0 left-0 flex z-20 flex-center w-full" style={{backgroundColor:(curNavLinkOpen?"#fff":"transparent") }} onClick={()=>setCurNavLinkOpen("")}>
        <div className="flex px-8 w-full gap-4 pt-2 ">
            <div className="items-center w-full lg:w-auto flex justify-between">
                <a href="#" className="text-2xl lg:text-3xl font-bold">NavBar</a>
                <FontAwesomeIcon icon={faBars} className="lg:hidden" onClick={()=>toggleModel()}/>
            </div>
            <div className="hidden items-center text-md justify-between lg:flex w-full">
                <div className="flex text-center">
                    <a onClick={(e)=>handleNavLinkOpen(e,"solution") } className=" relative cursor-pointer px-4 lg:py-8 ">Solutions <FontAwesomeIcon icon={faChevronDown} className={"transition ms-2 "+(curNavLinkOpen==='solution'?'rotate-180':"")}/></a>
                    <a onClick={(e)=>handleNavLinkOpen(e,"feature") } className=" relative cursor-pointer px-4 lg:py-8">Features <FontAwesomeIcon icon={faChevronDown} className={"transition ms-2 "+(curNavLinkOpen==='feature'?'rotate-180':"")}/></a>
                    <a onClick={(e)=>handleNavLinkOpen(e,"resource")} className="relative cursor-pointer px-4 lg:py-8">Resources <FontAwesomeIcon icon={faChevronDown} className={"transition ms-2 "+(curNavLinkOpen==='resource'?'rotate-180':"")}/></a>
                    <a className="hover:underline transition px-4 lg:py-8">Prices</a>
                </div>
                <div>
                    <button className="font-semibold rounded-md border-2 border-black px-3 py-1">Sign in</button>
                </div>  
            </div>
        </div>
    </div>
    {curNavLinkOpen!==''&&<NavBarTab curNavLinkOpen={curNavLinkOpen}></NavBarTab>}
    </>
  );
}

export default NavBar;
