"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useDemoAuth } from "@/lib/demo-auth"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export function DemoLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login, isLoading } = useDemoAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = await login(email, password)
    if (success) {
      router.push("/")
    } else {
      setError("Invalid credentials. Use any demo email with password 'demo'")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800">RePlate Campus</CardTitle>
          <CardDescription>Demo Login - Choose your role</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter demo email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter 'demo'"
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 space-y-2">
            <p className="text-sm font-medium text-gray-700">Demo Accounts:</p>
            <div className="text-xs space-y-1 text-gray-600">
              <div>
                • <strong>Staff:</strong> staff@replate.com
              </div>
              <div>
                • <strong>Student:</strong> student@replate.com
              </div>
              <div>
                • <strong>Volunteer:</strong> volunteer@replate.com
              </div>
              <div>
                • <strong>Admin:</strong> admin@replate.com
              </div>
              <div className="mt-2 font-medium">
                Password: <code>demo</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
