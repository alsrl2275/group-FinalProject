import { useState } from "react";
import axios from "axios";
import "../../css/FindId.css";
const FindId = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();

  const findId = async () => {
    const data = {
      name: name,
      email: email,
    };
    try {
      const response = await axios.post("/api/findId", data);
      console.log(response);
      if (response.data === "없음") {
        alert("없는 정보입니다.");
      } else {
        setId(response.data);
      }
    } catch (error) {}
  };
  return (
    <div className="findId-container">
      <input
        type="text"
        className="findId-Name"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="findId-Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="submit"
        className="findId-submit"
        value="아이디 찾기"
        onClick={findId}
      />
      {id && <div className="findId-result">너의 아이디 : {id}</div>}
    </div>
  );
};
export default FindId;
