import { getDatabase, ref, onValue, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { app } from "../Firebase/Firebase";

function EditUser() {
  const { id } = useParams();
  const db = getDatabase(app);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userRef = ref(db, `users/${id}`);
      onValue(userRef, (snapshot) => {
        const user = snapshot.val();
        if (user) {
          setFirstName(user.firstName);
          setLastName(user.lastName);
        }
      });
    };
    getUser();
  }, [db, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(ref(db, `users/${id}`), {
        firstName,
        lastName,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col text-start gap-4 border mt-8 border-black p-8 rounded">
        <div className="flex flex-col">
          <label>FirstName</label>
          <input
            type="text"
            className="border rounded p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>LastName</label>
          <input
            type="text"
            className="border rounded p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 p-2 rounded text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUser;
