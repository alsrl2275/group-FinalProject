import "../../css/Select.css"; // CSS 파일 불러오기




const Select = () => {
    return(
        <div className="Selected">
            <select>
                <option key="all" value="all">선택하세요</option>
                <option key="tour" value="tour">여행</option>
                <option key="life" value="life">라이프 스타일</option>
                <option key="sport" value="sport">스포츠/운동</option>
                <option key="it" value="it">코딩/IT</option>
                <option key="language " value="language ">어학</option>
                <option key="employment" value="employment">취업</option>
            </select>
            <input className="Inputed" type="text"/>
            <input className="Inputed2" type="submit" value="검색"/>
        </div>
    );


};
export default Select;
