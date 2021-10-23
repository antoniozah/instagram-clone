import Post from './Post';

import postImage1 from '../images/post-1.jpg';
import postImage2 from '../images/post-2.jpg';
import profile1 from '../images/profile-img.jpeg';
import profile2 from '../images/profile-2.jpg';

function Posts() {
    const postData = [
        {
            img: postImage1,
            id: 101,
            username: '4ntonioz',
            caption: 'Why does your Business need an Online Presence?',
            avatar: profile1,
            postedTime: 120060,
            likes: 2234,
        },
        {
            img: postImage2,
            id: 102,
            username: 'dina.kolr',
            caption:
                "One of the questions that we often get asked is: Why should I use WordPress? Isn't my old site good enough?",
            avatar: profile2,
            postedTime: 300000,
            likes: 2999,
        },
    ];
    return (
        <div className="space-y-4">
            {postData.map((item) => (
                <Post
                    key={item.id}
                    img={item.img}
                    username={item.username}
                    caption={item.caption}
                    avatar={item.avatar}
                    posted={item.postedTime}
                    likes={item.likes}
                />
            ))}
        </div>
    );
}

export default Posts;
