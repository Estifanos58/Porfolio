'use client'; // This is a Client Component

import { useState, useRef } from 'react';

export default function ImageUploader({images, setImages}:{images: {id: number; url: string | ArrayBuffer | null; file: File }[], setImages: React.Dispatch<React.SetStateAction<{id: number; url: string | ArrayBuffer | null; file: File }[]>>}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
      if (!file.type.match('image.*')) {
        return;
      }

      const reader = new FileReader();
      
      reader.onload = () => {
        setImages(prevImages => [...prevImages, {
          id: Date.now(), // simple unique id
          url: reader.result || null,
          file: file
        }]);
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-serif font-bold mb-4">Image Uploader</h1>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        multiple
        className="hidden"
        title="Upload images"
      />
      
      <button
        onClick={triggerFileInput}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Add Images
      </button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative border rounded p-2">
            <img 
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
      </div>
    </div>
  );
}