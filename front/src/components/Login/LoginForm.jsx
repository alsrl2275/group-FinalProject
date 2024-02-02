import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const LoginForm = () => {


    return (
        <>
          <div style={{ marginTop: '100px' }}></div>
          <div className="form">
            <h2 className="login-title">Login</h2>
    
            <form className="login-form" onSubmit={""}>
              <div>
                <label className="login-form-label" htmlFor="id">ID</label>
                <input 
                       className="login-form-input"
                       type="text"
                       id="id"
                       placeholder="ID"
                       name="id"
                       autoComplete="id"
                       required
                       // TODO : 아이디 저장 후 기능 구현 후 추가
                       // defaultValue={}
                />
              </div>
              <div>
                <label className="login-form-label" htmlFor="pwd">PASSWORD</label>
                <input 
                       className="login-form-input"
                       type="password"
                       id="pwd"
                       placeholder="password"
                       name="pwd"
                       autoComplete="pwd"
                       required
                />
              </div>
    
              <div>
                <button className="btn btn--form btn-login actto">
                  Login
                </button>
                </div>
              <div>
                <NavLink className="btn btn--form btn-login-a" to="/SignUp">회원가입</NavLink>
                <NavLink className="btn btn--form btn-login-b" to="/findip">아이디/비밀번호 찾기</NavLink>
              </div>
            </form>
       
          </div>
          <div style={{ marginTop: '100px' }}></div>
        </>
      );
    }
export default LoginForm;
