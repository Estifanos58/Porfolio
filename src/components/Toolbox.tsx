import { twMerge } from "tailwind-merge"
import TechIcon from "./TechIcon"
import { Fragment } from "react"


const Toolbox = ({toolBoxItems, className, itemWrapperclassName}:{toolBoxItems:Array<{title:string, icon:React.ElementType}>, className?:string, itemWrapperclassName?:string}) => {
  return (
    <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
        <div className="flex flex-none py-0.5 gap-6 pr-6">
          {[...new Array(2).fill(0)].map((_,index)=>{
            return <Fragment key={index}>
                    {
                toolBoxItems.map((tool)=>{
                return <div key={tool.title } className={twMerge("inline-flex items-center gap-4 py-2 px-3 outline outlinde-2 outline-white/20 rounded-lg",itemWrapperclassName)}>
                    <TechIcon component={tool.icon}/>
                    <span className="font-semibold">{tool.title}</span>
                </div>
                })
            }
            </Fragment>
          })}
          
        </div>
    </div>
  )
}

export default Toolbox