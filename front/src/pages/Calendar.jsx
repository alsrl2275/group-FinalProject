import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../css/Calendar.css'
import Header from '../components/Header/header';
import axios from 'axios';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: [],
    };
  }

  componentDidMount() {
    this.fetchGroupData();
  }

  fetchGroupData = async () => {
    try {
      const response = await axios.get('/getGroupData'); // 적절한 엔드포인트를 사용
      this.setState({ groupData: response.data });
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    }
  };

  render() {
    const { groupData } = this.state;

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
                {groupData.map((group) => (
                  <tr key={group.groupId}>
                    <td>
                      {group.meetingTitle} - {group.meetingLocation} -{' '}
                      {group.meetingDateStart}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              events={groupData.map((group) => ({
                title: group.meetingTitle,
                date: group.meetingDateStart,
              }))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;