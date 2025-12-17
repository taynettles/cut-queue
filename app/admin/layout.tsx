import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { Calendar, LayoutDashboard, Scissors } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // Protect admin routes
  if (!session || session.user.role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-950 border-r dark:border-gray-800 min-h-screen">
          <div className="p-6">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Salon Admin
            </Link>
          </div>
          <nav className="px-4 space-y-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/appointments"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <Calendar className="w-4 h-4" />
              Appointments
            </Link>
            <Link
              href="/admin/services"
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <Scissors className="w-4 h-4" />
              Services
            </Link>
          </nav>
          <div className="absolute bottom-6 left-6">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              ← Back to Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}