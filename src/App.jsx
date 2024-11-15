import { Routes, Route } from "react-router-dom";

import "./App.css";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
