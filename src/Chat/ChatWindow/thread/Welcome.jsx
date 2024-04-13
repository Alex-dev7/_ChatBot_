import { useEffect, useState } from "react";
import { styles } from "../../styles";
import Spinner from "../../../components/Spinner";

function Welcome(props) {

    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        // fetch a threadId
        const response = await fetch(
            import.meta.env.VITE_BASE_URL + "/thread",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        window.localStorage.setItem("threadId", data.threadId);
        window.localStorage.setItem("user", inputValue);
        props.setThreadId(data.threadId);
        console.log(data.threadId);
        

        setLoading(false);
    }



    return (
        <div
            className="wwlcome-window"
            style={{
                ...styles.welcomeWindow,
                ...{
                    zIndex: props.visible ? "1000" : "-10",
                    height: props.visible ? "100%" : "0%",
                    opacity: props.visible ? "1" : "0",
                },
            }}
        >
            {loading && <Spinner />}

            <h3>Welcome, I am the Green Guru</h3>
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
                    onChange={(e) => {
                        props.setName(e.target.value);
                        setInputValue(e.target.value)
                    }}
                    // onClick={() => setInputValue("")}
                    type="text"
                    name="name"
                    className="placeholder-color"
                    placeholder={inputValue}
                />
                {inputValue && (
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
