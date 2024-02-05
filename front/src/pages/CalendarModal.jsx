// CalendarModal.js

import React from 'react';
import '../css/CalendarModal.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import EditModal from './EditModal';


class CalendarModal extends React.Component {
  state = {
    scheduleTitle: '',
    scheduleMemo: '',
    startDate: this.props.start,
    endDate: this.props.end,
    userId: '아이디A',
    isEditModalOpen: false,  // 새로운 모달을 열기 위한 상태 추가
  };

  handleTitleChange = (e) => {
    this.setState({ scheduleTitle: e.target.value });
  };

  handleMemoChange = (e) => {
    this.setState({ scheduleMemo: e.target.value });
  };

  // handleUserIdChange = (e) => {
  //   this.setState({ userId: e.target.value });
  // };

  
  // handleEdit 및 handleDelete 메서드 추가
  handleEdit = () => {
    // this.props.onClose(); // 먼저 현재 모달을 닫습니다.
    this.setState({ isEditModalOpen: true }); 
    
  };

  handleDelete = async () => {
    const { eventData } = this.props;

    const isConfirmed = await Swal.fire({
      icon: 'question',
      title: '정말 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => result.isConfirmed)

    if (isConfirmed) {
      try {
        // 삭제작업
        await axios.delete(`/deleteCalendar/${eventData.seq}`);
        
        Swal.fire({
          icon: 'success',
          title: '일정이 삭제되었습니다.',
          confirmButtonText: '확인'
        });
  
        this.props.onClose();
      } catch (error) {
        console.error('서버 요청 실패', error);
      }
    }
  }



  handleFormSubmit = async (e) => {
    e.preventDefault();
    // 여기서 저장 또는 다른 작업 수행
    console.log('제목:', this.state.scheduleTitle);
    console.log('메모:', this.state.scheduleMemo);
    if(this.state.scheduleTitle.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: '제목을 입력해주세요.',
        confirmButtonText: '확인'
      })
    } else {
      try {
        const response = await axios.post("/Calendar", {
          scheduleTitle: this.state.scheduleTitle,
          scheduleMemo: this.state.scheduleMemo,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          userId: this.state.userId
        })
        console.log("결과 :", response.data)
        Swal.fire({
          icon: 'success',
          title: '일정이 추가되었습니다.',
          confirmButtonText: '확인'
        })
        this.props.onClose(); // 폼 제출 후 모달 닫기
      } catch (error) {
        console.error("서버 요청 실패", error)
      }
    }
   
  };

  render() {
    const { diff, eventData } = this.props;
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          
          {this.props.diff === 'a' && ( // 날짜가 하루일 때
            <>
              <form onSubmit={this.handleFormSubmit} className="form-container">
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td className='label'>날짜</td>
                      <td className='value'>{this.state.startDate} - {this.state.endDate}</td>
                    </tr>
                    <tr>
                      <td className="label">제목:</td>
                      <td className="value">
                        <input
                          type="text"
                          value={this.state.scheduleTitle}
                          onChange={this.handleTitleChange}
                          className="input-field"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="label">메모:</td>
                      <td className="value">
                        <textarea
                          value={this.state.scheduleMemo}
                          onChange={this.handleMemoChange}
                          className="textarea-field"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button type="submit" className="submit-button">
                          일정 추가
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </>
          )}

{this.props.diff === 'b' && ( // 여러날짜일 때
            <form onSubmit={this.handleFormSubmit} className="form-container">
              <table className="form-table">
                <tbody>
                  <tr>
                    <td className="label">날짜</td>
                    <td className="value">{this.state.startDate} - {this.state.endDate}</td>
                  </tr>
   
                  <tr>
                    <td className="label">제목:</td>
                    <td className="value">
                      <input
                        type="text"
                        value={this.state.scheduleTitle}
                        onChange={this.handleTitleChange}
                        className="input-field"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">메모:</td>
                    <td className="value">
                      <textarea
                        value={this.state.scheduleMemo}
                        onChange={this.handleMemoChange}
                        className="textarea-field"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                    {/* <input
                      type="hidden"
                      value={this.state.userId}
                      className="input-field"
                      onChange={this.handleUserIdChange}
                      /> */}
                      <button type="submit" className="submit-button">일정 추가</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          )}

{diff === 'c' && ( // 일정이있는 데이터 클릭했을 때 
            <>

                <table className="form-table">
                  <tbody>
                    <tr>
                    <td className="label">날짜</td>
                    <td className="value">{eventData.start} - {eventData.end}</td>
                    </tr>
                    <tr>
                      <td className="label">제목:</td>
                      <td className="value">
                        {eventData.title}
                      </td>
                    </tr>
                    <tr>
                      <td className="label">메모:</td>
                      <td className="value">
                      <textarea
                        value={eventData.memo}
                        className="textarea-field"
                        readOnly
                      />
                    </td>
                    </tr>
                    {/* <tr>
                      <td className="label">사용자 ID:</td>
                      <td className="value">{eventData.userId}</td>
                    </tr> */}
                    <tr>
                      <td colSpan="2">
                        <div className='button_line'>
                        <button className='button-container' onClick={this.handleEdit}>수정</button>
                        <span className="button-gap" />
                        <button className='button-container' onClick={this.handleDelete}>삭제</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* 수정 모달 열기 */}
              
                {this.state.isEditModalOpen && ( // isEditModalOpen값이 true인 경우에만 EditModal 컴포넌트 랜더
                  <EditModal
                  onClose={() => {                              // 컴포넌트 상태를 업데이트하여 isEditModalOpend을 false로 설정하는 함수를 전달하고
                    this.setState({ isEditModalOpen: false });   // EditModal 컴포넌트를 랜더링하면서 'onClose' prop에는 현재 
                    this.props.onClose();                         // eventData prop에는 현재 일정 데이터를 전달합니다
                  }}                  
                  eventData={eventData}
                />                                                                                                                                                  
                )}
            </>
          )}
          <button className= "submit-button" onClick={this.props.onClose}>모달 닫기</button>
        </div>
      </div>
    );
  }
}

export default CalendarModal;