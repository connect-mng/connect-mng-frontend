import React from "react";
import "./ImpactLongBox.css";

type impactLongBoxProps = {
  title: string;
  description: string;
  icons: string;
};

export function ImpactLongBox({ title, description, icons }: impactLongBoxProps) {
  return (
    <div className="impact-box">
      <img src={icons} alt="icon" className="impact-icon" />
      <div className="impact-content">
        <h3 className="impact-title">{title}</h3>
        <p className="impact-description">{description}</p>
      </div>
    </div>
  );
}
