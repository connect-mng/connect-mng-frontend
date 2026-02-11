import React from "react";
import "./DonationBadge.css"


type CircleProps = {
    textVal : string;
    color : string;
}

export function DonationBadge({textVal, color} : CircleProps) {
    return (
        <span className="impactBadge">{textVal}</span>
    );
}