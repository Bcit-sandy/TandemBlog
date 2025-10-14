import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Tandem</h1>
          <p>Slogon goes here</p>
          <button className="cta-button">Start Reading</button>
        </div>
      </section>
      
      <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="posts-grid">
          <article className="post-card">
            <h3>The Art of Web Development</h3>
            <p>Exploring modern web development techniques and best practices...</p>
            <span className="post-date">March 15, 2024</span>
          </article>
          <article className="post-card">
            <h3>Design Thinking in Practice</h3>
            <p>How to apply design thinking principles to solve complex problems...</p>
            <span className="post-date">March 10, 2024</span>
          </article>
          <article className="post-card">
            <h3>Building Sustainable Technology</h3>
            <p>Creating technology solutions that benefit both people and the planet...</p>
            <span className="post-date">March 5, 2024</span>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;

