import styled from "styled-components";

const Selected = styled.div`
justify-content: center;
align-items: center;
display: flex;
margin: 0 auto;
margin-bottom: 20px;

`;
const Inputed = styled.input`
    width: 500px;
    display: flex;
`;
const Inputed2 = styled.input`
    background-color: yellow;
    color: red;
    border: none;
`;


const Select = () => {
    return(
        <Selected>
            <select>
                <option key="all" value="all">선택하세요</option>
                <option key="tour" value="tour">여행</option>
                <option key="life" value="life">라이프 스타일</option>
                <option key="sport" value="sport">스포츠/운동</option>
                <option key="it" value="it">코딩/IT</option>
                <option key="language " value="language ">어학</option>
                <option key="employment" value="employment">취업</option>
            </select>
            <Inputed type="text"/>
            <Inputed2 type="submit" value="검색"/>
        </Selected>
    );


};
export default Select;
