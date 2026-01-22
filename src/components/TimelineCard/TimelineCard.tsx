import React from 'react';
import './TimelineCard.css';

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const TimelineCard: React.FC<TimelineCardProps> = ({ year, title, description, position }) => {
  return (
    <div className={`timeline-card ${position}`}>
      <div className="year">{year}</div>
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;