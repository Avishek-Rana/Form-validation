import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.pan) errors.pan = "PAN is required";
    if (!formData.aadhar) errors.aadhar = "Aadhar is required";

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone No.</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Surat">Surat</option>
              <option value="Bangalore">Bangalore</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Dallas">Dallas</option>
              <option value="San Diego">San Diego</option>
              <option value="Chicago">Chicago</option>
              <option value="Seattle">Seattle</option>
              <option value="San Jose">San Jose</option>
            </>
          )}
          {formData.country === 'UK' && (
            <>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Brighton">Brighton</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Newcastle">Newcastle</option>
            </>
          )}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>PAN No.</label>
        <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
        {errors.pan && <span>{errors.pan}</span>}
      </div>
      <div>
        <label>Aadhar No.</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} />
        {errors.aadhar && <span>{errors.aadhar}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default Form;