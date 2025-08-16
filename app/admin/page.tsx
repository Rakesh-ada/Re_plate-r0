import { ProtectedRoute } from "@/components/auth/protected-route"
import AdminDashboardClient from "@/components/admin/admin-dashboard-client"

export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboardClient />
    </ProtectedRoute>
  )
}
