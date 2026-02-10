import React from "react";
import "./OurStory.css";
import "./OurStoryDesktop.css";
import "./OurStoryMobile.css";
import Footer from "../../../components/Footer/Footer";
import seattleSkyline from "../../../images/OurStory/seattle-skyline.png";
import chapterOneMountain from "../../../images/OurStory/chapter-one-mountain.png";
import chapterTwoSpooky from "../../../images/OurStory/chapter-two-spooky.png";
import chapterTwoPicnic from "../../../images/OurStory/chapter-two-picnic.png";
import chapterTwoSpheres from "../../../images/OurStory/chapter-two-spheres.png";
import chapterTwoGroup from "../../../images/OurStory/chapter-two-group.png";
import circleVec from "../../../images/OurStory/circle-vector.svg";
import { useNavigate } from "react-router-dom";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const OurStory: React.FC = () => {
  const navigate = useNavigate();

  const timelineData: TimelineItem[] = [
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
        className="ourStoryTitleContainer"
      >
        <span className="ourStoryBadge">
          <img src={circleVec} alt="" className="badgeIcon" />
          By Mongolians, For Mongolians
        </span>
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
            onClick={() => {
              navigate("/get-involved/volunteer");
              window.scrollTo(0, 0);
            }}
            id="joinCommunityButton"
          >
            Join Our Community
          </button>

          <button
            onClick={() => {
              navigate("/resources/blogs");
              window.scrollTo(0, 0);
            }}
            id="learnMoreButton"
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="chapter1Container">
        <div className="chapter1Text">
          <span className="chapterLabel">Chapter 1</span>
          <h2>The Beginning</h2>
          <p>
            Connect MNG was born from a simple observation: Mongolian American
            students and young professionals, despite their incredible potential
            and shared heritage, often found themselves navigating their academic
            and professional journeys in isolation.
          </p>
          <p>
            Founded by a group of passionate Mongolian American graduates who
            experienced firsthand the challenges of building careers in a new
            country while maintaining cultural identity, Connect MNG emerged as
            a solution.
          </p>
        </div>

        <div className="chapter1Image">
          <img src={chapterOneMountain} alt="Mountain lake landscape" />
        </div>
      </section>

      <section className="ourJourneyContainer">
        <h2>Our Journey</h2>
        <p>
          Every great community has a story. Here's how we've grown together over
          the years.
        </p>

        <div className="timeline">
          {timelineData.map((item: TimelineItem, index: number) => (
            <div
              key={item.year}
              className={`timelineItem ${
                index % 2 === 0 ? "left" : "right"
              }`}
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
    </div>
  );
};

export default OurStory;
