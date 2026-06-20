import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./TeamJoinSection.desktop.css";
import "./TeamJoinSection.mobile.css";

export default function TeamJoinSection({
    title,
    body,
    bullets,
    image,
    primaryCta,
    secondaryCta,
}) {
    return (
        <section className="team-join-section">
            <div className="team-join-copy">
                <h2 className="team-join-title">{title}</h2>
                {body.map((paragraph) => (
                    <p key={paragraph} className="team-join-body">
                        {paragraph}
                    </p>
                ))}

                <ul className="team-join-list">
                    {bullets.map((bullet) => (
                        <li key={bullet} className="team-join-item">
                            <span className="team-join-check">
                                <FaCheck />
                            </span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                <div className="team-join-actions">
                    <Link className="team-join-button team-join-button-primary" to={primaryCta.to}>
                        {primaryCta.label}
                    </Link>
                    <Link className="team-join-button team-join-button-secondary" to={secondaryCta.to}>
                        {secondaryCta.label}
                    </Link>
                </div>
            </div>

            <div className="team-join-image-panel">
                <img className="team-join-image" src={image} alt="Connect MNG team collaborating" />
            </div>
        </section>
    );
}
