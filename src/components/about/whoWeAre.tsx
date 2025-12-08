import React from 'react'
import whoweare from '../../assets/aboutus/whoweareimg.png'

const Whoweare = () => {
  return (
    <div className='bg-black h-[500px]'>
      <div className='flex items-center'>
        <div className='w-1/2 flex justify-center p-12'>
          <img src={whoweare}/>
        </div>
          <div className='w-1/2 justify-center p-12'>
          <div className='text-[#FBCA0C]'>
            WHO WE ARE
            </div>
            <div className='text-4xl pt-4'>
              Transforming Businesses in the<br/>
               Digital Age.
            </div>
            <div className='text-[#C9C9C9] pt-4'>
              Canary Digital is a forward-thinking digital solutions provider dedicated<br/>
              to delivering top-notch AI-powered software, web and mobile app<br/>
               development, and effective digital marketing strategies. Our team of<br/>
               experts is committed to driving your business success through technology<br/>
               and innovation.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Whoweare