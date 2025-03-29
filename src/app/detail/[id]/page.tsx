import React from 'react'
import {portfolioProjects} from '@/app/utils/projects'
import { Header } from '@/sections/Header';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import CardHeader from '@/components/CardHeader';
import Card from '@/components/Card';
import { features } from 'process';
import Toolbox from '@/components/Toolbox';

const page = async ({params}: {params: Promise<{id: string}>}) => {

  const id = (await params).id;

  const project = portfolioProjects.filter((project)=> project.id == id)[0];
  return (
    <div className=''>
      <Header home="../#home" about="../#about" contact="../#contact" project="../#project"/>
      <div className="bg-gray-900 mt-10 flex flex-col justify-center items-center text-white min-h-screen py-12 px-6 md:px-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-center font-bold">{project.title}</h1>
        <p className="text-gray-400 text-center mt-2">{project.company} • {project.year}</p>

        {/* Image Section */}
        <div className="mt-6 flex justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
            className="rounded-lg shadow-lg border border-gray-700"
          />
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href={project.url_link}
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
        </div>

        {/* Description */}
        <p className="mt-6 mx-16 text-gray-300 text-lg ">{project.description}</p>

        {/* Features & Results */}
         
        <div className="mt-8 flex justify-center gap-5">
            <Card className="h-auto p-4 col-span-1">
            <CardHeader title="Features" description="Features of the app"/>
              {project.results.map((feature, index) => (
                <div key={index} className="text-gray-300 flex gap-2 mx-3 -mt-3 mb-4 font-semibold">
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <p>{feature.title}</p>
                </div>
              ))}
            </Card>
            <Card className="h-auto p-2 col-span-1">
                <CardHeader title="Tech Stack Used" description="Explore the technologies and tools I use to creft expectational digital experiences." className=""/>
                <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-6 pr-6">
                {
                  project?.tech.map((tech,index)=> (
                    <div key={index} className="inline-flex items-center gap-4 py-2 px-3 outline outlinde-2 outline-white/20 rounded-lg">  
                      <span className="font-semibold">{tech.title}</span>
                    </div>
                  ))
                }
                
                </div>
                </div>
            </Card>
            {/* <Card className="h-auto p-4 col-span-1">
            <CardHeader title="Another Features" description="Another Feature "/>
              {project?.otherResult.map((feature, index) => (
                <div key={index} className="text-gray-300 flex gap-2 mx-3 -mt-3 mb-4 font-semibold">
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <p>{feature.title}</p>
                </div>
              ))}
            </Card> */}
     
        </div>

        {/* Additional Features */}

       

        {/* Footer CTA */}
        <div className="mt-10">
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
    </div>
  )
}

export default page