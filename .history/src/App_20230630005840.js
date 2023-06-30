import "./App.css";
import { Outlet, Route, Routes, useOutletContext } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import postList from "./posts.json";
import PostHeader from "./components/PostHeader";
import { useState } from "react";

function App() {
  return (
    <div className="bg-white-100 min-h-screen">
      <Header>
        <NavBar />
        <HomeHeader />
        {postPage && <PostHeader setPostPage={setPostPage} />}
      </Header>
      <div className="m-auto">
        <Outlet context={[postPage, setPostPage]} />
      </div>
    </div>
  );
}

export default App;