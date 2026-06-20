import React from "react";

import "./TeamValuesSection.desktop.css";
import "./TeamValuesSection.mobile.css";

export default function TeamValuesSection({ title, description, values }) {
    return (
        <section className="team-values-section">
            <div className="team-values-header">
                <h2 className="team-values-title">{title}</h2>
                <p className="team-values-description">{description}</p>
            </div>

            <div className="team-values-grid">
                {values.map((value) => (
                    <article key={value.title} className="team-value-card">
                        <div className="team-value-icon">{value.icon}</div>
                        <h3 className="team-value-heading">{value.title}</h3>
                        <p className="team-value-copy">{value.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
