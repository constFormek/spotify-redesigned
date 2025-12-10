import { ReactNode } from 'react'
import BottomNav from '../navigation/bottom/BottomNav'

export default function MobileLayout ({ children }: { children: ReactNode }) {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* TAB BAR (sticky) */}
      <div
        className='
        sticky 
        top-0
        z-20
        h-[54px]
        mb-[13px]
        flex
        justify-center items-center
        bg-white
        border border-black
        '
        >
        tab bar
      </div>

      {/* CONTENT AREA (scrollable) */}
      <div className='h-full overflow-y-auto pb-[140px]'>{children}</div>

      {/* PLAYBAR + BOTTOM NAV */}
      <div
        className='
        fixed
        bottom-0 left-0 right-0 
        bg-white
        border border-black 
        '
      >
        {/* PLAYBAR */}
        <div
          className='
          h-16
          bg-white
          border border-black 
          flex items-center justify-center
          '
        >
          playbar
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />
      </div>
    </div>
  )
}
