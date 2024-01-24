import React, { useState, useEffect } from "react";
import Header from "../components/Home/header";
import Footer from "../components/Home/Footer";
import { NavLink } from "react-router-dom";
function Login() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (event) => {
        setInputId(event.target.value);
    }

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    }

    const onClickLogin = () => {
        // event.perventDefault(); // 버튼만 누르면 리로드 되는 것을 방지

        console.log('click login');

        // let body = {
        //     id: inputId,
        //     pw: inputPw,
        // }
        // dispatchEvent(login(body));
    }

    // const navigate = useNavigate();


    // useEffect(() => {
    //     axios.get('/user_inform/login')
    //     .then(res => console.log(res))
    //     .catch()
    // },
    // [])

    return(
        <>
        <Header/>
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '80vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onClickLogin={onClickLogin}
            >
            <h2>Login</h2>
                <label>ID</label>
                <input type="text" name="input_id" value={inputId} onChange={handleInputId}/>
                <br />
                <label>PW</label>
                <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw}/>
                <div>
                    <NavLink to="/SignUp">회원가입</NavLink>&nbsp;&nbsp;
                    <NavLink to="/findip">아이디/비밀번호 찾기</NavLink>
                </div>
                <br />
                <button type="button" onClick={onClickLogin}>Login</button>
                <br/>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default Login;