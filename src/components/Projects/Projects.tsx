import React from 'react'
import ProjectContainer from './ProjectContainer/ProjectContainer'

const Projects = () => {
  return (
    <div className='px-5 md:px-20'>
        <p className='text-3xl font-extrabold md:text-4xl text-black'>Some Projects<span className='h-[5px] w-[5px] rounded-full gdText text-5xl ml-0.5'>.</span> </p>
        <p className='text-sm text-gray-500 mt-2'>Here Are Some Projects Done By Me</p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 mt-5">
            <ProjectContainer desc='Ahona is a webapp to book mental health appointments with psychologists. A user can create an account and book a session by selecting a timeslot for her/him. User will be notified via email when the session is scheduled. The meeting will be generated using google calender API. The user wil able to join the session or cancel it.' image='/ahona.png' title='Ahona' link='https://ahona.app' stack={['Typescript', 'Tailwind', 'Next.js','Firebase','Firebase Auth','Shadcn-ui','Node JS','OAuth','EJS','Nodemailer','Express','Google Calender API']}/>
            <ProjectContainer desc='Ongona is a mobile app to ensure women security. Anyone can share her location by clicking only one button or a tile in her phone even if the phone is locked. I worked on the android app, website and microcontroller part of the project.' image='/ongona.png' title='Ongona' link='https://ongona.app' stack={['java','next js','shadcn-ui','tailwindcss','firebase','firebase auth','vercel postgres','C','esp32','BLE','GSAP']}/>
            <ProjectContainer desc='I developed a website and CMS for Adsec Bangladesh to manage the website. I worked with serverside props (NextJs 12), MySQL, Tailwind, and Animations. The main purpose was to make the website more user friendly and make it more interactive. The Responses were also saved to google sheet using Google Sheet API using service account.' image='/adsec.png' title='Adsec Bangladesh' link='https://adsecbd.com' stack={['next js','react','node js','mysql','tailwind','gsap','css','google sheet api','nodemailer','Dark mode','pdfkit','language toggle']}/>
        </div>
    </div>
  )
}

export default Projects