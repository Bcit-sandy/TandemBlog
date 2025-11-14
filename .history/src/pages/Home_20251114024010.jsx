import "./Home.css";
import Blog from "./Blog";

const Home = () => {
    const scrollToMission = () => {
        const missionSection = document.getElementById('our-mission');
        if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>Tandem</h1>
                    <p>Slogan goes here</p>
                    <p> A brief description goes here</p>
                    <button className="learn-more-btn" onClick={scrollToMission}>
                        Learn more
                    </button>
                </div>
                <div className='wave-svg'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1440 320'
                    >
                        <path
                            fill='#fff'
                            fillOpacity='1'
                            d='M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
                        ></path>
                    </svg>
                </div>
            </section>

            <div className='mission-feature'>
                <section className='our-mission'>
                    <div className='mission-content'>
                        <h1>
                            What is
                            <span className='tandem-highlight'>Tandem</span> ?
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. 
                        </p>
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
            </div>

            <section>
                <Blog />
            </section>
        </div>
    );
};

export default Home;
