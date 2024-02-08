import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 20,
  };
  return (
    <div>
      <div>
        <h3 style={style}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </h3>
        <h3 style={style}>
          <Link to="/Amthal" style={{ textDecoration: "none" }}>
            Amthal
          </Link>
        </h3>
        <h3 style={style}>
          <Link to="/Gallary" style={{ textDecoration: "none" }}>
            Gallary
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
