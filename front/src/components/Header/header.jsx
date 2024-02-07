// Header.js

import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Header.css"; // CSS 파일 불러오기
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { LoginContext } from "../../contexts/LoginContextProvider";
const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const { isLogin, logout } = useContext(LoginContext);
  const { userInfo } = useContext(LoginContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-container">
      {isMobile ? (
        <>
          <NavLink className="home-link" to="/">
            <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzPmj5mWavFuACY5Mfn1wE2iRrtTOmqPtRg&usqp=CAU" />
          </NavLink>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="menu-dropdown">
                더보기
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Login">
                  로그인
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/SignUp">
                  회원가입
                </Dropdown.Item>

                <Dropdown.Item as={NavLink} to="/insert">
                  그룹 개설
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/GroupJoin">
                  그룹 참가하기
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/schedule">
                  일정 관리
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/review">
                  리뷰
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      ) : (
        <>
          <Link className="home-link" to="/">
            <img
              className="home-link-img"
              src="/Image/T1.png"
              alt="Chanel Logo"
            />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/insert">
              그룹 개설
            </Link>
            <Link
              className="nav-link"
              to={{
                pathname: "/GroupJoin",
                state: { category: "sport" },
              }}
            >
              그룹 참가하기
            </Link>

            <Link className="nav-link" to="/schedule">
              일정 관리
            </Link>
            <Link className="nav-link" to="/review">
              리뷰
            </Link>
          </div>
          <div className="dropdown-container">
            {!isLogin ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="account-dropdown">
                  계정
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Login">
                    로그인
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/SignUp">
                    회원가입
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="account-dropdown">
                  계정
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {userInfo.role === "ROLE_ADMIN" ? (
                    <>
                      <Dropdown.Item as={Link} to="/admin">
                        관리자 페이지
                      </Dropdown.Item>
                      <Dropdown.Item as={Button} onClick={() => logout()}>
                        로그아웃
                      </Dropdown.Item>
                      {/* 추가적인 관리자 메뉴 항목들 */}
                    </>
                  ) : (
                    <>
                      <Dropdown.Item as={Link} to="/userdata">
                        내정보
                      </Dropdown.Item>
                      <Dropdown.Item as={Button} onClick={() => logout()}>
                        로그아웃
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
