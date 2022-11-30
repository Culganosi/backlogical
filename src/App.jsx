import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Xbox from "./components/Xbox";
import Steam from "./components/Steam";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchResult from "./components/SearchResult";
import { SearchContext } from "./Contexts/SearchContext";
import GameDetails from "./components/GameDetails";
export default function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  const [games, setGames] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const fetchData = async () => {
      axios
        .post("http://localhost:8080/getGames", {
          params: {
            input: input,
          },
        })

        .then((response) => {
          setGames(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchData();
  };
  return (
    <>
      <SearchContext.Provider value={{ input, setInput, handleSubmit }}>
        <Header />
      </SearchContext.Provider>
      {/* <SideBar /> */}
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route
          path="/"
          element={
            <SearchTest input={input} setGames={setGames} setInput={setInput} />
          }
        /> */}
        <Route path="/" element={<Dashboard games={games} />} />
        <Route path="/result" element={<SearchResult games={games} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game/:id" element={<GameDetails games={games} />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/steam" element={<Steam />} />
      </Routes>
    </>
  );
}
