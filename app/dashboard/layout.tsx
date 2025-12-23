import Header from "@/components/Header"
import { ClerkLoaded } from "@clerk/nextjs"

function DashboardLayout({children}:{children: React.ReactNode}) {
  return (
    <ClerkLoaded>
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header/>
        <main className="flex-1 overflow-auto bg-gray-50">
            {children}
        </main>
    </div>
    </ClerkLoaded>
  )
}
export default DashboardLayout