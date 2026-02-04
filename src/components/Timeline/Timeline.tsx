import React from "react";
import "./Timeline.css";
import TimelineCard from "./TimelineCard";
import { timelineData } from "./constants";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

interface TimelineProps {
  items?: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items = timelineData }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />

      {items.map((item, index) => (
        <div
          key={index}
          className={`timeline-card-wrapper ${item.position}`}
        >
          <TimelineCard {...item} />
          <div className="timeline-dot" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
