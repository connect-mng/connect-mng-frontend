import React from "react";
import { Link } from "react-router-dom";
import {
	FaUserPlus,
	FaHeart,
	FaEnvelope,
	FaDollarSign,
	FaArrowRight,
	FaBullseye,
	FaUsers,
	FaChartLine,
} from "react-icons/fa";

import ActionCard from "../../components/ActionCard/ActionCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import StoryCard from "../../components/StoryCard/StoryCard";
import getInvolvedPhoto from "../../images/blogs/teamPhoto.png";
import heroBackground from "../../images/homeCarousel/hero-mountains.jpg";

import "./Home.css";

const features = [
	{
		icon: <FaBullseye />,
		title: "Our Mission",
		description:
			"To empower Mongolian American college students and young professionals by creating meaningful connections and opportunities for growth.",
	},
	{
		icon: <FaUsers />,
		title: "Community First",
		description:
			"We believe in the power of community. By Mongolians, for Mongolians - fostering a supportive network where everyone can thrive.",
	},
	{
		icon: <FaChartLine />,
		title: "Growth & Development",
		description:
			"Providing tailored resources, mentorship, and programs that support both personal and professional development.",
	},
];

const stories = [
	{
		quote:
			"ConnectMNG helped me find a mentor who guided me through my internship search. I landed my dream role at a tech company!",
		name: "Sarnai B.",
		role: "Computer Science Student",
		initials: "SB",
		color: "#d6e4c5",
	},
	{
		quote:
			"The networking events are invaluable. I've made lifelong friends and professional connections that have shaped my career.",
		name: "Bataa D.",
		role: "Marketing Professional",
		initials: "BD",
		color: "#c9d9b9",
	},
	{
		quote:
			"It's amazing to be part of a community that truly understands our unique experiences as Mongolian Americans. ConnectMNG feels like home.",
		name: "Enkhjin T.",
		role: "Business Student",
		initials: "ET",
		color: "#dfe9d2",
	},
];

export default function Home() {
	return (
		<div className="homeRedesign">
			<section
				className="heroSection"
				style={{ backgroundImage: `url(${heroBackground})` }}
			>
				<div className="heroOverlay" />
				<div className="heroContent">
					<h1 className="heroTitle">
						Empowering Mongolian Americans to Connect, Learn, and Thrive
					</h1>
					<p className="heroDescription">
						Connect MNG is dedicated to empowering Mongolian American college
						students and young professionals' success by fostering a strong
						sense of community, providing tailored resources for personal and
						professional growth, and cultivating an environment where
						individuals can connect, learn, and thrive together.
					</p>
					<Link to="/get-involved/volunteer" className="heroCta">
						Get Involved <FaArrowRight className="heroCtaArrow" />
					</Link>
				</div>
			</section>

			<section className="aboutSection">
				<h2 className="sectionTitle">About Connect MNG</h2>
				<p className="sectionSubtitle">
					Connect MNG is a cozy corner where Mongolian American college students
					and young professionals can unite and support each other's growth
					through resources, programs, and events.
				</p>
				<div className="featuresRow">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</section>

			<section className="storiesSection">
				<h2 className="sectionTitle">Community Stories</h2>
				<p className="sectionSubtitle">
					Hear from members of our community about how Connect MNG has impacted
					their lives.
				</p>
				<div className="storiesRow">
					{stories.map((story) => (
						<StoryCard
							key={story.name}
							quote={story.quote}
							name={story.name}
							role={story.role}
							initials={story.initials}
							color={story.color}
						/>
					))}
				</div>
			</section>

			<section className="getInvolvedSection">
				<div className="getInvolvedTop">
					<div className="getInvolvedCopy">
						<h2 className="getInvolvedTitle">Get Involved</h2>
						<p className="getInvolvedText">
							Whether you're a student seeking guidance, a professional wanting
							to give back, or someone who wants to stay connected with the
							Mongolian American community - there's a place for you at
							ConnectMNG.
						</p>
						<p className="getInvolvedText">
							Together, we're building a stronger, more connected community
							that empowers every member to reach their full potential.
						</p>
					</div>
					<div className="getInvolvedImageWrap">
						<img
							src={getInvolvedPhoto}
							alt="Connect MNG community gathering"
							className="getInvolvedImage"
						/>
					</div>
				</div>

				<div className="actionCardRow">
					<ActionCard
						icon={<FaUserPlus />}
						title="Become a Member"
						description="Join our community of Mongolian American students and professionals. Access exclusive resources and events."
						buttonText="Sign Up"
						link="/get-involved/volunteer"
					/>
					<ActionCard
						icon={<FaHeart />}
						title="Volunteer"
						description="Share your time and expertise. Help organize events, mentor students, or contribute to our programs."
						buttonText="Get Started"
						link="/get-involved/volunteer"
					/>
					<ActionCard
						icon={<FaEnvelope />}
						title="Stay Connected"
						description="Subscribe to our newsletter for updates on events, opportunities, and community news."
						buttonText="Subscribe"
						link="/contact-us"
					/>
					<ActionCard
						icon={<FaDollarSign />}
						title="Donate"
						description="100% of your donation directly supports our programs and community. We're an all-volunteer organization with zero administrative overhead."
						buttonText="Donate Now"
						link="/get-involved/donate"
					/>
				</div>
			</section>

			<section className="questionsSection">
				<h2 className="questionsTitle">Have Questions?</h2>
				<p className="questionsSubtitle">
					We'd love to hear from you. Reach out to learn more about our
					programs, partnerships, or how you can support our mission.
				</p>
				<Link to="/contact-us" className="questionsCta">
					<FaEnvelope className="questionsCtaIcon" /> Contact Us
				</Link>
			</section>
		</div>
	);
}
