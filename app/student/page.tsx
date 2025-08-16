import { ProtectedRoute } from "@/components/auth/protected-route"
import StudentDashboardClient from "@/components/student/student-dashboard-client"

export default function StudentDashboard() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentDashboardClient />
    </ProtectedRoute>
  )
}
