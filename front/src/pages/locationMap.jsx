import React, { useEffect, useState } from 'react';
import KakaoMap from "../KakaoMap";
import '../css/KakaoMap.css';
import axios from 'axios';

function LocationMap({ location, onClose }) {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY
    const openMapModal = async () => {
      try {
        // 주소를 좌표로 변환
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(location)}`, {
          headers: {
            Authorization: `KakaoAK ${kakaoApiKey}`,
          },
        });
        const coordinates = response.data.documents[0].address;

        // 좌표를 state에 저장
        setMapCenter({
          lat: parseFloat(coordinates.y),
          lng: parseFloat(coordinates.x)
        });
      } catch (error) {
        console.error('좌표 변환 오류:', error);
      }
    };

    openMapModal();
  }, [location]);

  return (
    <div className="locationMap-modal">
      <div className="locationMap-overlay" onClick={() => onClose()}></div>
      <div className="locationMap-content">
        {location}
        <button className="close-button" onClick={() => onClose()}>닫기</button>
        <KakaoMap center={mapCenter} />
      </div>
    </div>
  );
}

export default LocationMap;