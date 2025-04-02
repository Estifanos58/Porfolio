'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { InputField } from '@/components/InputField';

function page() {
  const [mainfeatures, setMainfeatures] = useState<string[]>([]);
  const [stacks, setStacks] = useState<string[]>([]);
  const [stack, setStack] = useState("");
  const [main, setMain] = useState("");
    
  return (
    <div>
        <div>
            <h1 className='text-center text-3xl mt-2'>Create a Project</h1>
        </div>
        <div className='mx-10'>
            <h2 className='text-center'>Fill the Boxs bellow</h2>
            <div className= 'grid grid-cols-3 gap-1'>
              <InputField name={"Company"} placeholder={"Enter the Company name if not provide the Personal Project"}/>
              <InputField name={"Year"} placeholder={"Enter year of development"}/>
              <InputField name={"Title"} placeholder={"Enter Projet Title"}/>
            </div>
            <div className='flex gap-2 mx-auto'>
              <div className='border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2'>
                <h2 className='text-center font-serif text-lg'>Enter Main Feauters of the Project</h2>
                <div>
                  {
                    mainfeatures.map((item, index) => (
                      <div key={index} className='flex bg-slate-300 mb-2 text-black p-3 rounded-md gap-2 justify-between items-center'>
                        <p>{item}</p>
                        <button onClick={() => {
                          setMainfeatures(mainfeatures.filter((_, i) => i !== index))
                          }} className='bg-red-500 p-2 rounded-lg text-white'>Remove</button>
                      </div>
                    ))
                  }
                  <div className='flex gap-2 items-center'>
                  <Input className='' value={main} onChange={(e)=>setMain(e.target.value)}/>

                    <button className=' bg-emerald-600 border-white p-2 rounded-lg' onClick={() => {
                      if(main === "") return;
                      setMainfeatures([...mainfeatures, main])
                      setMain("")
                      }}>Add</button>
                  </div>
                  
                </div>
              </div>
              <div className='border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2'>
                <h2 className='text-center font-serif text-lg'>Enter The Stacks Used in the  Project</h2>
                <div>
                  {
                    stacks.map((item, index) => (
                      <div key={index} className='flex bg-slate-300 mb-2 text-black p-3 rounded-md gap-2 justify-between items-center'>
                        <p>{item}</p>
                        <button onClick={() => {
                          setStacks(stacks.filter((_, i) => i !== index))
                          }} className='bg-red-500 p-2 rounded-lg text-white'>Remove</button>
                      </div>
                    ))
                  }
                  <div className='flex gap-2 items-center'>
                  <Input className='' value={stack} onChange={(e)=>setStack(e.target.value)}/>

                    <button className=' bg-emerald-600 border-white p-2 rounded-lg' onClick={() => {
                      if(stack === "") return;
                      setStacks([...stacks, stack])
                      setStack("")
                      }}>Add</button>
                  </div>
                  
                </div>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default page


