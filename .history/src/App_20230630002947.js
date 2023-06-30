import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import postList from "./posts.json";

function App() {
  return (
    <div className="bg-white-100 min-h-screen">
      <Header>
        <NavBar />
        <HomeHeader />
        <
      </Header>
      <div className="m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
