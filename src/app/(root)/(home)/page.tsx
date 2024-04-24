"use client";

import { useUser } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

export default function Demo() {
  const { user } = useUser()
  // const user = await currentUser();
  console.log('✌️user --->', user);

  return (
    <div>
      <h1>Hello World! {user?.firstName}</h1>
    </div>
  )
}
