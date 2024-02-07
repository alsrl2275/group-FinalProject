import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { SketchPicker } from 'react-color';

const EditModal = ({
   onClose,
   eventData,
   displayColorPicker,
   handleColorPickerOpen,
   handleColorPickerClose,
   handleColorPickerConfirm,
 }) => {
  const [editedTitle, setEditedTitle] = useState(eventData.title);
  const [editedMemo, setEditedMemo] = useState(eventData.memo);
  const [editedStart, setEditedStart] = useState(eventData.start);
  const [editedEnd, setEditedEnd] = useState(eventData.end);
  const [color, setColor] = useState(eventData.color || '#4a90e2'); // 초기 상태 설정
  const userId = eventData.userId

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleMemoChange = (e) => {
    setEditedMemo(e.target.value);
  };

  const handleStartChange = (e) => {
    setEditedStart(e.target.value);
  };

  const handleEndChange = (e) => {
    setEditedEnd(e.target.value);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };


  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if(editedEnd < editedStart) {
      Swal.fire({
        icon: 'error',
        title: '올바른 날짜 형식을 입력해주세요.',
        confirmButtonText: '확인'
      })
    } else if(editedTitle.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: '제목을 입력해주세요.',
        confirmButtonText: '확인'
      })
    } else {
      try {
        const response = await axios.put(`/updateCalendar/${eventData.seq}`, {
          editedTitle,
          editedMemo,
          editedStart,
          editedEnd,
          color,
        });
        console.log('결과:', response.data);
        Swal.fire({
          icon: 'success',
          title: '일정이 수정되었습니다.',
          confirmButtonText: '확인',
        });
      onClose(); // 수정 후 모달 닫기
      } catch (error) {
        console.error('서버 요청 실패', error);
      }
    }


  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <>
        <form onSubmit={handleEditSubmit} className="form-container">
          <table className="form-table">
            <tbody>
             <input type="hidden" name="userId" value={userId} />
                <tr>
                    <td className="label">날짜</td>
                    <td className="value">
                     
                     <input
                        type="date"
                        value={editedStart}
                        onChange={handleStartChange}
                        className="input-field"
                      />
                    <input
                        type="date"
                        value={editedEnd}
                        onChange={handleEndChange}
                        className="input-field"
                      /> 
                    </td>
                </tr>
                <tr>
                    <td className="label">제목:</td>
                    <td className="value">
                      <input
                        type="text"
                        value={editedTitle}
                        id="editedTitle"
                        onChange={handleTitleChange}
                        className="input-field"
                      />
                    </td>
              </tr>
              <tr>
                <td className="label">메모:</td>
                <td className="value">
                  <textarea
                    value={editedMemo}
                    onChange={handleMemoChange}
                    className="textarea-field"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <br/>
                  <div className='colorBtn'>
                  <button type="button" className="colorBtn" onClick={handleColorPickerOpen}>
                    색상 수정
                  </button>
                  <button type="submit" className="submit-button">
                    일정 수정
                  </button>
                  </div>   
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        </>
        {displayColorPicker ? (
          <div className="updateColor-picker-modal">
            <div
              className="color-picker-cover"
              onClick={() => handleColorPickerClose()}
            />
            <div className="color-picker-content">
            <SketchPicker color={color} onChange={(color) => handleColorChange(color)} />
              <div
                className="color-preview"
                style={{ backgroundColor: color }}
              ></div>
              <div className="updateColor-picker-buttons">
              <button type="button" onClick={() => handleColorPickerConfirm(color)}>확인</button>
              <span className="button-gap" />
              <button type="button" onClick={() => handleColorPickerClose()}>취소</button>
            </div>
              {/* 색상 관련 UI */}
            </div>
          </div>
        ) : null}
        <button className="closeBtn" onClick={onClose}>
          모달 닫기
        </button>
      </div>
    </div>
    
  );

}

export default EditModal;