import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import Logo from "./components/Logo";
import FormInput from "./components/FormInput";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="main-container">
        <Header />
        <Logo />
        <TodoList />
        {/* <MainContainer /> */}
      </div>
    </div>
  );
}
