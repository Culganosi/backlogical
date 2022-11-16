import Header from "./Header";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="main-container">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}
