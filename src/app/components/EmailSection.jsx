"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.title.trim()) errors.title = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setEmailSubmitted(true);
        form.current.reset();
        setFormData({
          name: '',
          email: '',
          title: '',
          message: ''
        });
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Bhargavgk04">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/bhargav-katkam04">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <AnimatePresence>
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg"
            >
              Email sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-[#18191E] border ${
                    formErrors.name ? 'border-red-500' : 'border-[#33353F]'
                  } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-[#18191E] border ${
                    formErrors.email ? 'border-red-500' : 'border-[#33353F]'
                  } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="title"
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`bg-[#18191E] border ${
                    formErrors.title ? 'border-red-500' : 'border-[#33353F]'
                  } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                  placeholder="Just saying hi"
                />
                {formErrors.title && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-[#18191E] border ${
                    formErrors.message ? 'border-red-500' : 'border-[#33353F]'
                  } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                  placeholder="Let's talk about..."
                  rows="4"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EmailSection;
