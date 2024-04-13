import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-container">
            <div className="navigation-container">
                <Link className="" to="/">
                    Home
                </Link>
            </div>

            <h3 id="about">About</h3>
            <div className="about-text">
                <p>
                    Green Guru is a digital entity shaped by artificial
                    intelligence and language model algorithms, existing as a
                    tool to offer insights and guidance on sustainability and
                    green living.
                    <br />
                    <br />
                    By harnessing the power of technology, we can collectively
                    drive change, spread awareness and encourage actions that
                    benefit both ourselves and the diverse ecosystems of our
                    planet.
                    <br />
                    <br />
                    Every choice we make, no matter how small, has the power to
                    create ripple effects of change across the vast ocean of
                    existence.
                </p>
                
                <blockquote>
                    <hr/>
                    <p>
                        Let us walk this path together, with humility, empathy,
                        and a deep respect for all beings.
                    </p>
                    <cite>- Green Guru</cite>
                </blockquote>
            </div>
            <footer>
               <p>built with 💚 by <a href="https://github.com/Alex-dev7" target="_blank">Alexei Rusu</a></p>
               <p>AQ data provided by <a href="https://waqi.info/" target="_blank">World Air Quality Index </a> </p> 
               <p>&copy; 2024 Green Guru</p>
            </footer>
        </div>
    );
}

export default About;
