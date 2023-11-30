import React from "react";
import "./Home.css";

import GridExample from "../components/Grid";

const Home = () => {
  return (
    <div className="scheduleSection">
      <div className="scheduleSectionHead">
        <div className="scheduleSectionHeadContaner">
          <p className="scheduleSectionHeadTitle">المشرف العام</p>
          <p className="scheduleSectionHeadUser">محمد مصطفى علي</p>
        </div>
      </div>
      <div className="scheduleSectionDetail">
        <div className="scheduleSectionDetailContainer">
          <div className="scheduleSectionDetailUser">
            <span>
              <span className="scheduleSectionDetailUsergreeting">
                مرحبا بك مرة اخرى
              </span>{" "}
              , محمد مصطفى علي
            </span>
          </div>
          <span className="scheduleSectionDetailListTitle">
            قـائمة الطلبات الغير مسندة
          </span>
          <div className="scheduleSectionDetailList">
            <GridExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
