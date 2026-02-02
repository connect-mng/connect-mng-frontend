import React from "react";
import { useIntl } from "react-intl";
import "./OurStory.css";
import OurStoryCard from "../../../components/PageCard/OurStoryCard";
import OurStoryCardImg from "../../../images/PageCards/OurStory.jpg";

export default function OurStory() {
  const intl = useIntl();

  return (
    <div className="ourStoryPage">
      {/* Hero */}
      <div className="fullBleed fullBleedTop">
        <OurStoryCard
          className="fullBleedNoRadius"
          backgroundImage={OurStoryCardImg}
          pillText={intl.formatMessage({ id: "ourStoryPillText" })}
          title={
            <>
              {intl.formatMessage({ id: "ourStoryCardTitle" })}
              <br />
            </>
          }
          body={intl.formatMessage({ id: "ourStoryCardBody" })}
          buttons={[
            { text: intl.formatMessage({ id: "joinOurCommunity" }), to: "/get-involved", variant: "primary" },
            { text: intl.formatMessage({ id: "learnMore" }), to: "/about/our-story", variant: "secondary" },
          ]}
          align="center"
          overlayOpacity={0.55}
        />
      </div>

      {/* Content */}
      <div className="ourStoryContent">
        <div className="ourStoryTitleContainer">
        <h1>{intl.formatMessage({ id: "ourStoryHeading1" })}</h1>
          <h1>{intl.formatMessage({ id: "ourStoryHeading2" })}</h1>
        </div>

        <div className="ourStoryDesc">
          <h3>{intl.formatMessage({ id: "ourStorySub1" })}</h3>
          <p>{intl.formatMessage({ id: "ourStoryText1" })}</p>

          <h3>{intl.formatMessage({ id: "ourStorySub1" })}</h3>
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
          <p><strong>{intl.formatMessage({ id: "ourStoryText6b" })}</strong></p>
          <p><strong>{intl.formatMessage({ id: "ourStorySignOff" })}</strong></p>
        </div>
      </div>
    </div>
  );
}