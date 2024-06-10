import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    collegeName: '',
    state: '',
    stream: '',
    graduationYear: '',
    codingClub: '',
    stemStrength: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = 'Full name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.collegeName) errors.collegeName = 'College name is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.stream) errors.stream = 'Stream is required';
    if (!formData.graduationYear) errors.graduationYear = 'Graduation year is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_dl9gc4c', 'template_ssnjqxs', e.target, 'RKwZawYGLrKAz67nd')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Campus Ambassador in 3 simple steps</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">College Email ID</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name of the College</label>
          <input
            type="text"
            name="collegeName"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.collegeName}
            onChange={handleChange}
          />
          {errors.collegeName && <p className="text-red-500 text-sm">{errors.collegeName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location (State) of Your College</label>
          <input
            type="text"
            name="state"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Stream</label>
          <input
            type="text"
            name="stream"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.stream}
            onChange={handleChange}
          />
          {errors.stream && <p className="text-red-500 text-sm">{errors.stream}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Graduation Year</label>
          <input
            type="text"
            name="graduationYear"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.graduationYear}
            onChange={handleChange}
          />
          {errors.graduationYear && <p className="text-red-500 text-sm">{errors.graduationYear}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Are you a part of any coding club in your college?</label>
          <input
            type="text"
            name="codingClub"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.codingClub}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">What is the strength of STEM students in your college?</label>
          <input
            type="text"
            name="stemStrength"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.stemStrength}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
