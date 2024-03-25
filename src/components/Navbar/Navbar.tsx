import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='bg-white/20 w-full backdrop-blur-md fixed top-0 left-0 right-0 p-3 grid grid-cols-10'>
        <p className="col-span-5 text-xl font-semibold">Muztahid Rahman</p>
        <div className="col-span-5 flex items-center justify-end">
            <a href="#" className='text-sm'>Projects</a>
            <Button className='ml-3'>Contact</Button>
        </div>
    </div>
  )
}

export default Navbar