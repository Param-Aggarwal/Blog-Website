import { Link } from "react-router-dom";
import { LoginContext } from './Context';
import { useContext } from 'react';


const Navbar = () => {
    const { username, isLogged, setIsLogged, setUsername } = useContext(LoginContext);
    const handleClick = () => {
        const a = () => {
            setIsLogged(false);
            setUsername('');
        }
        (window.confirm('Are you sure, you want to logout?') === true) && a();
    }

    return (
        <>
            <nav className="navbar">
                <h1 className="navbar-title">My Blogs</h1>
                <div className="links">
                    <Link to="/">Home </Link>
                    <Link to="/create">New Blog</Link>
                    <Link to="/search">Search </Link>
                    { !isLogged && <Link to="/register">Register </Link>}
                </div>
                    {isLogged && <span className="logout" onClick={handleClick}>Logout</span>}
                {isLogged && <div className="user" >{username}</div>}
            </nav>
           
            </>
            

    );
}
export default Navbar;