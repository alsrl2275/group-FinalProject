import { useState, useEffect } from "react";
import "../../css/GroupList.css";
import list from "../../JS/images";
import axios from "axios";



const GroupList = ({print}) => { 
  // print 값이 Map인 경우, 순회하며 출력
  if (print instanceof Map) {
    for (let [category, title] of print) {
      console.log(`Key: ${category}, Value: ${title}`);
    }
  } else {
    console.log("print 값이 Map이 아닙니다.");
  }
  const getImageByCategory = (category) => {
    const images = list[category] || [];
    // 카테고리에 해당하는 이미지 중 랜덤으로 하나를 선택하도록 구현
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="group-container">

     
    </div>
  );
};

export default GroupList;