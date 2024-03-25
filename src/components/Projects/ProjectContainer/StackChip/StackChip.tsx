import React from 'react'

const StackChip = ({children}:React.PropsWithChildren) => {
  return (
    <div className='rounded-sm bg-gradient-to-tr from-theme1 to-theme2 px-2 py-1'>
        <p className="text-center tracking-wider text-white font-light uppercase text-[10px]">{children}</p>
    </div>
  )
}

export default StackChip