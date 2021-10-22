import Posts from './Posts';
import Stories from './Stories';

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className="col-span-2">
                <div>
                    <Stories />
                </div>

                <div className="my-4">
                    <Posts />
                </div>
            </section>

            {/* Section */}
            <section></section>
            {/* MiniProfile */}
            {/* Suggestions */}
        </main>
    );
}

export default Feed;
