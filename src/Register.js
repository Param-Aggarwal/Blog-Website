import { useState, useContext } from 'react'
import { LoginContext } from './Context';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { username, setUsername, setIsLogged } = useContext(LoginContext);
    const history  = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        setIsLogged(true);
        history.push('/');
}
    return (
        <div className="register">
            <h1 className="register-title">Register Page</h1>
            <form className="register-form" type="submit">
                <input type="text" value={ username } className="username" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}/>
                <input type="email" value={email } className="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
                <input type="password"  value={ password} className="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="register-button" onClick={handleClick}>Register</button>
            </form>
            </div>
     );
}
 
export default Register;