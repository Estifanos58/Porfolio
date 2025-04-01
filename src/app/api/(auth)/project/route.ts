import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
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

  
};
