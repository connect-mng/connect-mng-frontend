import React from "react";
import "./BlogsCard.css";

export type BlogsCardProps = {
  pillText?: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  /*coverImageSrc?: string;*/
  coverImageAlt?: string;
  gradientFrom?: string;
  gradientTo?: string;
  align?: "left" | "center";
  className?: string;
};

export default function BlogsCard({
  pillText = "Blogs",
  /*title,*/
  body,
  /*coverImageSrc,*/
  coverImageAlt = "Blogs cover",
  gradientFrom = "#24506A",
  gradientTo = "#557B4C",
  align = "left",
  className = "",
}: BlogsCardProps) {
  return (
    <section
      className={[
        "blogsHeroCard",
        `blogsHeroCard--${align}`,
        className,
      ].join(" ")}
      style={
        {
          ["--gradFrom"]: gradientFrom,
          ["--gradTo"]: gradientTo,
        } as React.CSSProperties
      }
      aria-label="Blogs introduction"
    >
      <div className="blogsHeroCard__bg" />

      <div className="blogsHeroCard__inner">
        <div className="blogsHeroCard__left">
          {pillText ? <div className="blogsHeroCard__pill">{pillText}</div> : null}
          
          <p className="blogsHeroCard__body">{body}</p>
        </div>


      </div>
    </section>
  );
}
