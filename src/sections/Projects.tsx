import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrawUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { portfolioProjects } from "@/app/utils/projects";
import Link from "next/link";


export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-10">
      <div className="container">
        <SectionHeader title="Real-world Results" eyebrow="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => {
            return (
              <Card className="lg:pt-16 lg:px-20 px-8 pt-8 md:pt-12 md:px-10 pb-0 sticky" style={{
                top:`calc(64px + ${index * 40}px)`
              }}>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span> &bull; </span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((results) => {
                    return (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                       </li>
                    );
                  })}
                </ul>
                <div className="flex gap-2">
                  {
                    project?.url_link && <a href={project.url_link}>
                    <button className="bg-white text-gray-950  h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Live</span>
                      <ArrawUpRightIcon className="size-4" />
                    </button>
                  </a>
                  }
                  
                  <a href={project.github_link}>
                    <button className="bg-white/10 text-white-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Github</span>
                      <ArrawUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <Link href={`/detail/${project.id}`}>
                    <button className="bg-white/50 text-white-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        <span>Detail</span>
                      </button>
                  </Link>
                </div>
               
                </div>
                <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-md-0 lg:mt-0 lg:absolute lg:h-[400px] lg:w-[700px] lg:max-w-none"
                />
                </div>
              </div>            
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
