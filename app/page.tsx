import React from 'react'
import LandingPart from '../components/homePage/landingPart'
import WebCourses from '@/components/homePage/webCourses'
import AppCourses from '@/components/homePage/appCourses'
import CloudCourses from '@/components/homePage/couldCourses'
const page = () => {
  return (
    <div><LandingPart/>
    <WebCourses/>
    <AppCourses/>
    <CloudCourses/>
    </div>
  )
}

export default page