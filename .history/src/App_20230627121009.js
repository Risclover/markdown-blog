import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Routes>
      <NavBar />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
