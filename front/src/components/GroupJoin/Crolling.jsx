const Crolling = ({ print }) => {
  if (
    print === "sport" ||
    (Array.isArray(print) && print.some((c) => c.category === "sport"))
  ) {
    return (
      <>
        <div className="group-item">
          <a
            href="https://runninglife.co.kr/contents/getAreaAllCrew/capital/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              className="group-item-img"
              src={"/Image/running.png"}
              alt="Card"
            />
            <h4 className="group-item-h4">런닝 하실분</h4>
            <h4 className="group-item-h4">런닝크루로 오세요</h4>
          </a>
        </div>
        <div className="group-item">
          <a
            href="https://www.plabfootball.com/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              className="group-item-img"
              src={"/Image/soccer.svg"}
              alt="Card"
            />
            <h4 className="group-item-h4">축구/풋살</h4>
            <h4 className="group-item-h4">플랩으로 오세요</h4>
          </a>
        </div>
        <div className="group-item">
          <a
            href="http://www.badmintontimes.com/index.jsp"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              className="group-item-img"
              src={"/Image/badminton.jpg"}
              alt="Card"
            />
            <h4 className="group-item-h4">배드민턴 하실분</h4>
            <h4 className="group-item-h4">배드민턴 타임즈로 오세요</h4>
          </a>
        </div>
      </>
    );
  } else if (
    print === "IT" ||
    (Array.isArray(print) && print.some((c) => c.category === "IT"))
  ) {
    return (
      <>
 
      </>
    );
  } else if (
    print === "language" ||
    (Array.isArray(print) && print.some((c) => c.category === "language"))
  ) {
    return (
      <>
 
      </>
    );
  } else if (
    print === "life" ||
    (Array.isArray(print) && print.some((c) => c.category === "life"))
  ) {
    return (
        <>
      <div className="group-item">
        <a
          href="https://www.frip.co.kr/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img className="group-item-img" src={"/Image/life.svg"} alt="Card" />
          <h4 className="group-item-h4">라이프 스타일</h4>
          <h4 className="group-item-h4">FRIP 취미 여가 사이트</h4>
        </a>
      </div>
      </>
    );
  }else if (
    print === "tour" ||
    (Array.isArray(print) && print.some((c) => c.category === "tour"))
  ) {
    return (
        <>
 
      </>
    );
  }else if (
    print === "work" ||
    (Array.isArray(print) && print.some((c) => c.category === "work"))
  ) {
    return (
        <>
 
      </>
    );
  }
};

export default Crolling;
