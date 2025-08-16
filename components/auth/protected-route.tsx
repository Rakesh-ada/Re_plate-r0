"use client"

import type React from "react"
import { useDemoAuth } from "@/lib/demo-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"
import type { UserRole } from "@/lib/demo-auth"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
  fallbackPath?: string
}

export function ProtectedRoute({ children, requiredRole, fallbackPath = "/auth/login" }: ProtectedRouteProps) {
  const { user, isLoading } = useDemoAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    if (!user) {
      router.push(fallbackPath)
      return
    }

    if (requiredRole && user.role !== requiredRole) {
      router.push("/") // Redirect to home if role doesn't match
      return
    }
  }, [user, isLoading, router, fallbackPath, requiredRole])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
