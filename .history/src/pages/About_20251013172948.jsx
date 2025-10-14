import { useState, useEffect } from 'react';
import './About.css';
import teamData from '../data/team.json';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamData);
  }, []);

  return (
    <div className="about">
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Our team is working together to bring you the best content and experiences. BLA BLA BLA INFO HERE</p>
        </header>
        
        <section className="about-content">

          
          <div className="team">
            <h2>Our Team</h2>
            <div className="team-grid">
              {team.map(member => (
                <div key={member.id} className="team-member">
                  <div className="member-avatar">
                    <img src={`/Team/${member.avatar}`} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
                  <div className="social-links">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link linkedin-icon"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link github-icon"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <img src="../public/Team/github.png" alt={member.name + "'s GitHub"} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default About;

