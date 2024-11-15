import { Routes, Route } from "react-router-dom";
import { useReducer, useRef } from "react";

import "./App.css";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "오늘의 일기 1",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "오늘의 일기 2",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    }
    case "DELETE": {
      return state.filter((item) => String(item.id) !== String(action.id));
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "일기 테스트");
        }}
      >
        일기 쓰기
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
        }}
      >
        일기 수정
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제
      </button>

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
