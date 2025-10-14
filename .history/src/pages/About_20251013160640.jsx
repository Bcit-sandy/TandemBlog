import './About.css';

const About = () => {
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
              <div className="team-member">
                <div className="member-avatar">
                  <span>JD</span>
                </div>
                <h3>John Doe</h3>
                <p className="role">Lead Developer</p>
                <p>Passionate about creating innovative web solutions and mentoring the next generation of developers.</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <span>JS</span>
                </div>
                <h3>Jane Smith</h3>
                <p className="role">UI/UX Designer</p>
                <p>Focused on creating beautiful, user-centered designs that solve real-world problems.</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <span>MJ</span>
                </div>
                <h3>Mike Johnson</h3>
                <p className="role">Technical Writer</p>
                <p>Translating complex technical concepts into clear, engaging content for our readers.</p>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default About;

