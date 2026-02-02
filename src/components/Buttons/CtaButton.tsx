import React from "react";
import { Link } from "react-router-dom";
import "./CtaButton.css";

type Variant = "primary" | "secondary";

type BaseProps = {
  text: string;
  variant?: Variant;
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
};

type ToProps = BaseProps & {
  to: string;
  href?: never;
  target?: never;
  rel?: never;
};

type HrefProps = BaseProps & {
  href: string;
  to?: never;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export type CtaButtonProps = ToProps | HrefProps;

export default function CtaButton(props: CtaButtonProps) {
  const {
    text,
    variant = "primary",
    showArrow = true,
    fullWidth = false,
    className = "",
    ariaLabel,
  } = props;

  const classes = [
    "ctaButton",
    `ctaButton--${variant}`,
    fullWidth ? "ctaButton--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="ctaButton__text">{text}</span>
      {showArrow ? <span className="ctaButton__arrow">→</span> : null}
    </>
  );

  // ✅ Internal route (narrow by value, not by "in")
  if ((props as ToProps).to !== undefined) {
    const { to } = props as ToProps;
    return (
      <Link className={classes} to={to} aria-label={ariaLabel ?? text}>
        {content}
      </Link>
    );
  }

  // ✅ External link
  const { href, target, rel } = props as HrefProps;

  const finalTarget = target ?? "_blank";
  const finalRel = rel ?? (finalTarget === "_blank" ? "noreferrer" : undefined);

  return (
    <a
      className={classes}
      href={href}
      target={finalTarget}
      rel={finalRel}
      aria-label={ariaLabel ?? text}
    >
      {content}
    </a>
  );
}
