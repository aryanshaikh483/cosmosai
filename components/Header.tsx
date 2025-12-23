import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { FilePlus2 } from "lucide-react"

function Header() {
  return (
    <div className="w-full flex items-center justify-between p-5 border-b border-gray-100">
        <Link href="/dashboard" className="text-2xl font-bold">
        <span className="text-indigo-600">Cosmos </span><span className="font-semibold">AI</span>
        </Link>
        <SignedIn>
            <div className="flex items-center space-x-2">
            <Button asChild variant="link" className="hidden md:inline-flex">
                <Link href="/dashboard/upgrade">Pricing</Link>
            </Button>
            <Button asChild variant="outline" >
                <Link href="/dashboard">Docs</Link>
            </Button>
            <Button asChild variant="outline" className="hidden md:inline-flex text-indigo-600">
                <Link href="/dashboard/upload"><FilePlus2/></Link>
            </Button>
                <UserButton/>
            </div>
        </SignedIn>
            </div>
  )
}
export default Header