import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Sidebar from '@/components/Sidebar'
import React, { FC, ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="grid h-screen">
            <div className='grid grid-cols-12 ' >
                <div className="bg-dark-1 text-white col-span-2 ">
                    <Sidebar />
                </div>

                <div className="col-span-10 bg-dark-2">
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    )
}
 