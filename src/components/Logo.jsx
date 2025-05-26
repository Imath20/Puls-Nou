import React from "react";
import logoImg from "../../public/res/icons/Puls-logo-sus.png"; 

const Logo = ({ size = 48 }) => (
  <img
    src={logoImg}
    alt="Puls Logo"
    style={{ width: size, height: size, verticalAlign: "middle" }}
  />
);

export default Logo;