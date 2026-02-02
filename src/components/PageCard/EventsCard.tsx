import React from "react";
import "./EventsCard.css";
import LargeButton from "../Buttons/LargeButton";

type Align = "left" | "center";

export type EventsCardButton = {
  text: string;
  to: string;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  showArrow?: boolean;
};

export type EventsCardProps = {
  backgroundImage: string;

  pillText?: React.ReactNode;
  pillIcon?: React.ReactNode;

  title: React.ReactNode;
  body?: React.ReactNode;

  buttons?: EventsCardButton[];

  align?: Align;
  overlay?: boolean;
  overlayOpacity?: number;

  className?: string;
};

export default function EventsCard({
  backgroundImage,

  pillText = "Connect & Grow Together",
  pillIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        fill="currentColor"
        d="M12 2l1.1 4.1L17 7.2l-3.9 1.1L12 12l-1.1-3.7L7 7.2l3.9-1.1L12 2zm7 8l.7 2.6L22 13l-2.3.4L19 16l-.7-2.6L16 13l2.3-.4L19 10zM6 14l.9 3.2L10 18l-3.1.8L6 22l-.9-3.2L2 18l3.1-.8L6 14z"
      />
    </svg>
  ),

  title,
  body,

  buttons = [],
  align = "left",

  overlay = true,
  overlayOpacity = 0.55,

  className = "",
}: EventsCardProps) {
  const showOverlay = Boolean(backgroundImage) && overlay;

  return (
    <section
      className={[
        "eventsCard",
        "eventsCard--hero",
        showOverlay ? "eventsCard--overlay" : "",
        `eventsCard--${align}`,
        className,
      ].join(" ")}
      style={
        {
          backgroundImage: `url(${backgroundImage})`,
          ["--eventsCardOverlayOpacity" as any]: overlayOpacity,
        } as React.CSSProperties
      }
      aria-label="Events introduction"
    >
      <div className="eventsCard__inner">
        <div className={`eventsCard__content eventsCard__content--${align}`}>
          {pillText ? (
            <div className={`eventsCard__pill eventsCard__pill--${align}`}>
              {pillIcon ? (
                <span className="eventsCard__pillIcon" aria-hidden="true">
                  {pillIcon}
                </span>
              ) : null}
              <span className="eventsCard__pillText">{pillText}</span>
            </div>
          ) : null}

          <h1 className="eventsCard__title">{title}</h1>

          {body ? <p className="eventsCard__body">{body}</p> : null}

          {buttons.length ? (
            <div className={`eventsCard__footer eventsCard__footer--${align}`}>
              {buttons.map((b, idx) => (
                <LargeButton
                  key={`${b.text}-${idx}`}
                  text={b.text}
                  to={b.to}
                  ariaLabel={b.ariaLabel ?? b.text}
                  variant={b.variant ?? (idx === 0 ? "primary" : "secondary")}
                  showArrow={b.showArrow ?? false}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
