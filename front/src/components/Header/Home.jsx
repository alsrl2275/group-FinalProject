import { NavLink } from 'react-router-dom';
import styled from "styled-components";
const AP = styled.p`
    color: yellow;
`;



const Home = () => {
    return(
        <NavLink to = {"/"}><AP>홈</AP></NavLink>   
    );
};

export default Home;