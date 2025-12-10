'use client'

import Link from 'next/link'
import { ComponentType } from 'react'

type ItemProps = {
  label: string
  href: string
  inactive: ComponentType<{ className?: string }>
  activeIcon: ComponentType<{ className?: string }>
  active: boolean
}

export default function NavItem ({
  label,
  href,
  inactive: InactiveIcon,
  activeIcon: ActiveIcon,
  active
}: ItemProps) {
  const Icon = active ? ActiveIcon : InactiveIcon

  return (
    <Link
      href={href}
      className='flex-1'
      aria-current={active ? 'page' : undefined}
    >
      <div className='flex flex-col items-center justify-center py-2'>
        <Icon className='text-[40px]' />

        <span
          className={`text-[10px] mt-1 ${
            active ? 'text-white' : 'text-neutral-400'
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
