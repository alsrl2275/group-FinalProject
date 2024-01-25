import { useState, useEffect } from "react";
import "../../css/GroupList.css";
import list from "../../JS/images";
import axios from "axios";

const group = [
  {
    cate: "IT",
    title: "IT공부하실분",
    category: "파이썬",
  },
  {
    cate: "tour",
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    cate: "work",
    title: "IT공부하실분",
    category: "파이썬",
  },
  {
    cate: "language",
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    cate: "sport",
    title: "IT공부하실분",
    category: "파이썬",
  },
  {
    cate: "life",
    title: "코딩모임하실분",
    category: "java, 부트",
  },
];

const GroupList = ({ categoryProps, groupprops, search, selected }) => {
  const [recategoryProps, setRecategoryProps] = useState(null)

  console.log("확인용44444")
  console.log(search)
  console.log(selected)
  console.log("===================")
  
  if(categoryProps === null){
    if(selected !== 'all'){
      categoryProps=selected;
    }else if(selected === 'all'){
      categoryProps='sport';
    }
  }

  
  if(groupprops === null){
    groupprops = '무료'
  }


 const handleGroup = (c) => {
    console.log(c.title);
  };

  const getImageByCategory = (category) => {
    const images = list[category] || [];
    // 카테고리에 해당하는 이미지 중 랜덤으로 하나를 선택하도록 구현
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="group-container">
      {group.map((c, index) => (
        <div key={c.cate} className="group-item">
          <div className="group-item-div" onClick={() => handleGroup(c)}>
            <img
              className="group-item-img"
              src={getImageByCategory(categoryProps)}
              alt="Card"
            />

            <h4 className="group-item-h4">{c.title}</h4>
            <h4 className="group-item-h4">{c.category}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;