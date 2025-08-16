"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type UserRole = "staff" | "student" | "volunteer" | "admin"

export interface DemoUser {
  id: string
  email: string
  name: string
  role: UserRole
  canteenId?: string
  ngoId?: string
}

interface AuthContextType {
  user: DemoUser | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users with different roles
const DEMO_USERS: Record<string, DemoUser> = {
  "staff@replate.com": {
    id: "staff-1",
    email: "staff@replate.com",
    name: "Sarah Johnson",
    role: "staff",
    canteenId: "canteen-1",
  },
  "student@replate.com": {
    id: "student-1",
    email: "student@replate.com",
    name: "Alex Chen",
    role: "student",
  },
  "volunteer@replate.com": {
    id: "volunteer-1",
    email: "volunteer@replate.com",
    name: "Maria Rodriguez",
    role: "volunteer",
    ngoId: "ngo-1",
  },
  "admin@replate.com": {
    id: "admin-1",
    email: "admin@replate.com",
    name: "David Kim",
    role: "admin",
  },
}

export function DemoAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("demo-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user exists and password is "demo"
    const demoUser = DEMO_USERS[email.toLowerCase()]
    if (demoUser && password === "demo") {
      setUser(demoUser)
      localStorage.setItem("demo-user", JSON.stringify(demoUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("demo-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useDemoAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useDemoAuth must be used within a DemoAuthProvider")
  }
  return context
}
