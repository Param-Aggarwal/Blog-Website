const Login = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Logged In");
    }

    return ( 
        <div className="login">
            <form className="login-form" type="submit">
                <input type="text" value={username} className="username"
                    placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" value={password} className="password"
                    placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                <button className="submit" onClick={handleClick}>Login</button>
            </form>
        </div>
     );
}
 
export default Login;