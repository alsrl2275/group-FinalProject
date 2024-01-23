import Select from "../components/Home/Select";
import Header from "../components/Home/header";
import Footer from "../components/Home/Footer";

import GroupCategory from "../components/GroupJoin/GroupCategory";
import ImageSlide from "../components/Home/ImageSlide";


const GroupJoin = () => {
  
  return (
    <>
      {/* header */}
      <Header />
      {/* End header */}
      {/* Main */}
      <ImageSlide/>
      <Select />
      <div style={{ marginTop: '50px' }} /> 
      <GroupCategory/>
      
      {/* End Main */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
};
export default GroupJoin;