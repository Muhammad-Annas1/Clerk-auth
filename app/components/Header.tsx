import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Header = async () => {
  const { userId } = await auth();
  return (
    <header className='w-full bg-white flex items-center justify-between px-4 lg:px-16 p-4'>
        <div><h2 className='text-gray-700 text-2xl font-bold'>Clerk Authentication</h2></div>

        <nav className="flex justify-center items-center space-x-4 md:space-x-8">
                {!userId && (
          <>
            <Link href="/sign-in" className="text-black text-lg md:text-xl hover:text-cyan-500">
              Sign In
            </Link>
            <Link href="/sign-up" className="px-4 py-1 md:px-3 md:py-2 text-lg md:text-xl font-medium text-black rounded-xl hover:text-cyan-500">
              Sign Up
            </Link>
          </>
        )}
         {userId && (
          <>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/"/>
            </div>
          </>
        )}
        </nav>
    </header>
  )
}

export default Header