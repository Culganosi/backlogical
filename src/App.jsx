import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Xbox from "./components/Xbox";
import Nintendo from "./components/Nintendo";
import Steam from "./components/Steam";
import Playstation from "./components/Playstation";
// import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Games from "./components/Games";
import SearchBar from "./components/SearchBar";
export default function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <>
      <SearchBar />
      {/* <Header />
      <SideBar /> */}
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/steam" element={<Steam />} />
        <Route path="/nintendo" element={<Nintendo />} />
        <Route path="/playstation" element={<Playstation />} />
      </Routes>
    </>
  );
}
