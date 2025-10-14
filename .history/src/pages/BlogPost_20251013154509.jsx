import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css';
import postsData from '../data/posts.json';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const posts = postsData;

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    }
    setLoading(false);
  }, [id]);

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <div className="error">
            <h2>Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <button onClick={handleBackToBlog} className="back-button">
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="blog-post-container">
        <button className="back-button" onClick={handleBackToBlog}>
          ← Back to Blog
        </button>
        
        <article className="post-detail">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <div className="meta-row">
                <span className="author">By {post.author}</span>
                <span className="date">{post.date}</span>
              </div>
              <div className="meta-row">
                <div className="categories">
                  {post.category.map((cat, index) => (
                    <span key={index} className="category">{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </header>
          
          <div className="post-content">
            <p>{post.content}</p>
          </div>
          
          <footer className="post-footer">
            <div className="post-tags">
              <span className="tag">{post.category}</span>
            </div>
    
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;

