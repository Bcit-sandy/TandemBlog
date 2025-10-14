import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Tandem</h1>
          <p>Slogon goes here</p>
          <button className="cta-button">Learn More!</button>
        </div>
      </section>
      
      <section className="featured-posts">
        <h2>What we value</h2>

        <div className="posts-grid">
          <article className="post-card">
            <h3>Core Values #1</h3>
            <p>Description goes here</p>
            <span className="post-date">March 15, 2024</span>
          </article>

          <article className="post-card">
            <h3>Core Values #2</h3>
            <p>Description goes here</p>
            <span className="post-date">March 10, 2024</span>
          </article>

          <article className="post-card">
            <h3>Core Values #3</h3>
            <p>Description goes here</p>
            <span className="post-date">March 5, 2024</span>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Home;

