import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import { LoginContext } from "../contexts/LoginContextProvider";
import "../css/SignUp.css";

const Userdata = () => {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [pwdModal, setpwdModal] = useState(false);
  const [pwd, setpwd] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/userdata", { seq: userInfo.seq });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userInfo]);

  const handlePasswordSubmit = async () => {
    // 비밀번호 확인 요청을 서버로 보내고 확인
    try {
      const response = await axios.post("/checkpassword", { userId: userInfo.id, pwd });
      if (response.data === "success") {
        // 비밀번호가 일치하면 회원 정보 수정 페이지로 이동
        window.location.href = "/UserUpdate";
      } else {
        // 비밀번호가 일치하지 않으면 경고 메시지 표시
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Header />
      <div className="container">
        <h1>회원정보</h1>
        <form>
          <table className="fta">
            <tbody>
              <tr>
                <td className="firtd">아이디</td>
                <td className="firtd" style={{ display: "flex", alignItems: "center" }}>
                  <input className="fin" type="text" id="id" name="id" value={user ? user.id : ""} readOnly />
                </td>
              </tr>
              <tr>
                <td className="firtd">이름</td>
                <td className="firtd">
                  <input className="fin" type="text" id="name" name="name" value={user ? user.name : ""} readOnly />
                </td>
              </tr>
              <tr>
                <td className="firtd">이메일</td>
                <td className="firtd">
                  <input
                    className="fin"
                    type="text"
                    id="email"
                    name="email"
                    value={user ? `${user.email}@${user.domain}` : ""}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="firtd">전화번호</td>
                <td className="firtd">
                  <input className="fin" type="text" id="phone" name="phone" value={user ? user.phone : ""} readOnly />
                </td>
              </tr>
              <tr>
                <td className="firtd">생년월일</td>
                <td className="firtd">
                  <input className="fin" type="text" id="birth" name="birth" value={user ? user.birth : ""} readOnly />
                </td>
              </tr>
              <tr>
                <td className="firtd">계좌번호</td>
                <td className="firtd">
                  <input className="fse" name="bank" value={user ? user.bank : ""} readOnly />
                  <input className="fin" type="text" id="banknum" name="banknum" value={user ? user.banknum : ""} readOnly />
                </td>
              </tr>
              <tr>
                <td className="firtd">점수</td>
                <td className="firtd">
                  <input className="fse" name="evp" value={user ? user.evp : ""} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button className="submit" onClick={() => setpwdModal(true)}>수정하기</button>
        </form>
        {pwdModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setpwdModal(false)}>&times;</span>
            <h2>비밀번호 확인</h2>
            <input type="password" value={pwd} onChange={(e) => setpwd(e.target.value)} />
            <button onClick={handlePasswordSubmit}>확인</button>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
};

export default Userdata;
