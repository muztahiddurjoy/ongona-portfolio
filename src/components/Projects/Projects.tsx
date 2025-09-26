import ProjectContainer from './ProjectContainer/ProjectContainer'

const Projects = () => {
  return (
    <div className='px-5 md:px-20 mt-20 md:mt-0' id='projects'>
        <p className='text-3xl font-extrabold md:text-4xl text-black'>Some Projects<span className='h-[5px] w-[5px] rounded-full gdText text-5xl ml-0.5'>.</span> </p>
        <p className='text-sm text-gray-500 mt-2'>Here Are Some Projects Done By Me</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-3 mt-5">
            <ProjectContainer desc='Ahona is a webapp to book mental health appointments with psychologists. A user can create an account and book a session by selecting a timeslot for her/him. User will be notified via email when the session is scheduled. The meeting will be generated using google calender API. The user wil able to join the session or cancel it.' image='/ahona.png' title='Ahona' link='https://ahona-web-muztahiddurjoy.vercel.app' stack={['Typescript', 'Tailwind', 'Next.js','Firebase','Firebase Auth','Shadcn-ui','Node JS','OAuth','EJS','Nodemailer','Express','Google Calender API']}/>
            <ProjectContainer desc='Ongona is a mobile app to ensure women security. Anyone can share her location by clicking only one button or a tile in her phone even if the phone is locked. I worked on the android app, website and microcontroller part of the project.' image='/ongona.png' title='Ongona' link='https://ongona.com' stack={['java','next js','shadcn-ui','tailwindcss','firebase','firebase auth','vercel postgres','C','esp32','BLE','GSAP']}/>
            <ProjectContainer desc='A user can open the app and click on an authorized hospital check how many beds are free and how many doctors are currently available. The app will also show the nearest hospitals. User will able to get directions, make a call, find pharmacy and more. I presented it as a science project in 2022. This app is not updated after 2022 february' image='/hospitalfinder.png' title='Hospital Finder' link='https://github.com/muztahiddurjoy/hospital_finder' stack={['java','google map api','material design','firebase realtime database','firebase auth']}/>
            <ProjectContainer desc='I developed a website and CMS for Adsec Bangladesh to manage the website. I worked with serverside props (NextJs 12), MySQL, Tailwind, and Animations. The main purpose was to make the website more user friendly and make it more interactive. The Responses were also saved to google sheet using Google Sheet API using service account.' image='/adsec.png' title='Adsec Bangladesh' link='https://adsecbd.com' stack={['next js','react','node js','mysql','tailwind','gsap','css','google sheet api','nodemailer','Dark mode','pdfkit','language toggle']}/>
            <ProjectContainer desc='This website/software was built to track a rocket after launching. Mainly the rocket will send data wirelessly to the ground station. This software will communicate with the ground station using serial commnunication. I worked on the frontend and backend part of the project. The angle of the rocket, temperature, humidity, flight time, raw messages will be showed.' image='/twincross.png' title='TwinCross Flight Tracker' stack={['HTML','CSS','Javascript','node js','socket io','serial communication','express js','gsap']} link='https://github.com/muztahiddurjoy/twin-cross-flight-tracker'/>
            <ProjectContainer desc='It was a simple e-commerce website developed using Payload CMS. Payload CMS is a cms to build effective websites using NextJS, MongoDB/Postgres by writing less code.' image='/skycart.jpg' title='Skycart' link='https://github.com/muztahiddurjoy/sky-cart-payload' stack={['Next js','tailwind','mongodb','payload cms','daisy ui']}/>
           
        </div>
    </div>
  )
}

export default Projects