import React from 'react'

const coreValues = () => {
  return (
    <div className='h-[550px] flex items-center justify-center '>
        <div className="flex items-center justify-center flex-col">
        <span className='text-[#FBCA0C] font-light text-sm'>CORE VALUES</span>
        <span className='text-4xl py-5'>Empowering Clients through Innovation</span>
        <div className='grid grid-cols-2 gap-15 mt-10'>
          <div className='bg-[#191919] flex flex-col border-0 rounded-lg p-5 w-[430px]'>
            <span className="text-[#FBCA0C] font-light text-3xl">Our Vision</span>
            <span className='text-[#C9C9C9] py-5 text-lg'>To lead in AI-Powered Digital Marketing,<br/>
               recognized for innovation, reliability, and<br/>
                delivering impactful results that drive client<br/>
                 success.</span>
          </div>
          <div className='bg-[#191919] border-0 rounded-lg flex flex-col p-5  w-[430px]'>
            <span className="text-[#FBCA0C] font-light text-3xl">Our Mission</span>
            <span className='text-[#C9C9C9] py-5 text-lg'>To lead in AI-Powered Digital Marketing,<br/>
               recognized for innovation, reliability, and<br/>
                delivering impactful results that drive client<br/>
                 success.</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default coreValues