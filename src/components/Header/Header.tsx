
import { Github } from 'lucide-react'
import { Button } from '../ui/button'
import HeaderSVG from './SVG'

const Header = () => {
  return (
    <div className='h-[100vh] flex items-center flex-col-reverse md:flex-row md:px-20 px-5'>
        <div className="flex-1 flex justify-center-center flex-col">
            <p className='text-sm'>Co-founder & Technical Lead @ <a href='https://ongona.app' className='font-medium text-theme2'>Ongona</a></p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 gdText">Muztahid Rahman</h1>
            <p className='mt-5 text-sm text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, consequuntur asperiores. Deleniti minus hic maiores suscipit, nisi omnis doloremque deserunt amet sunt voluptatum at quaerat, sapiente voluptatem. Eius, error harum?</p>
            <div className="flex">
                <a href="https://github.com/muztahiddurjoy" target='_blank'><Button className='mt-3'><Github height={15} width={15}/> <span className='ml-1'>Github</span></Button></a>
            </div>
        </div>
        <div className="flex-1">
            <HeaderSVG h={400} w={600}/>
        </div>
    </div>
  )
}

export default Header