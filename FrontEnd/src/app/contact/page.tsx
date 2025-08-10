"use client";

import axios from "axios";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const copyToClipboard = async () => {
    const messageText = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || "No subject"}

Message:
${formData.message}`;

    try {
      await navigator.clipboard.writeText(messageText);
      setSubmitStatus({
        type: "success",
        message:
          "Message copied to clipboard! You can paste it in an email to mdmerajmridha34@gmail.com",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Could not copy to clipboard. Please manually copy your message.",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using your API endpoint
      const response = await axios.post("/api/send-email", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `New message from ${formData.name}`,
        message: formData.message,
      });

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        // Clear form after successful submission
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);

      // Fallback: Create a mailto link as backup
      const subject = encodeURIComponent(
        formData.subject ||
          `New message from ${formData.name} - Portfolio Contact`
      );
      const body = encodeURIComponent(
        `Hello Meraj,

You have received a new message from your portfolio contact form:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || "No subject"}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
You can reply directly to: ${formData.email}`
      );

      const mailtoLink = `mailto:mdmerajmridha34@gmail.com?subject=${subject}&body=${body}`;

      try {
        window.open(mailtoLink, "_blank");
        setSubmitStatus({
          type: "success",
          message:
            "Email service temporarily unavailable. Your email client has been opened as backup.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch {
        setSubmitStatus({
          type: "error",
          message:
            "Failed to send message. Please email me directly at mdmerajmridha34@gmail.com",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4 sm:px-0">
            Contact Me
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 sm:px-0 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let&apos;s discuss your next project or just have a conversation
            about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 lg:mb-8">
                Get In Touch
              </h2>
              <p
                className={`text-base sm:text-lg leading-relaxed mb-6 lg:mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about web
                development and technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:mdmerajmridha34@gmail.com"
                    className={`text-sm sm:text-base break-all transition-colors duration-200 hover:underline ${
                      isDarkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    mdmerajmridha34@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Phone</h3>
                  <a
                    href="tel:+8801997588476"
                    className={`text-sm sm:text-base transition-colors duration-200 hover:underline ${
                      isDarkMode
                        ? "text-green-400 hover:text-green-300"
                        : "text-green-600 hover:text-green-700"
                    }`}
                  >
                    +8801997588476
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Location
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Meraj2349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-meraj-mridha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-blue-400"
                      : "bg-gray-100 hover:bg-gray-200 text-blue-600"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:mdmerajmridha34@gmail.com"
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-green-400"
                      : "bg-gray-100 hover:bg-gray-200 text-green-600"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="/CV/Md Meraj Mridha-Resume.pdf"
                  download="Md_Meraj_Mridha_Resume.pdf"
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  title="Download CV"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-2xl p-4 sm:p-6 lg:p-8 ${
              isDarkMode ? "bg-gray-900/50" : "bg-gray-50"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send me a message
            </h3>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg border ${
                  submitStatus.type === "success"
                    ? isDarkMode
                      ? "bg-green-900/20 border-green-800 text-green-400"
                      : "bg-green-50 border-green-200 text-green-700"
                    : isDarkMode
                    ? "bg-red-900/20 border-red-800 text-red-400"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {submitStatus.type === "success" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.356 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    )}
                  </svg>
                  {submitStatus.message}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-black placeholder-gray-500"
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-black placeholder-gray-500"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-black placeholder-gray-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-black placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                    isSubmitting
                      ? isDarkMode
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Email
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center border ${
                    isDarkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
