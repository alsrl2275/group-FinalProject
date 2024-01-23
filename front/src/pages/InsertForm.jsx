
import KakaoMap from '../KakaoMap';
import Header from '../components/Home/header';
import '../css/InsertForm.css'
import axios from 'axios';
import { useState } from 'react';
// import { useState } from 'react';

function InsertForm() {
  const [formData, setFormData] = useState({
    meetingNumber: '',
    userId: '',
    meetingTitle: '',
    faceToFace: '',
    Face: '',
    Program: '',
    capacity: '',
    meetingDateStart: '',
    meetingDateEnd: '',
    meetingLocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/groupInsert', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  return (
    <>
      <Header/>
      
      <div className="insert-form-container">     
      <form className="insert-form" onSubmit={handleSubmit}>
      <h2>그룹 개설</h2>
      <table>
        <tbody>
          <tr>
        <label>
         <td>모임 순번 :&nbsp;</td> 
         <td> <input
            type="text"
            name="meetingNumber"
            value={formData.meetingNumber}
            onChange={handleChange}
          /></td>
        </label>
          </tr> 
          <tr>
        <label>
          <td>아이디 :&nbsp;</td> 
          <td><input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label>
          <td>모임명 :&nbsp;</td>
          <td><input
            type="text"
            name="meetingTitle"
            value={formData.meetingTitle} 
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
          <td colSpan="2">
          모임종류 : &nbsp;<br/>
          <div className='radio-label'>
          <label htmlfor="sports">
          운동
          <input
              type="radio"
              name="faceToFace"
              value="운동"
              id="sports"
            />
            </label>
            <label htmlfor="hobby">
            &nbsp;&nbsp;라이프 스타일
            <input
              type="radio"
              name="faceToFace"
              value="라이프 스타일"
              id="hobby"
            />
            </label>
            <label htmlfor="travel">
            &nbsp;&nbsp;여행
            <input
              type="radio"
              name="faceToFace"
              value="여행"
              id="travel"
            />
            </label>
            <label htmlfor="employment">
            &nbsp;&nbsp;취업
            <input
              type="radio"
              name="faceToFace"
              value="취업"
              id="employment"
            />
            </label>
            <label htmlfor="language">
            &nbsp;&nbsp;어학
            <input
              type="radio"
              name="faceToFace"
              value="어학"
              id="language"
            />
            </label>
            <label htmlfor="coding">
            &nbsp;&nbsp;코딩
            <input
              type="radio"
              name="faceToFace"
              value="코딩"
              id="coding"
            />
            </label>
            </div>
            </td>
            </tr>
            <br/>
          모임방식 :<br/>
          <tr>
          <div className='radio-label'>
          <label htmlfor="Facetoface">
          대면
          <input
            type="radio"
            name="Face"
            id="Facetoface"
          />
          </label>
          &nbsp;&nbsp;
          <label htmlfor="noFace">
          비대면
          <input
            type="radio"
            name="Face"
            id="noFace"
          />
         </label>
         </div>
         </tr>
        <br />
        <tr>
        공유 프로그램 : <br/>
        <div className='radio-label'>
          
        <label htmlfor="Zoom">
            Zoom
            <input
              type="radio"
              name="Program"
              value="줌"
              id="Zoom"
            />
            </label>
            &nbsp;&nbsp;
          <label htmlfor="Skype">
          &nbsp;&nbsp;Skype
          <input
            type="radio"
            name="Program"
            value="Skype"
            id="Skype"
          />
          </label>
          &nbsp;&nbsp;
        <label htmlfor="Discord">
        &nbsp;&nbsp;Discord
        <input
          type="radio"
          name="Program"
          value="Discord"
          id="Discord"
        />
        </label>
        </div>
        </tr>
        <tr>
        <label>
          <td>인원 :&nbsp;</td> 
          <td><input
            type="number"
            name="capacity"
            min="0"
            value={formData.capacity}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label className='Datelabel'>
         <td>모임날짜 :&nbsp;</td>
          <td><input
            type="date"
            name="meetingDateStart"
            value={formData.meetingDateStart}
            onChange={handleChange}
          /> &nbsp;-&nbsp;&nbsp;
            <input
            type="date"
            name="meetingDateEnd"
            value={FormData.meetingDateEnd}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label>
          <td>장소 :&nbsp;</td> 
          <td><input
            type="text"
            name="meetingLocation"
            value={FormData.meetingLocation}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        </tbody>
        </table>
        <KakaoMap/>
        <br />
        <input type="submit" value="그룹개설"/>
      </form>
    </div>
    </>
  );
}

export default InsertForm;