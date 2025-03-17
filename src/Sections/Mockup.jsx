import React from 'react'

function Mockup() {
  return (
    <div className='w-full h-full pb-12 md:pb-24'>
        <div className='w-full h-fit flex flex-col md:flex-row justify-center items-center md:items-end relative  md:gap-0'>
            <div className="hidden md:block absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 w-[80%] h-[120%] mx-auto rounded-2xl -top-[15%]" />
            <div className="hidden md:block absolute inset-0 bg-blue-500/10 blur-[150px] -z-20 w-[90%] h-[130%] mx-auto rounded-2xl -top-[20%]" />
            
            {/* PC Image - Hidden on mobile */}
            <img 
              src="/pc.png" 
              alt="Desktop app mockup" 
              className='hidden md:block w-full md:w-[70%] max-w-[800px] rounded-2xl border border-slate-500 relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]'
            />
            
            {/* Budget Image */}
            <img 
              src="/budget.png" 
              alt="Mobile app mockup" 
              className='w-[300px] md:w-[250px] relative md:absolute md:right-22 z-20 md:-mb-16'
            />
        </div>
    </div>
  )
}

export default Mockup
