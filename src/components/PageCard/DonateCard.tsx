import React from "react";
import "./DonateCard.css";
import LargeButton from "../Buttons/LargeButton";

type Align = "left" | "center";

type BaseButton = {
  text: string;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  showArrow?: boolean;
};

type ToButton = BaseButton & {
  to: string;
  href?: undefined;
  target?: undefined;
  rel?: undefined;
};

type HrefButton = BaseButton & {
  href: string;
  to?: undefined;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export type DonateCardButton = ToButton | HrefButton;

export type DonateCardProps = {
  backgroundImage: string;
  pillText?: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;

  buttons?: DonateCardButton[];
  align?: Align;

  overlayOpacity?: number;

  /** optional: makes the card full viewport width by itself */
  fullBleed?: boolean;

  className?: string;
};

function isHrefButton(b: DonateCardButton): b is HrefButton {
  return typeof (b as any).href === "string";
}

export default function DonateCard({
  backgroundImage,
  pillText = "Support Our Community",
  title,
  body,
  buttons = [],
  align = "left",
  overlayOpacity = 0.35,
  fullBleed = false,
  className = "",
}: DonateCardProps) {
  return (
    <section
      className={[
        "donateHeroCard",
        `donateHeroCard--${align}`,
        fullBleed ? "donateHeroCard--fullBleed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          backgroundImage: `url(${backgroundImage})`,
          ["--overlayOpacity"]: overlayOpacity,
        } as React.CSSProperties
      }
      aria-label="Donate introduction"
    >
      <div className="donateHeroCard__inner">
        {pillText ? (
          <div className="donateHeroCard__pill">
            <span className="donateHeroCard__pillIcon" aria-hidden="true">
              {/* heart icon */}
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 21s-7.1-4.35-9.33-8.28C.56 9.32 2.44 6 5.9 6c1.86 0 3.1 1.02 4.1 2.12C11 7.02 12.24 6 14.1 6c3.46 0 5.34 3.32 3.23 6.72C19.1 16.65 12 21 12 21z"
                />
              </svg>
            </span>
            <span className="donateHeroCard__pillText">{pillText}</span>
          </div>
        ) : null}

        <h1 className="donateHeroCard__title">{title}</h1>
        <p className="donateHeroCard__body">{body}</p>

        {buttons.length ? (
          <div className={`donateHeroCard__footer donateHeroCard__footer--${align}`}>
            {buttons.map((b, idx) => {
              const common = {
                text: b.text,
                ariaLabel: b.ariaLabel ?? b.text,
                variant: b.variant ?? (idx === 0 ? "primary" : "secondary"),
                showArrow: false,
              };

              if (isHrefButton(b)) {
                return (
                  <LargeButton
                    key={`${b.text}-${idx}`}
                    {...common}
                    href={b.href}
                    target={b.target}
                    rel={b.rel}
                  />
                );
              }

              return (
                <LargeButton
                  key={`${b.text}-${idx}`}
                  {...common}
                  to={b.to}
                  showArrow={false}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
