// Header.js

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Header.css"; // CSS 파일 불러오기

const Header = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
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
            로고자리
          </NavLink>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="menu-dropdown">
                더보기
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/Login">
                  로그인
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/JoinForm">
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
          <NavLink className="home-link" to="/">
            로고자리
          </NavLink>
          <div className="nav-links-container">
            <NavLink className="nav-link" to="/insert">
              그룹 개설
            </NavLink>
            <NavLink className="nav-link" to="/GroupJoin">
              그룹 참가하기
            </NavLink>
            <NavLink className="nav-link" to="/schedule">
              일정 관리
            </NavLink>
            <NavLink className="nav-link" to="/review">
              리뷰
            </NavLink>
          </div>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="account-dropdown">
                계정
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/Login">
                  로그인
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/JoinForm">
                  회원가입
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
