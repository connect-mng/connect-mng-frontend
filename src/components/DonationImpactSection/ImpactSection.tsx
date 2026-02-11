import React from "react";
import {DonationBadge} from "./DonationBadge"
import "./ImpactSection.css"

type impactSectionProps = {
  title: string;
  description: string;
  color: string;
};

export function ImpactSection({ title, description, color }: impactSectionProps) {
  return (
    <div className="impactSection">
      <div className="impactCard">
        <DonationBadge textVal="Our Impact" color=""/>
        <h2 className="impactTitle">{title}</h2>
        <p className="impactDescription">{description}</p>
      </div>
    </div>
  );
}
