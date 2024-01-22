
import Header from '../components/Home/header';
import '../css/InsertForm.css'

function InsertForm() {
  return (
    <>
      <Header/>
      
      <div className="insert-form-container">
      
      <form className="insert-form">
      <h2>그룹 개설</h2>
        <label>
          모임 순번: &nbsp;
          <input
            type="text"
            name="meetingNumber"
          />
        </label>
        <br />
        <br />
        <label>
          아이디: &nbsp;
          <input
            type="text"
            name="userId"
          />
        </label>
        <br />
        <br />
        <label>
          모임 제목: &nbsp;
          <input
            type="text"
            name="meetingTitle" 
          />
        </label>
        <br />
        <br />
          카테고리: &nbsp;
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
            <label for="FaceToFace">
            <input
              type="radio"
              name="faceToFace"
              value="여행"
              id="travel"
            />
            </label>
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
        <br />
        <br />
          대면/비대면: &nbsp;
          
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
        <br />
        <br />
        공유 프로그램 : 
        <label htmlfor="Zoom">
            &nbsp;&nbsp;Zoom
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
        <br />
        <br />
        <label>
          인원: &nbsp;
          <input
            type="text"
            name="capacity"
          />
        </label>
        <br />
        <br />
        <label>
          성별: &nbsp;
        <label htmlfor="All">
        &nbsp;&nbsp;모두
        <input
          type="radio"
          name="gender"
          value="All"
          id="All"
        />
        </label>
        <label htmlfor="Male">
        &nbsp;&nbsp;남
        <input
          type="radio"
          name="gender"
          value="Male"
          id="Male"
        />
        </label>
        <label htmlfor="Female">
        &nbsp;&nbsp;여
        <input
          type="radio"
          name="gender"
          value="Female"
          id="Female"
        />
        </label>

        <br />
        <br />
          모임 날짜: &nbsp;
          <input
            type="date"
            name="meetingDate"
          />
        </label>
        <br />
        <br />
        <label>
          모임 장소: &nbsp;
          <input
            type="text"
            name="meetingLocation"
          />
        </label>
        <br />
        <br />

        <button type="submit">참가하기</button>
      </form>
    </div>
    </>
  );
}

export default InsertForm;