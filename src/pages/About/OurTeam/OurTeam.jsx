import React from "react";
import { FaHandshake, FaHeart, FaLightbulb, FaTrophy } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import TeamJoinSection from "../../../components/TeamJoinSection/TeamJoinSection.jsx";
import TeamMemberSection from "../../../components/TeamMemberSection/TeamMemberSection.jsx";
import TeamValuesSection from "../../../components/TeamValuesSection/TeamValuesSection.jsx";
import websiteVolunteerImage from "../../../images/volunteer/Website.jpg";

import "./OurTeam.css";

export default function OurTeam() {
    const interns = [
        {
            name: "Niko",
            role: "Intern",
            linkedIn: "",
            placeholderColor: "linear-gradient(135deg, #5f7c95 0%, #2d4056 100%)",
        },
        {
            name: "Jason",
            role: "Intern",
            linkedIn: "",
            placeholderColor: "linear-gradient(135deg, #9b8c68 0%, #62553b 100%)",
        },
        {
            name: "Erkhemee",
            role: "Intern",
            linkedIn: "",
            placeholderColor: "linear-gradient(135deg, #a46b55 0%, #6f4233 100%)",
        },
    ];

    const values = [
        {
            title: "Community First",
            description: "We put our members at the center of everything we do, building genuine connections that last.",
            icon: <FaHeart />,
        },
        {
            title: "Empowerment",
            description: "We believe in providing tools, resources, and opportunities that help individuals reach their full potential.",
            icon: <FaLightbulb />,
        },
        {
            title: "Collaboration",
            description: "Together we're stronger. We foster an environment of mutual support and shared success.",
            icon: <FaHandshake />,
        },
        {
            title: "Excellence",
            description: "We strive for quality in our programs, events, and every interaction with our community.",
            icon: <FaTrophy />,
        },
    ];

    return (
        <div className="our-team-page">
            <section className="our-team-hero">
                <div className="our-team-hero-content">
                    <span className="our-team-hero-pill">
                        <HiOutlineUserGroup />
                        Meet the Team
                    </span>
                    <p className="our-team-hero-kicker">Our Team</p>
                    <h1 className="our-team-hero-title">
                        Passionate individuals dedicated to empowering the Mongolian American
                        community through meaningful programs, events, and connections
                    </h1>
                </div>
            </section>

            <div className="our-team-sections">
                <BoardMemberGallery />

                <TeamMemberSection
                    badge="Interns"
                    title=""
                    description="Meet our interns who contribute to Connect MNG through their hard work and enthusiasm."
                    members={interns}
                    showBadge={true}
                />

                <TeamValuesSection
                    title="Our Values"
                    description="The principles that guide our team and shape everything we do"
                    values={values}
                />

                <TeamJoinSection
                    title="Join Our Team"
                    body={[
                        "We're always looking for passionate individuals who want to make a difference in the Mongolian American community.",
                        "Whether you have 2 hours a month or 10 hours a week, there's a place for you on our team.",
                    ]}
                    bullets={[
                        "Flexible volunteer opportunities that fit your schedule",
                        "Develop leadership and professional skills",
                        "Build meaningful connections with like-minded individuals",
                        "Make a tangible impact in your community",
                    ]}
                    image={websiteVolunteerImage}
                    primaryCta={{ label: "Apply to Volunteer", to: "/get-involved/volunteer" }}
                    secondaryCta={{ label: "Learn More", to: "/get-involved/internships" }}
                />
            </div>
        </div>
    );
}
