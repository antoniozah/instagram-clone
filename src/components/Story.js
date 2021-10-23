function Story({ image, username }) {
    return (
        <div className="cursor-pointer">
            <figure>
                <img
                    className="w-12 h-12 rounded-full p-0.5 border border-red-500"
                    src={image}
                    alt={username}
                />
            </figure>

            <p className="w-12 truncate">{username}</p>
        </div>
    );
}

export default Story;
