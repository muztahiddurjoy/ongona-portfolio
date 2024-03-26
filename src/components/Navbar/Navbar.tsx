import { useLayoutEffect } from 'react'
import { Button } from '../ui/button'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const Navbar = () => {
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollToPlugin)
        
    })
  return (
    <div className='bg-white/20 w-full backdrop-blur-md fixed top-0 left-0 right-0 p-3 grid grid-cols-10'>
        <div className="col-span-3">
          <img src='/logo.png' className='h-[30px]'/>
        </div>
        <div className="col-span-7 flex items-center justify-end gap-x-5">
            <a href='#' onClick={()=> window&&gsap.to(window, { duration: 1, scrollTo: { y: "#projects", offsetY: 50 },ease:'expo.inOut'} )} className='text-sm hidden md:block'>Projects</a>
            <a href="#" onClick={()=> window&&gsap.to(window, { duration: 2, scrollTo: { y: "#skills", offsetY: 50 },ease:'expo.inOut'} )} className='text-sm hidden md:block'>Skills</a>
            <Button onClick={()=> window&&gsap.to(window, { duration: 2, scrollTo: { y: "#contact", offsetY: 50 },ease:'expo.inOut'} )} className='ml-3'>Contact</Button>
        </div>
    </div>
  )
}

export default Navbar