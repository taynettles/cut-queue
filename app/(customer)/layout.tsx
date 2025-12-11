import { Navbar } from "@/components/shared/navbar"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <nav className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Taylen Nettes. All rights reserved.
      </footer>
    </nav>
  )
}