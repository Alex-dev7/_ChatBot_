import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Nav.css";
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navigation-container">
            <Link to="/about">About</Link>
            <div
                className="dropdown-container"
                onMouseLeave={() => setIsOpen(false)}
            >
                <Link
                    className="tools"
                    to="#"
                    onMouseOver={() => setIsOpen(true)}
                >
                    Tools
                </Link>
                <Dropdown isOpen={isOpen} />
            </div>
        </nav>
    );
}

export default Nav;
