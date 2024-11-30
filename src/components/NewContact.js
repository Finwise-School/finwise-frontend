import React, { useState } from 'react';
import contactImage from '../assets/images/contact-hero.svg'; // Update the path to match your project structure
import ContactFooter from './ContactFooter';
import CallToAction from './EarlyAccessTemplate';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        hearAboutUs: '',
        message: '',
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid Phone Number is required';
        if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry Type is required';
        if (!formData.hearAboutUs) newErrors.hearAboutUs = 'Please select how you heard about us';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.terms) newErrors.terms = 'You must agree to the Terms of Use and Privacy Policy';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('https://api.finwiseschool.com/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        phone: formData.phone,
                        inquiryType: formData.inquiryType,
                        hearAboutUs: formData.hearAboutUs,
                        message: formData.message,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    setSubmissionStatus('Contact form submitted successfully');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        inquiryType: '',
                        hearAboutUs: '',
                        message: '',
                        terms: false,
                    });
                } else {
                    setSubmissionStatus(result.message || 'Submission failed');
                }
            } catch (error) {
                console.error('Submission error:', error);
                setSubmissionStatus('Network error, please try again later');
            }
        }
    };

    return (
        <div className="bg-gradient-to-l from-black via-[rgba(128,0,255,0.2)] to-black font-inter flex flex-col min-h-screen m-0 p-0">
            {/* Top Section */}
            <div className="w-full flex flex-col md:flex-row p-6 md:p-12 bg-[#070707] items-center md:items-start">
                {/* Text Section */}
                <div className="flex-1 text-white text-center md:text-left mt-6 md:mt-10">
                    <h1 className="text-3xl text-left md:text-5xl font-semibold leading-tight mb-6">
                        <span className="text-[#9F9F9F]">Get in Touch</span><br />
                        with Finwise School
                    </h1>
                    <p className="text-base text-left md:text-lg leading-relaxed text-[#B1B1B1] mb-4">
                        Welcome to Finwise School Contact Us page. We're here to help you with any questions, feedback, or support you may need.
                    </p>
                    <p className="text-base text-left md:text-lg leading-relaxed text-[#B1B1B1] mb-4">
                        Whether you're looking to improve your financial literacy, need guidance on using our tools, or want to learn more about our rewards program.
                    </p>
                    <p className="text-base text-left md:text-lg italic text-white">
                        We're just a message away. Reach out to us, and let's start building your financial future together.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
                    <div className="w-[300px] h-[300px] md:w-[443px] md:h-auto">
                        <img
                            src={contactImage}
                            alt="Person holding a phone"
                            className="rounded-2xl object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full flex justify-center items-center bg-[#070707] py-12">
                <div className="w-full px-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Fill out the below form and we will get back to you.
                    </h2>
                    {/* Full Width Form Container with Glassy Effect */}
                    <div className="backdrop-blur-md shadow-lg rounded-lg p-8 border border-white w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid-for-calci grid-cols-1 md:grid-cols-3 gap-6">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter First Name"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Last Name"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Inquiry Type</label>
                                    <select
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    >
                                        <option value="">Select Inquiry Type</option>
                                        <option value="General">General Inquiry</option>
                                        <option value="Support">Support</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                    {errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>}
                                </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">How did you hear about us?</label>
                                <input
                                    type="text"
                                    name="hearAboutUs"
                                    value={formData.hearAboutUs}
                                    onChange={handleChange}
                                    placeholder="Enter how you heard about us"
                                    className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                />
                                {errors.hearAboutUs && <p className="text-red-500 text-sm">{errors.hearAboutUs}</p>}
                            </div>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <div className="flex items-center">
                                <label className="inline-flex items-center text-sm text-gray-300">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className="form-checkbox text-indigo-600"
                                    />
                                    <span className="ml-2">I agree to the <a href="#" className="text-indigo-400">Terms of Use</a> and <a href="#" className="text-indigo-400">Privacy Policy</a>.</span>
                                </label>
                                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8A3FF2] hover:[bg-[#4A3FF6]] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full sm:w-auto"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Submission Status */}
                    {submissionStatus && (
                        <p className={`text-lg mt-6 ${submissionStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                            {submissionStatus}
                        </p>
                    )}
                </div>
            </div>

            {/* Footer Section */}
            <ContactFooter />
            <CallToAction/>
        </div>
    );
};

export default ContactUs;
