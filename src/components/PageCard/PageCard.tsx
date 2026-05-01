import React from "react";
import { Link } from "react-router-dom";
import "./PageCard.css";

type Variant = "primary" | "secondary";

type BaseProps = {
  icon?: React.ReactNode;
  backgroundImage?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  media?: React.ReactNode;
};

type ToProps = BaseProps & {
  to: string;
  href?: never;
  target?: never;
  rel?: never;
};

type HrefProps = BaseProps & {
  href?: string;
  to?: never;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export type PageCardProps = ToProps | HrefProps;

function isToProps(props: PageCardProps): props is ToProps {
  return "to" in props;
}

export default function PageCard(props: PageCardProps) {
  const {
    icon,
    backgroundImage,
    title,
    description,
    buttonText,
    variant = "secondary",
    className = "",
    ariaLabel,
    children,
    media,
  } = props;

  const rootStyle = backgroundImage
  ? ({
    backgroundImage: backgroundImage.includes("gradient")
      ? backgroundImage
      : `url(${backgroundImage})`,
  } as React.CSSProperties)
    : undefined;

    return (
      <div className={`pageCard ${className}`} style={rootStyle}>
        <div className="pageCardContent">
          {icon && <div className="pageCardIcon">{icon}</div>}
    
          <h3 className="pageCardTitle">{title}</h3>
          <p className="pageCardDescription">{description}</p>
    
          {children ? (
            <div className="pageCardActions">{children}</div>
          ) : isToProps(props) && buttonText ? (
            <Link
              to={props.to}
              className={`pageCardButton pageCardButton--${variant}`}
              aria-label={ariaLabel ?? buttonText}
            >
              {buttonText}
            </Link>
          ) : props.href && buttonText ? (
            <a
              href={props.href}
              target={props.target ?? "_blank"}
              rel={props.rel ?? "noreferrer"}
              className={`pageCardButton pageCardButton--${variant}`}
              aria-label={ariaLabel ?? buttonText}
            >
              {buttonText}
            </a>
          ) : null}
        </div>
        {media ? <div className="pageCardMedia">{media}</div> : null}
      </div>
    );
  }
