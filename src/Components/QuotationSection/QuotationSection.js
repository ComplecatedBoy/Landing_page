import React from "react";

function Quotation({ name, position, image, comment }) {
  return (
    <div className="w-full mb-8 max-w-2xl md:text-lg md:text-center grid grid-cols-1 md:place-items-center ">
      <div className="mb-8">"{comment}</div>
      <div className="flex items-center text-sm">
        <div className="rounded-full w-12 me-4">
          <img
            src={image}
            className="rounded-full w-full h-full object-cover"
          ></img>
        </div>
        <p className="font-semibold me-1">{name}</p>
        <p className="text-black/50"> ,{position}</p>
      </div>
    </div>
  );
}

export default Quotation;
