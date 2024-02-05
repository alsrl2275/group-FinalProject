import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContextProvider";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, setLogin } = useContext(LoginContext);

  const loginHandle = async () => {
    
    try {
      // axios.post의 두 번째 인자로 data 객체 전달
      const response = await axios.post(`/login`, {username, password});
      const token = response.headers.authorization.split(" ")[1];

         // 추가적으로 서버로부터의 응답을 처리하거나 상태를 업데이트할 수 있음
         if (response) {
          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', token);          
          // 토큰으로 username, role 가져오기
   
              alert('로그인'); 
              window.location.href ="/";
         }

      
    } catch (error) {
      // 로그인 실패 시 처리
      console.error("Login failed:", error);
      alert("로그인 실패")
    }
    
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <div className="form">
        <h2 className="login-title">Login</h2>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault(); // 폼의 기본 동작 방지
            loginHandle();
          }}
        >
          <div>
            <label className="login-form-label" htmlFor="username">
              ID
            </label>
            <input
              className="login-form-input"
              type="text"
              id="username"
              placeholder="ID"
              name="username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="login-form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="login-form-input"
              type="password"
              id="password"
              placeholder="password"
              name="password"
              autoComplete="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="btn btn--form btn-login actto">Login</button>
          </div>
          <div>
            <NavLink className="btn btn--form btn-login-a" to="/SignUp">
              회원가입
            </NavLink>
            <NavLink className="btn btn--form btn-login-b" to="/findip">
              아이디/비밀번호 찾기
            </NavLink>
          </div>
        </form>
      </div>
      <div style={{ marginTop: "100px" }}></div>
    </>
  );
};
export default LoginForm;
