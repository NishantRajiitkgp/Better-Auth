import React from 'react'
import Link from "next/link"
import {Button} from "@/components/ui/button"
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function  Home() {
  const session = await getSession();

  if(session) redirect("/home");
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-4'> 
      <h1 className='text-4xl'>This is the Landing Page</h1>
      <Link href={"/login"}>
        <Button>
          Login
        </Button>
      </Link>
    </div>
  );
}
