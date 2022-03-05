import classNames from "classnames/bind";

import "./window.scss";

export default function WindowLayout({
  text,
  children,
  percentage,
  variant,
  number,
}) {
  const renderPercentage = (number) => {
    return <div className="percentage">{number + "%"}</div>;
  };

  return (
    <div className={variant === "rect" ? "window-variant" : "window"}>
      <div className="top-bar">
        <div className="left">
          <div className="bars before-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box"></div>
          <div className="bars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <span className="title">{text}</span>
        <div className="right">
          <div className="bars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="window-content-container">
        <div className="window-content-top">
          <div className="window-content-main">
            {children}
            {number && renderPercentage(number)}
          </div>
          <div className="vertical-scrollbar">
            <div className="arrow-up"></div>
            <div className="vertical-scroll-thumb"></div>
            <div className="scroll-track"></div>
            <div className="arrow-down"></div>
          </div>
        </div>
        <div className="horizontal-scrollbar">
          <div className="arrow-left"></div>
          <div className="horizontal-scroll-thumb"></div>
          <div className="scroll-track"></div>
          <div className="arrow-right"></div>
          <div className="horizontal-scroll-box">
            <div className="horizontal-scroll-box-inner">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
