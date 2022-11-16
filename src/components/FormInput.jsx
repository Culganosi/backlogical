import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  let listItems = localStorage.getItem("listItems");

  if (listItems) {
    return JSON.parse(localStorage.getItem("listItems"));
  } else {
    return [];
  }
};
function FormInput() {
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState(getLocalStorage());

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

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

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
