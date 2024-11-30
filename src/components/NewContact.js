import React, { useState } from 'react';
import contactImage from '../assets/images/contact-hero.svg'; // Update the path to match your project structure
import ContactFooter from './ContactFooter';
import EarlyAccessTemplate from './EarlyAccessTemplate';

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
                        subject: formData.inquiryType,
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
        <div className="">
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




            <hr className="mt-0 w-full h-0.5 bg-gray-900 border-0 dark:bg-gray-900 mb-4" />
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-gray-200 mb-6">
                    Fill out the below form and we will get back to you.
                </h2>
                <div className="bg-[#070707] shadow-md rounded-lg p-8 mb-12 border-solid border-2 border-gray-400">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid-for-calci grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-200">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter First Name"
                                    className={`mt-1 block w-full px-4 py-2 bg-transparent  bg-transparent border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter Last Name"
                                    className={`mt-1 block w-full px-4 py-2  bg-transparent border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email"
                                    className={`mt-1 block w-full px-4 py-2  bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    className={`mt-1 block w-full px-4 py-2  bg-transparent border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200">Inquiry Type</label>
                                <select
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2  bg-black border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                >
                                    <option value="">Select Inquiry Type</option>
                                    <option value="general">General</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Support</option>
                                </select>
                                {errors.inquiryType && <p className="text-red-500 text-sm">{errors.inquiryType}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200">How Did You Hear About Us?</label>
                                <select
                                    name="hearAboutUs"
                                    value={formData.hearAboutUs}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2  bg-black border ${errors.hearAboutUs ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                >
                                    <option value="">Select</option>
                                    <option value="social_media">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="web_search">Web Search</option>
                                </select>
                                {errors.hearAboutUs && <p className="text-red-500 text-sm">{errors.hearAboutUs}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Enter your Message here."
                                className={`mt-1 block w-full px-4 py-2  bg-transparent border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>


                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                            <div className="flex items-center mb-4 md:mb-0">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className={`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ${errors.terms ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-200">
                                    I agree with <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Use and Privacy Policy</a>
                                </label>
                                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
                            </div>


                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full sm:w-auto"
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </div>
                    </form>
                    {submissionStatus && (
                        <div className="mt-6 text-center">
                            <p className={submissionStatus.includes('success') ? 'text-purple-300' : 'text-red-600'}>
                                {submissionStatus}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <ContactFooter />

            <EarlyAccessTemplate />
        </div>

    );
};

export default ContactUs;
