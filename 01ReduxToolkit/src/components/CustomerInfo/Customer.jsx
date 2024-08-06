import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage, setName, setEmail, setPhone, resetInfo } from '../../App/features/personalInfo/authSlice';

function Customer() {
    const dispatch = useDispatch();
    const customerInfo = useSelector((state) => state.customer);
    const fileInputRef = useRef(null);

    const handleName = (e) => dispatch(setName(e.target.value));
    const handleEmail = (e) => dispatch(setEmail(e.target.value));
    const handlePhone = (e) => dispatch(setPhone(e.target.value));

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(setImage(reader.result));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to local storage
        localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
        alert('Data saved to local storage');
    };

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetInfo());
        // Remove form data from local storage
        localStorage.removeItem('customerInfo');
        // Clear the file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        alert('Data removed from local storage');
    };

    return (
        <>
            <div className='mt-2 w-96'>
                <form className='flex flex-col gap-y-2 border-2 border-gray-500 p-14'>
                    <h3 className='font-bold font-serif'>Personal Info</h3>
                    
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                    <input
                        type='text'
                        placeholder='Please Enter Name:'
                        className='border border-black p-2 rounded'
                        value={customerInfo.name}
                        onChange={handleName}
                    />

                    <input
                        type='email'
                        placeholder='Please Enter Email:'
                        className='border border-black p-2 rounded'
                        value={customerInfo.email}
                        onChange={handleEmail}
                    />

                    <input
                        type='tel'
                        placeholder='Please Enter Phone#'
                        className='border border-black p-2 rounded'
                        value={customerInfo.phone}
                        onChange={handlePhone}
                    />

                    <div className='flex justify-between'>
                        <button
                            className='bg-red-700 text-white w-fit px-2'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button
                            className='bg-red-700 text-white w-fit px-2'
                            onClick={handleReset}
                        >
                            Remove
                        </button>
                    </div> 
                </form>
            </div>
        </>
    );
}

export default Customer;
