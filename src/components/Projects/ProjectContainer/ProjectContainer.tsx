
import StackChip from './StackChip/StackChip'
import { Button } from '@/components/ui/button'
import { Link2 } from 'lucide-react'

const ProjectContainer = ({desc,image,link,stack,title}:Project) => {
  return (
    <div className='border transition-colors ease-in-out duration-200 border-gray-300 hover:border-theme1/40 rounded-md'>
        <img src={image} alt={title}  className='w-full rounded-t-md h-[200px] object-cover'/>
        <div className="p-3">
            <div className="grid grid-cols-12 items-center">
                <p className="font-semibold text-xl col-span-8">{title}</p>
                    {link&&<div className="flex w-full justify-end mt-2 col-span-4">
                        <a href={link} target='_blank'><Button size="sm"><span className='mr-1'>Have a look</span><Link2 height={15} width={15}/> </Button></a>
                    </div>}
                </div>
            {stack && <div className="flex flex-wrap gap-1 mt-5">
                {stack.map((item,index) => <StackChip key={index}>{item}</StackChip>)}
            </div>}
            <p className='mt-1 text-sm text-gray-500'>{desc}</p>
          
            
        </div>
    </div>
  )
}

export default ProjectContainer