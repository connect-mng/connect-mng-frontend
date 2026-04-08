import React from "react";
import "./ProgramBox.css";

type ProgramBoxProps = {
  imageSrc: string;
  title: string;
  description: string;
  align?: "left" | "center";
  buttonLabel?: string;
  onButtonClick?: () => void;
};

export function ProgramBox({
  imageSrc,
  title,
  description,
  align = "left",
  buttonLabel,
  onButtonClick,
}: ProgramBoxProps) {
  const alignStyle = align === "center" ? "center" : "flex-start";

  return (
    <div
      className="programBox"
      style={{ alignItems: alignStyle, textAlign: align }}
    >
      <img src={imageSrc} />
      <div className="programBoxTitle">{title}</div>
      <div className="programBoxDescription">{description}</div>
      {buttonLabel && (
        <button className="programBoxButton" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
