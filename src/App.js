import { useState, useEffect } from "react";

import WindowLayout from "./components/Window/WindowLayout";
import { PrimaryButton, BridgeButton } from "./components/Button";
import { Nav } from "./components/Nav";
import MushrohmDrawer from "./components/Drawer/Drawer";
import { ReactComponent as TinyShroom } from "./assets/tinyshroom.svg";
import { ReactComponent as Header } from "./assets/header.svg";
import { Drawer } from "@material-ui/core";

import "./App.css";

function App() {
  const [connectView, setConnectView] = useState(true);
  const [startProgress, setProgress] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  const renderConnectView = () => {
    return (
      <section className="connect-view">
        <WindowLayout text="WALLET">
          <div className="connect-view-content">
            <TinyShroom className="tiny-shroom" />
            <PrimaryButton
              onClick={() => {
                setConnectView(false);
              }}
            >
              Connect
            </PrimaryButton>
          </div>
        </WindowLayout>
      </section>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!connectView && startProgress < 100) {
        setProgress(startProgress + 1);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [startProgress, connectView]);

  return (
    <div className="container">
      <Header className="header" />
      {connectView && renderConnectView()}
      {!connectView && (
        <>
          <Nav onMenuClick={() => setShowDrawer(true)} />
          <div
            className={startProgress === 100 ? "circle exit" : "circle enter"}
          ></div>
          <div className="content-wrapper">
            <WindowLayout text="eth">
              <BridgeButton
                side="left"
                className="bridgeButton"
                onClick={() => {}}
              >
                Bridgez
              </BridgeButton>
              <BridgeButton
                className="bridgeButton"
                side="right"
                onClick={() => {}}
              >
                Withdraw
              </BridgeButton>
              <img src="https://cdn.discordapp.com/attachments/935660284004151427/945874647516348426/FLLaziVVgAwKL6U.png" />
            </WindowLayout>
            <WindowLayout
              text="arb"
              number={startProgress}
              className="bridgeCard"
            >
              <BridgeButton
                className="bridgeButton"
                side="left"
                onClick={() => {
                  setConnectView(false);
                }}
              >
                Bridge
              </BridgeButton>
              <BridgeButton
                className="bridgeButton"
                side="right"
                onClick={() => {
                  setConnectView(false);
                }}
              >
                Withdraw
              </BridgeButton>
              <img src="https://cdn.discordapp.com/attachments/935660284004151427/945874647516348426/FLLaziVVgAwKL6U.png" />
            </WindowLayout>
          </div>
        </>
      )}
      <div className="footer">
        <WindowLayout text="info" variant="rect">
          <p className="info-content">
            {
              "Bridge your first Gen Mushroom between Eth Mainnet and Treasure DAO's Bridgeworld on Arbitrium. Get sporepower. Enjoy : )"
            }
          </p>
        </WindowLayout>
      </div>
      <Drawer
        anchor={"left"}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <MushrohmDrawer />
      </Drawer>
    </div>
  );
}

export default App;
