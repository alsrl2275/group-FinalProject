import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName';


const LoginContextProvider = ({children}) => {

    // 로그인 여부, 로그아웃 함수
    const [isLogin, setLogin] = useState(false);
    const [userInfo, setUserInfo] = useState("");

    // 앱이 처음 로드될 때 localStorage에 토큰이 있는지 확인하고, 있다면 로그인 상태를 업데이트합니다.
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                setLogin(true);
                try {
                    const response = await axios.post("/getIdRole", null, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setUserInfo(response.data);
                    console.log("왜 여기가 아노디?");
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, [setLogin]);

    const logout = () => {
        setLogin(false);
        localStorage.removeItem('accessToken');
        
    }


        return(
            <LoginContext.Provider value={{isLogin, setLogin, logout, userInfo}}>
                {children}
            </LoginContext.Provider>
    )
}

export default LoginContextProvider;