import { useState } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import "../css/Finduser.css";
import FindId from "../components/Login/FindId";
import Findpw from "../components/Login/Findpw";
const Finduser = () => {
  const [state, setState] = useState("");

  const select = (props) => {
    setState(props);
  };
  return (
    <>
      <Header />
      <div className="FinduserContainer">
        <div className="button">
          <button className="IdOrPwd" onClick={() => {select("id");}}> 아이디 찾기 </button>
          <button className="IdOrPwd" onClick={() => {select("pwd");}}> 비밀번호 찾기 </button>
        </div>
        <div className="state">
          {state === "pwd" ? <Findpw /> : <FindId/>}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Finduser;
