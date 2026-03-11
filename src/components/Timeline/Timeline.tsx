import React from "react";
import { useIntl } from "react-intl";
import "./Timeline.css";
import "./Timeline.mobile.css";
import TimelineCard from "./TimelineCard";
import { timelineItems } from "./constants";

export interface TimelineItem {
  year: string;
  titleId: string;
  descriptionId: string;
  position: "left" | "right";
}

export default function Timeline() {
  const intl = useIntl();

return (
  <div className="timeline-container">
    <div className="timeline-line" />
    {timelineItems.map((item) => (
      <div key={item.year} className="timeline-card-row">
        <div className={`timeline-card-wrapper ${item.position}`}>
          <TimelineCard
            year={item.year}
            title={intl.formatMessage({ id: item.titleId })}
            description={intl.formatMessage({ id: item.descriptionId })}
            position={item.position}
          />
        </div>
        <div className="timeline-dot" />
      </div>
    ))}
  </div>
);
}