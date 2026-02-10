import React from "react";
import { useIntl } from "react-intl";
import "./Timeline.css";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./constants";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

export default function Timeline() {
  const intl = useIntl();

  const items: TimelineItem[] = timelineData.map((item) => ({
    year: item.year,
    title: intl.formatMessage({ id: item.titleId }),
    description: intl.formatMessage({ id: item.descriptionId }),
    position: item.position,
  }));

  return (
    <div className="timeline-container">
      <div className="timeline-line" />

      {items.map((item, index) => (
        <div
          key={index}
          className={`timeline-card-wrapper ${item.position}`}
        >
          <span className="timeline-dot" />
          <TimelineCard {...item} />
        </div>
      ))}
    </div>
  );
}