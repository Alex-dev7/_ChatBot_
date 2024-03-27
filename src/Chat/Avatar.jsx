import { useState } from "react";

import { styles } from "./styles";

export default function Avatar(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div style={props.style}>
            <div
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? "1" : "0" },
                }}
            >
                click to interact
            </div>

            <div className="tree-div">
                <span
                    onClick={() => props.onClick && props.onClick()}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={styles.hoverArea}
                ></span>
                <img
                    src="tree.svg"
                    alt="tree"
                    className="tree"
                    style={{ ...{ opacity: hovered ? "1" : "0" } }}
                />
            </div>
        </div>
    );
}

Avatar;
