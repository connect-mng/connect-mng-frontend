import React from "react";
import "./ResumeBoostCard.css";
import LargeButton from "../Buttons/LargeButton";

export type ResumeBoostCardButton = {
    text: string;
    to: string;
    variant?: "primary" | "secondary";
    ariaLabel?: string;
};

export type ResumeBoostCardProps = {
    backgroundImage: string;
    pillText?: React.ReactNode;
    title: React.ReactNode;
    lead?: React.ReactNode;
    body: React.ReactNode;
    buttons?: ResumeBoostCardButton[];
    align?: "center" | "left";
    overlayOpacity?: number;
    className?: string;
};

export default function ResumeBoostCard({
    backgroundImage,
    pillText,
    title,
    lead,
    body,
    buttons = [],
    align = "left",
    overlayOpacity = 0.55,
    className = "",
  }: ResumeBoostCardProps) {
    return (
      <section
        className={[
          "resumeBoostCard",
          `resumeBoostCard--${align}`,
          className,
        ].join(" ")}
        style={
          {
            backgroundImage: `url(${backgroundImage})`,
            ["--overlayOpacity"]: overlayOpacity,
          } as React.CSSProperties
        }
        aria-label="Resume Boost introduction"
      >
        <div className="resumeBoostCard__overlay" />
        <div className="resumeBoostCard__inner">
          {pillText ? (
            <div className="resumeBoostCard__pill">
              <span className="resumeBoostCard__pillIcon" aria-hidden="true">
                {/* spark icon */}
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M11 2l1.2 4.2L16.4 8 12.2 9.2 11 13.4 9.8 9.2 5.6 8l4.2-1.8L11 2Zm7 7l.8 2.8L22 13l-3.2 1.2L18 17l-1.2-2.8L14 13l2.8-1.2L18 9Zm-2.2 7.2L17 20l-3.8-1.4L9.4 20l1.2-3.8L7 13.6l3.8-1.4L12.6 8.4l1.2 3.8 3.8 1.4-3.8 2.6Z"
                  />
                </svg>
              </span>
              <span className="resumeBoostCard__pillText">{pillText}</span>
            </div>
          ) : null}
  
          <h1 className="resumeBoostCard__title">{title}</h1>
  
          {lead ? <p className="resumeBoostCard__lead">{lead}</p> : null}
          {body ? <p className="resumeBoostCard__body">{body}</p> : null}
  
          {buttons.length ? (
            <div className="resumeBoostCard__buttons">
              {buttons.map((b, idx) => (
                <LargeButton
                  key={`${b.text}-${idx}`}
                  text={b.text}
                  to={b.to}
                  variant={b.variant ?? (idx === 0 ? "primary" : "secondary")}
                  ariaLabel={b.ariaLabel ?? b.text}
                  showArrow={false}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    );
  }