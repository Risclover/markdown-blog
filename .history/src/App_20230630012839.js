import "./App.css";
import { Outlet, Route, Routes, useOutletContext } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import postList from "./posts.json";
import PostHeader from "./components/PostHeader";
import { useState } from "react";

function App({ postList }) {
  const [postPage, setPostPage] = useState(false);

  return (
    <div className="bg-white-100 min-h-screen font-wotfard">
      <Header>
        <NavBar />
        {!postPage && <HomeHeader />}
        {postPage && <PostHeader postList={postList} />}
      </Header>
      <div className="m-auto">
        <Outlet context={[postPage, setPostPage]} />
      </div>
    </div>
  );
}

export default App;
