import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
    return(
        <div className="header">
            <Navbar />
            <img className="header-image" src="https://placehold.co/200" alt="Profile Picture" />
            <h2 className="header-title">HI, I'M NAME</h2>
            <p className="header-text">Have a look at my works!</p>
        </div>
    );
}

export default Header