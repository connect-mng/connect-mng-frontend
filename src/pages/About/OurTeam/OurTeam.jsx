import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import InternGallery from "../../../components/InternGallery/InternGallery.jsx";
import React from "react";

import { useIntl } from "react-intl";

import joinTeamImage from "../../../images/join.webp";
import "./OurTeam.css";

const VALUE_CARDS = [
  {
    title: "Community First",
    description: "We put our members at the center of everything we do, building genuine connections that last.",
    Icon: HeartIcon
  },
  {
    title: "Empowerment",
    description: "We believe in providing tools, resources, and opportunities that help individuals reach their full potential.",
    Icon: LightBulbIcon
  },
  {
    title: "Collaboration",
    description: "Together we're stronger. We foster an environment of mutual support and shared success.",
    Icon: HandshakeIcon
  },
  {
    title: "Excellence",
    description: "We strive for quality in our programs, events, and every interaction with our community.",
    Icon: TrophyIcon
  }
];

const JOIN_BENEFITS = [
  "Flexible volunteer opportunities that fit your schedule",
  "Develop leadership and professional skills",
  "Build meaningful connections with like-minded individuals",
  "Make a tangible impact in your community"
];

export default function OurTeam() {
  const intl = useIntl();

  return (
    <div className={"aboutContainer"}>
      {/* <div className={"aboutHeader"}>
        <h1>
          {intl.formatMessage({ id: "aboutUs" })}
        </h1>
        <div>
          {intl.formatMessage({ id: "aboutUsDesc" })}
        </div>
      </div > */}
      {/* <div className={"aboutHeader"}>
        <h1>
          {intl.formatMessage({ id: "ourValues" })}
        </h1>
        <div>{intl.formatMessage({ id: "ourValuesDesc" })}</div>
      </div> */}
      <div className="about-Header">
        <h1>Our Team</h1>
        <div>
           Page Header cards - Use Jason's section
        </div>
      </div>
      <BoardMemberGallery />
      <InternGallery />

      <div className="ourValues">
        <h2 className="valuesHeader">Our Values</h2>
        <div className="valuesSub">The principles that guide our team and shape everything we do</div>
        <div className="cardContainer">
          {VALUE_CARDS.map(({ title, description, Icon }) => (
            <div className="valueCard" key={title}>
              <div className="cardIcon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="joinOurTeam">
        <div className="joinDetails">
          <div className="joinIntro">
            <h3>Join Our Team</h3>
            <p>
              We're always looking for passionate individuals who want to make a difference in the Mongolian American community. Whether you have 2 hours a month or 10 hours a week, there's a place for you on our team.
            </p>
          </div>
          <ul className="joinBenefits">
            {JOIN_BENEFITS.map((benefit) => (
              <li key={benefit}>
                <span className="benefitIcon" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="joinActions">
            <button className="joinButton primary">Apply to Volunteer</button>
            <button className="joinButton secondary">Learn More</button>
          </div>
        </div>
        <div className="joinImage">
          <img src={joinTeamImage} alt="Our Team" className="team-image" />
        </div>
      </div>
    </div>
  );
};

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">
      <path
        d="M12 20.5s-7.5-4.5-7.5-10c0-2.5 2-4.5 4.5-4.5 1.6 0 3 0.9 3.5 2.2 0.5-1.3 1.9-2.2 3.5-2.2 2.5 0 4.5 2 4.5 4.5 0 5.5-7.5 10-7.5 10z"
        fill="currentColor"
      />
    </svg>
  );
}

function LightBulbIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">
      <path d="M9 21h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 18h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 1 6 6c0 2.4-1.4 4.5-3.4 5.6L14.5 18h-5l-.1-3.4A6 6 0 0 1 6 9a6 6 0 0 1 6-6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">
      <path d="M2 12.5 7.5 7l4 4 4-4L22 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 11 1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m12 11 1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m15 11 1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 14 4 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 14l3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">
      <path d="M9 21h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 17h4l1-4h2.5A3.5 3.5 0 0 0 21 9.5V5h-3V3H6v2H3v4.5A3.5 3.5 0 0 0 6.5 13H9l1 4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation">
      <path d="M4 8l2.5 2.5L12 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}