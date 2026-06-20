import React from "react";
import "./Events.css";
import "./EventsDesktop.css";
import "./EventsMobile.css";
import Footer from "../../components/Footer/Footer";
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiMonitor, FiArrowRight } from "react-icons/fi";
import heroBackground from "../../images/Events/cmng_events_header_img.jpg";
import circleVec from "../../images/OurStory/circle-vector.svg";
import event1Img from "../../images/homeCarousel/slide1.jpg";
import event2Img from "../../images/OurStory/chapter-two-group.png";
import event3Img from "../../images/OurStory/chapter-two-picnic.png";
import pastEvent1Img from "../../images/OurStory/chapter-two-spooky.png";
import pastEvent2Img from "../../images/OurStory/chapter-one-mountain.png";
import pastEvent3Img from "../../images/OurStory/chapter-two-spheres.png";

const upcomingEvents = [
  {
    id: 1,
    image: event1Img,
    categories: [{ label: "Networking", type: "networking" }],
    title: "Spring Networking Night",
    date: "March 15, 2024",
    time: "6:00 PM - 9:00 PM EST",
    location: "WeWork, New York City",
    description:
      "Join us for an evening of networking with fellow Mongolian American professionals and students. Enjoy food,",
    registered: 45,
    capacity: 70,
    spotsLeft: 25,
  },
  {
    id: 2,
    image: event2Img,
    categories: [
      { label: "Workshop", type: "workshop" },
      { label: "Virtual", type: "virtual" },
    ],
    title: "Resume Workshop: Tech Edition",
    date: "March 22, 2024",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual (Zoom)",
    description:
      "Learn how to craft a standout tech resume with tips from industry professionals. Perfect for students",
    registered: 62,
    capacity: null,
    spotsLeft: null,
  },
  {
    id: 3,
    image: event3Img,
    categories: [
      { label: "Panel", type: "panel" },
      { label: "Virtual", type: "virtual" },
    ],
    title: "Career Panel: Finance & Consulting",
    date: "April 5, 2024",
    time: "7:00 PM - 8:30 PM EST",
    location: "Virtual (Zoom)",
    description:
      "Hear from Mongolian American professionals working at top finance and consulting firms. Q&A session",
    registered: 38,
    capacity: null,
    spotsLeft: null,
  },
];

const pastEvents = [
  {
    id: 1,
    image: pastEvent1Img,
    category: "Social",
    title: "Mongolians in Seattle Networking Event",
    date: "February 10, 2024",
    location: "Seattle, WA",
    attendees: 55,
  },
  {
    id: 2,
    image: pastEvent2Img,
    category: "Workshop",
    title: "LinkedIn Profile Optimization Workshop",
    date: "January 28, 2024",
    location: "Virtual",
    attendees: 72,
  },
  {
    id: 3,
    image: pastEvent3Img,
    category: "Social",
    title: "Interview Workshop",
    date: "January 12, 2024",
    location: "Capital One, SLU",
    attendees: 48,
  },
];

export default function Events() {
  return (
    <div className="eventsPage">
      {/* Hero */}
      <section
        className="eventsHero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="eventsHeroContent">
          <span className="eventsBadge">
            <img src={circleVec} alt="" className="eventsBadgeIcon" />
            Connect &amp; Grow Together
          </span>
          <h1>Events</h1>
          <p>
            Join Connect MNG for networking events, professional development workshops, career panels, and
            social gatherings. Build meaningful connections with fellow Mongolian American students and
            professionals while growing your skills and network.
          </p>
          <div className="eventsHeroButtons">
            <button className="eventsHeroPrimary">View Upcoming Events</button>
            <button className="eventsHeroSecondary">Subscribe to Calendar</button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcomingEventsSection">
        <div className="sectionHeader">
          <span className="sectionBadge">Don't Miss Out</span>
          <h2>Upcoming Events</h2>
          <p>Register now for our upcoming events and be part of the growing Connect MNG community.</p>
        </div>
        <div className="eventsGrid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="eventCard">
              <div className="eventCardImageWrap">
                <img src={event.image} alt={event.title} />
                <div className="eventCardBadges">
                  {event.categories.map((cat) => (
                    <span key={cat.label} className={`eventCategoryBadge badge-${cat.type}`}>
                      {cat.type === "virtual" && <FiMonitor size={11} />}
                      {cat.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="eventCardBody">
                <h3 className="eventCardTitle">{event.title}</h3>
                <div className="eventMeta">
                  <span><FiCalendar size={13} />{event.date}</span>
                  <span><FiClock size={13} />{event.time}</span>
                  <span><FiMapPin size={13} />{event.location}</span>
                </div>
                <p className="eventCardDesc">{event.description}</p>
                <div className="eventCardFooterRow">
                  <span className="eventRegistered">
                    <FiUsers size={13} />
                    {event.capacity
                      ? `${event.registered} registered / ${event.capacity}`
                      : `${event.registered} registered`}
                  </span>
                  <span className="eventSpots">
                    {event.spotsLeft ? `${event.spotsLeft} spots left` : "Unlimited"}
                  </span>
                </div>
                <button className="registerNowBtn">
                  Register Now <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="pastEventsSection">
        <div className="sectionHeader">
          <h2>Past Events</h2>
          <p>Check out some of our recent events and see what you missed.</p>
        </div>
        <div className="eventsGrid">
          {pastEvents.map((event) => (
            <div key={event.id} className="pastEventCard">
              <div className="pastEventImageWrap">
                <img src={event.image} alt={event.title} />
                <span className="pastEventCategoryBadge">{event.category}</span>
              </div>
              <div className="pastEventCardBody">
                <h3 className="pastEventTitle">{event.title}</h3>
                <div className="pastEventMeta">
                  <span><FiCalendar size={13} />{event.date}</span>
                  <span><FiMapPin size={13} />{event.location}</span>
                  <span><FiUsers size={13} />{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pastEventsButtonWrap">
          <button className="viewAllPastBtn">View All Past Events</button>
        </div>
      </section>

      {/* CTA */}
      <section className="eventsCtaSection">
        <FiCalendar size={48} className="eventsCtaIcon" />
        <h2>Never Miss an Event</h2>
        <p>
          Stay updated on all Connect MNG events by subscribing to our event calendar. Get notifications for
          new events, updates, and exclusive opportunities.
        </p>
        <div className="eventsCtaButtons">
          <button className="eventsCtaPrimary">Subscribe to Calendar</button>
          <button className="eventsCtaSecondary">Join Our Mailing List</button>
        </div>
      </section>

    </div>
  );
}
