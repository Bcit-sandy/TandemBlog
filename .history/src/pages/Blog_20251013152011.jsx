import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import postsData from '../data/posts.json';

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const handlePostClick = (post) => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="blog">
      <div className="blog-container">
        <header className="blog-header">
          <h1>Explore our Blog!</h1>
          <p>Explore our latest articles and insights</p>
        </header>
        
        <div className="posts-list">
          {posts.map(post => (
            <article key={post.id} className="post-item" onClick={() => handlePostClick(post)}>
              <div className="post-info">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span className="author">{post.author}</span>
                  <span className="date">{post.date}</span>
                  <span className="category">{post.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

