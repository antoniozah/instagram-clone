function Suggestion({ image, username }) {
    return (
        <div className="flex my-3">
            <figure>
                <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src={image}
                    alt=""
                />
            </figure>
            <div className="flex-1 ml-4">
                <h4 className="text-sm font-semibold text-gray-800 cursor-pointer">
                    {username}
                </h4>
                <p className="text-xs text-gray-400">
                    Followed by 4ntonioz + 2 more
                </p>
            </div>
            <button className="text-xs font-semibold text-blue-500">
                Follow
            </button>
        </div>
    );
}

export default Suggestion;
