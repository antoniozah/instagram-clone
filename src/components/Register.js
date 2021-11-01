import instagramLogo from '../images/instagram-full-logo.png';

function Register({ registerEmail, registerPass, createUser, checkLogin }) {
    return (
        <div className="w-full max-w-md">
            <figure className="flex justify-center">
                <img src={instagramLogo} alt="" />
            </figure>
            <h1 className="text-center">Register a new account!</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createUser();
                    registerPass('');
                    registerEmail('');
                }}
            >
                <input
                    className="block my-3 w-full"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                        registerEmail(e.target.value);
                    }}
                />

                <input
                    className="block w-full"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                        registerPass(e.target.value);
                    }}
                />
                <input
                    className="my-3 py-2 px-3 w-full bg-black text-white cursor-pointer"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
}

export default Register;
