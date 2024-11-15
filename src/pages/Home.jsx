import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [params, setParams] = useSearchParams();
  // 쿼리 파라미터 받기
  console.log(params.get("value"));

  return <div>Home</div>;
}
