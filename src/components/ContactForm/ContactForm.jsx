import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Show success message
            setSubmitStatus("success");
            setIsSubmitting(false);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            setSubmitStatus("error");
            setIsSubmitting(false);
            
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }
    };

    return (
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                        Subject <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="What's this about?"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message <span className="required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Tell us what's on your mind..."
                        rows="6"
                        required
                    />
                </div>

                {submitStatus === "success" && (
                    <div className="form-message success">
                        ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="form-message error">
                        ✗ Something went wrong. Please try again or email us directly.
                    </div>
                )}

                <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

