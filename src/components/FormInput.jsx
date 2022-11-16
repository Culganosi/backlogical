import { useState } from "react";

function FormInput() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  
  return (
    <>
      <form className="flex items-center justify-center pl-24 mt-10 font-press-start">
        <input
          type="text"
          name="text"
          placeholder="Add Game"
          className="py-2 px-5 rounded-lg bg-gray-700"
        />
      </form>
    </>
  );
}

export default FormInput;
