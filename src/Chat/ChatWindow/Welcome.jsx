import { useEffect, useState } from "react";
import { styles } from "../styles";

function Welcome(props) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("Your Name");

    useEffect(() => {
        const storedName = window.localStorage.getItem("user");
        const storedId = window.localStorage.getItem("threadId");

        if (storedName && storedId) {
            setName(storedName);
            props.setThreadId(storedId);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("user", name);
    }, [name]);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        console.log("submitting", name);

        // fetch a threadId
        const response = await fetch("http://localhost:4000/thread", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        props.setThreadId(data.threadId);
        window.localStorage.setItem("threadId", data.threadId);

          setLoading(false);
    }

    return (
        <div
            style={{
                ...styles.welcomeWindow,
                ...{
                    height: props.visible ? "100%" : "0%",
                    opacity: props.visible ? "1" : "0",
                },
            }}
        >
            {loading && (
                <div
                    style={{
                        ...styles.loadingDiv,
                        animation: loading
                            ? "logo-spin infinite 5s linear"
                            : "none",
                    }}
                >
                    <p
                        style={{
                            color: "white",
                            fontFamily: "revert-layer",
                            fontSize: "14px",
                        }}
                    >
                        loading assistant...
                    </p>
                    <span
                        style={{
                            ...styles.loadingIcon,
                            animationDuration: "9s",
                        }}
                    />
                    <span
                        style={{
                            ...styles.loadingIcon,
                            animationDuration: "5s",
                        }}
                    />
                    <span
                        style={{
                            ...styles.loadingIcon,
                            animationDuration: "10s",
                        }}
                    />
                    <span
                        style={{
                            ...styles.loadingIcon,
                            animationDuration: "15s",
                        }}
                    />
                </div>
            )}

            <h3>Welcome, I'm the Green Guru</h3>
            <div>
                <h5>
                    I can provide information on various environmental topics,
                    suggest ways to reduce your carbon footprint, and answer any
                    questions you might have about environmental sustainability.
                </h5>
            </div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                style={{ position: "relative", width: "100%", top: "23%" }}
            >
                <p style={{ fontSize: "17px" }}>What should I call you?</p>
                <input
                    style={styles.nameInput}
                    onChange={(e) => setName(e.target.value)}
                    onClick={() => setInputValue("")}
                    type="text"
                    name="name"
                    className="placeholder-color"
                    placeholder={inputValue}
                />
                {name && (
                    <button type="submit" style={styles.okButton}>
                        ok
                    </button>
                )}
                <a href="#" style={styles.skip}>
                    skip
                </a>
            </form>
        </div>
    );
}

export default Welcome;
