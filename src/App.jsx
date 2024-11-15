import { Routes, Route } from "react-router-dom";

import "./App.css";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />

      <Button text={"default"} onClick={() => {}} />
      <Button text={"positive"} type={"POSITIVE"} onClick={() => {}} />
      <Button text={"negative"} type={"NEGATIVE"} onClick={() => {}} />

      <Routes>
        {/* <div>hi</div> Routes 안에서는 Route 컴포넌트만 사용할 수 있다. */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        {/* url parameter 동적으로 받기 */}
        <Route path="/*" element={<Notfound />} />
        {/* `*`는 와일드 카드. switch문의 default와 비슷함 */}
      </Routes>
    </>
  );
}

export default App;
