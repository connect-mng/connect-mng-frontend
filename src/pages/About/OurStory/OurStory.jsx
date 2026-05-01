import React from "react";
import { useIntl } from "react-intl";
import "./OurStory.css";
import "./OurStoryDesktop.css";
import "./OurStoryMobile.css";
import Footer from "../../../components/Footer/Footer";
import seattleSkyline from '../../../images/OurStory/seattle-skyline.png';
import chapterOneMountain from '../../../images/OurStory/chapter-one-mountain.png';
import chapterTwoSpooky from '../../../images/OurStory/chapter-two-spooky.png';
import chapterTwoPicnic from '../../../images/OurStory/chapter-two-picnic.png';
import chapterTwoSpheres from '../../../images/OurStory/chapter-two-spheres.png';
import chapterTwoGroup from '../../../images/OurStory/chapter-two-group.png';
import circleVec from '../../../images/OurStory/circle-vector.svg';
//import OurStoryCard from "../../../components/PageCard/OurStoryCard/OurStoryCard";
import OurStoryCardImg from "../../../images/PageCards/OurStory.jpg";
import PageCard from "../../../components/PageCard/PageCard";
import Button from "../../../components/Buttons/Button";
import Pill from "../../../components/Pill/Pill";


export default function OurStory() {
	const intl = useIntl();

	return (
		<div className="aboutContainer">
			        <div className="ourStoryPage">
        {/* Hero */}
        <div className="fullBleed fullBleedTop">
		<PageCard
			className="fullBleedNoRadius ourStoryHeroCard"
  			backgroundImage={OurStoryCardImg}
  			title={
    			<>
      			<Pill
  					text={intl.formatMessage({ id: "ourStoryPillText" })}
  					className="ourStoryHeroPill"
  					showCircleIcon={true}
				/>
      			<br />
      			<span className="ourStoryHeroTitle">
        			{intl.formatMessage({ id: "ourStoryCardTitle" })}
      			</span>
    		</>
  			}
  			description={intl.formatMessage({ id: "ourStoryCardBody" })}
		>
  			<div className="ourStoryHeroButtons">
    			<Button
      				text={intl.formatMessage({ id: "joinOurCommunity" })}
      				to="/get-involved"
      				variant="primary"
      				size="large"
					showArrow={false}
    		/>
    		<Button
      			text={intl.formatMessage({ id: "learnMore" })}
      			to="/about/our-story"
      			variant="secondary"
      			size="large"
				showArrow={false}
    		/>
  		</div>
		</PageCard>
			<div className="ourStoryTitleContainer">
				<h1>{intl.formatMessage({ id: "ourStoryHeading1" })}</h1>
				<h1>{intl.formatMessage({ id: "ourStoryHeading2"})}</h1>
			</div>
			<div className="posterRow">
				<img src={chapterTwoGroup} alt="Connect MNG Network Tour" className="posterImg" />
				<img src={chapterTwoSpooky} alt="Spooky Interview Workshop" className="posterImg" />
			</div>
			</div>
			<div className="chapter2Text">
				<span className="chapterLabel">Chapter 2</span>
				<h2>Growing Together</h2>
				<p>
					What started as informal meetups and coffee chats has grown into a thriving organization
					serving many students and young professionals across the WA. Our programs have evolved
					from simple networking events to comprehensive professional development initiatives.
				</p>
				<p>
					Through the dedication of our volunteers, the support of our community, and the trust
					of our members, Connect MNG has become more than just an organization—it's a movement.
					A movement that celebrates Mongolian heritage while embracing the opportunities of American society.
				</p>
				<p>
					We've hosted resume workshops, created events, and built community that will last a lifetime.
					Every event, every program, and every connection made adds another thread to the fabric of our community.
				</p>
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
				<p><strong>{intl.formatMessage({ id: "ourStoryText6b" })}</strong></p>
				<p><strong>{intl.formatMessage({ id: "ourStorySignOff" })}</strong></p>
			</div>
		</div>
		</div>
	);
}

