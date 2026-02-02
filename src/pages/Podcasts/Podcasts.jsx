import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import React from "react";

import { useIntl } from "react-intl";

import "./Podcasts.css";
import PodcastsCard from "../../components/PageCard/PodcastsCard";

function PodcastCard({ image, title, desc, link }) {
	const intl = useIntl();

	return (
		<div className={"podcastCardContainer"}>
			<img className={"podcastThumbnail"} src={image} alt={title} />
			<div className={"podcastCardTextContainer"}>
				<h3>{title}</h3>
				<p>{desc}</p>
				<StyledLink text={intl.formatMessage({ id: "learnMore" })} link={link} />
			</div>
		</div>
	);
}

export default function Blogs() {
	const intl = useIntl();

	return (
		<div className={"podcastContainer"}>
			<PodcastsCard
				pillText={intl.formatMessage({ id: "podcast" })} // if you don't have this id, replace with "Podcast"
				title="Behind The Badge"
				body="Behind The Badge is Connect MNG's signature podcast series featuring candid conversations with Mongolian American students and young professionals. Each episode takes you behind the scenes to explore the personal stories, career journeys, and cultural experiences that shape our community. Tune in for authentic discussions about identity, ambition, and what it means to forge your own path."
				coverImageAlt="Behind The Badge podcast cover"
			/>

			<h1>{intl.formatMessage({id: "podcasts"})}</h1>
			<PodcastCard image={''}
				title={"Connect MNG - Where Your Journey is Our Journey"}
				desc={"desc"}
				link={""} />
			<PodcastCard image={''}
				title={"All the basics you need to know about resume"}
				desc={"desc2"}
				link={""} />
		</div>
	);
};