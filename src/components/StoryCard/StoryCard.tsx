import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./StoryCard.css";

interface StoryCardProps {
	quote: string;
	name: string;
	role: string;
	initials: string;
	color: string;
}

export default function StoryCard({ quote, name, role, initials, color }: StoryCardProps) {
	return (
		<div className="storyCard">
			<FaQuoteLeft className="storyQuoteIcon" />
			<p className="storyQuote">{quote}</p>
			<div className="storyAuthor">
				<div className="storyAvatar" style={{ backgroundColor: color }}>
					{initials}
				</div>
				<div className="storyAuthorMeta">
					<p className="storyAuthorName">{name}</p>
					<p className="storyAuthorRole">{role}</p>
				</div>
			</div>
		</div>
	);
}
