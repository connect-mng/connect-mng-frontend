import React from "react";
import "./ProgramBox.css";

type ProgramBoxProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export function ProgramBox({ imageSrc, title, description } : ProgramBoxProps) {
  return (
    <div className="programBox">
      <img src={imageSrc}/>
      <div className="programBoxTitle">{title}</div>
      <div className="programBoxDescription">{description}</div>
    </div>
  );
}