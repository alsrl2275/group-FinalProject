// Calendar.jsx


import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/Calendar.css';
import Header from '../components/Header/header';
import CalendarModal from './CalendarModal';
import '../css/CalendarModal.css';
import axios from 'axios';

class Calendar extends Component {
  state = {
    showModal: false,
    modalDate: null,
    modalStartDate: null,
    modalEndDate: null,
    diff: null,
    events: []
  };

  componentDidMount() {
    this.fetchEvents();
  }

  handleDateClick = (arg) => {
    this.setState({
      showModal: true,
      modalDate: arg.dateStr,
      diff: 'a'
    });
  };

  handleSelect = (arg) => {
    // 선택한 영역에 대한 작업을 수행
    console.log('Selected start date:', arg.startStr);
    const adjustedEndDate = new Date(arg.end.valueOf());
    adjustedEndDate.setDate(adjustedEndDate.getDate());
    const adjustedEndStr = adjustedEndDate.toISOString().split('T')[0]; // 시간 정보 제외
    console.log('Selected end date:', adjustedEndStr);


  
    // 모달에 날짜 설정
    this.setState({
    showModal: true,
    modalStartDate: arg.startStr,
    modalEndDate: adjustedEndStr,
    diff: 'b' 
  });
  };

  handleCloseModal = async () => {
    this.setState({
      showModal: false,
      modalDate: null,
      modalStartDate: null,
      modalEndDate: null,
    });

      await this.fetchEvents();
  };

  fetchEvents = async () => {
    try {
      const response = await axios.get("/getEvents")
      const eventData = response.data
      console.log("서버에서 넘어온 값", eventData)
      
      const formattedEvents = eventData.map(event => ({
        title: event.scheduleTitle,
        start: new Date(event.startDate),
        end: new Date(event.endDate),
        memo: event.scheduleMemo,
        userID: event.userId
      }))
      
      formattedEvents.forEach(event => {
        const adjustedEndDate = new Date(event.end)
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 1)
        event.end = adjustedEndDate
        
      })
      console.log(formattedEvents);
      
      this.setState({ events: formattedEvents })
      console.log("확인용 : ", this.state.events)
    } catch (error) {
      console.log("일정 데이터 가져오기 실패", error)
    }

  }




  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <div className="content-container">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>모임 현황</th>
                </tr>
                <tr>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay',
              }}
              events={this.state.events}
              dateClick={this.handleDateClick}
              nextDayThreshold={'24:00:00'} // 마지막 날을 포함하도록 설정
              selectable={true} // 전체 캘린더를 선택 가능하게 만듦
              select={this.handleSelect} // 선택한 영역에 대한 콜백
            />
          </div>
        </div>
        {this.state.showModal && (
          <CalendarModal
            date={this.state.modalDate}
            onClose={this.handleCloseModal}
            start={this.state.modalStartDate}
            end={this.state.modalEndDate}
            diff={this.state.diff}
          />
        )}
      </div>
    );
  }
}

export default Calendar;