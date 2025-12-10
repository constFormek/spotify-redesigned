import { ReactNode } from 'react'

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className='
    grid 
    md:grid-cols-[1fr_4fr] 
    grid-cols-[1fr_6fr] 
    grid-rows-[1fr_15fr_1.5fr] 
    w-screen 
    h-screen 
    gap-x-2 
    gap-y-1.5
    max-h-screen 
    max-w-screen 
    p-2.5 
    overflow-hidden
    '
    >
      <div className='w-full h-full border-black border row-span-3'>
        library
      </div>

      <div className='w-full h-full border-black border'>navbar</div>

      <div className='overflow-y-auto min-h-0 border bg-blue-200'>
        {children}
      </div>

      <div className='w-full h-full border-black border '>playbar</div>
    </div>
  )
}

export default DesktopLayout
