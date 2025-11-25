import { useEffect, useRef } from "react";
import "./Home.css";
import ContactForm from "../components/ContactForm/ContactForm";


// SVG imports from public/Home folder
const balanceSvg = "/Home/balance.svg";
const supportSvg = "/Home/support.svg";
const trustSvg = "/Home/trust.svg";
const questionImg = "/Home/question.png";
const igpng = "/Home/ig.png";
const emailpng = "/Home/email.png";

const Home = () => {
    const featuredPostsRef = useRef(null);
    const featureHighlights = [
        {
            title: "AI Powered Scheduling",
            description:
                "Our gentle AI helps you organize your childcare effectively. With overtime or school events, you can be present when it matters most.",
            icon: "🗓️",
            accent: "accent-one"
        },
        {
            title: "Seamless Nanny Booking",
            description:
                "With our partner of dependable caregivers, you’re in great hands! With notes from other trades parents, every booking feels like family.",
            icon: "🤝",
            accent: "accent-two"
        },
        {
            title: "Secure Nanny Sharing",
            description:
                "Team up with nearby crews to split costs, see familiar faces, and build a support circle that knows you best.",
            icon: "🧸",
            accent: "accent-three"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );

        if (featuredPostsRef.current) {
            observer.observe(featuredPostsRef.current);
        }

        return () => {
            if (featuredPostsRef.current) {
                observer.unobserve(featuredPostsRef.current);
            }
        };
    }, []);

    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1>
                        Welcome to <span className='tandem-animated'>Tandem</span>
                    </h1>
                    <h2>Bridging the gap between work and childcare</h2>
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
                    <img 
                        src='/MockUp/MockUp5.png' 
                        alt='Tandem app mockup' 
                    />
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
                <section className='our-features'>
                    <div className='features-intro'>
                        <h2>Our Key Features</h2>
                        <p className='eyebrow'>Built for busy trade parents</p>
                        <p>
                            Each feature in Tandem is designed to lift some weight off parents in the trades. <br />
                            We believe that every parent should have the support they need to balance work and family life.
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

                <section className='featured-posts' ref={featuredPostsRef}>
                    <h2>Why Tandem?</h2>

                    <div className='posts-grid'>
                        <article className='post-card'>
                            <img src={trustSvg} alt="Trust" />
                            <h3>Trust</h3>
                            <p>Parents want what’s best for their kids, with safety being a top priority. When it comes to personal information, we make sure to provide the best security we can. </p>
                        </article>

                        <article className='post-card'>
                            <img src={balanceSvg} alt="Balance" />
                            <h3>Balance</h3>
                            <p>Life is all about balance. With how life-changing parenthood is, we want to help schedules work in tandem for a happier you.</p>
                        </article>

                        <article className='post-card'>
                           <img src={supportSvg} alt="Support" /> 
                           <h3>Support</h3>
                           <p>Work can be unpredictable. In a world where childcare feels stressful and overwhelming, we strive to change that. </p>
                        </article>
                    </div>
                </section>


            </div>

            <section className='contact-form-section'>
                <div className="contact-form-content">
                    <div className="contact-form-text">
                        <h2 className="contact-form-title">Get in Touch</h2>
                        <p className="contact-form-subtitle">
                            Any question or feedback? Send us a message!
                        </p>
                        <img src={questionImg} alt="Question" />
                        <div className="contact-form-social-media">
                            <a href="https://www.instagram.com/the.tandem.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <img src={igpng} alt="Instagram" />
                                <p> the.tandem.app </p>
                            </a>
                            <a href="mailto:tandemfortrades@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={emailpng} alt="Email" />
                                <p> tandemfortrades@gmail.com </p>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <ContactForm />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
