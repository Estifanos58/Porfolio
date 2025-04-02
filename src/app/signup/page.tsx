'use client'
import axios from 'axios';
import React, { useState } from 'react'

function page() {
    const [email, setEmail] = useState("");

    const handleSubmit = async()=>{
        try {
            if(!email){
                alert("Please fill all the fields")
                return;
            }
            const response = await axios.post("http://localhost:3000/api/auth/signup", {email},{withCredentials: true});
            if(response.status === 200){
                alert("Login Successful")
            }

            if(email) {
                alert('navigate to login')
            }
        } catch (error) {
            alert("Eror happened")
        }
    }   
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>SignUp Page</h1>
        <div className='flex flex-col gap-4 mt-4'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Emial' className='border-2 border-gray-300 p-2 rounded-md' />
            <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md'>Sign Up</button>
        </div>
    </div>
  )
}

export default page