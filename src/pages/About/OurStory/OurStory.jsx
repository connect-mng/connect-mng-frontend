import React from "react";
import { useIntl } from "react-intl";
import "./OurStory.css";
import Timeline from "../../../components/Timeline/Timeline";

export default function OurStory() {
  const intl = useIntl();

  const timelineData = [

	{
	  year: "2023",
      title: "The Idea",
      description:
	  "A group of Mongolian American graduates recognized the need for a supportive community network.",
	  position: "left",
	},
	{
	  year: "2024",
      title: "First Steps",
      description:
	  "Launched our first Resume Boost Program with 25 participants and informal resume workshops.",
	  position: "right",
	},
    {
      year: "2025",
      title: "Growth & Programs",
      description:
      "Expanded to multiple career-focused programs, delivered 3 professional development workshops, and hosted our first in-person networking event with 50+ attendees.",
	  position: "left",
    },
    {
      year: "2026",
      title: "Thriving Community",
      description:
      "Hosting quarterly workshops, publishing Behind The Badge Podcast episodes and interview articles, and sharing career insights through our blog.",
	  position: "right",
	},
  ];

  return (
    <>
      <div className="aboutContainer">
        <div className="ourStoryTitleContainer">
          <h1>{intl.formatMessage({ id: "ourStoryHeading1" })}</h1>
          <h1>{intl.formatMessage({ id: "ourStoryHeading2" })}</h1>
        </div>

        <div className="ourStoryDesc">
          <h3>{intl.formatMessage({ id: "ourStorySub1" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText1" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub2" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText2" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub3" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText3" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub4" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText4a" })}</p>
          <p>{intl.formatMessage({ id: "ourStoryText4b" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub5" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText5a" })}</p>
          <p>{intl.formatMessage({ id: "ourStoryText5b" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub6" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText6a" })}</p>
          <p>
            <strong>{intl.formatMessage({ id: "ourStoryText6b" })}</strong>
          </p>
          <p>
            <strong>{intl.formatMessage({ id: "ourStorySignOff" })}</strong>
          </p>
        </div>
      </div>

      <div className="timelineSection">
  		<Timeline items={timelineData} />
	  </div>
    </>
  );
}
