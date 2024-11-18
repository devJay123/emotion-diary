import { getEmotionImage } from "../util/get-emotion-image";
import "./DiaryItem.css";
import Button from "./Button";

export default function DiaryItem({ id, emotionId, createdDate, content }) {
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="emotion1" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
}
