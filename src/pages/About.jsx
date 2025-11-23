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

    return (
        <div className='about'>
            <header className='about-header'>
                <div className='header-content'>
                    <div className='about-copy'>
                        <p className='eyebrow'>Inside Tandem</p>
                        <h1>About Us</h1>
                        <p>
                            We know that balancing trade work with childcare isn't easy. Many of us have lived that tension or watched it play out in our crews. We created Tandem to ease the pressure, offering thoughtful tools and trustworthy care partners.
                        </p>
                        <p>
                            Every story we tell and product we ship is built by designers, engineers, and parents working side by side. We listen closely, iterate fast, and center the people juggling it all.
                        </p>
                    </div>
                    <div className='about-visual'>
                        <img
                            className='group-image'
                            src='/Team/group.jpg'
                            alt='Tandem team'
                        />
                    </div>
                </div>
            </header>

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
                                ➜
                            </button>
                            <div className='member-label previous-label'>
                                <span className='label-text'>Previous</span>
                                <span className='label-name'>
                                    {leftMember.name}
                                </span>
                            </div>
                        </div>

                        {/* Current member (center) */}
                        <div 
                            key={currentIndex}
                            className='team-card current-member'
                        >
                            <div className='member-image-placeholder'>
                                <img
                                    key={currentIndex}
                                    src={`/Team/${currentMember.avatar}`}
                                    alt={currentMember.name}
                                />
                                <div className='member-overlay'>
                                    <h3 key={`name-${currentIndex}`} className='member-name-overlay'>{currentMember.name}</h3>
                                    <p key={`role-${currentIndex}`} className='member-role-overlay'>
                                        {currentMember.role || "Tandem staff"}
                                    </p>
                                </div>
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
                                ➜
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
                    <section
                        key={`details-${currentIndex}`}
                        className='team-member-details'
                    >
                        <p key={`bio-${currentIndex}`} className='member-bio'>
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
                    </section>

                    {/* All team members column for mobile */}
                    <div className='team-members-column'>
                        {team.map((member, index) => {
                            if (index === currentIndex) return null; // Skip current member as it's already shown
                            return (
                                <div key={index} className='team-member-card-mobile'>
                                    <div className='member-image-placeholder-mobile'>
                                        <img
                                            src={`/Team/${member.avatar}`}
                                            alt={member.name}
                                        />
                                        <div className='member-overlay-mobile'>
                                            <h3 className='member-name-overlay-mobile'>{member.name}</h3>
                                            <p className='member-role-overlay-mobile'>
                                                {member.role || "Tandem staff"}
                                            </p>
                                        </div>
                                    </div>
                                    <section className='team-member-details-mobile'>
                                        <p className='member-bio-mobile'>
                                            {member.bio ||
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                                        </p>
                                        <div className='social-links-mobile'>
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    aria-label={`${member.name}'s LinkedIn`}
                                                    className='social-link'
                                                >
                                                    <img
                                                        className='contact-icon'
                                                        src='/Team/linkedIn.png'
                                                        alt='LinkedIn'
                                                    />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    aria-label={`${member.name}'s GitHub`}
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
                                    </section>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
