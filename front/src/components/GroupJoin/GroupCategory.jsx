
import "../../css/GroupCategory.css";
import GroupList from "./GroupList";

const GroupCategory = ({ onSearch }) => {
  const handleGroup = (group) => {
    onSearch(null, null, null, group); 
  };

  const handleCategory = (category) => {
    onSearch(null, null, category);
  };

  return (
    <>
      <div className="Group">
        <div
          className="Group-div"
          onClick={() => handleGroup("무료")}
          style={{ marginLeft: "20%" }}
        >
          무료모임
        </div>
        <div
          className="Group-div"
          onClick={() => handleGroup("유료")}
          style={{ marginRight: "20%" }}
        >
          유료모임
        </div>
      </div>
      <div className="category">
        <div className="category-div" onClick={() => handleCategory("sport")}>
          운동
        </div>
        <div className="category-div" onClick={() => handleCategory("life")}>
          라이프스타일
        </div>
        <div
          className="category-div"
          onClick={() => handleCategory("language")}
        >
          어학
        </div>
        <div className="category-div" onClick={() => handleCategory("IT")}>
          코딩/IT
        </div>
        <div className="category-div" onClick={() => handleCategory("tour")}>
          여행
        </div>
        <div className="category-div" onClick={() => handleCategory("work")}>
          취업
        </div>
      </div>

      <GroupList />
    </>
  );
};

export default GroupCategory;
