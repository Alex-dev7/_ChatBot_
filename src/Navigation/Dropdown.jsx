import { Link } from "react-router-dom";

function Dropdown({ isOpen }) {
    return (
        <ul
            className="dropdown"
            style={{
                ...{ transform: isOpen ? "translateY(0)" : "" },
                ...{ opacity: isOpen ? "1" : "" },
            }}
        >
            <li><Link to="#">News/todo</Link></li>
            <li><Link to="/aquality">Air Quality</Link></li>
            {/* <li><Link to="#">Solar Map</Link></li> */}
        </ul>
    );
}

export default Dropdown;


// {
//     "name": "get_air_quality_data",
//     "description": "Get the current air quality in e.g. Boston",
//     "parameters": {
//       "type": "object",
//       "properties": {
//         "symbol": {
//           "type": "string",
//           "description": "The air quality index"
//         }
//       },
//       "required": [
//         "symbol"
//       ]
//     }
//   }