import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

import "./TeamMemberSection.desktop.css";
import "./TeamMemberSection.mobile.css";

function getInitials(name) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

function TeamMemberCard({ member }) {
    const placeholderStyle = member.placeholderColor
        ? { background: member.placeholderColor }
        : undefined;

    return (
        <article className="team-member-card">
            <div className="team-member-media">
                {member.image ? (
                    <img className="team-member-image" src={member.image} alt={member.name} />
                ) : (
                    <div
                        className="team-member-image team-member-placeholder"
                        style={placeholderStyle}
                        aria-label={`${member.name} placeholder`}
                    >
                        <span>{getInitials(member.name)}</span>
                    </div>
                )}

                {member.linkedIn ? (
                    <a
                        className="team-member-link"
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                    >
                        <FaLinkedinIn />
                    </a>
                ) : member.showLinkedInIcon !== false ? (
                    <span className="team-member-link team-member-link-disabled" aria-hidden="true">
                        <FaLinkedinIn />
                    </span>
                ) : null}

                <div className="team-member-overlay">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                </div>
            </div>
        </article>
    );
}

export default function TeamMemberSection({ badge, title, description, members, showBadge = true }) {
    return (
        <section className="team-member-section">
            <div className="team-member-section-header">
                {showBadge && badge ? <span className="team-member-pill">{badge}</span> : null}
                {title ? <h2 className="team-member-title">{title}</h2> : null}
                {description ? <p className="team-member-description">{description}</p> : null}
            </div>

            <div className="team-member-grid">
                {members.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </div>
        </section>
    );
}
