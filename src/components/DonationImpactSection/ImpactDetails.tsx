import React from "react";
import "./ImpactDetails.css";
import { DetailBox } from "./ImpactDetailBox";
import { impactItems } from "./ImpactDetailsConstant"

export function ImpactDetail() {
  const itemList = impactItems.map((impactItem) => (
    // Wrap each impactItem in div and show all Details.
    <div key={impactItem.id}>
      <DetailBox heading={impactItem.title} content={impactItem.description} backgroundcolor=""/>
    </div>
  ));

  return (
    // This container will hold your row of items
    <div className="container">{itemList}</div>
  );
}
