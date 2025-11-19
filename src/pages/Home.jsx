import { useRef } from "react";
import "./Home.css";
import Blog from "./Blog";

const Home = () => {
    const missionRef = useRef(null);

    const featureHighlights = [
        {
            title: "Supportive scheduling",
            description:
                "Our gentle AI helps you carve out breathing room, flexing around overtime, school events, and the moments you want to be totally present.",
            icon: "🗓️",
            accent: "accent-one"
        },
        {
            title: "Trust-first matches",
            description:
                "See dependable caregivers with real notes from other trades parents, so every booking feels like leaving your kids with family.",
            icon: "🤝",
            accent: "accent-two"
        },
        {
            title: "Community nanny sharing",
            description:
                "Team up with nearby crews to split costs, share familiar faces, and build a support circle that understands long shifts.",
            icon: "🌟",
            accent: "accent-three"
        }
    ];

    const scrollToMission = () => {
        missionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>
                        Welcome to <span className='tandem-animated'>Tandem</span>!
                    </h1>
                    <h2>Your childcare partner that balances your work-life schedule</h2>
                    <p>Tandem is an app for parents in the trades that helps balance work and childcare. It utilizes AI to support busy parents in managing their responsibilities, providing trustworthy recommendations and reliable childcare options. It allows parents to find childcare easily, reducing stress and improving work–life balance.</p>
                    <a
                        className='learn-more-btn'
                        href='https://tandem-git-dev-matheus-demeis-projects-4bff4ed5.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='btn-text'>Try App Now!</span>
                    </a>
                </div>
                
                <div className='hero-image-placeholder'>
                    <span>Product preview coming soon</span>
                </div>
            {/* will be a screen mock up of the app, using the image from the public folder */}
           

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
                {/* <section
                    className='our-mission'
                    id='our-mission'
                    ref={missionRef}
                >
                    <div className='mission-content'>
                        <h1>
                            What is
                            <span className='tandem-highlight'>Tandem</span> ?
                        </h1>
                        <p>
                            Tandem is an app for parents in trades to help balance work with childcare. It utilizes AI to help busy parents balance the responsibilities of work and childcare, providing trustworthy recommendations and supportive childcare. It allows parents in the trades to find childcare easily, reducing stress and improving work-life balance. 
                        </p>
                    </div>
                </section> */}

                <section className='our-features'>
                    <div className='features-intro'>
                        <h2>Our Key Features</h2>
                        <p className='eyebrow'>Built for busy trade parents</p>
                        <p>
                            Each feature in Tandem is designed to lift some weight off parents in the trades. We believe that every parent should have the support they need to balance work and family life.
                        </p>
                    </div>

                    <div className='features-grid'>
                        {featureHighlights.map((feature) => (
                            <article
                                key={feature.title}
                                className={`feature-card ${feature.accent}`}
                            >
                                <span
                                    className='feature-icon'
                                    aria-hidden='true'
                                >
                                    {feature.icon}
                                </span>
                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className='featured-posts'>
                    <h2>What we value</h2>

                    <div className='posts-grid'>
                        <article className='post-card'>
                            <h3>Trustworthy</h3>
                            <p>Schedules are unpredictable. Instead of a world where childcare feels overwhelming and inconsistent, Tandem offers one that's stable and reliable. </p>
                        </article>

                        <article className='post-card'>
                            <h3>Balanced</h3>
                            <p>Work and family should work in Tandem. Parenthood is already life-changing, and we want to make balancing it with work less stressful.</p>
                        </article>

                        <article className='post-card'>
                            <h3>Supportive</h3>
                            <p>Childcare can be a lonely and confusing. We aims to bring trade parents together so that their schedules can work in Tandem.  </p>
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
