import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='p-4 w-screen bg-gray-900'>
  <div className='container mx-auto flex items-center justify-center'>
    <nav className='flex'>
      <Link href="/" className='mx-8 text-white'>
        Home
      </Link>
      <Link href="/profile" className='mx-8 text-white'> 
        Profile
      </Link>
      <Link href="/posts" className='mx-8 text-white'> 
        About
      </Link>
    </nav>
  </div>
</header>

  )
}

export default Header
