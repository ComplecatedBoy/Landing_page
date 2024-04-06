import React, { useState } from "react";
import NavBar from  './Components/NavBar'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import PriceInfo from "./Components/PriceInfo";
import SideBarOptionData from './assests/SideBarOptionData.js'
import SecurityFeature from "./Components/SecurityFeature";
import ProductionSection from "./Components/ProductionSection";
import CompanySection from "./Components/CompanySection";
import CreativitySection from "./Components/CreativitySection";

function App() {

  const[isSideBar , setIsSideBar]=useState(false);
  const toggleSideBar=()=>{
    setIsSideBar(!isSideBar);
  }

  return (
    <div className="bg-white ">
       <NavBar toggleModel={toggleSideBar}></NavBar>
       <SideBar isSideBar={isSideBar} SideBarOptionData={SideBarOptionData} toggleSideBar={toggleSideBar}></SideBar>
       <Hero></Hero>
       <CompanySection></CompanySection>
       <CreativitySection></CreativitySection>
       <ProductionSection></ProductionSection>
       <SecurityFeature></SecurityFeature>
       <PriceInfo></PriceInfo>
       <Footer></Footer>
    </div>
  );
}

export default App;
