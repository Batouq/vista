import React from "react";
import "./Home.css";
import { MandobData } from "../components/interfaces";

import GridMandob from "../components/GridMandob";

const Mandob = () => {
  const data: MandobData[] = [
    {
      name: "محمد بن خالد",
      phoneNumber: "05685444574",
      email: "thisJusttest@gmail.com",
      takeOrderNumber: 352,
      sendOrderNumber: 351,
    },
  ];
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
            قـائمة الطلبات مسندة
          </span>
          <div className="scheduleSectionDetailList">
            <GridMandob database={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mandob;
