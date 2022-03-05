import "./button.scss";

export function PrimaryButton({ children, onClick }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function BridgeButton({ children, onClick, side }) {
  console.log(side);
  const bridgeClass =
    side === "left" ? "bridgeButtonLeft" : "bridgeButtonRight";
  return (
    <button className={`primary-button ${bridgeClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick }) {
  return (
    <button className="secondary-button" onClick={onClick}>
      {children}
    </button>
  );
}
