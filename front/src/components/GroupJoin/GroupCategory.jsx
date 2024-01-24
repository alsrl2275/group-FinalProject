import { useEffect, useState } from "react";
import "../../css/GroupCategory.css";
import GroupList from "./GroupList";
import axios from "axios";

const GroupCategory = () => {

const [props, setProps] = useState(null); // 초기값을 null로 설정
      
    const handleGroup = async(category) => {
        console.log(`Group clicked: ${category}`);
        try {
            
            const response = await axios.post("/test", {category});
            setProps(response.data); // 상태 업데이트를 통해 값 설정
            console.log("확인용")
            console.log(props);
            // useEffect();
          } catch (error) {
            console.error('Error submitting data:', error);
          }
    };

    const handleCategory = (category) => {
        console.log(`Category clicked: ${category}`);
    };

    return (
        <>
            <div className="Group">
                <div onClick={() => handleGroup('무료')} style={{ marginLeft: '20%' }}>무료모임</div>
                <div onClick={() => handleGroup('유료')} style={{ marginRight: '20%' }}>유료모임</div>
            </div>
            <div className="category">
                <div onClick={() => handleCategory('sport')}>운동</div>
                <div onClick={() => handleCategory('life')}>라이프스타일</div>
                <div onClick={() => handleCategory('language')}>어학</div>
                <div onClick={() => handleCategory('IT')}>코딩/IT</div>
                <div onClick={() => handleCategory('tour')}>여행</div>
                <div onClick={() => handleCategory('work')}>취업</div>
            </div>
            <GroupList props={props}/>
        </>
    );
};

export default GroupCategory;
