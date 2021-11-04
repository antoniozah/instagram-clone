const setAvatar = (username, size) => {
    let avatarText = username.substring(0, 1).toUpperCase();

    return (
        <div className="flex-shrink-0 cursor-pointer">
            <span
                className={`flex justify-center items-center w-${size} h-${size} p-0.5 bg-gray-500 text-white font-semibold text-xl border border-gray-500 rounded-full`}
            >
                {avatarText}
            </span>
        </div>
    );
};

export default setAvatar;
