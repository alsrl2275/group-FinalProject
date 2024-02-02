import React from 'react';
import Pay from '../JS/pay';
import Header from '../components/Header/header';

const pay = ({ vo, mv }) => {
  const handlePay = () => {
    // 여기에 결제 로직을 추가하세요.
  };

  return (
    <form action="payresult" id="pay_form">
      <input type="hidden" />
      <h2>주문 / 결제</h2>
      <div className="qwer">
        <table id="mw">
          <tbody>
            <tr>
              <td style={{ width: '300px', fontWeight: 'bold', fontSize: '20px' }}>결제 방법</td>
            </tr>
            <tr>
              <td>
                <img src="resources/assets/img/tosspay.png" width="140" height="50" alt="Toss" />{' '}
                <input type="radio" name="pg" value="tosspayments" checked /> <label>toss</label>
                <br />
                <img src="resources/assets/img/kakaopay.png" width="140" height="50" alt="KakaoPay" />{' '}
                <input type="radio" name="pg" value="kakaopay" /> <label>kakao</label>
                <br />
                <img src="resources/assets/img/payco.png" width="140" height="50" alt="Payco" />{' '}
                <input type="radio" name="pg" value="payco" /> <label>payco</label>
                <br />
                <p id="number">
                  합계 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  {new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(
                    (vo.price / vo.peoplecnt_max) * 1.1
                  )}
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <div className="input_area">
        <input
          type="button"
          id="pay"
          value="결 제"
          onClick={() =>
            handlePay((vo.price / vo.peoplecnt_max) * 1.1, vo.service, mv.name, mv.email, mv.tel, mv.addr, vo.seq, mv.email)
          }
        />
        <button onClick={Pay}>결제버튼</button>
        &nbsp; &nbsp; &nbsp;
        <input type="button" id="list" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }} value="목 록" />
      </div>
    </form>
  );
};

export default pay;