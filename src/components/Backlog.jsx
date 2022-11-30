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
          setTimeout(() => {
            setDeleteMsg(false);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBacklog().catch(console.error);
  }, []);
  return (
    <div className="">
      <ul className="bg-gray-700 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
        {listItems.map((listItem) => {
          return (
            <ul className="flex items-center justify-between px-5 py-3 border-b border-gray-600">
              <li className="text-green-500 tracking-wider font-press-start">
                {listItem.title}
              </li>
              <button
                onClick={() => handleDelete(listItem.id)}
                className="text-lg text-red-400"
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
