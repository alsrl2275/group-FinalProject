// KakaoMap.js

import { useEffect, useState } from 'react';
import '../src/css/KakaoMap.css';

function KakaoMap({ center }) {
  
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    const kakaoApiKey = process.env.REACT_APP_KAKAO_API_SCRIPTKEY
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoApiKey}`;
    script.addEventListener('load', () => {
      const kakao = window.kakao;
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const initialCenter = center;
        const options = {
          center: new kakao.maps.LatLng(initialCenter.lat, initialCenter.lng),
          level: 3,

        };
        const newMap = new kakao.maps.Map(mapContainer, options);

        
        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(initialCenter.lat, initialCenter.lng);
        const newMarker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 지도에 마커 표시
        newMarker.setMap(newMap);

        setMap(newMap);
        setMarker(newMarker);
      });
    });
    document.head.appendChild(script);

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 삭제
      document.head.removeChild(script);
    };
  }, [center]);

  useEffect(() => {
    // center가 변경되면 맵의 중심과 마커 위치 업데이트
    if (map && marker && center) {
      const newCenter = new window.kakao.maps.LatLng(center.lat, center.lng);
      map.setCenter(newCenter);
      marker.setPosition(newCenter);
    }
  }, [map, marker, center]);

  return (
    <div className="KakaoMap">
      <div id="map" className="map" />
    </div>
  );
}

export default KakaoMap;