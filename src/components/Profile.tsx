import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

import React from 'react'

const Profile = () => {
    return (
        <div>
            {/* <DropdownMenu >
                <DropdownMenuTrigger className="rounded-full text-white" >
                    <Image src="https://res.cloudinary.com/dstojqsjz/image/upload/v1711622291/kvpobyuczbx2l8x1goo2.jpg" className="rounded-full" alt="profile-pic" width={30} height={30} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white" >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </div>
    )
}

export default Profile
