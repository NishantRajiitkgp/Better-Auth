import SignoutButton from '@/components/auth/signout-button';
import { getSession} from "@/lib/auth";
import {redirect} from "next/navigation"
import React from 'react'

const HomePage = async () => {
  const session = await getSession();

  if(!session) redirect("/login");
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
        This is Home Page 
        <SignoutButton/>
    </div>
  )
}

export default HomePage