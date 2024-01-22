

// src/s04-4_StyledComponents.jsx

import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const SContainer = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    
`;
const SP = styled.p`
    color: red;
    font-size: 22px;
    margin-right: 10px;
`;
const StyledComponents = () => {
    return (
        <SContainer>
            
                <NavLink to = {"/"}><SP>그룹개설</SP></NavLink>
                <NavLink to = {"/"}><SP>그룹 참가하기</SP></NavLink>
                <NavLink to = {"/"}><SP>일정관리</SP></NavLink>
                <NavLink to = {"/"}><SP>리뷰</SP></NavLink>   
            
        </SContainer>
    );
};

export default StyledComponents;
