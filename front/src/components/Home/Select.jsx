import "../../css/Select.css"; // CSS 파일 불러오기
import React, { useState } from "react";

const Select = ({ onSearch }) => {
    const [search, setSearch] = useState(null);
    const [selected, setSelected] = useState(null);
    const handleSelectChange = (e) => {
      setSelected(e.target.value);
    };
    const handleSearch = () => {
   
      // 콜백 함수 호출
      onSearch(search, selected);
      // 검색후에 검색창 초기화
      setSearch("");
      setSelected(""); // 검색 후에 selectedValue를 초기화
    };
  

  
    return (
      <div className="Selected">
        <select className="Selected2" onChange={handleSelectChange} value={selected}>
          <option key="" value="">선택하세요</option>
          <option key="tour" value="tour">여행</option>
          <option key="life" value="life">라이프 스타일</option>
          <option key="sport" value="sport">스포츠/운동</option>
          <option key="IT" value="IT">코딩/IT</option>
          <option key="language" value="language">어학</option>
          <option key="work" value="work">취업</option>
        </select>
        <input className="Inputed" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <input className="Inputed2" type="submit" value="검색" onClick={handleSearch} />
      </div>
    );
  };
  
  export default Select;
  