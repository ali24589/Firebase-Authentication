// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/';

function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName };

    try {
        axios.post(API_URL, newUser);
      // Clear the form
      setFirstName('');
      setLastName('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className='flex flex-col border w-96 rounded p-8 gap-10 text-start'>
      
      <h2 className='self-center font-bold'>Add New User</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-10'  >
        <div className='flex flex-col'>
        <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required className='border px-4 py-2 rounded ' placeholder='FirstName'
          />
        </div>
        <div className='flex flex-col'>
        <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required className='border px-4 py-2 rounded ' placeholder='LastName'
          />
        </div>
        <button type="submit" className='bg-blue-500 rounded px-4 py-2 text-white'>Add User</button>
      </form>
    </div>
    </div>
  
    </>
    
  );
}

export default AddUser;
