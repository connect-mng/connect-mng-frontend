import React from 'react';
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MobileNavDropdown from "./MobileNavDropdown.jsx";
import { GoTriangleDown } from "react-icons/go";

import { useIntl } from "react-intl";
import { useState } from "react";

export default function MobileDropdown() {
    const intl = useIntl();
    const dropdownIds = {
        about: "about",
        programs: "programs",
        getInvolved: "getInvolved",
    };
    const [openDropdown, setOpenDropdown] = useState(null);

    function toggleDropdown(id) {
        setOpenDropdown((current) => (current === id ? null : id));
    }

    function closeDropdown() {
        setOpenDropdown(null);
    }

    return (
        <div className="mobileNavBarContainer">
            <div className="mobileNavLinks">
                <div
                    className={"mobileNavLink mobileNavLinkDropdown"}
                    onClick={() => toggleDropdown(dropdownIds.about)}
                >
                    <span className="mobileNavText">{intl.formatMessage({ id: "about" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {openDropdown === dropdownIds.about ? (
                    <MobileNavDropdown
                        onSelect={closeDropdown}
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
                <div
                    className={"mobileNavLink mobileNavLinkDropdown"}
                    onClick={() => toggleDropdown(dropdownIds.programs)}
                >
                    <span className="mobileNavText">{intl.formatMessage({ id: "programs" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {openDropdown === dropdownIds.programs ? (
                    <MobileNavDropdown
                        onSelect={closeDropdown}
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

                <div
                    className={"mobileNavLink mobileNavLinkDropdown"}
                    onClick={() => toggleDropdown(dropdownIds.getInvolved)}
                >
                    <span className="mobileNavText">{intl.formatMessage({ id: "getInvolved" })}</span>
                    <GoTriangleDown className="mobileNavChevron" />
                </div>
                {openDropdown === dropdownIds.getInvolved ? (
                    <MobileNavDropdown
                        onSelect={closeDropdown}
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
    );
}
