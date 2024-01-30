// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/header';
import ImageSlide from '../components/Home/ImageSlide';
import Category from '../components/Home/HomeCategory';
import Select from '../components/Home/Select';


const HomePage = () => {

  const navigate = useNavigate();



  const handleSearch = (hsearch, hselected) => {
    navigate(`/GroupJoin/${hsearch}/${hselected}`);
  };

  return (
    <>
      {/* header */}
      <Header />
      {/* End header */}
      {/* Main */}
      <ImageSlide />

      {/* Select 컴포넌트에 상태 및 함수 전달 */}
      <Select onSearch={handleSearch} />
      <Category />
      {/* End Main */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
};

export default HomePage;
