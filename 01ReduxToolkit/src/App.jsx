import CustomerDetails from './components/customerDetails/CustomerDetails'
import Customer from './components/CustomerInfo/Customer'
import { useSelector } from 'react-redux'

function App() {
  const personalDetails=useSelector((state)=>state.customer)
  return (
    <>
    <div className=' container justify-evenly flex gap-4 items-center h-screen'>
    <div className='flex  w-96 flex-col gap-y-2 border-2 border-gray-500 p-4'>
    <div className='font-bold font-serif p-2'><h2>User Details</h2>
        </div>
        <div className='w-full  text-wrap h-fit font-bold font-serif p-2 break-words'>Name:{personalDetails.name}</div>

        <div className='w-full  h-fit font-bold font-serif p-2 break-words'>Email:{personalDetails.email}</div>
        <div className='w-full  h-fit font-bold font-serif p-2 break-words'>Phone#:{personalDetails.phone}</div>
    </div>
      
    
    <Customer/>
    <CustomerDetails/>
   
    </div>
  
    </>
  )
}

export default App
