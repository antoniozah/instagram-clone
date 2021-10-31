import faker from 'faker';
import Story from './Story';
import { useState, useEffect } from 'react';

function Stories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = [...Array(25)].map((_, index) => ({
            ...faker.helpers.contextualCard(),
            id: index,
        }));
        setData(data);
    }, []);

    return (
        <div className="flex space-x-2 p-5 bg-white overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
            {data.map((profile) => (
                <Story
                    key={profile.id}
                    image={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    );
}

export default Stories;
