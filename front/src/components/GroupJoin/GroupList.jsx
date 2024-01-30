import "../../css/GroupList.css";
import SportGroup from "../../JS/CategoryList/sport";
import TourGroup from "../../JS/CategoryList/tour";
import LifeGroup from "../../JS/CategoryList/life";
import LanguageGroup from "../../JS/CategoryList/language";
import ItGroup from "../../JS/CategoryList/It";
import WorkGroup from "../../JS/CategoryList/work";


const GroupList = ({ print }) => {



  if (print && print.some((c) => c.category === "sport")) {
    return <SportGroup print={print} />;
  } else if (print && print.some((c) => c.category === "life")) {
    return <LifeGroup print={print}/>;
  } else if (print && print.some((c) => c.category === "language")) {
    return <LanguageGroup print={print} />;
  } else if (print && print.some((c) => c.category === "IT")) {
    return <ItGroup print={print}  />;
  } else if (print && print.some((c) => c.category === "tour")) {
    return <TourGroup print={print}/>;
  } else if (print && print.some((c) => c.category === "work")) {
    return <WorkGroup print={print}/>;
  }

  return null;
};
export default GroupList;
