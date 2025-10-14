import { useState, useEffect } from 'react';
import './About.css';
import teamData from '../data/team.json';
import Team from '../public/Team';

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
          <p>Learn more about our mission and the team behind this blog</p>
        </header>
        
        <section className="about-content">

          
          <div className="team">
            <h2>Our Team</h2>
            <div className="team-grid">
              {team.map(member => (
                <div key={member.id} className="team-member">
                  <div className="member-avatar">
                    <img src={`/images/team/${member.avatar}`} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
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

