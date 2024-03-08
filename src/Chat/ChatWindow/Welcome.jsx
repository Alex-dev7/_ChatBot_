import { useState } from "react";
import { styles } from "../styles";

function Welcome() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('Your Name');

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    console.log("submitting", name);
  }

  return (
    <div style={{ ...styles.emailFormWindow }}>
      <h3>Welcome to [name]</h3>
      <p>
        I am your personal <br /> assistant.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ position: "relative", width: "100%", top: "23%" }}
      >
        <p style={{fontSize: "17px", color: "black"}}>What should I call you?</p>
        <input
          style={styles.nameInput}
          onChange={e => setName(e.target.value)}
          onClick={() => setInputValue("")}
          type="text"
          name="name"
          className="placeholder-color"
          placeholder={inputValue}
        />
       {name && <button type="submit" style={styles.okButton}>ok</button>}
        <a href="#" style={styles.skip}>skip</a>
      </form>
    </div>
  );
}

export default Welcome;
