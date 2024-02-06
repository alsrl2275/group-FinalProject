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
    // modalDate: null,
    modalStartDate: null,
    modalEndDate: null,
    diff: null,
    events: [],
  };



  componentDidMount() {
    this.fetchEvents();
  }

  handleDateClick = (arg) => {
    this.setState({
      showModal: true,
      // modalDate: arg.dateStr,
      diff: 'b'
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

  handleEventClick = (info) => { // 일정이 있는 이벤트 클릭 시 
    // 클릭한 이벤트 정보에 대한 작업을 수행
    console.log('Clicked event:', info.event);

    // 종료날짜 데이터변환 로직
    const adjustedEndDate = new Date(info.event.end.valueOf());
    adjustedEndDate.setDate(adjustedEndDate.getDate());
    const adjustedEndStr = adjustedEndDate.toISOString().split('T')[0];

    // 모달에 날짜 설정
    this.setState({
      showModal: true,
      modalStartDate: info.event.startStr,
      modalEndDate: info.event.endStr,
      diff: 'c', // 이벤트 클릭을 나타내는 다른 값으로 변경
      selectedEventData: {  // info.event = FullCalendar에서 이벤트를 나타내는 객체
        title: info.event.title,
        start: info.event.startStr,
        end: adjustedEndStr,
        memo: info.event.extendedProps.memo, // extendedProps : 객체 내에 있는 속성에 접근하기 위해서는 info.event.extendedProps.seq
        userId: info.event.extendedProps.userId,
        seq: info.event.extendedProps.seq
        // 원하는 다른 이벤트 속성들 추가
      },
      
    }, () => {
      console.log('Selected Event Data:', this.state.selectedEventData);
    })
 };


  handleCloseModal = async () => {
    this.setState({
      showModal: false,
      // modalDate: null,
      modalStartDate: null,
      modalEndDate: null,
    });

      await this.fetchEvents();
  };
  handleEventRender = (info) => {
    // info.el은 이벤트를 렌더링하는 HTML 엘리먼트입니다.
    // info.event는 풀캘린더 이벤트 객체입니다.

    // 선택한 색상을 배경색으로 적용
    info.el.style.backgroundColor = info.event.extendedProps.color;
  };
  

  fetchEvents = async () => {
    try {
      const response = await axios.get("/getEvents")
      const eventData = response.data
      // console.log("서버에서 넘어온 값", eventData)
      
      const formattedEvents = eventData.map(event => ({
          title: event.scheduleTitle,
          start: event.startDate,
          end: event.endDate,
          memo: event.scheduleMemo,
          userId: event.userId,
          seq: event.seq,
          color: event.color
      }))
      
      formattedEvents.forEach(event => {
        const adjustedEndDate = new Date(event.end)
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 1)
        event.end = adjustedEndDate.toISOString().split('T')[0]; // 시간 정보 제외
        
      })
      // console.log(formattedEvents);
      
      this.setState({ events: formattedEvents })
      console.log("확인용이다 : ", this.state.events)
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
              eventClick={this.handleEventClick}  // 이벤트 클릭 핸들러 추가
              nextDayThreshold={'24:00:00'} // 마지막 날을 포함하도록 설정
              selectable={true} // 전체 캘린더를 선택 가능하게 만듬
              select={this.handleSelect} // 선택한 영역에 대한 콜백
              eventRender={this.handleEventRender}  // 이벤트 렌더링 시 호출되는 콜백
              
            />
            
          </div>
        </div>
        {this.state.showModal && (
          <CalendarModal
            // date={this.state.modalDate}
            onClose={this.handleCloseModal}
            start={this.state.modalStartDate}
            end={this.state.modalEndDate}
            diff={this.state.diff}
            eventData={this.state.selectedEventData}
          />
        )}
      </div>
    );
  }
  
}

export default Calendar;