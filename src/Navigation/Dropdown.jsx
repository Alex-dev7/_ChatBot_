import { Link } from "react-router-dom";

function Dropdown({ isOpen }) {
    return (
        <ul
            className="dropdown"
            style={{ ...{ transform: isOpen ? "translateY(0)" : "" },
                    ...{opacity: isOpen ? "1" : ""}, }}
        >
            <li>
                <Link to="#">Calculator</Link>
            </li>
            <li>
                <Link to="#">Solar</Link>
            </li>
            <li>
                <Link to="#">Quiz</Link>
            </li>
        </ul>
    );
}

export default Dropdown;
