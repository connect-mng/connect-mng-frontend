import React from "react";
import "./ImpactLevel.css";

type ImpactLevel = {
    title: string;
    description : string;
    impactMetrics : string;
}

export default function ImpactLevel({ title, description, impactMetrics } : ImpactLevel) {
    return (
        <div className="infoSection">

            <h2 className="infoTitle">Title</h2>
            <p className="infoDescription"> hi guysm</p>
        </div>
    );
};