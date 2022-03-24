import '@fortawesome/fontawesome-free/css/all.min.css';

import "../css/headeruser.css"
import { Link } from "react-router-dom";
function HeaderUser() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#a8c6fa",height:"65px"}}>
          <Link className="navbar-brand"to={""}>
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={""}
                  className="nav-link"
                  
                  style={{ fontSize: "20px", color: "#bb285c" }}
                >
                  CỔNG THÔNG TIN PHÒNG COVID 19 TỈNH THỪA THIÊN HUẾ
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li className="nav-item">
            
                <Link to={""} className="nav-link ">
                <i class="fa-solid fa-house icon"></i>
                 Trang Chủ
                </Link>
              </li>

              <li className="nav-item">
                <Link to={""} className="nav-link "><i class="fa-solid fa-file-pen icon"></i>
                Đăng Kí Tiêm</Link>
              </li>

              <li className="nav-item">
                <Link to={"/login"} className="nav-link "><i class="fa-solid fa-right-to-bracket icon"></i> Đăng Nhập </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link "><i class="fa-solid fa-user-check icon"></i> Đăng Kí </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderUser;
