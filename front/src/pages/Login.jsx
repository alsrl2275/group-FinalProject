import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../components/Home/header";
import Footer from "../components/Home/Footer";
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const onClickJoin = () => { // 클릭시 이동할 경로 저장
        const join = '/JoinForm';
    
        navigate(join);
     };
        
    const onClickFind = () => {
        const find = '/FindForm';

        navigate(find);
    }


    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    [])

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
                    <span id="join_ip" onClick={onClickJoin}>회원가입</span>&nbsp;&nbsp;
                    <span id="find_ip" onClick={onClickFind}>아이디/비밀번호 찾기</span>
                </div>
                <br />
                <button type="button" onClick={onClickLogin}>Login</button>
                <br/>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Login;