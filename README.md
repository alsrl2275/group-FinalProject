# 📜 3Rill_group-FinalProject
> 사용자들이 사이트에서 쉽게 모임을 생성하고 다양한 사람들과 소통과 교류를 촉진하여 새로운 친구나 활동 파트너를 제공하는 사이트<br>개발 기간 : 2024.01.22 ~ 02.20
> <br>개발 인원 : 3명
<br>

## :books: 기술 스택
### 프론트엔드
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### 백엔드  
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"> <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
- Spring Data JPA
- Spring Security
- AWS(Light sail)
- Apache Tomcat
- WebSocket

### Skills
- Daum 주소 API
- KakaoMap API
- Full Calendar API(캘린더)
- PostOne API(결제)
 
## 🔎내가 맡은 역할 - Front

### 그룹 개설 페이지 (Daum API 및 KakaoMap API 활용)

- Daum API와 KakaoMap API를 이용하여 그룹 개설 페이지를 구현합니다.
- 사용자가 직접 그룹의 위치를 설정할 수 있는 지도 기능을 통해 편리한 그룹 생성을 지원합니다.

### 일정 관리 페이지 (Full Calendar API 활용)

- Full Calendar API를 활용하여 일정 관리 페이지를 개발합니다.
- 간편하게 일정을 추가하고 관리할 수 있는 사용자 친화적인 인터페이스를 구현하여 효과적인 일정 관리를 제공합니다.

### 유료 모임 신청 및 결제 구현 (PostOne API 활용)

- PostOne API를 이용하여 유료 모임 신청 및 결제 기능을 구현합니다.
- 간결하고 직관적인 결제 화면을 제공하여 사용자 경험을 향상시킵니다.

## 🔍내가 맡은 역할 - Back

### 그룹 개설 로직 처리

- 로그인한 사용자의 권한에 맞게 그룹 개설 로직을 처리합니다.
- 권한은 모임원들이 평가한 사용자의 리뷰 점수가 일정한 점수를 넘을 시 유료개설이 가능합니다.

### 내 일정 관리 (CRUD)

- 로그인한 사용자의 내 일정에 관한 CRUD (생성, 읽기, 수정, 삭제) 로직을 처리합니다.
- 간편한 일정 관리를 위한 기능을 제공하여 사용자가 편리하게 일정을 조작할 수 있도록 합니다.

### 모임 상세보기 및 신청 취소

- 사용자가 속한 모임에 대한 상세 정보를 제공하는 기능을 구현합니다.
- 사용자가 모임에 신청하고 이를 취소할 수 있도록 유연한 모임 참여 관리를 제공합니다.

### 내가 만든 모임 탈퇴

- 로그인한 사용자가 생성한 모임에서 탈퇴하는 기능을 구현합니다.
- 사용자가 만든 모임에서 나갈 수 있도록 탈퇴 로직을 처리합니다.




## :speaker: 프로젝트 주요 기능 

### Main
- 각 카테고리에 맞는 그룹리스트 이동
- 카테고리에 해당되는 그룹 검색
### 계정 관련
- 회원가입, 로그인, 로그아웃
- 아이디 찾기
- 임시 비밀번호 발급(이메일 발송)
- 개인 정보 수정
### 그룹 개설
- 권한에 따른 그룹 개설(유료 or 무료)
### 그룹 참가
- 카테고리에 맞는 그룹 검색
- 그룹 신청(유료모임 신청시 결제페이지 이동)
### 리뷰 
- 리뷰 검색 및 작성
### 일정 관리 
- 캘린더를 통한 일정 CRUD
- 내가 가입한 모임 상세보기
- 신청한 모임, 개설한 모임 탈퇴
### 관리자 페이지
- 모든 회원에 관한 수정과 삭제 가능
- 그룹 삭제 및 사이트 추가

## 💻화면
- 그룹개설<br>

![20240303_162936](https://github.com/alsrl2275/alsrl2275/assets/142866976/99e24c14-6bb8-4b94-829a-a8abccaf8132)
![20240303_163722](https://github.com/alsrl2275/alsrl2275/assets/142866976/4ddc9d7e-788f-4d1c-aaef-9ef768167182)<br>

- 일정관리<br>

![20240303_163409](https://github.com/alsrl2275/alsrl2275/assets/142866976/3552dc58-c310-4959-9937-92a034f19d68)<br>

![20240303_163427](https://github.com/alsrl2275/alsrl2275/assets/142866976/3927c3cf-e75c-4322-8f27-7664654331ae)<br>

![20240303_164230](https://github.com/alsrl2275/alsrl2275/assets/142866976/26110683-011d-4f18-9b65-aba945376ca5)<br>

![20240303_164307](https://github.com/alsrl2275/alsrl2275/assets/142866976/7994dd10-e34d-4aed-becc-74d942f1dff4)<br>

![20240303_164324](https://github.com/alsrl2275/alsrl2275/assets/142866976/2740c261-7839-4b78-913e-f99bfb7fc6f1)

- 유로모임 신청 시 결제화면 <br>

![20240303_164619](https://github.com/alsrl2275/alsrl2275/assets/142866976/ea011d62-484b-4d91-a35a-628eed49ef8e)



