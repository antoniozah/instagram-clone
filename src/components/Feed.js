import Miniprofile from './Miniprofile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className="col-span-2">
                <div className="my-4 border">
                    <Stories />
                </div>

                <div className="my-4">
                    <Posts />
                </div>
            </section>

            {/* Section */}
            <section className="hidden xl:inline-grid md:col-span1 py-6 pl-8 pr-4">
                <div className="fixed top-22">
                    <Miniprofile />
                    <Suggestions />
                </div>
            </section>
        </main>
    );
}

export default Feed;
