import React from "react";
import FormInput from "./FormInput";

function Nintendo() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex items-center justify-center font-press-start pl-24">
        <h1 className="text-2xl text-red-600 mt-10 lg:mt-20 lg:text-4xl">
          Nintendo Backlog
        </h1>
      </div>
      <FormInput />
    </div>
  );
}

export default Nintendo;
