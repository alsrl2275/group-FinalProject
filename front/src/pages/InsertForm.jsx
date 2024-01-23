
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

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/groupInsert', {
        ...formData,
        meetingNumber: formData.meetingNumber,
        userId: formData.userId,
        meetingTitle: formData.meetingTitle,
        faceToFace: formData.faceToFace,
        Face: formData.Face,
        Program: formData.Program,
        capacity: formData.capacity,
        meetingDateStart: formData.meetingDateStart,
        meetingDateEnd: formData.meetingDateEnd,
        meetingLocation: formData.meetingLocation
      });
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
      <table
      >
        <tbody>
          <tr>
        <label className='insertLabel'>
         <td>모임 순번 :&nbsp;</td> 
         <td> <input className='insertInput'
            type="text"
            name="meetingNumber"
            value={formData.meetingNumber}
            onChange={handleChange}
          /></td>
        </label>
          </tr> 
          <tr>
        <label className='insertLabel'>
          <td>아이디 :&nbsp;</td> 
          <td><input className='insertInput'
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label className='insertLabel'>
          <td>모임명 :&nbsp;</td>
          <td><input className='insertInput'
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
          <label htmlfor="sports" className='insertLabel'>
          운동
          <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="운동"
              id="sports"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '운동'}
            />
            </label>
            <label htmlfor="hobby" className='insertLabel'>
            &nbsp;&nbsp;라이프 스타일
            <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="라이프 스타일"
              id="hobby"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '라이프 스타일'}
            />
            </label>
            <label htmlfor="travel" className='insertLabel'>
            &nbsp;&nbsp;여행
            <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="여행"
              id="travel"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '여행'}
            />
            </label>
            <label htmlfor="employment" className='insertLabel'>
            &nbsp;&nbsp;취업
            <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="취업"
              id="employment"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '취업'}

            />
            </label>
            <label htmlfor="language" className='insertLabel'>
            &nbsp;&nbsp;어학
            <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="어학"
              id="language"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '어학'}
            />
            </label>
            <label htmlfor="coding" className='insertLabel'>
            &nbsp;&nbsp;코딩
            <input className='inputRadio'
              type="radio"
              name="faceToFace"
              value="코딩"
              id="coding"
              onChange={handleRadioChange}
              checked={formData.faceToFace === '코딩'}
            />
            </label>
            </div>
            </td>
            </tr>
            <br/>
          모임방식 :<br/>
          <tr>
          <div className='radio-label'>
          <label htmlfor="Yface" className='insertLabel'>
          대면
          <input className='inputRadio'
            type="radio"
            name="Face"
            id="Yface"
            value="대면"
            onChange={handleRadioChange}
            checked={formData.Face === '대면'}
          />
          </label>
          &nbsp;&nbsp;
          <label htmlfor="noFace" className='insertLabel'>
          비대면
          <input className='inputRadio'
            type="radio"
            name="Face"
            id="noFace"
            value="비대면"
            onChange={handleRadioChange}
            checked={formData.Face === '비대면'}
          />
         </label>
         </div>
         </tr>
        <br />
        <tr>
        공유 프로그램 : <br/>
        <div className='radio-label'>
          
        <label htmlfor="Zoom" className='insertLabel'>
            Zoom
            <input className='inputRadio'
              type="radio"
              name="Program"
              value="줌"
              id="Zoom"
              onChange={handleRadioChange}
              checked={formData.Program === '줌'}
            />
            </label>
            &nbsp;&nbsp;
          <label htmlfor="Skype" className='insertLabel'>
          &nbsp;&nbsp;Skype
          <input className='inputRadio'
            type="radio"
            name="Program"
            value="스카이프"
            id="Skype"
            onChange={handleRadioChange}
            checked={formData.Program === '스카이프'}
          />
          </label>
          &nbsp;&nbsp;
        <label htmlfor="Discord" className='insertLabel'>
        &nbsp;&nbsp;Discord
        <input className='inputRadio'
          type="radio"
          name="Program"
          value="디스코드"
          id="Discord"
          onChange={handleRadioChange}
          checked={formData.Program === '디스코드'}
        />
        </label>
        </div>
        </tr>
        <tr>
        <label htmlfor="capacity" className='insertLabel'>
          <td>인원 :&nbsp;</td> 
          <td><input className='insertInput'
            type="number"
            name="capacity"
            id="capacity"
            min="0"
            value={formData.capacity}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label className='Datelabel'>
         <td>모임날짜 :&nbsp;</td>
          <td><input className='inputDate'
            type="date"
            name="meetingDateStart"
            value={formData.meetingDateStart}
            onChange={handleChange}
          /> &nbsp;-&nbsp;&nbsp;
            <input className='inputDate'
            type="date"
            name="meetingDateEnd"
            value={formData.meetingDateEnd}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        <tr>
        <label className='insertLabel'>
          <td>장소 :&nbsp;</td> 
          <td><input className='insertInput'
            type="text"
            name="meetingLocation"
            value={formData.meetingLocation}
            onChange={handleChange}
          /></td>
        </label>
        </tr>
        </tbody>
        </table>
        <KakaoMap/>
        <br />
        <input className='inputSubmit' type="submit" value="그룹개설"/>
      </form>
    </div>
    </>
  );
}

export default InsertForm;