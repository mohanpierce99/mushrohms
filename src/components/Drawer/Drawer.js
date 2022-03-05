import React from "react";
import "./styles.scss";
import logo from "../../assets/shroom.png";

const MushrohmDrawer = () => {
  return (
    <>
      <img src={logo} className="logo" />
      <p className="drawer-text">Mint</p>
      <p className="drawer-text">Bridge</p>
      <p className="drawer-text">Stake</p>
    </>
  );
};

export default MushrohmDrawer;
