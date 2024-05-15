// importing components
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Create = () => {
  //  setting states
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

  //  setting function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //  setting function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://664382d26c6a656587076309.mockapi.io/api/users/users", formData);
      navigate("/users");
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    // Creating form for getting user details
    <div className="container mt-5">
      <h2 className="form-title">Create UserDetails</h2>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder ="Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} placeholder = "Username" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Address:</label>
            <input type="text" className="form-control mb-2" name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" />
            <input type="text" className="form-control mb-2" name="address.suite" value={formData.address.suite} onChange={handleChange} placeholder="Suite" />
            <input type="text" className="form-control mb-2" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" />
            <input type="text" className="form-control" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Zipcode" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder ="Phone" />
          </div>
          <div className="mb-3">
            <label className="form-label">Website:</label>
            <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} placeholder="Website"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Company:</label>
            <input type="text" className="form-control mb-2" name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" />
            <input type="text" className="form-control mb-2" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" />
            <input type="text" className="form-control" name="company.bs" value={formData.company.bs} onChange={handleChange} placeholder="BS" />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
