import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function Modal({ username, modalStatus }) {
    const [postTextarea, setPostTextarea] = useState('');
    const [postImg, setPostImg] = useState('');
    const usersCollectionRef = collection(db, 'posts');
    const usernameref = username.substring(0, username.lastIndexOf('@'));
    const addPost = async () => {
        if (postTextarea === '') {
            alert('Textarea cannot be empty');
        }

        if (postImg === '') {
            alert('Please add an image URL ');
        }

        if (postTextarea && postImg) {
            await addDoc(usersCollectionRef, {
                username: usernameref,
                caption: postTextarea,
                imgUrl: postImg,
                likes: 0,
                postedTime: serverTimestamp(),
            });
            console.log('message sent');
            modalStatus(false);
        }
    };

    return (
        <div className="absolute h-full w-full inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-80">
            <div className="relative w-full max-w-md bg-white py-8 px-6">
                <XIcon
                    className="absolute h-7 top-0 right-2 cursor-pointer"
                    onClick={() => modalStatus(false)}
                />
                <h2 className="text-center mb-5 text-xl font-semibold">
                    Add new Post
                </h2>
                <form
                    className="flex flex-col space-y-3"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <textarea
                        value={postTextarea}
                        name="message"
                        id=""
                        placeholder="Message..."
                        onChange={(e) => setPostTextarea(e.target.value)}
                    ></textarea>
                    <input
                        type="text"
                        value={postImg}
                        name="imgUrl"
                        placeholder="Image URL"
                        onChange={(e) => setPostImg(e.target.value)}
                    />
                    <button
                        className="flex justify-center"
                        type="submit"
                        onClick={addPost}
                    >
                        <PlusCircleIcon className="h-16" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
