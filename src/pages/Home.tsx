import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="scheduleSection">
      <div className="scheduleSectionHead">
        <div className="scheduleSectionHeadContaner">
          <p className="scheduleSectionHeadTitle">المشرف العام</p>
          <p className="scheduleSectionHeadUser">محمد مصطفى علي</p>
        </div>
      </div>
      <div className="scheduleSectionDetail">here is the schedule</div>
    </div>
  );
};

export default Home;
