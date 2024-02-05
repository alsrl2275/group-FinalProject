import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditModal = ({ onClose, eventData }) => {
  const [editedTitle, setEditedTitle] = useState(eventData.title);
  const [editedMemo, setEditedMemo] = useState(eventData.memo);
  const [editedStart, setEditedStart] = useState(eventData.start);
  const [editedEnd, setEditedEnd] = useState(eventData.end);

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
          editedEnd
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
        <form onSubmit={handleEditSubmit} className="form-container">
          <table className="form-table">
            <tbody>
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
                  <button type="submit" className="submit-button">
                    일정 수정
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button className="submit-button" onClick={onClose}>
          모달 닫기
        </button>
      </div>
    </div>
  );

}

export default EditModal;