import React from 'react';
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MobileNavDropdown from "./MobileNavDropdown.jsx";
import { GoTriangleDown } from "react-icons/go";

import { useIntl } from "react-intl";
import { useState, useEffect } from "react";

export default function MobileDropdown() {

    const intl = useIntl();
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPrograms, setShowPrograms] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    function handleNavLinkSelect(activeIndex) {
        setActiveIndex(activeIndex);
        setShowActivities(false);
        setShowPrograms(false);
        setShowAbout(false);
    };

    function handleVolunteerSelect() {
        setShowActivities(!showActivities);
        setShowPrograms(false);
        setShowAbout(false);
    };

    const handleAboutSelect = () => {
        setShowAbout(!showAbout);
        setShowActivities(false);
        setShowPrograms(false);
    }

    function handleProgramsSelect() {
        setShowPrograms(!showPrograms);
        setShowActivities(false);
        setShowAbout(false);
    };

    function handleDropdownSelect(selectedIndex) {
        setShowActivities(false);
        setShowPrograms(false);
        setShowAbout(false);
        setActiveIndex(selectedIndex + 6)
    }

    return (
        <div className="mobileNavBarContainer">
            <div className="mobileNavLinks">
                <div className={"mobileNavLink mobileNavLinkDropdown"} onClick={handleAboutSelect}>
                    <span className="mobileNavText">{intl.formatMessage({ id: "about" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {showAbout ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "ourStory" }),
                            intl.formatMessage({ id: "ourTeam" }),
                        ]}
                        links={["/resources/blogs/welcome-blog", "/about-us/our-team"]}

                    />
                ) : null}

                <Link to="/resources/blogs" className="mobileNavLink">{intl.formatMessage({ id: "blogs" })}</Link>
                <Link to="/events" className="mobileNavLink">{intl.formatMessage({ id: "events" })}</Link>
                <Link to="/resources/podcasts" className="mobileNavLink">{intl.formatMessage({ id: "podcasts" })}</Link>
                <div className={"mobileNavLink mobileNavLinkDropdown"} onClick={handleProgramsSelect}>
                    <span className="mobileNavText">{intl.formatMessage({ id: "programs" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {showPrograms ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "culturalCompass" }),
                            intl.formatMessage({ id: "mentorship" }),
                            intl.formatMessage({ id: "resumeBoost" }),
                        ]}
                        links={[
                            "/programs/cultural-compass-program",
                            "/programs/mentorship-program",
                            "/programs/resume-boost-program",
                        ]}
                    />
                ) : null}

                <div className={"mobileNavLink mobileNavLinkDropdown"} onClick={handleVolunteerSelect}>
                    <span className="mobileNavText">{intl.formatMessage({ id: "getInvolved" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {showActivities ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "donate" }),
                            intl.formatMessage({ id: "internships" }),
                            intl.formatMessage({ id: "volunteer" }),
                        ]}
                        links={[
                            "/get-involved/donate",
                            "/get-involved/internships",
                            "/get-involved/volunteer",
                        ]}
                    />
                ) : null}
            </div>
        </div>
    )


}
