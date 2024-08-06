import React, { useState } from 'react'
import {app} from '../Firebase/Firebase'
import { FcGoogle } from "react-icons/fc";
import { getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup
} from 'firebase/auth'
import { NavLink } from 'react-router-dom';
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
function Signup() {
    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const createUser=async()=>{
        console.log("working 1")
       await createUserWithEmailAndPassword(auth,Email,Password)
       .then((value)=> alert("Success"))
       setEmail('')
       setPassword('')
        
    }
    const signInWithGoogle=()=>{
      signInWithPopup(auth,googleProvider)
    }
  return (
    <div>
      <div className='flex flex-col w-80 h-fit p-4 border rounded gap-4 text-center'>
        <h1 className='font-bold'>Sign Up</h1>
        <div className='flex flex-col'>
        <label className='self-start '>Email:</label>
        <input type='email' required placeholder='Email' className='border   rounded  px-4 py-2' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col'>   <label className='self-start '>Password:</label>
        <input type='password' required placeholder='Password' className='border   rounded px-4 py-2 ' value={Password} onChange={(e)=>setPassword(e.target.value)}/></div>

      <button onClick={signInWithGoogle} className='border rounded p-2 flex items-center justify-center gap-3'>
        <span><FcGoogle/></span>
        <span>Sign in with Google</span>
      </button>
      <button type='button' className='bg-blue-600 text-white font-semibold rounded px-4 my-2 py-2'
      onClick={createUser}>Sign Up</button>
      <NavLink to='SignIn' className='bg-blue-600 text-white font-semibold rounded px-4 my-2 py-2'
      >Sign In</NavLink>
      
    </div>
   
    <NavLink to='UsersList' className="bg-green-400 my-8 text-white py-1 px-2 rounded">Check List</NavLink>
    <NavLink to='PutNewData'className=" bg-yellow-500 my-8 text-white py-1 px-2 rounded" >PUTDATA</NavLink>
    </div>
    
  )
}

export default Signup
