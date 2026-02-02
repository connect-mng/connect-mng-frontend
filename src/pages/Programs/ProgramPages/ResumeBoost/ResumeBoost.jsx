import React from "react";
import "./ResumeBoost.css";
import resumeIcon from "../../../../images/programs/Connectmng.webp";
import ResumeBoostCard from "../../../../components/PageCard/ResumeBoostCard";

export default function ResumeBoostProgram() {
  return (
    <div className="resumeBoostPage">
      {/* ✅ Full-bleed hero */}
      <div className="fullBleed fullBleedTop">
        <ResumeBoostCard
          className="fullBleedNoRadius"
          pillText="Professional Development Program"
          title="Resume Boost"
          lead="Elevate your career prospects with personalized resume reviews from industry professionals. Improve clarity, impact, and alignment to your target roles."
          body="Resume Boost is a career development program designed to help Mongolian college students and young professionals strengthen their resumes with expert feedback. Participants receive tailored guidance to ensure their skills and experiences are effectively highlighted for potential employers."
          buttons={[
            { text: "Apply for Resume Boost", to: "/apply/resume-boost", variant: "primary" },
            { text: "Contact Us", to: "/contact", variant: "secondary" },
          ]}
          align="left"
          overlayOpacity={0.55}
        />
      </div>

      {/* ✅ Home-style centered content */}
      <div className="resumeBoostContent">
        <div className="indivProgramContainer">
          <div className="indivProgramTextContainer">
            <p className="programDescription">
              Resume Boost is a career development program designed to help
              Mongolian college students and young professionals strengthen
              their resumes with expert feedback. Participants receive tailored
              guidance to ensure their skills and experiences are effectively
              highlighted for potential employers.
            </p>
          </div>

          <div className="resumeIconBlock mobile-desktop">
            <img
              src={resumeIcon}
              className="programImage"
              alt="Resume Boost Program"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
