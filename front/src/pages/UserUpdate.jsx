import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import { LoginContext } from "../contexts/LoginContextProvider";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";

const UserUpdate = () => {
    const navigate = useNavigate();
    const { userInfo } = useContext(LoginContext);
    const [user, setUser] = useState(null);
    const [formdata, setFormData] = useState({
        id: userInfo.id,
        pwd: "",
        cpwd: "",
        name: userInfo.name,
        email: "",
        domain: "",
        phone: "",
        bank: "",
        banknum: "",
        birth: userInfo.birth,
    });
    const [showpwd, setShowpwd] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("/userdata", { seq: userInfo.seq });
                setUser(response.data);
                setFormData({
                    ...response.data,
                    pwd: "",
                    cpwd: "",
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [userInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value }); 
        setUser(preUser => ({ ...preUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("/userUpdate", formdata, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setFormData(response.data);
            console.log(response.data);
            alert("회원 정보 업데이트 완료");
            navigate('/');
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
        let phoneValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
        if (phoneValue.length >= 11) {
            // 전화번호가 11자리 이상인 경우 형식 변환
            phoneValue = phoneValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
        }
        setFormData((preUser) => ({
            ...preUser,
            phone: phoneValue,
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
                                        onChange={handleChange}
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
                                <select
                                    className="fse"
                                    name="bank"
                                    value={formdata.bank || (user ? user.bank : '')}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>
                                        은행
                                    </option>
                                    <option value="한국은행">한국은행</option>
                                    <option value="KB국민은행">KB국민은행</option>
                                    <option value="우리은행">우리은행</option>
                                    <option value="하나은행">하나은행</option>
                                    <option value="SC은행">SC은행</option>
                                    <option value="한국씨티은행">한국씨티은행</option>
                                    <option value="케이뱅크">케이뱅크</option>
                                    <option value="카카오뱅크">카카오뱅크</option>
                                    <option value="토스뱅크">토스뱅크</option>
                                    <option value="농협은행">농협은행</option>
                                    <option value="대구은행">대구은행</option>
                                    <option value="부산은행">부산은행</option>
                                    <option value="경남은행">경남은행</option>
                                    <option value="전북은행">전북은행</option>
                                    <option value="제주은행">제주은행</option>
                                    <option value="새마을금고">새마을금고</option>
                                </select>
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
