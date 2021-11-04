import setAvatar from '../customFunctions';
import profile1 from '../images/profile-img.jpeg';

function Miniprofile({ username, logout }) {
    return (
        <div className="flex items-center">
            {setAvatar(username, 14)}
            <div className="flex-1 ml-3">
                <h4 className="font-semibold text-gray-800 cursor-pointer">
                    {username.substring(0, username.lastIndexOf('@'))}
                </h4>
                <p className="text-sm text-gray-500">{username}</p>
            </div>
            <button
                className="text-xs font-semibold text-blue-500"
                onClick={() => logout()}
            >
                Switch
            </button>
        </div>
    );
}

export default Miniprofile;
