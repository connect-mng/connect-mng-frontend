import React from "react";
import "./StoryBox.css";

type StoryBoxProps = {
  quote: string;
  name: string;
  role: string;
  image? : string;
};

export function StoryBox({ quote, name, role, image }: StoryBoxProps) {
  return (
    <div className="storyBox">
      <img src={image} alt="icon" className="storyImage"/>
      <p className="storyQuote">"{quote}"</p>
      <hr className="storyDivider" />
      <div className="storyAuthor">{name}</div>
      <div className="storyRole">{role}</div>
    </div>
  );
}
