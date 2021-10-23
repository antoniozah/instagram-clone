import { useState } from 'react';
import {
    DotsHorizontalIcon,
    HeartIcon,
    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon,
} from '@heroicons/react/outline';

function Post({ id, img, username, caption, avatar, posted, likes }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const toggleFav = () => {
        setIsFavorite(!isFavorite);
    };

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    //Calculate How much time passed from initial post
    const timeCalculate = (time) => {
        const day = 86400;
        const hour = 3600;
        const minute = 60;

        let postedTime = Math.trunc(time / day);
        if (postedTime > 1) {
            return `${postedTime} days ago`;
        } else if (postedTime === 1) {
            return `${postedTime} day ago`;
        } else {
            if (time < minute) {
                return `${time} sec ago`;
            } else if (time < hour) {
                postedTime = Math.trunc(time / minute);
                return `${postedTime} min ago`;
            } else if (time >= hour && time < hour * 2) {
                return '1 hour ago';
            } else {
                postedTime = Math.trunc(time / hour);
                return `${postedTime} hours ago`;
            }
        }
    };

    return (
        <article className="bg-white border border-gray-300" id={id}>
            <div className="flex items-center p-4">
                <figure className="">
                    <img
                        className="w-14 h-14 p-0.5 border border-gray-500 rounded-full object-cover"
                        src={avatar}
                        alt=""
                    />
                </figure>
                <h3 className="text-md font-semibold text-gray-600 flex-1 ml-2">
                    {username}
                </h3>

                <div>
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            <div>
                <figure>
                    <img src={img} alt={id} />
                </figure>
            </div>
            <div className="px-4 pt-4 pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <HeartIcon
                            className={`w-6 h-6 cursor-pointer ${
                                isFavorite ? 'fill-current text-red-500' : ''
                            }`}
                            onClick={() => toggleFav()}
                        />
                        <ChatIcon className="w-6 h-6 cursor-pointer" />
                        <PaperAirplaneIcon className="relative bottom-0.5 w-6 h-6 transform rotate-45 cursor-pointer" />
                    </div>
                    <div>
                        <BookmarkIcon
                            className={`w-6 h-6 cursor-pointer ${
                                isSaved ? 'fill-current text-gray-800' : ''
                            }`}
                            onClick={() => toggleSave()}
                        />
                    </div>
                </div>
                <div className="mt-1">
                    <p className="text-sm font-semibold text-gray-700">
                        {likes === 1 ? `${likes} like` : `${likes} likes`}
                    </p>
                </div>
                <div className="mt-2">
                    <p>
                        <span className="font-semibold">{username}</span>{' '}
                        {caption}
                    </p>
                    <p className="py-2 text-xs text-gray-500">
                        {timeCalculate(posted)}
                    </p>
                </div>
            </div>
            <div className="flex items-center px-4 py-2">
                <EmojiHappyIcon className="w-6 h-6 cursor-pointer" />
                <form className="flex ml-4 w-full" action="">
                    <input
                        className="w-full border-0 focus:ring-0 outline-none"
                        type="text"
                        name="postComment"
                        placeholder="Add a comment..."
                    />
                    <button className="ml-3 text-blue-500 font-semibold">
                        Post
                    </button>
                </form>
            </div>
        </article>
    );
}

export default Post;
