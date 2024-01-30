import React, { useState } from "react";
import list from "../../JS/images";
import Modal from "../../components/Modal"; // 모달 컴포넌트 import

const SportGroup = ({ print }) => {

  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeq = (c) => {
    setSelectedData(c);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  const getImageByCategory = (category) => {
    const images = list[category] || [];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="group-container">
      <div className="group-item">
        <a
          href="https://runninglife.co.kr/contents/getAreaAllCrew/capital/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            className="group-item-img"
            src={"/Image/running.png"}
            alt="Card"
          />
          <h4 className="group-item-h4">런닝 하실분</h4>
          <h4 className="group-item-h4">런닝크루로 오세요</h4>
        </a>
      </div>
      <div className="group-item">
        <a
          href="https://www.plabfootball.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            className="group-item-img"
            src={"/Image/soccer.svg"}
            alt="Card"
          />
          <h4 className="group-item-h4">축구/풋살</h4>
          <h4 className="group-item-h4">플랩으로 오세요</h4>
        </a>
      </div>
      {print &&
        print.map((c, index) => (
          <div key={index} className="group-item">
            <div onClick={() => handleSeq(c)}>
              <img
                className="group-item-img"
                src={getImageByCategory(c.category)}
                alt="Card"
              />
              <h4 className="group-item-h4">{c.category}</h4>
              <h4 className="group-item-h4">{c.title}</h4>
            </div>
          </div>
        ))}
      {/* 모달 컴포넌트를 사용하여 모달을 렌더링 */}
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} data={selectedData}/>
    </div>
  );
};

export default SportGroup;
