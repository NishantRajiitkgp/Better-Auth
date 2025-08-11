"use client";
import React from 'react'
import { Button } from '../ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { authClient } from '@/lib/auth-client';

const LoginButtons = () => {
    const signinWithGithub = async () => await authClient.signIn.social({
        callbackURL: "/home",
        provider: "github",
    });
    const signinWithGoogle = async () => await authClient.signIn.social({
        callbackURL: "/home",
        provider: "google",
    });
  return (
    <div className="flex flex-col items-center justify-between gap-y-4">
              <Button 
              className="w-full cursor-pointer" 
              onClick={signinWithGithub}
              variant="outline">
                <FaGithub />
                Github
              </Button>
              <Button 
              className="w-full cursor-pointer"
              onClick={signinWithGoogle}
               variant={"outline"}>
                <FcGoogle/>
                Google
              </Button>
            </div>
  )
}

export default LoginButtons