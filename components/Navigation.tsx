'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { twMerge } from "tailwind-merge"

import HomeIcon from "./icons/HomeIcon"
import StatsIcon from "./icons/StatsIcon"
import TopIcon from "./icons/TopIcon"


const links = [
  { id: 0, name: 'Home', href: '/', Icon: HomeIcon },
  { id: 1, name: 'Top', href: '/top', Icon: TopIcon },
  { id: 2, name: 'Stats', href: '/stats', Icon: StatsIcon },
]

const Navigation = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  
  return (
    <nav
      className={
        twMerge(`flex justify-between p-mobile `, className)
      }>
      {
        links.map(({ id, href, name, Icon }) => (
          <div
            key={id}
            className="flex-1"
          >
            <Link href={href} className="flex justify-center items-center gap-[5px] p-[10px]">
                <span>{name}</span>
                <div className={`${href === pathname ? 'opacity-100' : 'opacity-20'}`}>
                  <Icon />
                </div>
            </Link>
          </div>  
        ))
      }
    </nav>
  )
}

export default Navigation