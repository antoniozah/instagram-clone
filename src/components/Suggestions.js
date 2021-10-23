import faker from 'faker';
import { useState, useEffect } from 'react';
import Suggestion from './Suggestion';

function Suggestions() {
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        const suggestion = [...Array(5)].map((_, index) => ({
            ...faker.helpers.contextualCard(),
            index,
        }));

        setSuggestion(suggestion);

        console.log(suggestion);
    }, []);

    return (
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-400">
                    Suggestions For You
                </h3>
                <p className="text-xs font-semibold text-gray-800 cursor-pointer">
                    See All
                </p>
            </div>
            <div className="my-5">
                {suggestion.map((profile) => (
                    <Suggestion
                        key={profile.index}
                        image={profile.avatar}
                        username={profile.username}
                    />
                ))}
            </div>
        </div>
    );
}

export default Suggestions;
