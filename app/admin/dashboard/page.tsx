export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Overview of your salon's performance
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border dark:border-gray-800">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's Appointments</div>
          <div className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">0</div>
        </div>
        <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border dark:border-gray-800">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">This Week</div>
          <div className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">0</div>
        </div>
        <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border dark:border-gray-800">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</div>
          <div className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">$0</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950 p-8 rounded-lg border dark:border-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Full dashboard with charts and analytics coming soon
        </p>
      </div>
    </div>
  )
}