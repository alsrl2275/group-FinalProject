import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/GroupList.css";
import images from "../../JS/images";
const group = [
  {
    title: "IT공부하실분",
    category: "파이썬",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
  {
    title: "코딩모임하실분",
    category: "java, 부트",
  },
];
const GroupList = () => {
  const handleGroup = (c) => {
    console.log(c.title);
  };



  return (
    <div className="group-container">
      {group.map((c,index) => (
        <div key={c.title} className="group-item">
          <div onClick={() => handleGroup(c)}>
          <img src={images[index % images.length]} alt="Card" />
            <h4>{c.title}</h4>
            <h4>{c.category}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
