import { useState } from 'react';
import instagramLogo from '../images/instagram-full-logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <figure>
                <img src={instagramLogo} alt="" />
            </figure>
            <h1>Login to your instagram account!</h1>
            <form>
                <input
                    className="block my-3"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <input
                    className="block"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <input
                    className="my-3 py-2 px-3 w-full bg-black text-white"
                    type="submit"
                    value="Login"
                    placeholder="Login"
                    onClick={handleLogin}
                />
            </form>
        </div>
    );
}

export default Login;
