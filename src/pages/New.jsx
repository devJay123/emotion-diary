import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

export default function New() {
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            text={"< 뒤로 가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
      />
      <Editor />
    </div>
  );
}
