import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import Post from "./pages/Post";
import postList from "./posts.json";

function App() {
  return (
    <div className="bg-white-100 min-h-screen">
      <Header>
        <NavBar />
        <HomeHeader />
      </Header>
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error} />
          <Route path="/posts/:id" element={<Post postList={postList} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
