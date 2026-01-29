import React from "react";
import TimelineCard from "../Timeline/TimelineCard";
import "./Timeline.css";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {items.map((item, idx) => (
        <div key={idx} className={`timeline-card-wrapper ${item.position}`}>
          <TimelineCard {...item} />
          <div className="timeline-dot" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
