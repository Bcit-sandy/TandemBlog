import { useState, useEffect, useRef } from "react";
import "./About.css";
import teamData from "../data/team.json";

const About = () => {
    const [team, setTeam] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const teamRef = useRef(null);

    useEffect(() => {
        setTeam(teamData);
    }, []);

    if (team.length === 0) {
        return <div>Loading...</div>;
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? team.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === team.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getIndex = (offset) => {
        const newIndex = currentIndex + offset;
        if (newIndex < 0) {
            return team.length + newIndex;
        }
        return newIndex % team.length;
    };

    const currentMember = team[currentIndex];
    const farLeftMember = team[getIndex(-2)];
    const leftMember = team[getIndex(-1)];
    const rightMember = team[getIndex(1)];
    const farRightMember = team[getIndex(2)];

    const scrollToTeam = () => {
        teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className='about'>
            <header className='about-header'>
                <div className='header-content'>
                    <h1>About Us</h1>
                    <p>
                        Our team is working together to bring you the best
                        content and experiences. BLA BLA BLA INFO HERE
                    </p>
                    <button
                        className='meet-team-btn'
                        onClick={scrollToTeam}
                    >
                        Meet the team
                    </button>
                </div>
                <img
                    className='group-image'
                    src=''
                    alt=''
                />
            </header>

            <div className='about-container'>
                <section className='about-content'>
                    <div
                        className='team'
                        ref={teamRef}
                    >
                        <h2>Our Team</h2>

                        <div className='team-carousel'>
                            {/* Far left member */}
                            <div className='team-card side-member far-left-member'>
                                <div className='member-image-placeholder'>
                                    <img
                                        src={`/Team/${farLeftMember.avatar}`}
                                        alt={farLeftMember.name}
                                    />
                                </div>
                            </div>

                            {/* Left member (with prev button) */}
                            <div className='team-card side-member left-member'>
                                <div className='member-image-placeholder'>
                                    <img
                                        src={`/Team/${leftMember.avatar}`}
                                        alt={leftMember.name}
                                    />
                                </div>
                                <button
                                    className='carousel-nav-btn prev-btn'
                                    onClick={goToPrevious}
                                    aria-label='Previous member'
                                >
                                    \279C
                                </button>
                                <div className='member-label previous-label'>
                                    <span className='label-text'>Previous</span>
                                    <span className='label-name'>
                                        {leftMember.name}
                                    </span>
                                </div>
                            </div>

                            {/* Current member (center) */}
                            <div className='team-card current-member'>
                                <div className='member-image-placeholder'>
                                    <img
                                        src={`/Team/${currentMember.avatar}`}
                                        alt={currentMember.name}
                                    />
                                </div>
                            </div>

                            {/* Right member (with next button) */}
                            <div className='team-card side-member right-member'>
                                <div className='member-image-placeholder'>
                                    <img
                                        src={`/Team/${rightMember.avatar}`}
                                        alt={rightMember.name}
                                    />
                                </div>
                                <button
                                    className='carousel-nav-btn next-btn'
                                    onClick={goToNext}
                                    aria-label='Next member'
                                >
                                    ›
                                </button>
                                <div className='member-label next-label'>
                                    <span className='label-text'>Next</span>
                                    <span className='label-name'>
                                        {rightMember.name}
                                    </span>
                                </div>
                            </div>

                            {/* Far right member */}
                            <div className='team-card side-member far-right-member'>
                                <div className='member-image-placeholder'>
                                    <img
                                        src={`/Team/${farRightMember.avatar}`}
                                        alt={farRightMember.name}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Current member details */}
                        <div className='team-member-details'>
                            <h3 className='member-name'>
                                {currentMember.name}
                            </h3>
                            <p className='member-role'>
                                {currentMember.role || "Tandem staff"}
                            </p>
                            <p className='member-bio'>
                                {currentMember.bio ||
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                            </p>

                            <div className='social-links'>
                                {currentMember.linkedin && (
                                    <a
                                        href={currentMember.linkedin}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={`${currentMember.name}'s LinkedIn`}
                                        className='social-link'
                                    >
                                        <img
                                            className='contact-icon'
                                            src='/Team/linkedIn.png'
                                            alt='LinkedIn'
                                        />
                                    </a>
                                )}
                                {currentMember.github && (
                                    <a
                                        href={currentMember.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={`${currentMember.name}'s GitHub`}
                                        className='social-link'
                                    >
                                        <img
                                            className='contact-icon'
                                            src='/Team/github.png'
                                            alt='GitHub'
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
