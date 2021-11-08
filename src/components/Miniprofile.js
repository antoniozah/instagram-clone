import { useSelector } from 'react-redux';
import setAvatar from '../customFunctions';
import { selectUser } from '../features/userSlice';
import profile1 from '../images/profile-img.jpeg';

function Miniprofile({ logout }) {
    const useAuth = useSelector(selectUser);
    return (
        <div className="flex items-center">
            {setAvatar(useAuth, 14)}
            <div className="flex-1 ml-3">
                <h4 className="font-semibold text-gray-800 cursor-pointer">
                    {useAuth}
                </h4>
                <p className="text-sm text-gray-500">{useAuth}</p>
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
