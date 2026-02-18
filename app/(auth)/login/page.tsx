"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react"

export default function LoginPage() {
  // async actions
  return (
    <div className="w-[320px] mx-auto h-lvh overflow-hidden content-center">
      <SignIn />
    </div>
  );
}

function SignIn() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials", {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirectTo: '/',
    })
  }

  return (
    <form action={credentialsAction}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="credentials-email">
          Email
        </Label>
        <Input type="email" id="credentials-email" name="email" />
        <Label htmlFor="credentials-password">
          Password
        </Label>
        <Input type="password" id="credentials-password" name="password" />
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  )
}