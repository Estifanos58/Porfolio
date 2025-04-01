'use client'
import axios from 'axios';
import React, { useState } from 'react'

function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async()=>{
        try {
            if(!email || !password){
                alert("Please fill all the fields")
                return;
            }
            const response = await axios.post("http://localhost:3000/api/auth/login", {email, password},{withCredentials: true});
            if(response.status === 200){
                alert("Login Successful")
            }
        } catch (error) {
            
        }
    }   
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Login Page</h1>
        <div className='flex flex-col gap-4 mt-4'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Username' className='border-2 border-gray-300 p-2 rounded-md' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='border-2 border-gray-300 p-2 rounded-md' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
        </div>
    </div>
  )
}

export default page