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
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              We believe in the power of sharing knowledge and experiences. Our blog serves as a platform 
              for developers, designers, and tech enthusiasts to learn, grow, and connect with like-minded 
              individuals in the technology community.
            </p>
            <p>
              Through carefully crafted articles, tutorials, and insights, we aim to make complex 
              technical concepts accessible to everyone, regardless of their experience level.
            </p>
          </div>
          
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
          
          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Learning</h3>
                <p>We believe in continuous learning and sharing knowledge with the community.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We embrace new technologies and creative approaches to problem-solving.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We foster an inclusive environment where everyone can contribute and grow.</p>
              </div>
              <div className="value-item">
                <h3>Quality</h3>
                <p>We are committed to delivering high-quality content and experiences.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
