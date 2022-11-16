import { IoCloseCircle } from "react-icons/io5";
function TodoList({ listItems, deleteListItem }) {
  return (
    <>
      {listItems.length && (
        <article className="pl-24">
          <ul className="bg-gray-700 mx-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
            {listItems.map(({ id, title }) => (
              <ul className="flex items-center justify-between px-5 py-3 border-b border-gray-600">
                <li
                  key={id}
                  className="todo-list text-green-500 py-2 tracking-wider font-press-start"
                >
                  {title}
                </li>
                <button
                  className="text-lg text-red-400"
                  onClick={() => deleteListItem(id)}
                >
                  <IoCloseCircle />
                </button>
              </ul>
            ))}

            <ul className="px-5 py-3">
              <li>
                <p className="text-sm text-green-400 font-press-start">
                  {listItems.length} game(s) in your backlog
                </p>
              </li>
              <li></li>
            </ul>
          </ul>
        </article>
      )}
      {/* className="flex justify-center font-press-start text-4xl pl-24 mt-10 h-screen"> */}
    </>
  );
}

export default TodoList;
