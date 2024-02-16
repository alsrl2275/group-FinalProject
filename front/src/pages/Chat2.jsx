import React, { useCallback, useRef, useState, useEffect, useContext } from "react";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import "../css/Chat.css";
import { LoginContext } from "../contexts/LoginContextProvider";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import axios from "axios";

const Chat = () => {
    const { userInfo } = useContext(LoginContext);
    const [user, setUser] = useState(null);
    const [msg, setMsg] = useState("");
    const [chatt, setChatt] = useState([]);
    const [chkLog, setChkLog] = useState(false);

    const ws = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if(token){
         setChkLog(true) ;
        }
        // WebSocket 연결 설정
        ws.current = new WebSocket("ws://localhost:8080/chatt");

        // WebSocket 메시지 수신 처리
        ws.current.onmessage = (message) => {
            const dataSet = JSON.parse(message.data);
            setChatt(prevChatt => [...prevChatt, dataSet]);
        };
        
        // 컴포넌트 언마운트 시 WebSocket 연결 종료
        return () => {
            ws.current.close();
        };
    }, []);

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

    const GlobalStyle = createGlobalStyle`
        ${reset}
    `;

    const onText = event => {
        setMsg(event.target.value);
    };

    const send = () => {
        if (!chkLog) {
            alert("로그인 정보를 가져올 수 없습니다.");
            return;
        }

        if (msg.trim() !== '') {
            const data = {
                name: user.name,
                msg,
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            const temp = JSON.stringify(data);

            if (ws.current.readyState === WebSocket.OPEN) {
                ws.current.send(temp);
            }
        } else {
            alert("메세지를 입력하세요");
            document.getElementById("msg").focus();
        }
        setMsg("");
    };

    const msgBox = chatt.map((item, idx) => (
        <li key={idx} className={item.name === user.name ? 'd-flex flex-row-reverse align-items-end my-3' : 'd-flex flex-row align-items-end my-3'}>
            {item.name !== user.name && <span className="chat-name">{item.name}</span>}
            <span className={item.name === user.name ? "chat-box me-1" : "chat-box other-1"}>{item.msg}</span>
            <span className="tx-small">{item.date}</span>
        </li>
    ));

    return (
        <>
            <Header/>
            <GlobalStyle />
            <div id="chat-wrap">
                    <div id='chatt' className="chatt">
                        <h3 id="title" className="title">에스파</h3>
                        <div id='talk' className="talk">
                            <div className='talk-shadow'></div>
                            <ul className="msg-list">
                                {msgBox}
                            </ul>
                        </div>
                        <div id='sendZone' className="send-zone">
                            <textarea id='msg' value={msg} onChange={onText} onKeyDown={(ev) => { if (ev.keyCode === 13) { send(); } }} className="msg-textarea"></textarea>
                            <button onClick={send} className="send-button">전송</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default Chat;

