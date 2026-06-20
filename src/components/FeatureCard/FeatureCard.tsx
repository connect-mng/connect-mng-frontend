import React from "react";
import "./FeatureCard.css";

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="featureCard">
			<div className="featureIcon">{icon}</div>
			<h3 className="featureTitle">{title}</h3>
			<p className="featureDescription">{description}</p>
		</div>
	);
}
