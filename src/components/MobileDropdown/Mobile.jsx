import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState, useEffect } from "react";
import MobileDropdown from './MobileDropdown';
import logo from "../../images/logo.png";
import Hamburger from 'hamburger-react';

export default function Mobile() {
    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        setShowMenu(!showMenu);
    }

    const location = useLocation();
    useEffect(() => {
        setShowMenu(false);
    }, [location]);

    const intl = useIntl();
    const [activeIndex, setActiveIndex] = useState(0);
    const [showResources, setShowResources] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showAbout, setShowAbout] = useState(false);


    function handleNavLinkSelect(activeIndex) {
        setActiveIndex(activeIndex);
        setShowActivities(false);
        setShowResources(false);
        setShowAbout(false);
    };
    return (
        <>
            <div className="menuButton">
                <div className="mobileLogo">
                    <Link to="/" onClick={() => handleNavLinkSelect(0)}>
                        <img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
                    </Link>
                </div>
                <button className="mobile-menu-button" onClick={handleClick} aria-label="Toggle navigation menu">
                    <Hamburger toggled={showMenu} direction="left" size={22} color="#3c4654" duration={0.4} />
                </button>


            </div>
            {showMenu && <MobileDropdown />}
        </>
    )
}
