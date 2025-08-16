"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Heart, TrendingUp, Clock, MapPin, LogOut } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useDemoAuth } from "@/lib/demo-auth"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const { user, logout } = useDemoAuth()
  const router = useRouter()

  const handleRoleNavigation = () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    switch (user.role) {
      case "staff":
        router.push("/staff")
        break
      case "student":
        router.push("/student")
        break
      case "volunteer":
        router.push("/volunteer")
        break
      case "admin":
        router.push("/admin")
        break
      default:
        router.push("/auth/login")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-heading font-bold text-foreground">RePlate Campus</span>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Welcome, {user.name} ({user.role})
                  </span>
                  <Button variant="outline" size="sm" onClick={handleRoleNavigation}>
                    Go to Dashboard
                  </Button>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button onClick={() => router.push("/auth/login")}>Sign In</Button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-pulse">
            Reducing Food Waste on Campus
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Turn Surplus into
            <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sustainability
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect college canteen surplus food with students through flash sales and NGOs through donations. Join the
            movement to eliminate food waste on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button size="lg" className="text-lg px-8 py-6" onClick={handleRoleNavigation}>
                Go to {user.role} Dashboard
              </Button>
            ) : (
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => router.push("/auth/login")}>
                Get Started
              </Button>
            )}
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Making a Real Impact</h2>
            <p className="text-muted-foreground text-lg">
              See how RePlate Campus is transforming food waste into opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-primary/20">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-chart-1">2,450</CardTitle>
                <CardDescription>Meals Saved</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-primary/20">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-chart-2">1,200</CardTitle>
                <CardDescription>Students Served</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-primary/20">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-chart-3">15</CardTitle>
                <CardDescription>NGO Partners</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-primary/20">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-chart-4">85%</CardTitle>
                <CardDescription>Waste Reduction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">How RePlate Campus Works</h2>
            <p className="text-muted-foreground text-lg">
              Simple steps to turn surplus food into sustainable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Real-time Detection</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Canteen staff log surplus food items in real-time using our smart detection system
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl">Flash Sales</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Students receive instant notifications about discounted surplus food available for purchase
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">NGO Donations</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Remaining surplus food is automatically coordinated with local NGOs for community donations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Activity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Live Campus Activity</h2>
            <p className="text-muted-foreground text-lg">See what's happening right now across campus canteens</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Flash Sale
                  </Badge>
                  <span className="text-sm text-muted-foreground">2 min ago</span>
                </div>
                <CardTitle className="text-lg">Main Canteen</CardTitle>
                <CardDescription>15 Chicken Biryani portions - 40% off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Building A, Ground Floor</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-chart-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-chart-2/10 text-chart-2">
                    Donation
                  </Badge>
                  <span className="text-sm text-muted-foreground">5 min ago</span>
                </div>
                <CardTitle className="text-lg">Cafeteria Plus</CardTitle>
                <CardDescription>25 Vegetable meals donated to Hope Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Building C, 2nd Floor</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Flash Sale
                  </Badge>
                  <span className="text-sm text-muted-foreground">8 min ago</span>
                </div>
                <CardTitle className="text-lg">Snack Corner</CardTitle>
                <CardDescription>30 Sandwiches & Wraps - 50% off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Library Building, 1st Floor</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-card to-muted/20 border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; 2024 RePlate Campus. Making sustainability delicious.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                <Leaf className="h-3 w-3 mr-1" />
                Eco-Friendly
              </Badge>
              <Badge variant="outline" className="bg-chart-2/5 text-chart-2 border-chart-2/20">
                <Heart className="h-3 w-3 mr-1" />
                Community Driven
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
