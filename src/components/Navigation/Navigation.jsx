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
	const [showAbout, setShowAbout] = useState(false);
	const [showPrograms, setShowPrograms] = useState(false);
	const [showGetInvolved, setShowGetInvolved] = useState(false);

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function handleAboutToggle() {
		setShowAbout(!showAbout);
		setShowPrograms(false);
		setShowGetInvolved(false);
	}

	function handleProgramsToggle() {
		setShowPrograms(!showPrograms);
		setShowAbout(false);
		setShowGetInvolved(false);
	}

	function handleGetInvolvedToggle() {
		setShowGetInvolved(!showGetInvolved);
		setShowAbout(false);
		setShowPrograms(false);
	}

	function handleDropdownSelect() {
		setShowAbout(false);
		setShowPrograms(false);
		setShowGetInvolved(false);
	}

	function handleNavLinkClick() {
		setShowAbout(false);
		setShowPrograms(false);
		setShowGetInvolved(false);
	}

	return (
		<nav className="nav-wrapper">
			{isMobile ? (
				<Mobile />
			) : (
				<div className="nav-container">
					<Link to="/" className="nav-logo-link" onClick={handleNavLinkClick}>
						<img src={logo} alt="Connect MNG Logo" className="nav-logo" />
					</Link>

					<div className="nav-menu">
						<div className="nav-item nav-item-dropdown">
							<button className="nav-button" onClick={handleAboutToggle}>
								{intl.formatMessage({ id: "about" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{showAbout && (
								<NavDropdown
									onSelect={handleDropdownSelect}
									options={[
										intl.formatMessage({ id: "ourStory" }),
										intl.formatMessage({ id: "ourTeam" }),
									]}
									links={["/resources/blogs/welcome-blog", "/about-us/our-team"]}
								/>
							)}
						</div>

						<Link to="/resources/blogs" className="nav-link" onClick={handleNavLinkClick}>
							{intl.formatMessage({ id: "blogs" })}
						</Link>

						<Link to="/events" className="nav-link" onClick={handleNavLinkClick}>
							{intl.formatMessage({ id: "events" })}
						</Link>

						<Link to="/resources/podcasts" className="nav-link" onClick={handleNavLinkClick}>
							{intl.formatMessage({ id: "podcasts" })}
						</Link>

						<div className="nav-item nav-item-dropdown">
							<button className="nav-button" onClick={handleProgramsToggle}>
								{intl.formatMessage({ id: "programs" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{showPrograms && (
								<NavDropdown
									onSelect={handleDropdownSelect}
									options={[
										"Cultural Compass",
										"Mentorship",
										"Resume Boost",
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
							<button className="nav-button" onClick={handleGetInvolvedToggle}>
								{intl.formatMessage({ id: "getInvolved" })}
								<GoTriangleDown className="nav-chevron" />
							</button>
							{showGetInvolved && (
								<NavDropdown
									onSelect={handleDropdownSelect}
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
