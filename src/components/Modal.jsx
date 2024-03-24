function Modal(props) {
    return (
        <div
            className="modal-container"
            style={{
                transform: props.showPopup
                    ? "translateX(0%)"
                    : "translateX(160%)",
                opacity: props.showPopup
                    ? "1"
                    : "0",
            }}
        >
            <h3>Welcome back, {props.name} ! </h3>
        </div>
    );
}

export default Modal;
