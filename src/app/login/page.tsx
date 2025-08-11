
import React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import LoginButtons from '@/components/auth/login-Buttons';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';


const Login = async() => {
  const session = await getSession();
  if(session) redirect("/home");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-xl"> Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
            <LoginButtons />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login