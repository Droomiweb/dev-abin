
import { Outlet, Link } from "react-router-dom";

const Nav =()=>{
    return(
<>
<nav className="navbar-big">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
      <Outlet />
</>
    )
}

export default Nav;