import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchResult from "./components/SearchResult";
import { SearchContext } from "./Contexts/SearchContext";
import GameDetails from "./components/GameDetails";

export default function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [games, setGames] = useState([]);
  const [input, setInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("auth")) || false
  );
  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

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
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard games={games} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/result"
          element={
            isAuthenticated ? (
              <SearchResult games={games} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate replace to="/" />
            ) : (
              <Login setAuth={setAuth} />
            )
          }
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/game/:id" element={<GameDetails games={games} />} />
      </Routes>
    </>
  );
}
