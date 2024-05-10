import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li><button className="nav-button"><a href="#projects">Projects</a></button></li>
                <li><button className="nav-button"><a href="#all-posts">Posts</a></button></li>
                <li><button className="nav-button"><a href="https://twitter.com">Social</a></button></li>
            </ul>
        </nav>
    );
}

export default Navbar;