import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'

export default function Navbar() {
    return (
        <div className='max-w-5xl mx-auto px-6'>
            <div className='flex justify-between items-center h-16 w-full'>
                <Link href="/">
                    BlogSan</Link>
                <ThemeSwitch />
            </div>
        </div>
    )
}
