'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { twMerge } from "tailwind-merge"

const links = [
  { id: 0, name: 'Tracks', href: 'tracks', available: true },
  { id: 1, name: 'Artists', href: 'artists', available: false },
  { id: 2, name: 'Genres', href: 'genres', available: false },
]

const Navigation = ({ className = '' }: { className?: string }) => {
  const pathname = usePathname()
  
  return (
    <nav
      className={
        twMerge(`flex gap-5 p-4 md:p-8 md:gap-7`, className)
      }>
      {links.map(link => (
        <div
          key={link.id}
          className={`leading-none ${`/${link.href}` === pathname ? '' : 'opacity-30'}`}
        >
          <Link
            href={`/${link.href}`}>{link.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default Navigation