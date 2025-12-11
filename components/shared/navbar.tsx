import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Calendar, User, LogOut, LayoutDashboard } from "lucide-react"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-white border-b shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Salon 
                </Link>
            </div>

            <div className="flex items-center gap-6">
                <Link href="/services" className="text-sm font-medium hover:underline">
                    Services
                </Link>

                {session ? (
                    <>
                        <Link href="/my-appointments" className="text-sm font-medium hover:underline">
                            My Appointments
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    {session.user?.name || session.user?.email}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )}
            </div>
        </nav>