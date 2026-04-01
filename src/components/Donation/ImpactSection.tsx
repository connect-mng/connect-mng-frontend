import React from "react";
import "./ImpactSection.css"

type impactSectionProps = {
  title: string;
  description: string;
  color?: string;
};

export function ImpactSection({ title, description, color }: impactSectionProps) {
  return (
    <div className="impactSection">
      <div className="impactCard">
        <h2 className="impactTitle">{title}</h2>
        <p className="impactDescription">{description}</p>
      </div>
    </div>
  );
}
