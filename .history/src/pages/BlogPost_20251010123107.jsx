import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample blog posts data (in a real app, this would come from an API)
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React and how to build your first component.",
      content: "React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the basics of React components, state management, and props. React makes it easy to create interactive UIs by breaking them into small, reusable components. Each component manages its own state and can be composed together to build complex applications. The key concepts include JSX for writing HTML-like syntax in JavaScript, the virtual DOM for efficient updates, and the component lifecycle for managing side effects. Whether you're new to React or looking to refresh your knowledge, this guide will help you understand the core concepts and best practices for building modern web applications.",
      author: "John Doe",
      date: "March 20, 2024",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layout.",
      content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Grid is perfect for two-dimensional layouts where you need to control both rows and columns. It's ideal for complex page layouts, card grids, and any situation where you need precise control over positioning. Flexbox, on the other hand, excels at one-dimensional layouts - either rows or columns. It's perfect for navigation bars, centering content, and distributing space within a container. The key is to understand that they work together: use Grid for the overall page layout and Flexbox for the components within those grid areas. This approach gives you the best of both worlds and creates more maintainable, flexible designs.",
      author: "Jane Smith",
      date: "March 18, 2024",
      category: "CSS",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      excerpt: "Modern JavaScript features that every developer should know.",
      content: "ES6 introduced many powerful features to JavaScript including arrow functions, destructuring, template literals, and more. Arrow functions provide a more concise syntax for writing functions and automatically bind the 'this' context. Destructuring allows you to extract values from arrays and objects into distinct variables, making code more readable and efficient. Template literals use backticks and allow for multi-line strings and variable interpolation. Other important features include let and const for block-scoped variables, classes for object-oriented programming, modules for code organization, and promises for handling asynchronous operations. These features have become essential for modern JavaScript development and are widely supported across all major browsers.",
      author: "Mike Johnson",
      date: "March 15, 2024",
      category: "JavaScript",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Building Responsive Websites",
      excerpt: "Best practices for creating websites that work on all devices.",
      content: "Responsive design is crucial in today's multi-device world. Learn how to create flexible layouts that adapt to different screen sizes. The key principles include mobile-first design, flexible grid systems, and responsive images. Start by designing for mobile devices and progressively enhance for larger screens. Use relative units like percentages and ems instead of fixed pixels. Implement flexible images that scale with their containers. CSS media queries allow you to apply different styles based on device characteristics. Consider touch targets for mobile users and ensure text remains readable at all sizes. Test your designs on actual devices and use browser developer tools to simulate different screen sizes. Remember that responsive design is not just about screen size - it's about creating the best possible experience for every user.",
      author: "Sarah Wilson",
      date: "March 12, 2024",
      category: "Web Design",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Introduction to Node.js",
      excerpt: "Getting started with server-side JavaScript development.",
      content: "Node.js allows you to run JavaScript on the server, opening up new possibilities for full-stack development. Built on Chrome's V8 JavaScript engine, Node.js provides a non-blocking, event-driven architecture that's perfect for building scalable network applications. You can use the same language (JavaScript) for both frontend and backend development, which simplifies the development process and allows for code sharing. Node.js comes with npm, the world's largest software registry, giving you access to thousands of packages. Popular frameworks like Express.js make it easy to build web servers and APIs. The event loop handles asynchronous operations efficiently, making Node.js particularly good for real-time applications, APIs, and microservices. Whether you're building a simple web server or a complex application, Node.js provides the tools and ecosystem you need.",
      author: "David Brown",
      date: "March 10, 2024",
      category: "Backend",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Database Design Principles",
      excerpt: "Essential concepts for designing efficient and scalable databases.",
      content: "Good database design is the foundation of any successful application. Learn about normalization, indexing, and relationships. Start by understanding your data requirements and identifying entities and their relationships. Normalization helps eliminate redundancy and ensures data integrity, but don't over-normalize as it can impact performance. Choose appropriate data types and constraints to maintain data quality. Indexes improve query performance but come with storage and maintenance costs. Design for scalability by considering partitioning, sharding, and caching strategies. Document your schema and establish naming conventions. Consider both current needs and future growth when making design decisions. Regular maintenance, monitoring, and optimization are essential for long-term success. Remember that good database design is an iterative process that evolves with your application's needs.",
      author: "Lisa Davis",
      date: "March 8, 2024",
      category: "Database",
      readTime: "10 min read"
    }
  ];

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
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
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
            <div className="post-actions">
              <button className="share-button">Share</button>
              <button className="bookmark-button">Bookmark</button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
