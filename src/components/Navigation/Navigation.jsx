import logo from "../../images/logo.png";
import React from "react";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";
import { GoTriangleDown } from "react-icons/go";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState, useEffect } from "react";

import "./NavigationDesktop.css";
import "./NavigationMobile.css";
import Mobile from "../Mobile/Mobile.jsx";

export default function Navigation() {
	const intl = useIntl();
	const dropdownIds = {
		about: "about",
		programs: "programs",
		getInvolved: "getInvolved",
	};
	const [openDropdown, setOpenDropdown] = useState(null);

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function toggleDropdown(id) {
		setOpenDropdown((current) => (current === id ? null : id));
	}

	function closeDropdown() {
		setOpenDropdown(null);
	}

	return (
		<nav className="nav-wrapper" aria-label="Primary navigation">
			{isMobile ? (
				<Mobile />
			) : (
				<div className="nav-container">
					<Link to="/" className="nav-logo-link" onClick={closeDropdown}>
						<img src={logo} alt="Connect MNG Logo" className="nav-logo" />
					</Link>

					<div className="nav-menu">
						<div className="nav-item nav-item-dropdown">
							<button
								className="nav-button"
								onClick={() => toggleDropdown(dropdownIds.about)}
							>
								{intl.formatMessage({ id: "about" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{openDropdown === dropdownIds.about && (
								<NavDropdown
									onSelect={closeDropdown}
									options={[
										intl.formatMessage({ id: "ourStory" }),
										intl.formatMessage({ id: "ourTeam" }),
									]}
									links={["/resources/blogs/welcome-blog", "/about-us/our-team"]}
								/>
							)}
						</div>

						<Link to="/resources/blogs" className="nav-link" onClick={closeDropdown}>
							{intl.formatMessage({ id: "blogs" })}
						</Link>

						<Link to="/events" className="nav-link" onClick={closeDropdown}>
							{intl.formatMessage({ id: "events" })}
						</Link>

						<Link to="/resources/podcasts" className="nav-link" onClick={closeDropdown}>
							{intl.formatMessage({ id: "podcasts" })}
						</Link>

						<div className="nav-item nav-item-dropdown">
							<button
								className="nav-button"
								onClick={() => toggleDropdown(dropdownIds.programs)}
							>
								{intl.formatMessage({ id: "programs" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{openDropdown === dropdownIds.programs && (
								<NavDropdown
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
							)}
						</div>

						<div className="nav-item nav-item-dropdown">
							<button
								className="nav-button"
								onClick={() => toggleDropdown(dropdownIds.getInvolved)}
							>
								{intl.formatMessage({ id: "getInvolved" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{openDropdown === dropdownIds.getInvolved && (
								<NavDropdown
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
							)}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
