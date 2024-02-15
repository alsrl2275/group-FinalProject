import React, { useEffect } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContextProvider";


const Payment = () => {

  const getRandomString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10; // 문자열 길이 지정
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join(""); // length만큼의 길이를 가진 배열을 생성
  };            // 0 이상 1 미만의 난수를 생성하여 characters.length와 곱하여 소수점을 버림으로써 characters 문자열중에서 랜던 인덱스 번호를 얻는다
                // join("") - 생성된 배열을 문자열로 결합

  const navigate = useNavigate();
  const { userInfo } = useContext(LoginContext);


  const location = useLocation();
  const selectedData = location.state.selectedData;
  console.log(selectedData);
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    const tossScript = document.createElement("script");
    tossScript.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    document.head.appendChild(tossScript);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
      document.head.removeChild(tossScript);
    };
  }, []);

  const onClickPayment = (props) => {
    const { IMP } = window;
    IMP.init("imp70842813");
    let data ={};
if(props==="카드"){
  data = {
    pg: "html5_inicis",
    pay_method: "card",
    merchant_uid: `mid_${getRandomString()}_${new Date().getTime()}`,
    name: "모임비",
    amount: "5000",
    custom_data: {
      name: "부가정보",
      desc: "세부 부가정보",
    },
    buyer_name: "홍길동",
    buyer_tel: "01012345678",
    buyer_email: "14279625@gmail.com",
    buyer_addr: "구천면로 000-00",
    buyer_postalcode: "01234",
  };
}else if(props==="휴대폰"){
  data = {
    pg: "html5_inicis",
    pay_method: "phone",
    merchant_uid: `mid_${getRandomString()}_${new Date().getTime()}`,
    name: "모임비",
    amount: "5000",
    custom_data: {
      name: "부가정보",
      desc: "세부 부가정보",
    },
    buyer_name: "홍길동",
    buyer_tel: "01012345678",
    buyer_email: "14279625@gmail.com",
    buyer_addr: "구천면로 000-00",
    buyer_postalcode: "01234",
  };
} else if(props==="카카오") {
  data = {
    pg: "kakaopay.TC0ONETIME",
    pay_method: "card", // 생략가
    merchant_uid: `mid_${getRandomString()}_${new Date().getTime()}`, // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 5000,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}"
  }
} else if(props==="토스") {
  data = {
    pg: "tosspay_v2.tosstest",
    pay_method: "tosspay", // 'tosspay_card', 'tosspay_money' 도 지원됩니다.
    merchant_uid: `mid_${getRandomString()}_${new Date().getTime()}`, // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 5000,
    card: {
      useInstallment: false,
    }

  }
}

    IMP.request_pay(data, callback);

  };

  const callback = async (response) => {
    console.log(response)
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;

    if (success) {
      try {
        const response = await axios.post("/api/contentpay", selectedData, {
          params: {
            seq: userInfo.seq,
          },
        });
        alert("신청 완료")
        navigate("/schedule")
      } catch (error) {}
    } else {
      console.log("결제 실패:" , error_msg)
      alert(`결제 실패: ${error_msg}`);
      // navigate("/GroupJoin")
    }
  };

  return (
    <>
      <button onClick={()=>onClickPayment("카드")}>카드</button>
      <button onClick={()=>onClickPayment("휴대폰")}>휴대폰</button>
      <button onClick={()=>onClickPayment("카카오")}>카카오</button>
      <button onClick={()=>onClickPayment("토스")}>토스</button>
      

    </>
  );
};
export default Payment;
