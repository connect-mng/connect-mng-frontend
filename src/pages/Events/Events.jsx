import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import "./Events.css";
import EventsImg from "../../images/PageCards/Events.jpg";
import EventsCard from "../../components/PageCard/EventsCard";

export default function Events() {
  const intl = useIntl();

  const events = [
    {
      date: "September 27th, 2025",
      sessions: [
        {
          time: "12:00 PM - 2:00 PM",
          name: "Resume Building",
          location: "Capital One Cafe SLU",
          link: "/events/resume-building",
        },
      ],
    },
  ];

  return (
    <div className="eventsPage">
      <div className="fullBleed fullBleedTop">
        <EventsCard
          className="fullBleedNoRadius"
          backgroundImage={EventsImg}
          pillText={intl.formatMessage({ id: "eventsPillText" })}
          title={intl.formatMessage({ id: "events" })}
          body={intl.formatMessage({ id: "eventsCardBody" })}
          buttons={[
            { text: "View Upcoming Events", to: "/events", variant: "primary" },
            { text: "Subscribe to Calendar", to: "/events", variant: "secondary", showArrow: false },
          ]}
          align="left"
          overlayOpacity={0.55}
        />
      </div>

      {/* ✅ Content below (table) */}
      <div className="eventsContent">
        <h1>{intl.formatMessage({ id: "Calendar" })}</h1>

        {events.map((event, index) => (
          <div key={index} className="event-section">
            <h2 className="event-header">{event.date}</h2>

            <table className="event-table">
              <thead>
                <tr>
                  <th>{intl.formatMessage({ id: "Time" })}</th>
                  <th>{intl.formatMessage({ id: "Event" })}</th>
                  <th>{intl.formatMessage({ id: "Location" })}</th>
                </tr>
              </thead>
              <tbody>
                {event.sessions.map((session, i) => (
                  <tr key={i}>
                    <td>{session.time}</td>
                    <td>
                      <Link to={session.link} className="event-link">
                        {session.name}
                      </Link>
                    </td>
                    <td>{session.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
