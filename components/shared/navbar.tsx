"use client"
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
import { ThemeToggle } from "../theme-toggle"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-white border-b shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    CutQueue 
                </Link>

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
                                    <DropdownMenuItem asChild>
                                        <Link href="/my-appointments" className="cursor-pointer">
                                            <Calendar className="mr-2 h-4 w-4" />
                                            My Appointments
                                        </Link>
                                    </DropdownMenuItem>

                                    {session.user.role === "ADMIN" && (
                                       <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link href="/admin/dashboard" className="cursor-pointer">
                                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                                Admin Dashboard
                                            </Link>
                                        </DropdownMenuItem>
                                       </>
                                    )}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => signOut()}
                                        className="cursor-pointer text-red-600"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <Button asChild size="sm">
                            <Link href="/auth/signin">Sign In</Link>
                        </Button>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}