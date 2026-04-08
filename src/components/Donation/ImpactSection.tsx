import React from "react";
import "./ImpactSection.css";

type impactSectionProps = {
  title: string;
  description: string;
  align?: "center" | "left";
  color?: string;
};

export function ImpactSection({
  title,
  description,
  color,
  align = "center",
}: impactSectionProps) {
  const isLeft = align === "left";

  return (
    <div className="impactSection">
      <div
        className="impactCard"
        style={{
          alignItems: isLeft ? "flex-start" : "center",
          textAlign: isLeft ? "left" : "center",
        }}
      >
        <h2 className="impactTitle">{title}</h2>
        <p className="impactDescription">{description}</p>
      </div>
    </div>
  );
}
