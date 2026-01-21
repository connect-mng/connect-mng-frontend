import React from "react";
import { Link } from "react-router-dom";
import "./ActionCard.css";

type ActionCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    link: string;
};

export default function ActionCard({
    icon,
    title,
    description,
    buttonText,
    link,
}: ActionCardProps) {
    return (
        <div className="actionCard">
            <div className="actionCardIcon">{icon}</div>
            <h3 className="actionCardTitle">{title}</h3>
            <p className="actionCardDescription">{description}</p>
            <Link to={link} className="actionCardButton">
                {buttonText}
            </Link>
        </div>
    );
}
