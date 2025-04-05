'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { InputField } from '@/components/InputField';
import OtherInput from '@/components/OtherInput';
import { Textarea } from '@/components/ui/textarea';
import ImageUploader from '@/components/ImageUploader';

function page() {
  const [mainfeatures, setMainfeatures] = useState<string[]>([]);
  const [stacks, setStacks] = useState<string[]>([]);
  const [otherfeatures, setOtherfeatures] = useState<string[]>([]);
  const [images, setImages] = useState<{ id: number; url: string | ArrayBuffer | null; file: File }[]>([]);
  const [videos, setVideos] = useState<{ id: number; url: string | ArrayBuffer | null; file: File }[]>([]);
  const [coverimage, setCoverimage] = useState({});
  const [otherfeature, setOtherfeature] = useState("");
  const [stack, setStack] = useState("");
  const [main, setMain] = useState("");
    
  return (
    <div>
        <div>
            <h1 className='text-center font-serif text-5xl mt-2'>Create a Project</h1>
        </div>
        <div className='mx-10 mt-7 flex flex-col items-center'>
            <h2 className='text-center font-serif text-2xl'>Fill the Boxs bellow</h2>
            <div className= 'grid grid-cols-3 mt-3 gap-1 7'>
              <InputField name={"Company"} placeholder={"Enter the Company name if not provide the Personal Project"}/>
              <InputField name={"Year"} placeholder={"Enter year of development"}/>
              <InputField name={"Title"} placeholder={"Enter Projet Title"}/>
            </div>

            <div className='flex gap-2'>
              <OtherInput title={"Enter Main Features of the Project"} selectedArray={mainfeatures} setSelectedArray={setMainfeatures} selectedItem={main} setSelectedItem={setMain}/>
              <OtherInput title={"Enter The Stacks Used in the  Project"} selectedArray={stacks} setSelectedArray={setStacks} selectedItem={stack} setSelectedItem={setStack}/>
            </div>

            <div className='flex gap-3 justify-between'>
              <div>
                <OtherInput title={"Enter Other Features about the Project"} selectedArray={otherfeatures} setSelectedArray={setOtherfeatures} selectedItem={otherfeature} setSelectedItem={setOtherfeature}/>
              </div>
              <div className='border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2'>
                <InputField name={"URL-Link"} placeholder={"Enter the URL link of the Project"}/>
                <InputField name={"Github-Link"} placeholder={"Enter the Github link of the Project"}/>
                <InputField name={"Backend-Link"} placeholder={"Enter the Backend link of the Project"}/>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2">
                <h2 className="text-center text-xl font-serif">Project Description</h2>
                <Textarea className='w-full h-[300px] resize-none' placeholder='Enter a description about the project'/>
              </div>
              <div className="border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2">
                <h3 className="text-center text-xl font-serif">Picture</h3>
                <ImageUploader videos={videos} setVideos={setVideos} images={images} cover={coverimage} setCover={setCoverimage} setImages={setImages}/>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default page


