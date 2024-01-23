import * as React from 'react';

import Footer from '../components/Home/Footer';
import Header from '../components/Home/header';
import ImageSlide from '../components/Home/ImageSlide';
import Category from '../components/Home/HomeCategory';
import Select from '../components/Home/Select';


// TODO remove, this demo shouldn't need to reset the theme.


const HomePage = () => {
  

  return (
    <>
      {/* header */}
      <Header/>
      {/* End header */}
      {/* Main */}
      <ImageSlide/>
      <Select/>
      <Category/>
      {/* End Main */}
      {/* Footer */}
      <Footer/>
      {/* End footer */}
      </>
  );
}

export default HomePage;