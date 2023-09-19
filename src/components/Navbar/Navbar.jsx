import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Navbar;