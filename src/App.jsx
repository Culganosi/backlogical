import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Xbox from "./components/Xbox";
import Nintendo from "./components/Nintendo";
import Steam from "./components/Steam";
import Playstation from "./components/Playstation";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/steam" element={<Steam />} />
        <Route path="/nintendo" element={<Nintendo />} />
        <Route path="/playstation" element={<Playstation />} />
      </Routes>
      <div className="flex flex-col">
        <div className="main-container"></div>
      </div>
    </>
  );
}
