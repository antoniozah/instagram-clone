import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { auth } from './firebase';
import './App.css';

function App() {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [register, setRegister] = useState(false);
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser.email);
            setIsLogedIn(true);
        } else {
            setIsLogedIn(false);
            setUser(currentUser);
        }
    });

    const registerHandler = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPass,
            );
            setIsLogedIn(true);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    const loginHandler = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPass,
            );
            setIsLogedIn(true);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    const logoutHandler = async () => {
        await signOut(auth);
        setIsLogedIn(false);
        setUser('');
    };

    if (user === null && !isLogedIn) {
        return (
            <div className="flex flex-col h-screen justify-center items-center px-2">
                {register ? (
                    <Register
                        registerEmail={setRegisterEmail}
                        registerPass={setRegisterPass}
                        createUser={registerHandler}
                    />
                ) : (
                    <Login
                        loginEmail={setLoginEmail}
                        loginPass={setLoginPass}
                        loginUser={loginHandler}
                    />
                )}

                <div className="flex justify-between w-full max-w-md">
                    <h3 className="text-gray-700">
                        {register
                            ? 'Already have an account?'
                            : 'You do not have an account?'}
                    </h3>
                    <button
                        className="text-blue-500 font-semibold"
                        onClick={() => setRegister(!register)}
                    >
                        {register ? 'Log in' : 'Sign up'}
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="App bg-gray-50">
            {/* Header */}
            <Header logout={logoutHandler} />
            {/* Feed */}
            <Feed />
            {/* Modal */}
        </div>
    );
}

export default App;
