import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React and how to build your first component.",
      content: "React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the basics of React components, state management, and props...",
      author: "John Doe",
      date: "March 20, 2024",
      category: "Web Development"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layout.",
      content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Grid is perfect for two-dimensional layouts...",
      author: "Jane Smith",
      date: "March 18, 2024",
      category: "CSS"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      excerpt: "Modern JavaScript features that every developer should know.",
      content: "ES6 introduced many powerful features to JavaScript including arrow functions, destructuring, template literals, and more...",
      author: "Mike Johnson",
      date: "March 15, 2024",
      category: "JavaScript"
    },
    {
      id: 4,
      title: "Building Responsive Websites",
      excerpt: "Best practices for creating websites that work on all devices.",
      content: "Responsive design is crucial in today's multi-device world. Learn how to create flexible layouts that adapt to different screen sizes...",
      author: "Sarah Wilson",
      date: "March 12, 2024",
      category: "Web Design"
    },
    {
      id: 5,
      title: "Introduction to Node.js",
      excerpt: "Getting started with server-side JavaScript development.",
      content: "Node.js allows you to run JavaScript on the server, opening up new possibilities for full-stack development...",
      author: "David Brown",
      date: "March 10, 2024",
      category: "Backend"
    },
    {
      id: 6,
      title: "Database Design Principles",
      excerpt: "Essential concepts for designing efficient and scalable databases.",
      content: "Good database design is the foundation of any successful application. Learn about normalization, indexing, and relationships...",
      author: "Lisa Davis",
      date: "March 8, 2024",
      category: "Database"
    }
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="blog">
        <div className="blog-container">
          <button className="back-button" onClick={handleBackToList}>
            ← Back to Blog
          </button>
          <article className="blog-post">
            <header className="post-header">
              <h1>{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="author">By {selectedPost.author}</span>
                <span className="date">{selectedPost.date}</span>
                <span className="category">{selectedPost.category}</span>
              </div>
            </header>
            <div className="post-content">
              <p>{selectedPost.content}</p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="blog">
      <div className="blog-container">
        <header className="blog-header">
          <h1>Blog Posts</h1>
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

