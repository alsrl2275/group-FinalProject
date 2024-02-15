import React, { useCallback, useRef, useState, useEffect, useContext } from "react";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Modal from 'react-modal';
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
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const ws = useRef(null);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const msgBox = chatt.map((item, idx) => (
        <li key={idx} className={item.name === user.name ? 'd-flex flex-row-reverse align-items-end my-3' : 'd-flex flex-row align-items-end my-3'}>
            {item.name !== user.name && <span className="chat-name">{item.name}</span>}
            <span className={item.name === user.name ? "chat-box me-1" : "chat-box other-1"}>{item.msg}</span>
            <span className="tx-small">{item.date}</span>
        </li>
    ));
    
    

    useEffect(() => {

        const fetchData = async () => {
            try {
              const response = await axios.post("/userdata", { seq: userInfo.seq });
              setUser(response.data);
            } catch (error) {
              console.log(error);
            }
        };

        ws.current = new WebSocket("ws://localhost:8080/chatt");

        ws.current.onmessage = (message) => {
            const dataSet = JSON.parse(message.data);
            setChatt(prevChatt => [...prevChatt, dataSet]);
        };

        return () => {
            ws.current.close();
        };
    }, []);

    const GlobalStyle = createGlobalStyle`
        ${reset}
    `;

    const onText = event => {
        setMsg(event.target.value);
    };

    const send = () => {
        if (!chkLog) {
            if (!user || !user.name) {
                alert("로그인 정보를 가져올 수 없습니다.");
                return;
            }
            setChkLog(true);
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

    return (
        <>
            <Header/>
            <GlobalStyle />
            <button onClick={openModal}>모달 열기</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="chat-modal" overlayClassName="chat-modal-overlay">
                <Header/>
                <div id="chat-wrap">
                    <div id='chatt'>
                        <h1 id="title">에스파</h1>
                        <button onClick={closeModal} className="close-button">X</button>
                        <br />
                        <div id='talk'>
                            <div className='talk-shadow'></div>
                            <ul>
                                {msgBox}
                            </ul>
                        </div>
                        <input disabled={chkLog} placeholder='이름을 입력하세요.' type='text' id='name' value={user ? user.name : ""} onChange={(event => setUser(prevUser => ({ ...prevUser, name: event.target.value })))} />
                        <div id='sendZone'>
                            <textarea id='msg' value={msg} onChange={onText} onKeyDown={(ev) => { if (ev.keyCode === 13) { send(); } }}></textarea>
                            <button onClick={send}>전송</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Modal>
            <Footer/>
        </>
    );
};

export default Chat;
