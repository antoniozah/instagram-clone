import { useState } from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import './App.css';
import Login from './components/Login';

function App() {
    const [isLogedIn, setIsLogedIn] = useState(false);

    if (isLogedIn) {
        return <Login />;
    }
    return (
        <div className="App bg-gray-50">
            {/* Header */}
            <Header />
            {/* Feed */}
            <Feed />
            {/* Modal */}
        </div>
    );
}

export default App;
