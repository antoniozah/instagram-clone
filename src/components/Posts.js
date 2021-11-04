import { useState, useEffect } from 'react';
import Post from './Post';
import { db } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onSnapshot(
            query(collection(db, 'posts'), orderBy('postedTime', 'desc')),
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPosts(data);
            }
        );
        setIsLoading(false);
        return unsubscribe;
    }, [db]);

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
                    img={post.imgUrl}
                    postedTime={post.postedTime}
                />
            ))}
        </div>
    );
}

export default Posts;
