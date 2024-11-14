import { Routes, Route } from "react-router-dom";

import "./App.css";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <Routes>
        {/* <div>hi</div> Routes 안에서는 Route 컴포넌트만 사용할 수 있다. */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/*" element={<Notfound />} />
        {/* `*`는 와일드 카드. switch문의 default와 비슷함 */}
      </Routes>
    </>
  );
}

export default App;
