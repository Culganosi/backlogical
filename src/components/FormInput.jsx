import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function FormInput() {
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListItem = {
      id: uuidv4(),
      title: text,
    };
    setListItems([newListItem, ...listItems]);
    setText("");
  };

  const deleteListItem = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <form
        className="flex items-center justify-center pl-24 mt-10 font-press-start"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="text"
          placeholder="Add Game"
          className="py-2 px-5 rounded-lg bg-gray-700 text-green-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <TodoList listItems={listItems} deleteListItem={deleteListItem} />
    </>
  );
}

export default FormInput;
