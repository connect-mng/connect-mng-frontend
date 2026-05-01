import React from "react";
import "./Pill.desktop.css";
import peopleIcon from "../../images/PageCards/Icon.png";
import eventsIcon from "../../images/PageCards/Events.png";
import donateIcon from "../../images/PageCards/Donate.png";

type PillProps = {
  text: string;
  className?: string;
  showCircleIcon?: boolean;
  showPeopleIcon?: boolean;
  showEventsIcon?: boolean;
  showDonateIcon?: boolean;
};

export default function Pill({
  text,
  className = "",
  showCircleIcon = false,
  showPeopleIcon = false,
  showEventsIcon = false,
  showDonateIcon = false,
}: PillProps) {
  return (
    <div className={`pill ${className}`.trim()}>
      {showPeopleIcon ? (
        <span className="pill__customIcon" aria-hidden="true">
          <img src={peopleIcon} alt="" className="pill__imgIcon" />
        </span>
      ) : showEventsIcon ? (
        <span className="pill__customIcon" aria-hidden="true">
          <img src={eventsIcon} alt="" className="pill__imgIcon" />
        </span>
      ) : showDonateIcon ? (
        <span className="pill__customIcon" aria-hidden="true">
          <img src={donateIcon} alt="" className="pill__imgIcon" />
        </span>
      ) : showCircleIcon ? (
        <span className="pill__icon" aria-hidden="true">
          <span className="pill__ring pill__ring--outer" />
          <span className="pill__ring pill__ring--middle" />
          <span className="pill__ring pill__ring--inner" />
          <span className="pill__dot" />
        </span>
      ) : null}

      <span className="pill__text">{text}</span>
    </div>
  );
}