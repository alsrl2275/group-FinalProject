import Button from 'react-bootstrap/Button';
import KakaoMap from '../KakaoMap';
import Header from '../components/Home/header';
import '../css/InsertForm.css'
import axios from 'axios';
import { useState } from 'react';

function InsertForm() {
  const [formData, setFormData] = useState({
    meetingNumber: '',
    userId: '',
    meetingTitle: '',
    category: '',
    faceToFace: '',
    program: '',
    peopleNum: '',
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

  const handleRadioChange2 = (e) => {
    const { name, value } = e.target;
    console.log('Radio Change 2:', name, value); // 콘솔에 출력
    const programValue = value === '대면' ? '' : formData.program;
    setFormData({
      ...formData,
      [name]: value,
      program: programValue,
    });
  };
  
  const handleRadioChange3 = (e) => {
    const { name, value } = e.target;
    console.log('Radio Change 3:', name, value); // 콘솔에 출력
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
        // meetingNumber: formData.meetingNumber,
        // userId: formData.userId,
        // meetingTitle: formData.meetingTitle,
        // faceToFace: formData.faceToFace,
        // Face: formData.Face,
        // Program: formData.Program,
        // capacity: formData.capacity,
        // meetingDateStart: formData.meetingDateStart,
        // meetingDateEnd: formData.meetingDateEnd,
        // meetingLocation: formData.meetingLocation
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
          <label htmlFor="sports" className='insertLabel'>
          운동
          <input className='inputRadio'
              type="radio"
              name="category"
              value="운동"
              id="sports"
              onChange={handleRadioChange}
              checked={formData.category === '운동'}
            />
            </label>
            <label htmlFor="hobby" className='insertLabel'>
            &nbsp;&nbsp;라이프 스타일
            <input className='inputRadio'
              type="radio"
              name="category"
              value="라이프 스타일"
              id="hobby"
              onChange={handleRadioChange}
              checked={formData.category === '라이프 스타일'}
            />
            </label>
            <label htmlFor="travel" className='insertLabel'>
            &nbsp;&nbsp;여행
            <input className='inputRadio'
              type="radio"
              name="category"
              value="여행"
              id="travel"
              onChange={handleRadioChange}
              checked={formData.category === '여행'}
            />
            </label>
            <label htmlFor="employment" className='insertLabel'>
            &nbsp;&nbsp;취업
            <input className='inputRadio'
              type="radio"
              name="category"
              value="취업"
              id="employment"
              onChange={handleRadioChange}
              checked={formData.category === '취업'}

            />
            </label>
            <label htmlFor="language" className='insertLabel'>
            &nbsp;&nbsp;어학
            <input className='inputRadio'
              type="radio"
              name="category"
              value="어학"
              id="language"
              onChange={handleRadioChange}
              checked={formData.category === '어학'}
            />
            </label>
            <label htmlFor="coding" className='insertLabel'>
            &nbsp;&nbsp;코딩
            <input className='inputRadio'
              type="radio"
              name="category"
              value="코딩"
              id="coding"
              onChange={handleRadioChange}
              checked={formData.category === '코딩'}
            />
            </label>
            </div>
            </td>
            </tr>
            <br/>
          모임방식 :<br/>
          <tr>
          <div className='radio-label'>
          <label htmlFor="Yface" className='insertLabel'>
          대면
          <input className='inputRadio'
            type="radio"
            name="faceToFace"
            id="Yface"
            value="대면"
            onChange={handleRadioChange2}
            checked={formData.faceToFace === '대면'}
          />
          </label>
          &nbsp;&nbsp;
          <label htmlFor="noFace" className='insertLabel'>
          비대면
          <input className='inputRadio'
            type="radio"
            name="faceToFace"
            id="noFace"
            value="비대면"
            onChange={handleRadioChange2}
            checked={formData.faceToFace === '비대면'}
          />
         </label>
         </div>
         </tr>
        <br />
        <tr>
        공유 프로그램 : <br/>
        <div className='radio-label'>
          
        <label htmlFor="Zoom" className='insertLabel'>
            Zoom
            <input className='inputRadio'
              type="radio"
              name="program"
              value="줌"
              id="Zoom"
              onChange={handleRadioChange3}
              checked={formData.program === '줌'}
              disabled={formData.faceToFace === '대면'}
            />
            </label>
            &nbsp;&nbsp;
          <label htmlFor="Skype" className='insertLabel'>
          &nbsp;&nbsp;Skype
          <input className='inputRadio'
            type="radio"
            name="program"
            value="스카이프"
            id="Skype"
            onChange={handleRadioChange3}
            checked={formData.program === '스카이프'}
            disabled={formData.faceToFace === '대면'}
          />
          </label>
          &nbsp;&nbsp;
        <label htmlFor="Discord" className='insertLabel'>
        &nbsp;&nbsp;Discord
        <input className='inputRadio'
          type="radio"
          name="program"
          value="디스코드"
          id="Discord"
          onChange={handleRadioChange3}
          checked={formData.program === '디스코드'}
          disabled={formData.faceToFace === '대면'}
        />
        </label>
        </div>
        </tr>
        <tr>
        <label htmlFor="capacity" className='insertLabel'>
          <td>인원 :&nbsp;</td> 
          <td><input className='insertInput'
            type="number"
            name="peopleNum"
            id="capacity"
            min="0"
            value={formData.peopleNum}
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
        <tr className='insertLabel'>
        <label className='insertLabel'>
          <td>장소 :&nbsp;</td>
        
          <td>
            <input className='insertInput'
            type="text"
            name="meetingLocation"
            value={formData.meetingLocation}
            onChange={handleChange}
          />
          <Button variant="outline-info">검색</Button>     
          </td>
        </label>
        </tr>
        
        <label className='insertLabel'>
        <td><input className='insertLocation2'
            type="text"
            name="meetingLocation"
            value={formData.meetingLocation}
            onChange={handleChange}
          /></td>
          </label>
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