import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../css/Calendar.css'
import Header from '../components/Home/header';


class Calendar extends Component {
    render() {
        return (
          <div className="App">
            <Header/>
          <div>
            <table>
              <tbody>
                <th>모임 현황</th>
              </tbody>
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
            </table>
          </div>
            <br/>
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
              events={[
                { title: '축구모임', date: '2022-09-01'},
                { title: '데이트', date: '2022-09-02'}
              ]}
            />
            
          </div>
        );
    }
}
export default Calendar;