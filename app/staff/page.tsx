import { ProtectedRoute } from "@/components/auth/protected-route"
import StaffDashboardClient from "@/components/staff/staff-dashboard-client"

export default function StaffDashboard() {
  return (
    <ProtectedRoute requiredRole="staff">
      <StaffDashboardClient />
    </ProtectedRoute>
  )
}
