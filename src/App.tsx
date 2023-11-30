import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePlus from "./pages/HomePlus";
import Home from "./pages/Home";
import Mandob from "./pages/Mandob"

import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="devider">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeplus" element={<HomePlus />} />
        <Route path="/mandob" element={<Mandob />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
