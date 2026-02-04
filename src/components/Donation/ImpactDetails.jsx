import React from "react";
import "./ImpactDetails.css";
import { DetailBox } from "./ImpactDetailBox";

const items = [
  { id: 1, title: "300 +", description: "Students Supported" },
  { id: 2, title: "50 +", description: "Events hosted" },
  { id: 3, title: "95 %", description: "Programs Free to Member" },
  { id: 4, title: "$0", description: "Administrative Overhead"}
];

export function ImpactDetail() {
  const itemList = items.map((item) => (
    // Wrap each item in div and show all Details.
    <div key={item.id}>
      <DetailBox heading={item.title} content={item.description}/>
    </div>
  ));

  return (
    // This container will hold your row of items
    <div className="container">{itemList}</div>
  );
}
