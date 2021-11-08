import { useState } from 'react';
import instagramLogo from '../images/instagram-full-logo.png';

function Login({ loginEmail, loginPass, loginUser }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div className="w-full max-w-md">
            <figure className="flex justify-center">
                <img src={instagramLogo} alt="" />
            </figure>
            <h1 className="text-center">Login to your instagram account!</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    loginUser();
                    loginEmail('');
                    loginPass('');
                }}
            >
                <input
                    className="block my-3 w-full"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                        loginEmail(e.target.value);
                    }}
                />
                <input
                    className="block w-full"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                        loginPass(e.target.value);
                    }}
                />
                <input
                    className="my-3 py-2 px-3 w-full bg-black text-white cursor-pointer"
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    );
}

export default Login;
