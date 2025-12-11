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
      <div className='flex flex-col items-center justify-center'>
        <Icon className='text-[40px] text-foreground-secondary' />

        <span
          className={`text-small ${
            active ? 'text-foreground-secondary' : 'text-neutral-400'
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
