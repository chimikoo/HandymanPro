'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, PenToolIcon as Tool } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavLink = {
  label: string
  href: string
}

type NavbarProps = {
  brand: string
  quoteButtonText: string
  links: NavLink[]
}

export default function Navbar({ brand, quoteButtonText, links }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Tool className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold text-slate-800">{brand}</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600">{quoteButtonText}</Button>
        </div>
        <button
          className="inline-flex items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-orange-500 hover:bg-orange-600 w-full">
              {quoteButtonText}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
