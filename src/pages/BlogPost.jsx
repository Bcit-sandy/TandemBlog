import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogPost.css";
import postsData from "../data/posts.json";

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const posts = postsData;

    useEffect(() => {
        const foundPost = posts.find((p) => p.id === parseInt(id));
        if (foundPost) {
            setPost(foundPost);
        }
        setLoading(false);
    }, [id]);

    const handleBackToBlog = () => {
        navigate("/blog");
    };

    // Function to parse content into headers, paragraphs, and images
    const renderContent = (content) => {
        if (!content) return null;
        const lines = content.split("\n");
        return lines.map((line, index) => {
            const trimmedLine = line.trim();
            
            // Skip empty lines
            if (trimmedLine === "") {
                return null;
            }
            
            // Check for image syntax: [IMAGE:image.png] or [IMAGE:image.png|alt text]
            const imageMatch = trimmedLine.match(/\[IMAGE:([^\]]+)\]/);
            if (imageMatch) {
                const imageData = imageMatch[1].split("|");
                const imagePath = imageData[0].trim();
                const altText = imageData[1] ? imageData[1].trim() : "Blog post image";
                return (
                    <div key={index} className="post-content-image-wrapper">
                        <img
                            className="post-content-image"
                            src={`/Blog/${imagePath}`}
                            alt={altText}
                        />
                    </div>
                );
            }
            
            // Check for headers
            if (trimmedLine.startsWith("## ")) {
                return (
                    <h2
                        key={index}
                        className="post-content-header">
                        {trimmedLine.replace("## ", "")}
                    </h2>
                );
            } 
            // Check for list items
            else if (trimmedLine.startsWith("- ")) {
                return (
                    <p
                        key={index}
                        className="post-content-item">
                        {trimmedLine.replace("- ", "")}
                    </p>
                );
            } 
            // Regular paragraphs
            else {
                return (
                    <p
                        key={index}
                        className="post-content-paragraph">
                        {trimmedLine}
                    </p>
                );
            }
        }).filter(item => item !== null);
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
                        <button
                            onClick={handleBackToBlog}
                            className="back-button">
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
                <button
                    className="back-button"
                    onClick={handleBackToBlog}>
                    ← Back to Blog
                </button>

                <article className="post-detail">
                    <header className="post-header">
                        <h1 className="post-title">{post.title}</h1>
                        <img
                            className="post-image"
                            src={`/Blog/${post.image}`}
                            alt={post.title}
                        />
                        <div className="post-meta">
                            <div className="meta-row">
                                <span className="author">By {post.author}</span>
                                <span className="date">{post.date}</span>
                            </div>
                        </div>
                    </header>

                    <div className="post-content">
                        {renderContent(post.content)}
                    </div>

                    <footer className="post-footer">
                        <div className="post-tags">
                            {post.category.map((cat, index) => (
                                <span
                                    key={index}
                                    className="tag">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
