import { NextRequest, NextResponse } from "next/server";
import Project from "../../../../lib/model/project";

export const POST = async (req: NextRequest) => {

  try {
    const {
      company,
      year,
      title,
      results,
      url_link,
      github_link,
      backend_link,
      image,
      otherImage,
      tech,
      otherResult,
      description,
    } = await req.json(); 
    const { PORTFOLIO_API } = process.env;
  
    const project = new Project({
      company,
      year,
      title,
      results,
      url_link,
      github_link,
      backend_link,
      image,
      otherImage,
      tech,
      otherResult,
      description,
    })
  
    if(!project) {
      return new NextResponse("Project not created", { status: 500 });
    }
  
    return new NextResponse("Project created", { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } 
};


export const GET = async (req: NextRequest) => {
  try {
    const projects = await Project.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}