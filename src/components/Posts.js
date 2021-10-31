import { useState, useEffect } from 'react';
import Post from './Post';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getPosts = async () => {
            const data = await getDocs(collection(db, 'posts'));
            setPosts(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            );
        };
        getPosts();
        setIsLoading(false);
    }, []);

    console.log(posts);

    if (isLoading) {
        <h2>Loading...</h2>;
    }
    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    username={post.username}
                    avatar={post.avatar}
                    likes={post.likes}
                    caption={post.caption}
                    id={post.id}
                    img={post.img}
                    postedTime={post.postedTime}
                />
            ))}
        </div>
    );
}

export default Posts;
