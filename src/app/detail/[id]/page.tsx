import React from 'react'
import {portfolioProjects} from '@/app/utils/projects'

const page = async ({params}: {params: Promise<{id: string}>}) => {

  const id = (await params).id;

  const project = portfolioProjects.filter((project)=> project.id == id)[0];
  return (
    <div>
      <div>
        <h3>{project.company}</h3>
      </div>
    </div>
  )
}

export default page