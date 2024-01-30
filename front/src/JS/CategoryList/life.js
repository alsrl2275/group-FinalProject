import React, { useState } from "react";
import list from "../../JS/images";
import Modal from "../../components/Modal"; // 모달 컴포넌트 import

const LifeGroup = ({ print }) => {

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
            href="https://www.frip.co.kr/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              className="group-item-img"
              src={"/Image/life.svg"}
              alt="Card"
            />
            <h4 className="group-item-h4">라이프 스타일</h4>
            <h4 className="group-item-h4">FRIP 취미 여가 사이트</h4>
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

  export default LifeGroup;
