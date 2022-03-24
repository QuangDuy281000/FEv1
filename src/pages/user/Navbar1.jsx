import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { FaHome, FaRegListAlt, FaUserAlt } from "react-icons/fa";

function Navbar1() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://tiemchungcovid19.gov.vn/assets/portal/img/u7.png"
            alt="covid19"
            width="50px"
          />
        </Link>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h1
            style={{
              fontSize: "16px",
              width: "270px",
              alignItems: "center",
              textAlign: "center",
              color: "#ff0000",
            }}
          >
            CỔNG THÔNG TIN PHÒNG COVID19 TỈNH THỪA THIÊN HUẾ
          </h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <FaHome className="icon-header" />
              Trang chủ
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/dang-ky-tiem"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <FaRegListAlt className="icon-header" />
              Đăng ký tiêm
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/nguoi-dung"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <FaUserAlt className="icon-header" />
              Người dùng <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar1;
