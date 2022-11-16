import React from "react";
import FormInput from "./FormInput";

function Playstation() {
  return (
    <div className="bg-gray-800">
      <div className="flex items-center justify-center font-press-start pl-24">
        <h1 className="text-2xl text-blue-600 mt-10 lg:mt-20 lg:text-4xl">
          Playstation Backlog
        </h1>
      </div>
      <FormInput />
    </div>
  );
}

export default Playstation;
