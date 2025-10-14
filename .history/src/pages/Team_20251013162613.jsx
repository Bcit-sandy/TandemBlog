import { useState, useEffect } from 'react';
import './Team.css';
import teamData from '../data/team.json';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamData);
  }, []);

  return (
    <div className="team-page">
      <div className="team-container">
        <header className="team-header">
          <h1>Our Team</h1>
          <p>Meet the talented individuals behind this blog</p>
        </header>
        
        <section className="team-content">
          <div className="team">
            <h2>Team Members</h2>
            <div className="team-grid">
              {team.map(member => (
                <div key={member.id} className="team-member">
                  <div className="member-avatar">
                    <span>{member.initials}</span>
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

export default Team;
