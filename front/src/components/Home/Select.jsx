import "../../css/Select.css"; // CSS 파일 불러오기
import React, { useState } from "react";

const Select = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("all");
  
    const handleSearch = () => {
      // 검색 시 아무것도 선택하지 않았을 경우 "all"로 설정
      const selected = selectedValue || "all";
  
      // 검색 시 아무것도 입력하지 않았을 경우 빈 문자열로 설정
      const search = searchValue || "all";
  
      // 콜백 함수 호출
      onSearch(search, selected);
      setSearchValue("");
      setSelectedValue("all"); // 검색 후에 selectedValue를 초기화
    };
  
    const handleSelectChange = (e) => {
      setSelectedValue(e.target.value);
    };

  
    return (
      <div className="Selected">
        <select className="Selected2" onChange={handleSelectChange} value={selectedValue}>
          <option key="all" value="all">선택하세요</option>
          <option key="tour" value="tour">여행</option>
          <option key="life" value="life">라이프 스타일</option>
          <option key="sport" value="sport">스포츠/운동</option>
          <option key="IT" value="IT">코딩/IT</option>
          <option key="language" value="language">어학</option>
          <option key="work" value="work">취업</option>
        </select>
        <input className="Inputed" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <input className="Inputed2" type="submit" value="검색" onClick={handleSearch} />
      </div>
    );
  };
  
  export default Select;
  