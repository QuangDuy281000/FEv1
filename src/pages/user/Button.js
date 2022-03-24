import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="dang-ky">
      <button className="btn">Đăng ký</button>
    </Link>
  );
}
