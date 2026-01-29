import React from "react";
import "./TimelineCard.css";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  year,
  title,
  description,
  position,
}) => {
  return (
    <div className={`timeline-card ${position}`}>
      <div className="timeline-card-inner">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
