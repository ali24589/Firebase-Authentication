import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function UserList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editUser, setEditUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`);
       setData(data.filter(user => user.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const handleEdit = async (id) => {
    const userToEdit = data.find(user => user.id === id);
    setEditUser(userToEdit);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${editUser.id}`, editUser);
      setData(data.map(user => (user.id === editUser.id ? editUser : user)));
      setEditUser(null);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-2xl font-serif mt-10">Users List</h2>
        <NavLink to='AddUser' className="bg-blue-500 self-end text-white px-6 py-2 rounded m-2">Add User</NavLink>
        {loading && <div className="font-semibold justify-center">Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <div className="w-full">
          {data.map((user) => (
            <div key={user.id} className="border mb-4 rounded-sm">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="px-4">Id</th>
                    <th className="px-4">FirstName</th>
                    <th className="px-4">LastName</th>
                    <th className="px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4">{user.id}</td>
                    <td className="px-4">{user.firstName}</td>
                    <td className="px-4">{user.lastName}</td>
                    <td className="px-4">
                      <button className="rounded text-white px-4 py-2 bg-green-500 mr-2"
                      onClick={() => handleEdit(user.id)}
                      >
                        Edit
                      </button>
                      <button className="rounded text-white px-4 py-2 bg-red-600"
                      onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      {editUser  && (
        <div className="flex flex-col items-center mt-4">
          <h3 className="font-bold text-xl">Edit User</h3>
          <form onSubmit={handleUpdate} className="flex flex-col w-1/3">
            <label className="mb-2">
              FirstName:
              <input
                type="text"
                name="firstName"
                value={editUser.firstName}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            </label>
            <label className="mb-2">
              LastName:
              <input
                type="text"
                name="lastName"
                value={editUser.lastName}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Update
            </button>
          </form>
        </div>
      )}

    </>
  );
}

export default UserList;
