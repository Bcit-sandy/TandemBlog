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

    // Determine previous/next posts based on ID order
    const sortedPostsAsc = [...posts].sort((a, b) => a.id - b.id);
    const currentIndex = post ? sortedPostsAsc.findIndex((p) => p.id === post.id) : -1;

    const prevPost = currentIndex > 0
        ? sortedPostsAsc[currentIndex - 1]
        : null;

    const nextPost = currentIndex !== -1 && currentIndex < sortedPostsAsc.length - 1
        ? sortedPostsAsc[currentIndex + 1]
        : null;

    const handlePreviousPost = () => {
        if (prevPost) {
            navigate(`/blog/${prevPost.id}`);
        }
    };

    const handleNextPost = () => {
        if (nextPost) {
            navigate(`/blog/${nextPost.id}`);
        }
    };

    // Function to parse content into headers, paragraphs, and images
    const renderContent = (content) => {
        if (!content) return null;
        const lines = content.split("\n");
        const elements = [];
        let imageGroup = [];
        let elementIndex = 0;

        const processImageGroup = () => {
            if (imageGroup.length > 0) {
                const groupSize = imageGroup.length;
                if (groupSize > 1) {
                    // Multiple images - render in grid
                    const gridClass = `post-content-images-grid count-${groupSize}`;
                    elements.push(
                        <div key={`image-group-${elementIndex}`} className={gridClass}>
                            {imageGroup.map((img, idx) => (
                                <div key={idx} className="post-content-image-wrapper">
                                    <img
                                        className="post-content-image"
                                        src={img.path}
                                        alt={img.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                } else {
                    // Single image - render normally
                    elements.push(
                        <div key={`image-${elementIndex}`} className="post-content-image-wrapper">
                            <img
                                className="post-content-image"
                                src={imageGroup[0].path}
                                alt={imageGroup[0].alt}
                            />
                        </div>
                    );
                }
                imageGroup = [];
                elementIndex++;
            }
        };

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            
            // Process image group if we hit an empty line
            if (trimmedLine === "") {
                processImageGroup();
                return;
            }
            
            // Check for image syntax: [IMAGE:image.png] or [IMAGE:image.png|alt text]
            const imageMatch = trimmedLine.match(/\[IMAGE:([^\]]+)\]/);
            if (imageMatch) {
                const imageData = imageMatch[1].split("|");
                const imagePath = imageData[0].trim();
                const normalizedPath = imagePath.startsWith("/")
                    ? imagePath
                    : imagePath.includes("/")
                        ? `/${imagePath}`
                        : `/Blog/${imagePath}`;
                const altText = imageData[1] ? imageData[1].trim() : "Blog post image";
                imageGroup.push({ path: normalizedPath, alt: altText });
                return;
            }
            
            // If we hit a non-image line and have images in the group, process them first
            processImageGroup();
            
            // Check for headers
            if (trimmedLine.startsWith("## ")) {
                elements.push(
                    <h2
                        key={elementIndex}
                        className="post-content-header">
                        {trimmedLine.replace("## ", "")}
                    </h2>
                );
                elementIndex++;
            } 
            // Check for list items
            else if (trimmedLine.startsWith("- ")) {
                elements.push(
                    <p
                        key={elementIndex}
                        className="post-content-item">
                        {trimmedLine.replace("- ", "")}
                    </p>
                );
                elementIndex++;
            } 
            // Regular paragraphs
            else {
                elements.push(
                    <p
                        key={elementIndex}
                        className="post-content-paragraph">
                        {trimmedLine}
                    </p>
                );
                elementIndex++;
            }
        });

        // Process any remaining image group at the end
        processImageGroup();

        return elements;
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

                <div className="post-nav">
                    {prevPost && (
                        <button
                            className="back-button"
                            onClick={handlePreviousPost}>
                            ← Previous Post
                        </button>
                    )}

                    <button
                        className="back-button back-button-outline"
                        onClick={handleBackToBlog}>
                        Return to Blog
                    </button>

                    {nextPost && (
                        <button
                            className="back-button"
                            onClick={handleNextPost}>
                            Next Post →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
