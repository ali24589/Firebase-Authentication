import {getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../Firebase/Firebase'
import React,{useState} from 'react'

const auth=getAuth(app)

function SignIn() {

    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const signInUser=()=>{
        signInWithEmailAndPassword(auth,Email,Password)
            .then((value)=>console.log(value))
            .catch(err => console.log(err)
            )
            setEmail('')
            setPassword('')
            
    }
  return (
    <div className='flex flex-col h-fit w-80 p-4 border rounded gap-6 text-center'>
    <h1 className='font-bold'>Sign In</h1>
    <div className='flex flex-col'>
    <label className='self-start '>Email:</label>
  <input
   type='email'
      required
      placeholder='Enter Your Email'
      className='border rounded  px-4 py-2' 
      value={Email} 
      onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    
      <div className='flex flex-col'>
      <label className='self-start '>Password:</label>
  <input type='password'
    required
    placeholder='Enter Your Password Here' className='border   rounded px-4 py-2 '
    value={Password}
    onChange={(e)=>setPassword(e.target.value)}
    />
      </div>
  

  <button type='button' className='bg-blue-600 text-white font-semibold rounded px-4 my-2 py-2'
  onClick={signInUser}>Sign In</button>
</div>
  )
}

export default SignIn
