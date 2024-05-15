// importing components
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css'

const Edit = () => {
  // setting useStates etc
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://664382d26c6a656587076309.mockapi.io/api/users/users/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [id]);

// creating function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    // Splitting the name by dot to access properties
    const propertyPath = name.split('.');
    let currentObject = updatedFormData;

    // Traverse through properties to update the value
    for (let i = 0; i < propertyPath.length; i++) {
      const property = propertyPath[i];
      if (i === propertyPath.length - 1) {
        currentObject[property] = value;
      } else {
        currentObject = currentObject[property];
      }
    }

    setFormData(updatedFormData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://664382d26c6a656587076309.mockapi.io/api/users/users/${id}`, formData);
      navigate("/users");
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    // Creating form to change the user values
    <div className="container mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Street:</label>
          <input type="text" className="form-control" name="address.street" value={formData.address.street} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Suite:</label>
          <input type="text" className="form-control" name="address.suite" value={formData.address.suite} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input type="text" className="form-control" name="address.city" value={formData.address.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Zipcode:</label>
          <input type="text" className="form-control" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Website:</label>
          <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name:</label>
          <input type="text" className="form-control" name="company.name" value={formData.company.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Catch Phrase:</label>
          <input type="text" className="form-control" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">BS:</label>
          <input type="text" className="form-control" name="company.bs" value={formData.company.bs} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Edit;
