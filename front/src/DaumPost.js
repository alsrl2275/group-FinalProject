import { useDaumPostcodePopup } from "react-daum-postcode";
import Button from 'react-bootstrap/Button';
import axios from "axios";


function DaumPost({ setAddressObj, setMapCenter }){
  //클릭 시 수행될 팝업 생성 함수
  const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
  
  const handleComplete = async (data) => {
    console.log('주소 검색 결과', data);
    let fullAddress = data.address;
    let extraAddress = ''; //추가될 주소
    let localAddress = data.sido + ' ' + data.sigungu; //지역주소(시, 도 + 시, 군, 구)

    // 좌표 정보를 roadAddress에서 가져와서 사용



    if (data.addressType === 'R') { //주소타입이 도로명주소일 경우
      if (data.bname !== '') {
        extraAddress += data.bname; //법정동, 법정리
      }
      if (data.buildingName !== '') { //건물명
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      //지역주소 제외 전체주소 치환
      fullAddress = fullAddress.replace(localAddress, '');
      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
      setAddressObj({
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      
      });

      try {
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(data.roadAddress)}`, {
          headers: {
            Authorization: 'KakaoAK 03676f18b99991f944f886da9fc7de60',
          },
        });
  
        const coordinates = response.data.documents[0].address;
  
        console.log('좌표 정보:', coordinates);
  
        setMapCenter({
          lat: parseFloat(coordinates.y),
          lng: parseFloat(coordinates.x)
        });
      } catch (error) {
        console.error('좌표 변환 오류:', error);
      }
      // 주소 검색이 완료된 후 결과를 매개변수로 전달
      // 다음에 수행할 작업을 명시
    }
  }
  //클릭 시 발생할 이벤트
  const handleClick = () => {
    //주소검색이 완료되고, 결과 주소를 클릭 시 해당 함수 수행
    
  	open({onComplete: handleComplete});
  }
  // console.log("현재 맵 중심:", setMapCenter);
  return (
  <Button variant="outline-info" onClick={handleClick}>주소찾기</Button>  
  )
 }

export default DaumPost;