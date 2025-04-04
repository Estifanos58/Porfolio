'use client'

import ArrawUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    tilte:'github',
    href:'https://www.linkedin.com/in/estifanos-kebede',
  },
  {
    tilte:'estifkebe08@gmail.com',
  },
  {
    tilte:'LinkedIn',
    href:'https://github.com/Estifanos58',
  },
]


export const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='relative overflow-x-clip z-10'>
    <div className="absolute  h-[400px] md:h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
    <div className="container z-10">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col gap-8 md:flex-row md:justify-between items-center'>
        <div className='text-white/40 '>&copy;{` ${year}. All rights reserved`}</div>
        <nav className='flex flex-col md:flex-row items-center gap-8'>
          {
            footerLinks.map((link) => {
              return <a onClick={()=> alert("hi")} href={link.href} className='z-10 inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.tilte}</span>
                <ArrawUpRightIcon className="size-4"/>
              </a>
            })
          }
        </nav>
      </div>
    </div>
  </footer>;
};
