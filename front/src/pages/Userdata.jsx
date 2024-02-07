import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import { LoginContext } from "../contexts/LoginContextProvider";
import "../css/SignUp.css";



const Userdata = () => {

const {userInfo} = useContext(LoginContext);
const [user, setuser] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    
    const showUserData = async () => {
        try{
            if(userInfo && userInfo.id){
                const response = await axios.get('/userdata?id={userInfo.id}');
                const userData = response.data;
                console.log('userdata:',userData);
            }
        }catch(error){
            console.log(error);
        }
    };
    showUserData();
},[userInfo]);
    return(
        <>
        <Header />
        <div className="container">
            {/* <h2>{유저이름}님 정보</h2> */}
            <h1>회원정보</h1>
            <form>
                <table className="fta">
                    <tbody>
                        <tr>
                            <td className="firtd">아이디</td>
                            <td className="firtd" style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    className="fin"
                                    type="text"
                                    id="id"
                                    name="id"
                                    value={userInfo.id}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">비밀번호</td>
                            <td className="firtd" style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    // className="fin"
                                    // type={showpwd ? 'text' : 'password'}
                                    // id="pwd"
                                    // name="pwd"
                                    // value={user.pwd}
                                    // onChange={handleChange}
                                />
                                {/* <button className="checkId" type="button" onClick={showpass}>
                                    {showpwd ? 'hide' : 'show'}
                                </button> */}
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">비밀번호 확인</td>
                            <td className="firtd" style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    // className="fin"
                                    // type={showpwd ? 'text' : 'password'}
                                    // id="cpwd"
                                    // name="cpwd"
                                    // value={user.cpwd}
                                    // onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">이름</td>
                            <td className="firtd">
                                <input
                                    // className="fin"
                                    // type='text'
                                    // id="name"
                                    // name="name"
                                    // value={user.name}
                                    // onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">이메일</td>
                            <td className="firtd">
                                <input
                                    // className="fin"
                                    // type='text'
                                    // id="email"
                                    // name="email"
                                    // value={user.email}
                                    // onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">전화번호</td>
                            <td className="firtd">
                                <input
                                   
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">생년월일</td>
                            <td className="firtd">
                                <input 
                                    
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td className="firtd">계좌번호</td>
                            <td className="firtd">
                                <input
                                    // className="fin"
                                    // type='text'
                                    // id="banknum"
                                    // name="banknum"
                                    // value={user.banknum}
                                    // maxLength={14}
                                    // onChange={handleChange}
                                    // placeholder="- 제외"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
				 <button className="submit" type="submit">수정 완료</button>
            </form>
            </div>
        <Footer />
        </>
    );

}

export default Userdata;