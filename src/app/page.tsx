import { Button } from "@/components/ui/button"
import { SignOutButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"



export default function Home() {
return (
  <div>
    <h1>HomePage</h1>
    <SignedOut>
      <SignUpButton mode="modal">Sign Up</SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>Sign Out</SignOutButton>
    </SignedIn>
  </div>
)
}
