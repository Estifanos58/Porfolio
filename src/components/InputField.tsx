import { Input } from "./ui/input"

export const InputField = ({name, placeholder}:{name:string, placeholder:string}) => {
    return (
    <div className='flex w-[90%] mt-3 gap-2 items-center'>
        <p className='w-auto font-serif'>{`${name}`}</p>
        <Input className=' w-auto outline-none border-1 border-white' placeholder={`${placeholder}`} />
    </div>    
    )
  }