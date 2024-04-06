import React from "react";
import Quotation from "../../assests/Quotation";
import QuotationSection from "../QuotationSection";

function CompanySection() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 lg:grid-cols-8 bg-[#ffeacd] p-4 px-8 lg:px-24">
        <div className="opacity-80 grayscale"><img src="/agencyLogos/first.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/second.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/third.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/fourth.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/fifth.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/sixth.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/seventh.webp" alt="Company"></img></div>
        <div className="opacity-80 grayscale"><img src="/agencyLogos/eight.webp" alt="Company"></img></div>
      </div>
      <div className="grid place-items-center  px-8 p-16 lg:px-24 bg-gradient-to-b from-[#ffeacd] to-[#fff]">
        <QuotationSection name={Quotation[0].name} image={Quotation[0].image} comment={Quotation[0].comment} position={Quotation[0].position}></QuotationSection>
      </div>
    </div>
  );
}

export default CompanySection;
