import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandle = async () => {
    try {
      // data 객체를 만들어서 username과 password를 담아 전달
      const data = {
        username: username,
        password: password,
      };

      // axios.post의 두 번째 인자로 data 객체 전달
      const response = await axios.post("/login", data);

      // 로그인 성공 시 처리
      console.log(response.data);
    } catch (error) {
      // 로그인 실패 시 처리
      console.error("Login failed:", error);
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
