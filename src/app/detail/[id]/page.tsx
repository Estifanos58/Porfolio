'use client';
import React , {Fragment, useState} from 'react'
import {portfolioProjects} from '@/app/utils/projects'
import { Header } from '@/sections/Header';
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import CardHeader from '@/components/CardHeader';
import Card from '@/components/Card';
import { ChevronRight, ChevronLeft } from "lucide-react"

const page = ({params}: {params: {id: string}}) => {
  const [selectedImage, setSelectedImage] = useState({})

  const id = (params).id;
  const handleClose = (e) => {
    // Check if the click happened on the backdrop (not inside the image)
    if (e.currentTarget === e.target) {
      setSelectedImage({});
    }
  };

  const handleLeftClick = () => {
    let currentIndex = project.otherImage.findIndex(img => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(project.otherImage[currentIndex - 1]); // Go to the previous image
    } else {
      setSelectedImage(project.otherImage[project.otherImage.length - 1]); // Wrap around to the last image
    }
  };
  

  const handleRightClick = () => {
    let currentIndex = project.otherImage.findIndex(img => img.id === selectedImage.id);
    if (currentIndex < project.otherImage.length - 1) {
      setSelectedImage(project.otherImage[currentIndex + 1]); // Go to the next image
    } else {
      setSelectedImage(project.otherImage[0]); // Wrap around to the first image
    }
  };
  


  const project = portfolioProjects.filter((project)=> project.id == id)[0];
  return (
    <>
    {selectedImage.id ? 
      <div onClick={(e)=>handleClose(e)} className='relative h-[100vh] flex justify-center items-center'>
        <div  className='absolute inset-0 bg-black/50 backdrop-blur-xl blur-2xl z-[-1]'></div>
        <div className='relative z-10 flex justify-center items-center  shadow-lg'>
          <div onClick={handleLeftClick} className='h-[300px] flex items-center'>
            <ChevronLeft  />
          </div>
          <Image
            src={selectedImage.image}
            className='h-[90%] w-[90%] rounded-lg shadow-lg'
            alt={selectedImage.title}
          />
          <div onClick={handleRightClick} className='h-[300px] flex items-center'>
            <ChevronRight />
          </div>
        </div>
      </div>
     :
    <div className='relative'>
      
      <Header home="../#home" about="../#about" contact="../#contact" project="../#project"/>
      <div className="bg-gray-900 mt-10 flex flex-col lg:justify-center items-center text-white min-h-screen py-12 px-6 ">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-center font-bold font-serif tracking-wider">{project.title}</h1>
        <p className="text-gray-400 text-center mt-2">{project.company} • {project.year}</p>

        {/* Image Section */}
        <div className="mt-6 flex justify-center items-center">
          <Image
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-lg border h-auto w-[400px] md:w-[900px] border-gray-700"
          />
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href={`https://${project.url_link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition"
          >
            Live Demo 
          </a>
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
            >
              GitHub Repo 
            </a>
          )}
          {
            project.backend_link && (
              <a
              href={project.backend_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
            >
              Backend Code
            </a>
            )
          }
        </div>
        <div className='lg:mx-10'>
          <div className='flex flex-wrap justify-center gap-2 mt-6'>
          {
            project?.otherImage && project?.otherImage.map((item, index) => {
              return <div key={index} onClick={()=>setSelectedImage(item)} className="mt-6 cursor-pointer flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg h-[100px] w-[100px] shadow-lg border border-gray-700"
                />
              </div>
            })
          }
          </div>
          
        </div>

        {/* Description */}
        <p className="mt-6 lg:mx-16 text-gray-300 text-lg ">{project.description}</p>

        {/* Features & Results */}
         
        <div className="mt-8 flex flex-col items-center mx-auto  md:flex-row md:justify-center gap-5">
            <Card className="h-auto p-4 md:p-6 md:w-[600px]">
            <CardHeader title="Features" description="Features of the app"/>
              {project.results.map((feature, index) => (
                <div key={index} className="text-gray-300 flex gap-2 mx-3 -mt-3 mb-4 font-semibold">
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <p>{feature.title}</p>
                </div>
              ))}
            </Card>
            <Card className="h-auto w-[400px] lg:w-auto p-2 pb-4">
                <CardHeader title="Tech Stack Used" description="Explore the technologies and tools I use to creft expectational digital experiences." className=""/>
                <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-6 pr-6">
                  {
                    [...new Array(2).fill(0)].map((_,index)=>{
                      return <Fragment key={index}>{
                          project?.tech.map((tech,index)=> (
                          <div key={index} className="inline-flex items-center py-2 px-3 pr-3 outline outlinde-2 outline-white/20 rounded-lg  animate-move-right [animation-duration:15s]">  
                            <span className="font-semibold">{tech.title}</span>
                          </div>
                        ))
                      }
                      </Fragment>
                    })
                  }

                </div>
                </div>
            </Card>
        </div>
      

        {/* Footer CTA */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-gray-400">
            Want to learn more about this project or work with me?
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block mt-3 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
    </div>}
    </>
  )
}

export default page