import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Hy = styled.div`
  width: 300px;
  display: flex;
  margin-bottom:20px;
  
`;
const Body = styled.div`
  margin: 10% 25%;
`;

const t = { width: '18rem', marginRight: '30px' };
const Category = () => {
  return (
    <Body>
    <Hy>
    <NavLink to={"/test"}>

      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 운동</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>

    </NavLink>

    
    <NavLink to={"/test"}>

      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 라이프 스타일</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>

    </NavLink>
    
    
    <NavLink to={"/test"}>

      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 여행</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>

    </NavLink>
 </Hy>
 <Hy>
    <NavLink to={"/test"}>
      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 취업</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>

    <NavLink to={"/test"}>
      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 어학</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>

    <NavLink to={"/test"}>
      <Card style={t}>
        <Card.Img variant="top" src="/Image/PT.jpg" />
        <Card.Body>
          <Card.Title>즐거운 코딩</Card.Title>
          <Card.Text>
            아리따운 여성과 함께하실 남성분들 모집합니다
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
    </Hy>
    </Body>
  );
}

export default Category;