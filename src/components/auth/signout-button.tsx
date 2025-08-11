"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";


const SignoutButton = () => {
    const router = useRouter();

    const signout = async () => await authClient.signOut({
        fetchOptions: {
            onSuccess: () => router.push("/login"),
        },
    })
  return (
    <div>
        <Button 
            onClick={signout}
            variant={"outline"}
        >
            Sign Out
        </Button>
    </div>
  )
}

export default SignoutButton