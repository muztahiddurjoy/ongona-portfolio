
import { Github, Linkedin } from 'lucide-react'
import { Button } from '../ui/button'
import HeaderSVG from './SVG'

const Header = () => {
  return (
    <div className='md:h-[100vh] flex items-center flex-col-reverse md:flex-row md:px-20 px-5'>
        <div className="flex-1 flex justify-center-center flex-col">
            <p className='text-sm'>Co-founder @ <a href='https://ongona.com' className='font-medium text-theme2'>Ongona</a></p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 gdText">Muztahid Rahman</h1>
            <p className='mt-5 text-sm text-gray-700'>Hi! I'm Muztahid Rahman. I love to do coding and create something new.</p>
            <div className="flex">
                <a href="https://github.com/muztahiddurjoy" target='_blank'><Button className='mt-3'><Github height={15} width={15}/> <span className='ml-1'>Github</span></Button></a>
                <a href="https://www.linkedin.com/in/muztahid-rahman" target='_blank'><Button className='mt-3 ml-3' variant='default'><Linkedin size={15} className='mr-1 fill-white'/> LinkedIn</Button></a>
            </div>
        </div>
        <div className="flex-1 mt-20 md:mt-0">
            <HeaderSVG/>
        </div>
    </div>
  )
}

export default Header