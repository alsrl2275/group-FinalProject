// Category.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/HomeCategory.css"; // CSS 파일 불러오기

const Category = () => {
  return (
    <div className="Body">
      <div className="Hy">
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 운동</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 라이프 스타일</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 여행</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="Hy">
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 운동</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 라이프 스타일</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/test" className="CardContainer">
          <div className="CardStyle">
            <img src="/Image/PT.jpg" alt="Card" />
            <div>
              <h4>즐거운 여행</h4>
              <p>아리따운 여성과 함께하실 남성분들 모집합니다</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Category;