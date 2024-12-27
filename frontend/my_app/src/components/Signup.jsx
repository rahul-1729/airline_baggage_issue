import React, { useState } from "react";
import aeroplane from "../assets/aeroplane.png";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(formData.password)) {
      alert("Password must be at least 6 characters long and include both letters and numbers.");
      return;
    }  
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100  flex items-center justify-center p-7">

      
         <img 
    src={aeroplane}
    alt="Aeroplane" 
    class="absolute transform top-[70px] w-32 sm:w-40 md:w-48 lg:w-56 z-0 animate-move-left-to-right"
     />
     
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center text-gray-600">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700"
              required
            
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
