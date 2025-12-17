import type { Service } from "@prisma/client"


export default function AdminServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Services</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage your salon services
      </p>

      <div className="bg-white dark:bg-gray-950 p-8 rounded-lg border dark:border-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Services management coming soon
        </p>
      </div>
    </div>
  )
}