import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

export default function Edit() {
  const params = useParams();
  const nav = useNavigate();

  const onClickDelete = () => {
    window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!");
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </div>
  );
}
