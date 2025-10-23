import React from 'react'
import GalleryWidget from '../components/GalleryWidget'
import TabWidget from '../components/TabWidget'

const Home = () => {
  return (
    <div className="min-h-screen flex gap-[57px]"
     style={{
       background: 'linear-gradient(180deg, #373E44 0%, #191B1F 100%)',
       boxShadow: '10px 10px 40px 10px rgba(0,0,0,0.5)',
     }}
     >
      <div className="flex-1"></div>
      <div className="flex flex-col space-y-6">
             <TabWidget/>

              <div
    className="w-[612px] h-[4px] rounded-[2.46px] mx-auto mt-[21px] mr-[140px]"
    style={{
      background: 'linear-gradient(90deg, #282828 0%, #F8F8F8 100%)',
      boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.33)',
      backdropFilter: 'blur(9.84px)',
    }}
  ></div>
             <GalleryWidget/>
      </div>
    </div>
  )
}

export default Home

