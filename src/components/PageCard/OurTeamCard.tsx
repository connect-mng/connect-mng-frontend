import React from "react";
import "./OurTeamCard.css";

export type OurTeamCardProps = {
    pillText?: React.ReactNode;
    title: React.ReactNode;
    body: React.ReactNode;
    backgroundColor: string;
    topRightImageSrc?: string;
    topRightImageAlt?: string;
    align?: "center" | "left";
    className?: string;
};

export default function OurTeamCard({
    pillText,
    title,
    body,
    backgroundColor = "#5F7B49",
    topRightImageSrc,
    topRightImageAlt = "Team",
    align = "center",
    className = "",
  }: OurTeamCardProps) {
    return (
      <section
        className={[
          "ourTeamCard",
          `ourTeamCard--${align}`,
          className,
        ].join(" ")}
        style={{ backgroundColor }}
        aria-label="Our Team introduction"
      >
        {topRightImageSrc ? (
          <div className="ourTeamCard__topRight">
            <img
              className="ourTeamCard__topRightImg"
              src={topRightImageSrc}
              alt={topRightImageAlt}
            />
          </div>
        ) : null}
  
        <div className="ourTeamCard__inner">
          {pillText ? (
            <div className="ourTeamCard__pill">
              <span className="ourTeamCard__pillIcon" aria-hidden="true">
                {/* simple "users" icon */}
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.93 1.97 3.45V20h7v-3.5c0-2.33-4.67-3.5-7-3.5Z"
                  />
                </svg>
              </span>
              <span className="ourTeamCard__pillText">{pillText}</span>
            </div>
          ) : null}
  
          <h1 className="ourTeamCard__title">{title}</h1>
          <p className="ourTeamCard__body">{body}</p>
        </div>
      </section>
    );
  }