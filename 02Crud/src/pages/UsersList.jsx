import { getDatabase, onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../Firebase/Firebase";

function UsersList() {
  const db = getDatabase(app);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const starCountRef = ref(db, `users`);
      onValue(starCountRef, (snapshot) => {
        const fetchData = snapshot.val();
        if (fetchData) {
          setData(Object.values(fetchData));
        }
      });
    };
    getData();
  }, [db]);

  const handleDelete = async (id) => {
    try {
      await remove(ref(db, `users/${id}`));
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        {data.length > 0 ? (
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
              {data?.map((user) => (
                <tr key={user.id}>
                  <td className="px-4">{user.id}</td>
                  <td className="px-4">{user.firstName}</td>
                  <td className="px-4">{user.lastName}</td>
                  <td className="px-4">
                    <button
                      className="rounded text-white px-4 py-2 bg-green-500 mr-2"
                      onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded text-white px-4 py-2 bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default UsersList;
