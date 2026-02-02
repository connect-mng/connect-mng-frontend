import React from "react";
import "./OurStoryCard.css";
import LargeButton from "../Buttons/LargeButton";

export type OurStoryCardButton = {
    text: string;
    to: string;
    variant?: "primary" | "secondary";
    ariaLabel?: string;
};

export type OurStoryCardProps = {
    backgroundImage: string;
    pillText?: React.ReactNode;
    title: React.ReactNode;
    body: React.ReactNode;
    buttons?: OurStoryCardButton[];
    align?: "center" | "left";
    overlayOpacity?: number;
    className?: string;
};

export default function OurStoryCard({
    backgroundImage,
    pillText,
    title,
    body,
    buttons = [],
    align = "center",
    overlayOpacity = 0.55,
    className = "",
  }: OurStoryCardProps) {
    return (
      <section
        className={[
          "ourStoryCard",
          `ourStoryCard--${align}`,
          className,
        ].join(" ")}
        style={
          {
            backgroundImage: `url(${backgroundImage})`,
            ["--overlayOpacity"]: overlayOpacity,
          } as React.CSSProperties
        }
        aria-label="Our Story introduction"
      >
        <div className="ourStoryCard__overlay" />
        <div className="ourStoryCard__inner">
          {pillText ? (
            <div className="ourStoryCard__pill">
              <span className="ourStoryCard__dot" aria-hidden="true" />
              <span className="ourStoryCard__pillText">{pillText}</span>
            </div>
          ) : null}
  
          <h1 className="ourStoryCard__title">{title}</h1>
          <p className="ourStoryCard__body">{body}</p>
  
          {buttons.length ? (
            <div className="ourStoryCard__buttons">
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
  