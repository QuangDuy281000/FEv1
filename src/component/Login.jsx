import {  useState } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import userService from "../service/user.service";
import "../css/Login.css";
import HeaderUser from "./HeaderUser";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const history = useHistory();

  

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const validAll = () => {
    const msg = {};
    if (isEmpty(username)) {
      msg.username = "Tên đăng nhập không được để trống";
    }
    if (isEmpty(password)) {
      msg.password = "Mật khẩu không được để trống";
    }
    
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const LoginLog = () => {
    const isValid = validAll();
    if (!isValid)return;
    const user = { username, password };
    console.log(user);
    userService
      .Login(user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", username);

        history.push("/employee");
      })
      .catch((error) => {
        alert("Usename or Password is not success");
        console.log("Login fail", error);
      });
  };



  return (
    <>
    <HeaderUser></HeaderUser>
      <div id="login">
        <h3 className="text-center text-white pt-5">Đăng Nhập</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div className="login-box col-md-12">
                <form id="login-form" className="form">
                  <h3 className="text-center text-info">Đăng Nhập</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Tên đăng nhập
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={onChangeUsername}
                    />
                     <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.username}
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Mật khẩu
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={onChangePassword}
                    />
                     <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.username}
                    </p>
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-info btn-md" onClick={LoginLog} >
                      Đăng nhập
                    </button>
                  </div>
                  <br/>
                  <div id="register-link" className="text-right">
                    <Link to={"/register"} className="text-info">
                      Đăng kí tài khoản
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
