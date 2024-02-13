// LocationMap.js
import React, { useState } from 'react';
import KakaoMap from "../KakaoMap";
import '../css/KakaoMap.css';
import axios from 'axios';

function LocationMap({ label, location }) {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  const openMapModal = async () => {
    try {
      // 주소를 좌표로 변환
      const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(location)}`, {
        headers: {
          Authorization: 'KakaoAK 5d1d37549e35d188f883b6f3b378dd76',
        },
      });
      const coordinates = response.data.documents[0].address;

      // 좌표를 state에 저장
      setMapCenter({
        lat: parseFloat(coordinates.y),
        lng: parseFloat(coordinates.x)
      });

      // 모달 열기
      setIsMapModalOpen(true);
    } catch (error) {
      console.error('좌표 변환 오류:', error);
    }
  };

  const closeMapModal = () => {
    // 모달 닫기
    setIsMapModalOpen(false);
  };

  return (
    <tr>
      <td>{label}</td>
      <td>
        {location}
        <button onClick={openMapModal}>지도보기</button>
        {isMapModalOpen && (
          <div className="map-modal">
            <div className="modal-content">
              <span className="close" onClick={closeMapModal}>&times;</span>
              <KakaoMap center={mapCenter} />
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

export default LocationMap;