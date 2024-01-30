
// import Button from 'react-bootstrap/Button';
import KakaoMap from '../KakaoMap';
import Header from '../components/Home/header';
import '../css/InsertForm.css'
import axios from 'axios';
import { useState } from 'react';
import DaumPost from '../DaumPost';

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
    meetingLocation2:''
  });
  const [showDaumPost, setShowDaumPost] = useState(false);

  const [addressObj, setAddressObj] = useState({
    areaAddress: '',
    townAddress: ''
  });
  const [mapCenter, setMapCenter] = useState({
    lat: 37.50006335700178,
    lng: 127.03558085159663
  });



  

  const handleAddressChange = (newAddressObj) => {
    setAddressObj(newAddressObj); 
    

    // 주소가 변경되면 중심 좌표 업데이트
    setMapCenter({
      lat: newAddressObj.lat,
      lng: newAddressObj.lng
    })
    // 주소가 변경되면 meetingLocation을 업데이트
    setFormData({
      ...formData,
      meetingLocation: `${newAddressObj.areaAddress} ${newAddressObj.townAddress}`,
    });
    console.log(newAddressObj)
  };

  

  const handleDaumPostClick = () => {
    setShowDaumPost(true);

    
  };
  
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

    const updatedFormData = {
      ...formData,
      meetingLocation: `${formData.meetingLocation} ${formData.meetingLocation2}`
    };

    try {
      const response = await axios.post('/groupInsert',updatedFormData);
      console.log(response.data);
      console.log('Updated meetingLocation:', updatedFormData.meetingLocation);
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
            onClick={handleDaumPostClick}
            readOnly
          />
          {showDaumPost && <DaumPost setAddressObj={handleAddressChange} setMapCenter={setMapCenter}/>}
          </td>
        </label>
        </tr>   
        <label className='insertLabel'>
        <td><input className='insertLocation2'
            type="text"
            name="meetingLocation2"
            value={formData.meetingLocation2}
            onChange={handleChange}
          /></td>
          </label>
        </tbody>
        
        </table>
        <KakaoMap center={mapCenter}/>
        
        <br />
        <input className='inputSubmit' type="submit" value="그룹개설"/>
      </form>
    </div>
    </>
  );
}

export default InsertForm;