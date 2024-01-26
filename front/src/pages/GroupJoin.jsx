import React, { useState, useEffect } from "react";
import Select from "../components/Home/Select";
import Header from "../components/Home/header";
import Footer from "../components/Home/Footer";
import GroupCategory from "../components/GroupJoin/GroupCategory";
import ImageSlide from "../components/Home/ImageSlide";
import { useParams } from "react-router-dom";
import GroupList from "../components/GroupJoin/GroupList";
import axios from "axios";

const GroupJoin = () => {
  const { hsearch, hselected } = useParams();
  const { search, selected, categoryProps, groupprops } = useParams();
  const [searchValue, setSearchValue] = useState(search || hsearch);
  const [selectedValue, setSelectedValue] = useState(selected || hselected);
  const [categoryValue, setCategoryValue] = useState(categoryProps);
  const [groupValue, setGroupValue] = useState(groupprops);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSearch = (search, selected, categoryProps, groupprops) => {
    setSearchValue(search);
    setSelectedValue(selected);
    setCategoryValue(categoryProps);
    setGroupValue(groupprops);
    setIsSelectOpen(true); // 검색 시 Select 컴포넌트 열기
  };
  const [print, setPrint] = useState();
  useEffect(() => {
    const fetchDataAndResetValues = async () => {
      try {
        const response = await axios.post("/api/test", {
          groupValue, categoryValue, searchValue, selectedValue
        });
        console.log(response.data)
        setPrint(response)

      } catch (error) {
        console.log(error);
      }
    };
  
    fetchDataAndResetValues();
  }, [groupValue, categoryValue, searchValue, selectedValue]);

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
      <GroupCategory onSearch={handleSearch}/>
      <GroupList print={print}/>
      {/* End Main */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
};
export default GroupJoin;
