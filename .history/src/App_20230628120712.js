import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-white-100 min-h-screen">
      <Header>
        <NavBar />
      </Header>
      <div className="max-w-screen-lg m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
