import profile1 from '../images/profile-img.jpeg';

function Miniprofile() {
    return (
        <div className="flex items-center">
            <figure>
                <img
                    className="w-16 h-16 rounded-full object-cover cursor-pointer"
                    src={profile1}
                    alt=""
                />
            </figure>
            <div className="flex-1 ml-5">
                <h4 className="font-semibold text-gray-800 cursor-pointer">
                    4ntonioz
                </h4>
                <p className="text-sm text-gray-500">Antonios Zachos</p>
            </div>
            <button className="text-xs font-semibold text-blue-500">
                Switch
            </button>
        </div>
    );
}

export default Miniprofile;
