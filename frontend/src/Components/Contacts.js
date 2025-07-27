import React, { useState } from "react";
import axios from "axios";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isLoading: false,
    isError: false,
    isSent: false,
    errorMessage: "",
  });

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      value: "Colombo, Sri Lanka",
      description: "Available for remote and on-site work",
    },
    {
      icon: "📧",
      title: "Email",
      value: "sadeepalakshan0804@gmail.com",
      description: "I'll respond within 24 hours",
      link: "mailto:sadeepalakshan0804@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+94 713 477 746",
      description: "Available Mon-Fri, 9AM-6PM",
      link: "tel:+94713477746",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Sadeepa Lakshan",
      description: "Let's connect professionally",
      link: "https://linkedin.com/in/Sadeepa_Lakahshan/",
    },
  ];

  // Social links with Unicode alternatives as backup (same as About section)
  const socialLinks = [
    {
      url: "https://github.com/IT21191688",
      faIcon: "fab fa-github",
      unicode: "&#xf09b;", // GitHub unicode
      label: "GitHub",
      color: "#333",
    },
    {
      url: "https://www.linkedin.com/in/sadeepa-lakshan-a3099a215/",
      faIcon: "fab fa-linkedin",
      unicode: "&#xf08c;", // LinkedIn unicode
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      url: "https://wa.me/94713477746",
      faIcon: "fab fa-whatsapp",
      unicode: "&#xf232;", // WhatsApp unicode
      label: "WhatsApp",
      color: "#25d366",
    },
    {
      url: "mailto:sadeepalakshan0804@gmail.com",
      faIcon: "fas fa-envelope",
      unicode: "&#xf0e0;", // Envelope unicode
      label: "Email",
      color: "#ea4335",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Invalid email format";
    if (!subject.trim()) return "Subject is required";
    if (!message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setFormStatus({
        isLoading: false,
        isError: true,
        isSent: false,
        errorMessage: validationError,
      });
      return;
    }

    setFormStatus({
      isLoading: true,
      isError: false,
      isSent: false,
      errorMessage: "",
    });

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.subject);
      formDataObj.append("massage", formData.message); // Note: backend expects 'massage'

      await axios.post(
        "https://sadeepaportofolio.onrender.com/contactDetails/addContact",
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFormStatus({
        isLoading: false,
        isError: false,
        isSent: true,
        errorMessage: "",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSent: false }));
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        isLoading: false,
        isError: true,
        isSent: false,
        errorMessage:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Let's Work Together</h2>
          <p>
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-header">
              <h3 className="gradient-text">Get In Touch</h3>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hello,
                I'll do my best to get back to you!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card modern-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="contact-value clickable"
                        target={
                          info.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-value">{info.value}</p>
                    )}
                    <span className="contact-desc">{info.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links - Same as About section */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="social-link"
                    target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel={
                      link.url.startsWith("mailto") ? "" : "noopener noreferrer"
                    }
                    title={link.label}
                    style={{ "--hover-color": link.color }}
                  >
                    <i className={link.faIcon}></i>
                    <span
                      className="social-fallback"
                      dangerouslySetInnerHTML={{ __html: link.unicode }}
                    ></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="availability-card modern-card">
              <div className="availability-header">
                <div className="status-indicator">
                  <div className="pulse-dot"></div>
                  <span>Available for Work</span>
                </div>
              </div>
              <p>
                Currently open to new opportunities and freelance projects.
                Let's create something amazing together!
              </p>
              <div className="availability-details">
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <span>Response Time: 24 hours</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🌍</span>
                  <span>Work: Remote & On-site</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3 className="gradient-text">Send Message</h3>
              <p>
                Have a project in mind? Fill out the form below and I'll get
                back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form modern-card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Form Status Messages */}
              <div className="form-status">
                {formStatus.isLoading && (
                  <div className="status-message loading">
                    <div className="spinner"></div>
                    Sending message...
                  </div>
                )}
                {formStatus.isError && (
                  <div className="status-message error">
                    <i className="fas fa-exclamation-circle"></i>
                    {formStatus.errorMessage}
                  </div>
                )}
                {formStatus.isSent && (
                  <div className="status-message success">
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn modern-btn"
                disabled={formStatus.isLoading}
              >
                {formStatus.isLoading ? (
                  <>
                    <div className="btn-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Font Awesome and fallback icons - Same as About section */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .info-header {
          margin-bottom: 2rem;
        }

        .info-header h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .info-header p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateX(10px);
          border-color: var(--primary-color);
        }

        .contact-icon {
          font-size: 2rem;
          min-width: 50px;
          text-align: center;
        }

        .contact-details h4 {
          color: white;
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .contact-value {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.25rem;
          text-decoration: none;
          display: block;
        }

        .contact-value.clickable:hover {
          color: var(--secondary-color);
          text-decoration: underline;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .social-section {
          margin-bottom: 2rem;
        }

        .social-section h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.2rem;
          position: relative;
          overflow: hidden;
        }

        .social-link i {
          font-family: "Font Awesome 6 Brands", "Font Awesome 6 Free";
          font-weight: 900;
          position: relative;
          z-index: 2;
        }

        .social-fallback {
          position: absolute;
          font-family: "Font Awesome 6 Brands", "Font Awesome 6 Free";
          font-weight: 900;
          font-size: 1.2rem;
          z-index: 1;
        }

        /* Hide fallback when Font Awesome icon is present */
        .social-link i:not(:empty) + .social-fallback {
          display: none;
        }

        /* Show fallback when Font Awesome fails */
        .social-link i:empty {
          display: none;
        }

        .social-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--hover-color, var(--primary-color));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          transform: translateY(-3px);
          border-color: var(--hover-color, var(--primary-color));
          color: white;
          background: var(--hover-color, var(--primary-color));
        }

        .social-link:hover i,
        .social-link:hover .social-fallback {
          color: white;
        }

        .availability-card {
          padding: 1.5rem;
        }

        .availability-header {
          margin-bottom: 1rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #10b981;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .availability-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .detail-icon {
          font-size: 1rem;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .form-header p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-form {
          padding: 2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: white;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--glass-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: vertical;
          font-family: inherit;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-secondary);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: var(--card-bg);
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .form-status {
          margin-bottom: 1.5rem;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 10px;
          font-weight: 500;
        }

        .status-message.loading {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .spinner,
        .btn-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
          }

          .contact-icon {
            min-width: auto;
          }

          .social-links {
            justify-content: center;
          }

          .availability-details {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1.5rem;
          }

          .info-header h3,
          .form-header h3 {
            font-size: 1.5rem;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
