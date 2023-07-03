import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import PostHeader from "./components/PostHeader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App({ postList, categoriesList, pageType }) {
  const [postPage, setPostPage] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      id="app"
      className={`smooth-scroll dark-mode bg-white-100 min-h-screen font-rubik transition duration-200 dark:bg-gray-900`}
    >
      <Header>
        <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        {!postPage ? (
          <HomeHeader />
        ) : (
          <PostHeader postList={postList} categoriesList={categoriesList} />
        )}
      </Header>
      <div className="m-auto">
        <Outlet context={[postPage, setPostPage]} />
      </div>
    </div>
  );
}

export default App;
