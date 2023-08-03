import React, { useState } from 'react';

export default function GetNames() {
  const [inputData, setInputData] = useState({ Name: '', email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();

   
    if (inputData.Name && inputData.email && inputData.password) {
     
      window.location.href = '/pages/Home';
    } else {

      alert('All fields are required.');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <form className="Container" onSubmit={handleSubmit}>
      <div className="Container">
          <h2>Registration</h2>
        </div>
        <div className="Container">
          <input
            type="text"
            name="Name"
            placeholder="Enter your name"
            value={inputData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="Container">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={inputData.email}
            onChange={handleChange}
          />
        </div>
        <div className="Container">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={inputData.password}
            onChange={handleChange}
          />
          </div>



        <div className="Container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
