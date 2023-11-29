import "./App.css";
import { Routes, Route } from "react-router-dom";

import Test from "./pages/Test";
import Home from "./pages/Home";

import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="devider">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
