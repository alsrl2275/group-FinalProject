import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import { LoginContext } from "../contexts/LoginContextProvider";
import "../css/SignUp.css";

const UserUpdate = () => {
    const { userInfo, setUserInfo } = useContext(LoginContext);
    const [user, setUser] = useState(null);
    const [formdata, setFormData] = useState({
        pwd: "",
        cpwd: "",
        email: "",
        domain: "",
        phone: "",
        bank: "",
        banknum: "",
        birth: "",
    });
    const [showpwd, setShowpwd] = useState(false);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("/userUpdate", formdata, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setUserInfo(response.data);
            alert("회원 정보 업데이트 완료");
        } catch (error) {
            console.error("error:", error);
            alert("회원 정보 업데이트 오류");
        }
    };

    const showpass = () => {
        setShowpwd((showpassword) => !showpassword);
    };

    const domainChange = (e) => {
        const selectdomain = e.target.value;
        setFormData((preUser) => ({
            ...preUser,
            domain: selectdomain === '직접입력' ? '' : selectdomain,
        }));
    };

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value.replace(/[^0-9]/g, "");
        setFormData((preUser) => ({
            ...preUser,
            phone: phonenum(phoneValue),
        }));
    };

    const phonenum = (phnum) => {
        if (phnum.length < 4) {
            return phnum;
        } else if (phnum.length < 7) {
            return `${phnum.slice(0, 3)}-${phnum.slice(3)}`;
        } else {
            return `${phnum.slice(0, 3)}-${phnum.slice(3, 7)}${phnum.length > 7 ? `-${phnum.slice(7)}` : ''}`;
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <h1>회원정보 수정</h1>
                <form onSubmit={handleSubmit}>
                    <table className="fta">
                        <tbody>
                            <tr>
                                <td className="firtd">아이디</td>
                                <td className="firtd" style={{ display: "flex", alignItems: "center" }}>
                                    <input className="fin" type="text" id="id" name="id" value={user ? user.id : ''} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">비밀번호</td>
                                <td className="firtd" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className="fin"
                                        type={showpwd ? 'text' : 'password'}
                                        id="pwd"
                                        name="pwd"
                                        value={formdata.pwd}
                                        onChange={handleChange}
                                    />
                                    <button className="checkId" type="button" onClick={showpass}>
                                        {showpwd ? 'Hide' : 'Show'}
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">비밀번호 확인</td>
                                <td className="firtd" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className="fin"
                                        type={showpwd ? 'text' : 'password'}
                                        id="cpwd"
                                        name="cpwd"
                                        value={formdata.cpwd}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">이름</td>
                                <td className="firtd">
                                    <input className="fin" type="text" id="name" name="name" value={user ? user.name : ''} readOnly />
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
                                        value={formdata.email || (user ? user.email : '')}
                                        onChange={handleChange}
                                    />
                                    @
                                    <input
                                        className="fin"
                                        type="text"
                                        id="domain"
                                        name="domain"
                                        value={formdata.domain || (user ? user.domain : '')}
                                        onChange={handleChange}
                                    />
                                    <select className="fse" name="domain" onChange={domainChange}>
                                        <option>직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="google.com">google.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">전화번호</td>
                                <td className="firtd">
                                    <input
                                        className="fin"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formdata.phone || (user ? user.phone : '')}
                                        onChange={handlePhoneChange}
                                        maxLength={13}
                                        placeholder="- 제외"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">생년월일</td>
                                <td className="firtd">
                                    <input className="fin" type="text" id="birth" name="birth" value={user ? user.birth : ''} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td className="firtd">계좌번호</td>
                                <td className="firtd">
                                    <input
                                        className="fse"
                                        type="text"
                                        id="bank"
                                        name="bank"
                                        value={formdata.bank || (user ? user.bank : '')}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="fin"
                                        type="text"
                                        id="banknum"
                                        name="banknum"
                                        value={formdata.banknum || (user ? user.banknum : '')}
                                        onChange={handleChange}
                                        maxLength={14}
                                        placeholder="- 제외"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <button className="submit" type="submit">
                        수정 완료
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default UserUpdate;
