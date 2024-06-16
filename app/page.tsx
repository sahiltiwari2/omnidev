import React from 'react'
import LandingPart from '../components/homePage/landingPart'
import WebCourses from '@/components/homePage/webCourses'
import AppCourses from '@/components/homePage/appCourses'
import CloudCourses from '@/components/homePage/couldCourses'
import CouseUSP from '@/components/homePage/courseUSP'
const page = () => {
  return (
    <div><LandingPart/>
    <CouseUSP/>
    <div className="text-center text-2xl mt-32 font-bold text-black animate-slide-in-from-bottom transition">
                ⚡Register Now⚡
            </div>
    <WebCourses/>
    <AppCourses/>
    <CloudCourses/>
    </div>
  )
}

export default page