import React, { useState } from "react";
import Select from "../components/Home/Select";
import Header from "../components/Home/header";
import Footer from "../components/Home/Footer";
import GroupCategory from "../components/GroupJoin/GroupCategory";
import ImageSlide from "../components/Home/ImageSlide";
import { useParams } from "react-router-dom";

const GroupJoin = () => {
  const { hsearch, hselected } = useParams();
  const [searchValue, setSearchValue] = useState(hsearch || ""); // 기본값이 없을 경우를 대비하여 빈 문자열로 설정
  const [selectedValue, setSelectedValue] = useState(hselected || "all"); // 기본값이 없을 경우를 대비하여 'all'로 설정
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  console.log("확인용222")
  console.log(hsearch)
  console.log(hselected)
  console.log("===================")
  const handleSearch = (search, selected) => {
    setSearchValue(search);
    setSelectedValue(selected);
    setIsSelectOpen(true); // 검색 시 Select 컴포넌트 열기
  };

  return (
    <>
      {/* header */}
      <Header />
      {/* End header */}
      {/* Main */}
      <ImageSlide />
      {/* onSearch 함수를 Select 컴포넌트로 전달 */}
      <Select onSearch={handleSearch} />
      <div style={{ marginTop: "40px" }} />
      {/* search와 selected 값을 GroupCategory로 전달 */}
      <GroupCategory search={searchValue} selected={selectedValue} />
      {/* End Main */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
};
export default GroupJoin;
