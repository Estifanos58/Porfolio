import React from 'react'

const SideName = () => {
  return (
    <div className=" hidden md:flex absolute flex-col gap-10 items-center md:top-[600px] lg:top-[500px] lg:h-[500vh] md:h-[400vh] ">
        <div className="border-white border-2 h-[400px]" style={{
        writingMode:'vertical-rl'
        }}></div>
        <p className="lg:text-[50px] md:text-[30px] font-serif font-bold tracking-[10px]"  style={{
        writingMode: 'vertical-rl',
        }}>Estifanos Kebede - Full Stack Web Developer</p>
        <div className=" border-white border-2 h-[400px]" style={{
        writingMode:'vertical-rl'
        }}></div>
    </div>
  )
}

export default SideName