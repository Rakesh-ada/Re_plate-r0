import { ProtectedRoute } from "@/components/auth/protected-route"
import VolunteerDashboardClient from "@/components/volunteer/volunteer-dashboard-client"

export default function VolunteerDashboard() {
  return (
    <ProtectedRoute requiredRole="volunteer">
      <VolunteerDashboardClient />
    </ProtectedRoute>
  )
}
