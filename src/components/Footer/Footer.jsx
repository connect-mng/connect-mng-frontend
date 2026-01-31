import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import logo from "../../images/logo.png";
import fb2 from "../../images/socials/fb2.png";
import insta2 from "../../images/socials/insta2.png";
import linkedin2 from "../../images/socials/linkedin2.png";

import "./FooterDesktop.css";
import "./FooterMobile.css";

export default function Footer() {
    const intl = useIntl();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Column - Logo, Mission, Socials */}
                <div className="footer-column footer-branding">
                    <img src={logo} alt="Connect MNG Logo" className="footer-logo" />
                    <p className="footer-mission">
                        Empowering the Mongolian community through connection,
                        resources, and opportunities for growth and success.
                    </p>
                    <div className="footer-socials">
                        <a
                            href="https://www.facebook.com/profile.php?id=61554736732199"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-button"
                            aria-label="Facebook"
                        >
                            <img src={fb2} alt="Facebook" />
                        </a>
                        <a
                            href="https://www.instagram.com/connect_mng/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-button"
                            aria-label="Instagram"
                        >
                            <img src={insta2} alt="Instagram" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/connect-mng/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-button"
                            aria-label="LinkedIn"
                        >
                            <img src={linkedin2} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                {/* Middle Column - Quick Links */}
                <div className="footer-column footer-links">
                    <h3 className="footer-heading">Quick Links</h3>
                    <nav className="footer-nav">
                        <Link to="/about-us/our-story" className="footer-link footer-link-desktop">
                            About Us
                        </Link>
                        <Link to="/about-us/our-story" className="footer-link footer-link-mobile">
                            About Us
                        </Link>
                        <Link to="/resources/blogs" className="footer-link footer-link-desktop">
                            Blogs
                        </Link>
                        <Link to="/programs" className="footer-link footer-link-mobile">
                            Programs
                        </Link>
                        <Link to="/events" className="footer-link footer-link-desktop">
                            Events
                        </Link>
                        <Link to="/events" className="footer-link footer-link-mobile">
                            Community
                        </Link>
                        <Link to="/get-involved/volunteer" className="footer-link">
                            Get Involved
                        </Link>
                    </nav>
                </div>

                {/* Right Column - Contact */}
                <div className="footer-column footer-contact">
                    <h3 className="footer-heading">Contact</h3>
                    <div className="footer-contact-info">
                        <a href="mailto:connectmng@gmail.com" className="footer-email">
                            connectmng@gmail.com
                        </a>
                        <Link to="/privacy-policy" className="footer-link">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="footer-link">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="footer-bottom">
                <div className="footer-divider"></div>
                <p className="footer-copyright">
                    © 2024 Connect MNG. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
