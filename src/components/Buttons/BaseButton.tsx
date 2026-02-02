import React from "react";
import { Link } from "react-router-dom";
import "./BaseButton.css";

export type Variant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonCommonProps = {
  text: string;
  variant?: Variant;
  showArrow?: boolean;
  fullWidth?: boolean; // overrides fixed width if true
  className?: string;
  ariaLabel?: string;
};

export type ButtonToProps = ButtonCommonProps & {
  to: string;
  href?: never;
  target?: never;
  rel?: never;
};

export type ButtonHrefProps = ButtonCommonProps & {
  href: string;
  to?: never;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export type ButtonProps = ButtonToProps | ButtonHrefProps;

type BaseButtonProps = ButtonProps & {
  size: ButtonSize;
};

export default function BaseButton(props: BaseButtonProps) {
  const {
    text,
    size,
    variant = "primary",
    showArrow = true,
    fullWidth = false,
    className = "",
    ariaLabel,
  } = props;

  const classes = [
    "ctaButton",
    `ctaButton--${variant}`,
    `ctaButton--${size}`,
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

  // Internal route
  if ((props as ButtonToProps).to !== undefined) {
    const { to } = props as ButtonToProps;
    return (
      <Link className={classes} to={to} aria-label={ariaLabel ?? text}>
        {content}
      </Link>
    );
  }

  // External link
  const { href, target, rel } = props as ButtonHrefProps;

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
