import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Dropdown({ isOpen }) {
    return (
        <ul
            className="dropdown"
            style={{
                ...{ transform: isOpen ? "translateY(0)" : "" },
                ...{ opacity: isOpen ? "1" : "" },
            }}
        >
            {/* <li><Link to="#">News/todo</Link></li> */}
            <li><Link to="/aquality">Air Quality</Link></li>
            {/* <li><Link to="#">Solar Map</Link></li> */}
        </ul>
    );
}

Dropdown.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

export default Dropdown;
