import { useEffect, useState } from "react";
import "../../css/GroupCategory.css";
import GroupList from "./GroupList";


const GroupCategory = ({ search, selected }) => {
  console.log("확인용 33333")
  console.log(search)
  console.log(selected)
  console.log("===================")
  const [groupprops, setGroupprops] = useState(null);
  const [categoryProps, setCategoryProps] = useState(null);

  console.log(search)
  console.log(selected)
  const handleGroup = (category) => {
    setGroupprops(category);
  };

  const handleCategory = (category) => {
    setCategoryProps(category);
  };

  

  return (
    <>
      <div className="Group">
        <div className="Group-div" onClick={() => handleGroup("무료")} style={{ marginLeft: "20%" }}>
          무료모임
        </div>
        <div className="Group-div" onClick={() => handleGroup("유료")} style={{ marginRight: "20%" }}>
          유료모임
        </div>
      </div>
      <div className="category">
        <div className="category-div" onClick={() => handleCategory("sport")}>운동</div>
        <div className="category-div" onClick={() => handleCategory("life")}>라이프스타일</div>
        <div className="category-div" onClick={() => handleCategory("language")}>어학</div>
        <div className="category-div" onClick={() => handleCategory("IT")}>코딩/IT</div>
        <div className="category-div" onClick={() => handleCategory("tour")}>여행</div>
        <div className="category-div" onClick={() => handleCategory("work")}>취업</div>
      </div>
      
      <GroupList categoryProps={categoryProps} groupprops={groupprops} search={search} selected={selected} />
    </>
  );
};

export default GroupCategory;
