import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Xbox from "./components/Xbox";
import Nintendo from "./components/Nintendo";
import Steam from "./components/Steam";
import Playstation from "./components/Playstation";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Preferences from "./Preferences";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/steam" element={<Steam />} />
        <Route path="/nintendo" element={<Nintendo />} />
        <Route path="/playstation" element={<Playstation />} />
      </Routes>
    </>
  );
}
