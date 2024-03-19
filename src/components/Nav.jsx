import { Link } from "react-router-dom"


function Nav() {
  return (
    <nav className="navigation-container">
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav