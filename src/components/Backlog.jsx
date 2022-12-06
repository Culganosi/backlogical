import axios from "axios";
import { list } from "postcss";
import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

function Backlog() {
  const [listItems, setListItems] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/deleteGame/${id}`)
      .then((res) => {
        axios.get("http://localhost:8080/backlog").then((res) => {
          console.log(res.data);
          setListItems(res.data);
          setDeleteMsg(true);
          setTimeout(() => {
            setDeleteMsg(false);
          }, 2000);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getBacklog = async () => {
      await axios
        .get("http://localhost:8080/backlog")
        .then((res) => {
          console.log(res.data);
          setListItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBacklog().catch(console.error);
  }, []);
  return (
    <div className="transition-colors duration-300">
      <ul className="dark:bg-gray-700 rounded-lg mt-6 sm:max-w-6xl sm:mx-auto border-4">
        {listItems.map((listItem) => {
          return (
            <ul
              key={listItem.id}
              className="flex items-center justify-between px-5 py-3 border-b border-2 dark:border-gray-600"
            >
              <li className="text-purple-600 tracking-wider font-press-start">
                <img
                  className="rounded-t-lg w-full hover:opacity-50"
                  src={
                    listItem.cover
                      ? listItem.cover.url.replace("t_thumb", "t_cover_big")
                      : null
                  }
                  alt={listItem?.name}
                />
                {listItem.title}
              </li>
              <button
                onClick={() => handleDelete(listItem.id)}
                className="text-xl text-red-400 hover:text-red-500 hover:text-2xl -mr-2"
              >
                <IoCloseCircle />
              </button>
            </ul>
          );
        })}
      </ul>
      <ul className="px-5 py-3">
        <li>
          <p className="text-sm text-green-400 font-press-start">
            {listItems.length} game(s) in your backlog
          </p>
        </li>
        <li>
          {deleteMsg && (
            <p className="text-sm text-red-700 font-press-start mb-6">
              Game Removed
            </p>
          )}
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Backlog;
