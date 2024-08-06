import React,{useState} from 'react'
import { getDatabase,set,ref } from "firebase/database";
import {app} from '../Firebase/Firebase'

// import { NavLink } from 'react-router-dom';


function PutNewData() {
  const [userId, setuserId] = useState(1)
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
    const db=getDatabase(app)
    
    const putData=()=>{
        set(ref(db,`users/${userId}`),{
            id:userId,
            firstName:firstName,
            lastName:lastName,
        })
    }
    const handleClick= ()=>{
      putData();
      setuserId(userId +1)
      setfirstName('')
      setlastName('')
    }
  return (
    <>
    <div className='flex flex-col text-start gap-4 border border-black p-8 rounded'>
   <div className='flex flex-col'>
   <label>FirstName</label>
   <input type='text' className='border rounded p-2' value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
   </div> 
   <div className='flex flex-col'>
   <label>LastName</label>
   <input type='text' className='border rounded p-2' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
   </div>
    
      <button onClick={handleClick}
       className='bg-blue-600 p-2 rounded text-white'>PutData</button>
    </div>
     
    {/* <NavLink to='UsersList' className="bg-green-400 my-8 text-white py-1 px-2 rounded">Check List</NavLink> */}

    </>
  )
}

export default PutNewData
