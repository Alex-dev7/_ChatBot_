import React from 'react';
import PropTypes from 'prop-types';

function Modal({name, showPopup}) {
    return (
        <div
            className="modal-container"
            style={{
                transform: showPopup
                    ? "translateX(0%)"
                    : "translateX(160%)",
                opacity: showPopup
                    ? "1"
                    : "0",
            }}
        >
            <h3>Welcome back, {name} ! </h3>
        </div>
    );
}

Modal.propTypes = {
    showPopup: PropTypes.bool.isRequired,
    name: PropTypes.string,
};


export default Modal;
