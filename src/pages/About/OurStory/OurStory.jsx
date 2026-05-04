import React from "react";
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

export default function OurStory() {
  const timelineData = [
    {
      year: "2023",
      title: "The Idea",
      description:
        "A group of Mongolian American graduates recognized the need for a supportive community network.",
    },
    {
      year: "2024",
      title: "First Steps",
      description:
        "Launched our first Resume Boost Program with 25 participants and informal resume workshops.",
    },
    {
      year: "2025",
      title: "Growth & Programs",
      description:
        "Expanded to multiple career-focused programs, delivered 3 professional development workshops, and hosted our first in-person networking event with 50+ attendees.",
    },
    {
      year: "2026",
      title: "Thriving Community",
      description:
        "Hosting quarterly workshops, publishing Behind The Badge Podcast episodes and interview articles, and sharing career insights through our blog.",
    },
  ];

  return (
    <div className="ourStoryPage">
      <section
	 	style={{ backgroundImage: `url(${seattleSkyline})` }} 
	  	className="ourStoryTitleContainer">
		<span className="ourStoryBadge">
			<img src={circleVec} alt="" className="badgeIcon" />
			By Mongolians, For Mongolians</span>
        <h1>Our Story</h1>
        <p className="ourStoryIntro">
          We started Connect MNG because each of us once faced these struggles
          alone—navigating a foreign space full of opportunities, yet searching
          for connection and support. We don't want the next generation of
          Mongolian American students and young professionals to experience that
          isolation. Instead, we want them to feel supported, connected, and
          empowered to thrive both personally and professionally.
        </p>
        <div className="ourStoryButtons">
          <button
            onClick={() =>
              window.open("https://www.connectmng.com/our-story", "_blank")
            }
			id="joinCommunityButton"
          >
            Join Our Community
          </button>
          <button
            onClick={() =>
              window.open("https://www.connectmng.com/our-story", "_blank")
            }
			id="learnMoreButton"
          >
            Learn More
          </button>
        </div>
      </section>
      <section 
	  	className="chapter1Container">
        <div className="chapter1Text">
          <span className="chapterLabel">Chapter 1</span>
          <h2>The Beginning</h2>
          <p>
            Connect MNG was born from a simple observation: Mongolian American
            students and young professionals, despite their incredible potential
            and shared heritage, often found themselves navigating their
            academic and professional journeys in isolation.
          </p>
          <p>
            Founded by a group of passionate Mongolian American graduates who
            experienced firsthand the challenges of building careers in a new
            country while maintaining cultural identity, Connect MNG emerged as
            a solution. We recognized that by bringing our community together,
            we could create something powerful—a network where knowledge,
            opportunities, and support flow freely.
          </p>
          <p>
            What started as casual coffee meetings between friends evolved into
            a vision: create a space where every Mongolian American student and
            young professional could find mentorship, resources, and a sense of
            belonging on their journey to success.
          </p>
        </div>
        <div className="chapter1Image">
          <img
            src={chapterOneMountain}
            alt="Mountain lake landscape"
          />
        </div>
      </section>
      <section className="ourJourneyContainer">
        <h2>Our Journey</h2>
        <p>Every great community has a story. Here's how we've grown together over the years.</p>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`timelineItem ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timelineContent">
                <h3 className="timelineYear">{item.year}</h3>
                <h4 className="timelineTitle">{item.title}</h4>
                <p className="timelineDescription">{item.description}</p>
              </div>
              <div className="timelineDot"></div>
            </div>
          ))}
        </div>
      </section>
	  <section className="chapter2Container">
		<div className="chapter2Grid">
			<div className="chapter2Posters">
			<div className="posterRow">
				<img src={chapterTwoSpheres} alt="Resume Boost October" className="posterImg" />
				<img src={chapterTwoPicnic} alt="Networking Picnic" className="posterImg" />
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
		</div>
	  </section>
	  <section className="chapter3Container">
		<div className="chapter3Text">
			<span className="chapterLabel">Chapter 3</span>
			<h2>Today & Tomorrow</h2>
			<p>
			Today, Connect MNG stands as a bridge connecting tradition with innovation,
			heritage with opportunity, and individuals with their full potential. We've hosted
			multiple events, helped many students refine their resumes, connected mentors with mentees,
			and created a space where Mongolian Americans can be their authentic selves while pursuing
			their dreams.
			</p>
			<p>
			But our story is still being written—by every member who joins, every connection made,
			and every success celebrated. Each resume refined, each career milestone achieved,
			and each friendship formed adds a new chapter to our collective narrative.
			</p>
			<div className="chapter3Buttons">
			<button id="becomeMemberButton">Become a Member</button>
			<button id="supportMissionButton">Support Our Mission</button>
			</div>
		</div>
		<div className="chapter3Card">
			<svg className="chapter3Arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 36L36 12M36 12H16M36 12V32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<h3>Join Our Story</h3>
			<p>Your story is our story, and together, we're building something extraordinary.</p>
			<p>Be part of a community that empowers, connects, and celebrates Mongolian American excellence.</p>
		</div>
	  </section>
	  <section className="ourStoryConclusionContainer">
		<svg className="conclusionHeart" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M24 42S6 30 6 18C6 12 10.5 7 16.5 7C20 7 23 9 24 11C25 9 28 7 31.5 7C37.5 7 42 12 42 18C42 30 24 42 24 42Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
		</svg>
		<h2>Ready to Write Your Chapter?</h2>
		<p>
			Every member brings unique experiences, talents, and dreams to our community.
			Your chapter in the Connect MNG story starts today.
		</p>
		<div className="conclusionButtons">
			<button id="getInvolvedButton">Get Involved Today</button>
			<button id="contactUsButton">Contact Us</button>
		</div>
	  </section>
      <Footer />
    </div>
  );
}
