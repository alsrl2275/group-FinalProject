import { useState } from "react";
import "../../css/FindPwd.css";
import axios from "axios";
const Findpw = () => {
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const findPwd = async () => {
    const data = {
      id: id,
      name: name,
      email: email,
    };
    try {
      const response = await axios.post("/api/findPwd", data);
      
      console.log(response);
      if (response.data === "없음") {
        alert("잘못된 정보입니다.");
      } else if(response.data === "있음") {
        alert("발송완료! 입력하신 이메일로 임시비밀번호가 발송되었습니다.");
      }
    } catch (error) {}
  };
  return (
    <div className="findPwd-container">
      <input
        type="text"
        className="findPwd-Id"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        className="findPwd-Name"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="findPwd-Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="submit"
        className="findPwd-submit"
        value="비밀번호 찾기"
        onClick={findPwd}
      />
    </div>
  );
};
export default Findpw;
