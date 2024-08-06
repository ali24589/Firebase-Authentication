import React from 'react'
import { useSelector } from 'react-redux'
function CustomerDetails() {
    const personalDetails=useSelector((state)=>state.customer)
  return (
    <>
      <div className='flex flex-col gap-y-2  border-2 border-gray-500 p-14 '>
     <div className=' flex w-96'>
      <p className='flex items-center size-36 text-center border-2 rounded-full'>
      {personalDetails.image && <img src={personalDetails.image} alt="Preview" className='size-36 rounded-full object-cover' />}
      {!personalDetails.image && <span className='text-wrap '>No Image Here</span>}
      </p>
     </div>
      
        <div className='font-bold font-serif p-2'><p>User Details</p>
        </div>
        <p className=' break-words text-wrap border border-black h-fit font-bold font-serif p-2'>Name:{personalDetails.name}</p>

        <div className=' break-words border border-black h-fit font-bold font-serif p-2'>Email:{personalDetails.email}</div>
        
        <div className=' break-words border border-black h-fit font-bold font-serif p-2'>Phone#:{personalDetails.phone}</div>
      </div>
    </>
  )
}

export default CustomerDetails
