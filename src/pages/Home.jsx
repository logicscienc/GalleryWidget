import React from 'react'
import GalleryWidget from '../components/GalleryWidget'
import TabWidget from '../components/TabWidget'
import Rectangle from "../../images/Rectangle.png"

const Home = () => {
  return (
    <div className="min-h-screen flex justify-end"
     style={{
       background: 'linear-gradient(180deg, #373E44 0%, #191B1F 100%)',
       boxShadow: '10px 10px 40px 10px rgba(0,0,0,0.5)',
     }}
     >
      <div className="hidden lg:block flex-1"></div>
      <div className="flex flex-col space-y-6">
             <TabWidget/>

              <div
    className="w-[612px] h-[4px] rounded-[2.46px] mx-auto mt-[21px] mr-[140px]"
   
  > <img src={Rectangle} alt="" /></div>
             <GalleryWidget/>

              <div
    className="w-[612px] h-[4px] rounded-[2.46px] mx-auto mt-[21px] mr-[140px]"
   
  > <img src={Rectangle} alt="" /></div>
      </div>
    </div>
  )
}

export default Home 


