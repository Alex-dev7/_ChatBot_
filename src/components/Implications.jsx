import React from "react";
import "./AQIStyle.css"
import PropTypes from 'prop-types';

const Implications = (props) => {
   if (props.text) return (
        <div  className="implications">
            <p>{props.text}</p>
        </div>
    )
}

Implications.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Implications;

// style={{ position: "absolute", top: "102%", backgroundColor: "#02172948", padding: "0 10px", fontSize: "15px", borderRadius: "10px" }}