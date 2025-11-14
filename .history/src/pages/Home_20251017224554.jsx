import "./Home.css";
import Blog from "./Blog";

const Home = () => {
    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>Tandem</h1>
                    <p>Slogon goes here</p>
                    <p> A brief description goes here</p>
                </div>
            </section>

            <section className='our-mission'>
                <div className='mission-content'>
                    <h1>What is Tandem?</h1>
                    <p>Mission statement goes here</p>
                </div>
            </section>

            <section className='featured-posts'>
                <h2>What we value</h2>

                <div className='posts-grid'>
                    <article className='post-card'>
                        <h3>Core Values #1</h3>
                        <p>Description goes here</p>
                    </article>

                    <article className='post-card'>
                        <h3>Core Values #2</h3>
                        <p>Description goes here</p>
                    </article>

                    <article className='post-card'>
                        <h3>Core Values #3</h3>
                        <p>Description goes here</p>
                    </article>
                </div>
            </section>

            <section>
                <Blog />
            </section>
        </div>
    );
};

export default Home;
