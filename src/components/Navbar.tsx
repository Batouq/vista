// Components/NavBar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

import Cart from "../assets/cart-with-items.svg";
import CartGray from "../assets/cart-with-item-gray.svg";
import Worker from "../assets/worker-icon.svg";
import ProfileIcon from "../assets/profile-icon.svg";
import SettingIcon from "../assets/setting-icon.svg";
import CarDesign from "../assets/carDesign.svg";
import Icon from "../assets/Group.svg";

import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [path, setPath] = useState("/");

  const location = useLocation();

  useEffect(() => {
    // Update the path state whenever the location changes
    setPath(location.pathname);
  }, [location]);

  return (
    <nav className="sideNav">
      <div className="sideNavDesign">
        <img src={CarDesign} />
      </div>
      <img src={Icon} alt="the website icon" className="navLogo" />
      <div className="navUser">
        <p className="navUserRank">مدير التجميع</p>
        <p>محمد مصطفى علي</p>
      </div>

      <div className="navListMenu">
        <p className="navListMenuTitle">القائمة الرئيسية</p>
        <ul className="navListMenuUnList">
          <li className="navListMenuItem">
            <Link
              to="/"
              className={`navListMenuItemLink ${
                path === "/" ? "linkActive" : ""
              } `}
            >
              الطلبات الغير مسندة
              <img src={CartGray} alt="" />
            </Link>
          </li>
          <li className="navListMenuItem">
            <Link
              to="/homeplus"
              className={`navListMenuItemLink ${
                path === "/homeplus" ? "linkActive" : ""
              } `}
            >
              الطلبات المسندة
              <img src={CartGray} alt="" />
            </Link>
          </li>
          <li className="navListMenuItem">
            <Link
              to="/mandob"
              className={`navListMenuItemLink ${
                path === "/mandob" ? "linkActive" : ""
              } `}
            >
              قائمة المناديب
              <img src={Worker} alt="" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="navAccountInfo">
        <p className="navAccountInfoTitle">قائمة البيانات</p>
        <div className="navAccountInfoItem">
          حسابي
          <img src={ProfileIcon} alt="" />
        </div>
        <div className="navAccountInfoItem">
          الاعدادات
          <img src={SettingIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
