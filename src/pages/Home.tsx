import React from "react";
import "./Home.css";
import { OrderData } from "../components/interfaces";

import Grid from "../components/Grid";

const Home = () => {
  const data: OrderData[] = [
    {
      country: "الرياض",
      orderNumber: 1524,
      orderDate: "قبل ساعة",
      sellerNumber: 150154,
      dropLocation: "الخبر",
      driverMandob: "-",
      lastUpdate: " قبل ساعة",
      orderStatus: "review",
      orderPlacement: "asnad",
    },
    {
      country: "الخبر",
      orderNumber: 1524,
      orderDate: "قبل ساعة",
      sellerNumber: 150154,
      dropLocation: "الخبر",
      driverMandob: "-",
      lastUpdate: " قبل ساعة",
      orderStatus: "review",
      orderPlacement: "asnad",
    },
    {
      country: "ابها",
      orderNumber: 1524,
      orderDate: "قبل ساعة",
      sellerNumber: 150154,
      dropLocation: "الخبر",
      driverMandob: "-",
      lastUpdate: " قبل ساعة",
      orderStatus: "review",
      orderPlacement: "asnad",
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
            قـائمة الطلبات الغير مسندة
          </span>
          <div className="scheduleSectionDetailList">
            <Grid database={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
