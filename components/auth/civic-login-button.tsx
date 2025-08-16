"use client"

import { useCivicAuth } from "@civic/auth/nextjs"
import { Button } from "@/components/ui/button"
import { LogIn, LogOut, User } from "lucide-react"
import { useEffect, useState } from "react"

export function CivicLoginButton() {
  const [mounted, setMounted] = useState(false)
  const authState = useCivicAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const { user, login, logout, loading } = authState || {}

  if (!mounted) {
    return (
      <Button disabled className="flex items-center gap-2">
        <User className="h-4 w-4" />
        Loading...
      </Button>
    )
  }

  if (loading) {
    return (
      <Button disabled className="flex items-center gap-2">
        <User className="h-4 w-4" />
        Loading...
      </Button>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Welcome, {user?.email || user?.id || "User"}</span>
        <Button
          onClick={() => {
            try {
              logout?.()
            } catch (error) {
              console.log("[v0] Logout error:", error)
            }
          }}
          variant="outline"
          className="flex items-center gap-2 bg-transparent"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={() => {
        try {
          login?.()
        } catch (error) {
          console.log("[v0] Login error:", error)
        }
      }}
      className="flex items-center gap-2 bg-primary hover:bg-primary/90"
    >
      <LogIn className="h-4 w-4" />
      Sign In with Civic
    </Button>
  )
}
