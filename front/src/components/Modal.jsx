import React from "react";
import "../css/Modal.css"
const Modal = ({ isOpen, handleClose, data }) => {
  // 모달이 열려 있지 않으면 null 반환할꺼양
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 모달 내용 18줄까지 가능*/}
        <h2>{data.seq}</h2>
        <p>{data.category}</p>
        <h2>{data.title}</h2>
        <p>{data.face}</p>
        <p>{data.members}</p>
        <p>{data.program}</p>
        <p>{data.program}</p><p>{data.program}</p>

        {/* 기타 데이터 출력 */}
        <button className="modal-content-but" onClick={handleClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;