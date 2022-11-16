import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="flex flex-col">
      <SideBar />
        <Header />
      <div className="main-container">
        <Logo />
        {/* <MainContainer /> */}
      </div>
    </div>
  );
}
