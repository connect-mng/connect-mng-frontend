import React from "react";
import { Link } from "react-router-dom";
import "./Button.desktop.css";
import "./Button.mobile.css";

type Variant = "primary" | "secondary";
type Size = "small" | "medium" | "large";

type BaseProps = {
  text: string;
  variant?: Variant;
  size?: Size;
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

export type ButtonProps = ToProps | HrefProps;

export default function Button(props: ButtonProps) {
  const {
    text,
    variant = "primary",
    size = "small",
    showArrow = true,
    fullWidth = false,
    className = "",
    ariaLabel,
  } = props;

  const classes = [
    "appButton",
    `appButton--${variant}`,
    `appButton--${size}`,
    fullWidth ? "appButton--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="appButton__text">{text}</span>
      {showArrow ? <span className="appButton__arrow">→</span> : null}
    </>
  );

  // Internal route
  if ((props as ToProps).to !== undefined) {
    return (
      <Link
        className={classes}
        to={(props as ToProps).to}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </Link>
    );
  }

  // External link
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
