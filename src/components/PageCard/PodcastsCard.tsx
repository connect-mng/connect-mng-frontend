import React from "react";
import "./PodcastsCard.css";

export type PodcastsCardProps = {
  pillText?: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  coverImageSrc: string;
  coverImageAlt?: string;
  gradientFrom?: string; 
  gradientTo?: string; 
  align?: "left" | "center";
  className?: string;
};

export default function PodcastsCard({
  pillText = "Podcast",
  title,
  body,
  coverImageSrc,
  coverImageAlt = "Podcast cover",
  gradientFrom = "#24506A",
  gradientTo = "#557B4C",
  align = "left",
  className = "",
}: PodcastsCardProps) {
  return (
    <section
      className={[
        "podcastsHeroCard",
        `podcastsHeroCard--${align}`,
        className,
      ].join(" ")}
      style={
        {
          ["--gradFrom"]: gradientFrom,
          ["--gradTo"]: gradientTo,
        } as React.CSSProperties
      }
      aria-label="Podcasts introduction"
    >
      <div className="podcastsHeroCard__bg" />

      <div className="podcastsHeroCard__inner">
        <div className="podcastsHeroCard__left">
          {pillText ? <div className="podcastsHeroCard__pill">{pillText}</div> : null}
          <h1 className="podcastsHeroCard__title">{title}</h1>
          <p className="podcastsHeroCard__body">{body}</p>
        </div>

        <div className="podcastsHeroCard__right">
          <img
            className="podcastsHeroCard__cover"
            src={coverImageSrc}
            alt={coverImageAlt}
          />
        </div>
      </div>
    </section>
  );
}
