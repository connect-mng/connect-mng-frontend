import React from "react";
import { useIntl } from "react-intl";

import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import OurTeamCard from "../../../components/PageCard/OurTeamCard";

import "./OurTeam.css";

export default function OurTeam() {
  const intl = useIntl();

  return (
    <div className="ourTeamPage">
      {/* ✅ Full-bleed hero */}
      <div className="fullBleed fullBleedTop">
        <OurTeamCard
          className="fullBleedNoRadius"
          pillText={intl.formatMessage({ id: "meetTheTeam" })}
          title={intl.formatMessage({ id: "ourTeam" })}
          body={intl.formatMessage({ id: "ourTeamDesc" })}
          backgroundColor="#5F7B49"   
          align="center"
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
