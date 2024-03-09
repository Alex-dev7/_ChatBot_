import { useEffect, useState } from "react";
import { styles } from "../styles";

function Welcome(props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("Your Name");


  useEffect(() => {
    const storedName = window.localStorage.getItem("user");
    if (storedName) {
      setName(storedName);
    }
    props.setUser(name);
  }, []);


  useEffect(() => {
    window.localStorage.setItem("user", name);
}, [name])

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    props.setUser(name);
    // props.setThread("kjhgh")
    console.log("submitting", name);
  }

  return (
    <div style={{ 
        ...styles.emailFormWindow,
        ...{
            height: props.visible ? '100%' : '0%',
            opacity: props.visible ? '1' : '0',
        }
         }}>
      <h3>Welcome to [name]</h3>
      <p>
        I am your personal <br /> assistant.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ position: "relative", width: "100%", top: "23%" }}
      >
        <p style={{ fontSize: "17px", color: "black" }}>
          What should I call you?
        </p>
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
