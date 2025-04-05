'use client'; // This is a Client Component

import { useState, useRef } from 'react';

export default function ImageUploader({images, setImages, cover, setCover, videos, setVideos}:{images: {id: number; url: string | ArrayBuffer | null; file: File }[],videos: {id: number; url: string | ArrayBuffer | null; file: File }[], setVideos: React.Dispatch<React.SetStateAction<{id: number; url: string | ArrayBuffer | null; file: File }[]>>,cover: any,setCover:any,  setImages: React.Dispatch<React.SetStateAction<{id: number; url: string | ArrayBuffer | null; file: File }[]>>}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
      if (!file.type.match('image.*') || !file.type.match('video.*')) {
        alert('Please upload only images or videos.');
        return;
      }

      const reader = new FileReader();
      
      reader.onload = () => {
        if(file.type.match('video.*')) {
          setVideos(prevVideos => [...prevVideos, {
            id: Date.now(), // simple unique id
            url: reader.result || null,
            file: file
          }]);
        }
        else if(file.type.match('image.*')) {
        setImages(prevImages => [...prevImages, {
          id: Date.now(), // simple unique id
          url: reader.result || null,
          file: file
        }]);
      }
      };
      
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id:any) => {
    setImages(prevImages => prevImages.filter(img => img.id !== id));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleCoverChange = (image:any)=> {
        if(cover.id === image.id) {
          setCover({id: 0, url: "", file: null});
        }
        else {
          setCover(image);
        }
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-serif font-bold mb-4">Image Uploader</h1>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*, video/*"
        multiple
        className="hidden"
        title="Upload images, Upload vidoes"
      />
      
      <button
        onClick={triggerFileInput}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Add Images
      </button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.length === 0 && videos.length === 0 && 
        (<div className="col-span-3 text-center text-gray-500">No images or videos uploaded yet.</div>)}
        {images.length !== 0 && 
        (<h2 className='text-center text-gray-500 text-2xl'>Selected Images</h2>)}
        {images.map((image) => (
          <div key={image.id} className="relative border rounded p-2">
            {cover.id === image.id && (
                <div className="absolute top-0 left-0 bg-green-500 text-white p-1 rounded">
                    Cover Image
                </div>
            )}
            <img 
              onClick={()=>handleCoverChange(image)}  
              src={image.url} 
              alt="Preview" 
              className="w-full h-32 object-cover"
            />
            <button
              onClick={() => removeImage(image.id)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        ))}
        {videos.length !== 0 && 
        (<h2 className='text-center text-gray-500 text-2xl'>Selected Videos</h2>)}
        {videos.map((video)=> (
              <div key={video.id} className="border rounded p-3 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                   (
                    <video 
                      src={video.url} 
                      controls
                      className="w-full h-auto max-h-48 rounded"
                    />
                  )
                  </div>
                  </div>
          ))}
      </div>
    </div>
  );
}