// CalendarModal.js

import React from 'react';
import '../css/CalendarModal.css'
import axios from 'axios';
import Swal from 'sweetalert2';


class CalendarModal extends React.Component {
  state = {
    scheduleTitle: '',
    scheduleMemo: '',
    startDate: this.props.start,
    endDate: this.props.end,
    userId: '아이디A'
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
    } else if(this.state.scheduleMemo.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: '메모내용을 입력해주세요.',
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
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          


          {this.props.diff === 'a' && (
            <>
              <form onSubmit={this.handleFormSubmit} className="form-container">
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td className='label'>날짜</td>
                      <td className='value'>{this.props.start}</td>
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

{this.props.diff === 'b' && (
            <form onSubmit={this.handleFormSubmit} className="form-container">
              <table className="form-table">
                <tbody>
                  <tr>
                    <td className="label">날짜</td>
                    <td className="value">{this.props.start} - {this.props.end}</td>
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

          <button onClick={this.props.onClose}>모달 닫기</button>
        </div>
      </div>
    );
  }
}

export default CalendarModal;