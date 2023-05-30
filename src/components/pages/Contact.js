// import logo from './logo.svg';
import '../../App.css';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'This field is required.'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    // For this example, we're simply displaying the form data in the console
    console.log(formData);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    // Perform download logic here
    // For this example, we're simply displaying the form data in the console
    console.log('Downloading document');
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="contact">
        <div class="contact">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div class="contact">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div class="contact">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {errors.message && <span>{errors.message}</span>}
        </div >
        <button  type="submit">Submit</button>
      </form>
      <button  onClick={handleDownload}>Download Document</button>
    </>
  );
};

export default Contact;

