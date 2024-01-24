import React, { useCallback } from 'react';

const Pay = ({ vo, mv }) => {
  const requestPay = useCallback(async () => {
    try {
      const page = document.querySelector('input[name="pg"]:checked').value;
      const IMP = window.IMP;
      IMP.init("imp40114442");

      const response = await new Promise((resolve) => {
        IMP.request_pay(
          {
            pg: page,
            merchant_uid: "",
            name: "",
            pay_method: "card",
            escrow: false,
            amount: "",
            tax_free:"",
            buyer_name:"",
            buyer_email: "",
            buyer_tel: "",
            buyer_addr: "",
            buyer_postcode: "",
            notice_url: "https://helloworld.com/api/v1/payments/notice",
            confirm_url: "https://helloworld.com/api/v1/payments/confirm",
            currency: "KRW",
            locale: "ko",
            custom_data: { userId: 30930 },
            display: { card_quota: [0, 6] },
            appCard: false,
            useCardPoint: true,
            bypass: {
              tosspayments: {
                useInternationalCardOnly: true,
              },
            },
          },
          (rsp) => {
            resolve(rsp);
          }
        );
      });

      if (response.success) {
        const postData = {
          imp_uid: response.imp_uid,
          merchant_uid: response.merchant_uid,
          status: response.status,
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(postData),
        };

  return (
    <form action="payresult" id="pay_form">
      {/* ... (이전의 JSX 코드를 그대로 가져옴) */}
      <div className="input_area">
        <input type="button" id="pay" value="결 제" onClick={requestPay} />
        &nbsp; &nbsp; &nbsp;
        <input type="button" id="list" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }} value="목 록" />
      </div>
    </form>
  );
};

export default Pay;
