import React from "react";
import { useIntl } from "react-intl";

import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import PageCard from "../../../components/PageCard/PageCard";
import Pill from "../../../components/Pill/Pill";

import "./OurTeam.css";

export default function OurTeam() {
  const intl = useIntl();

  return (
    <div className="ourTeamPage">
      {/* ✅ Full-bleed PageHeader */}
      <div className="PageHeader">
        <PageCard
          className="fullBleedNoRadius"
          backgroundImage="linear-gradient(135deg, #587C45, #587C45)"
          title={
            <>
              <Pill
                text={intl.formatMessage({ id: "meetTheTeam" })}
                className="ourTeamHeroPill"
                showPeopleIcon={true}
              />
              <span className="ourTeamHeroTitle">
                {intl.formatMessage({ id: "ourTeam" })}
              </span>
            </>
          }
          description={intl.formatMessage({ id: "ourTeamDesc" })}
        />
      </div>

      {/* ✅ Home-style centered content */}
      <div className="ourTeamContent">
        <div className={"aboutHeader"}>
          <h1>{intl.formatMessage({ id: "aboutUs" })}</h1>
          <div>{intl.formatMessage({ id: "aboutUsDesc" })}</div>
        </div>

        <div className={"aboutHeader"}>
          <h1>{intl.formatMessage({ id: "ourValues" })}</h1>
          <div>{intl.formatMessage({ id: "ourValuesDesc" })}</div>
        </div>

        <BoardMemberGallery />
      </div>
    </div>
  );
}
