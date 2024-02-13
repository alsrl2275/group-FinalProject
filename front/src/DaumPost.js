import { useDaumPostcodePopup } from "react-daum-postcode";
import Button from 'react-bootstrap/Button';
import axios from "axios";


function DaumPost({ setAddressObj, setMapCenter }) {


  const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

  const handleComplete = async (data) => {
    console.log('주소 검색 결과', data);
    let fullAddress = data.address;
    let extraAddress = '';
    let localAddress = data.sido + ' ' + data.sigungu;

    if (data.addressType === 'R') { // 도로명 주소일 경우
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }

      fullAddress = fullAddress.replace(localAddress, '');

      setAddressObj({
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      });

          try {
      const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(data.roadAddress)}`, {
        headers: {
          Authorization: 'KakaoAK 5d1d37549e35d188f883b6f3b378dd76',
        },
      });
      const coordinates = response.data.documents[0].address; //  첫번째 문서에서 주소 정보에 해당하는 부분을 나타낸다. 좌표 정보를 담고 있는 변수인 coordinates로 할당된다

      console.log('좌표 정보:', coordinates);

      setMapCenter({
        lat: parseFloat(coordinates.y),
        lng: parseFloat(coordinates.x)
      });
    } catch (error) {
      console.error('좌표 변환 오류:', error);
    }
    } else if (data.addressType === 'J') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }

      fullAddress = fullAddress.replace(localAddress, '');

      setAddressObj({
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      }); 

      // 지번 주소일 경우
      try {
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(data.jibunAddress)}`, { // 특정 주소에대한 좌표정보 가져오기
          headers: { // 헤더 설정
            Authorization: 'KakaoAK 5d1d37549e35d188f883b6f3b378dd76',
          },
        });
        const coordinates = response.data.documents[0].address; // 응답이 성공적으로 도착하면 response.data.documents[0].address에서 주소정보 추출

        console.log('좌표 정보:', coordinates);

        setMapCenter({
          lat: parseFloat(coordinates.y),
          lng: parseFloat(coordinates.x)
        });


      } catch (error) {
        console.error('좌표 변환 오류:', error);
      }
    }

  }


  const handleClick = () => {
    open({ onComplete: handleComplete });
  }

  return (
    <Button variant="outline-info" onClick={handleClick}>주소찾기</Button>
  )
}

export default DaumPost;
