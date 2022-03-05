import { SecondaryButton } from "../Button";

import { ReactComponent as HamBurger } from "../../assets/hamburger.svg";
import logo from "../../assets/shroom.png";
import "./nav.scss";

export function Nav({ onMenuClick }) {
  return (
    <nav className="navbar-wrapper">
      <HamBurger className="ham" onClick={onMenuClick} />
      <img src={logo} className="logo" />
      <div className="navbar-left-content">
        <SecondaryButton onClick={() => console.log("second")}>
          Mint
        </SecondaryButton>
        <SecondaryButton onClick={() => console.log("second")}>
          Bridge
        </SecondaryButton>
        <SecondaryButton onClick={() => console.log("second")}>
          Stake
        </SecondaryButton>
      </div>
      <div className="navbar-right-content">
        <p> 0x4AFS...a0B5</p>
        <SecondaryButton onClick={() => console.log("second")}>
          Disconnect
        </SecondaryButton>
      </div>
    </nav>
  );
}
