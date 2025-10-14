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
                        rel="linkedin"
                        contact-label={`${member.name}'s LinkedIn`}
                      >
                        <img src="../public/Team/linkedin.png" alt={member.name + "'s LinkedIn"} />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="github"
                        contact-label={`${member.name}'s GitHub`}
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

