import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion.image";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="emotion1" />
        <img src={getEmotionImage(2)} alt="emotion2" />
        <img src={getEmotionImage(3)} alt="emotion3" />
        <img src={getEmotionImage(4)} alt="emotion4" />
        <img src={getEmotionImage(5)} alt="emotion5" />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>

      <button onClick={onClickButton}>New 페이지로 이동</button>

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
