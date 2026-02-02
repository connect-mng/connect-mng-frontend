import React from "react";
import "./PageCard.css";
/*import CtaButton from "../Buttons/CtaButton";*/
import SmallButton from "../Buttons/SmallButton";

type Align = "left" | "center";

export type PageCardCta = {
  text: string;
  to: string;
  ariaLabel?: string;
};

export type PageCardProps = {
  title: React.ReactNode;
  body?: React.ReactNode;

  align?: Align;

  backgroundImage?: string;
  overlay?: boolean;

  fullBleed?: boolean;

  cta?: PageCardCta;

  children?: React.ReactNode;
  className?: string;
};

export default function PageCard({
  title,
  body,
  align = "left",
  backgroundImage,
  overlay = true,
  fullBleed = false,
  cta,
  children,
  className = "",
}: PageCardProps) {
  const isHero = Boolean(backgroundImage);
  const showOverlay = isHero && overlay;

  return (
    <section
      className={[
        "pageCard",
        isHero ? "pageCard--hero" : "pageCard--plain",
        showOverlay ? "pageCard--overlay" : "",
        fullBleed ? "pageCard--fullBleed" : "",
        className,
      ].join(" ")}
      style={isHero ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      aria-label="Page introduction"
    >
      <div className="pageCard__inner">
        <div className={`pageCard__content pageCard__content--${align}`}>
          <h1 className="pageCard__title">{title}</h1>

          {body ? <p className="pageCard__body">{body}</p> : null}

          {cta || children ? (
            <div className={`pageCard__footer pageCard__footer--${align}`}>
              {cta ? (
                <SmallButton
                  text={cta.text}
                  to={cta.to}
                  ariaLabel={cta.ariaLabel ?? cta.text}
                  variant="primary"
                  showArrow
                />
              ) : null}
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
