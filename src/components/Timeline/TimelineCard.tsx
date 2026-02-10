import React from "react";
import "./TimelineCard.css";
import { TimelineItem } from "./Timeline";

const TimelineCard: React.FC<TimelineItem> = ({
  year,
  title,
  description,
  position,
}) => {
  return (
    <div className={`timeline-card ${position}`}>
      <div className="timeline-card-header">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-title">{title}</h3>
      </div>
      <p className="timeline-description">{description}</p>
    </div>
  );
};

export default TimelineCard;