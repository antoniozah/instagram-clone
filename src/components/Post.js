import { useState } from 'react';
import {
    DotsHorizontalIcon,
    HeartIcon,
    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon,
} from '@heroicons/react/outline';
import setAvatar from '../customFunctions';

import postImage2 from '../images/post-2.jpg';

function Post({ username, caption, avatar, likes, id, img, postedTime }) {
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

        let nowSec = new Date().getTime() / 1000;
        let nowSecD = Math.trunc(nowSec / day);

        let postedTime = Math.trunc(time / day);
        if (nowSecD - postedTime > 1) {
            return `${nowSecD - postedTime} days ago`;
        } else if (postedTime === 1) {
            return `${postedTime} day ago`;
        } else {
            if (nowSec - time < minute) {
                return `${Math.floor(nowSec - time)} sec ago`;
            } else if (nowSec - time < hour) {
                postedTime = Math.trunc(time / minute);
                nowSec = Math.trunc(nowSec / minute);
                return `${nowSec - postedTime} min ago`;
            } else if (nowSec - time >= hour && nowSec - time < hour * 2) {
                return '1 hour ago';
            } else {
                postedTime = Math.trunc(time / hour);
                nowSec = Math.trunc(nowSec / hour);
                return `${nowSec - postedTime} hours ago`;
            }
        }
    };

    if (!img) {
        img = postImage2;
    }

    return (
        <article className="bg-white border border-gray-300" id={id}>
            <div className="flex items-center p-4">
                {avatar ? (
                    <figure className="flex-shrink-0 cursor-pointer">
                        <img
                            className="w-14 h-14 p-0.5 border border-gray-500 rounded-full object-cover"
                            src={avatar}
                            alt=""
                        />
                    </figure>
                ) : (
                    setAvatar(username, 12)
                )}

                <h3 className="text-md font-semibold text-gray-600 flex-1 ml-2">
                    {username}
                </h3>

                <div>
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            <div>
                <figure>
                    <img className="w-full" src={img} alt={id} />
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
                        <span className="font-semibold mr-2">{username}</span>
                        {caption}
                    </p>
                    <p className="py-2 text-xs text-gray-500">
                        {timeCalculate(postedTime?.seconds)}
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
