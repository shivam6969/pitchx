import { ArrowRight, Mail, Bell, Star, Gift, Users, Zap, CheckCircle, Sparkles, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function JoinEarlyAccessPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]"></div>

        {/* Floating orbs with gradients */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-3d-massive"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-3d-massive-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl animate-float-3d-massive-slower"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-400/10 rotate-45 animate-float-geometric-massive"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-purple-400/10 rounded-full animate-float-geometric-massive-slow"></div>
      </div>

      {/* Enhanced Header with Glass Effect */}
      <header className="border-b border-white/5 bg-black/30 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
          {/* Enhanced 3D Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
                <span className="text-white font-bold text-xl relative z-10">P</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-orange-400 rounded-xl blur-lg opacity-60 -z-10 group-hover:opacity-90 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Animated orbital rings */}
                <div className="absolute inset-0 border border-blue-400/30 rounded-xl animate-spin-slow"></div>
                <div className="absolute inset-1 border border-purple-400/20 rounded-lg animate-spin-slower"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              PitchX
            </span>
          </Link>

          {/* Back Button */}
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/10 text-white hover:bg-white/5 hover:border-white/20 px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Subtle bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side - Information */}
          <div className="relative">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-200 border-blue-400/30 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />🚀 Early Access Program
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Join Early Access to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent relative inline-block">
                PitchX
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-70"></span>
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Be part of our exclusive early access community and experience the future of skill-based hiring before
              anyone else. Get insider news, updates, and many more cool features!
            </p>

            {/* Enhanced Benefits */}
            <div className="space-y-8 mb-12">
              {[
                {
                  icon: Star,
                  title: "Exclusive Early Access",
                  desc: "Be the first to use PitchX when we launch and get priority access to all features",
                  color: "blue",
                },
                {
                  icon: Bell,
                  title: "Insider News & Updates",
                  desc: "Get the latest updates, feature announcements, and behind-the-scenes content",
                  color: "purple",
                },
                {
                  icon: Gift,
                  title: "Cool Exclusive Features",
                  desc: "Access to beta features, special tools, and premium content not available to regular users",
                  color: "orange",
                },
                {
                  icon: Users,
                  title: "VIP Community Access",
                  desc: "Join our exclusive community of early adopters and industry professionals",
                  color: "green",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-xl flex items-center justify-center shadow-lg shadow-${benefit.color}-500/20 relative overflow-hidden group`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-xl blur-lg opacity-50 -z-10`}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{benefit.title}</h4>
                    <p className="text-white/70">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
              {[
                { number: "5K+", label: "Early Members", color: "blue" },
                { number: "100+", label: "Companies Waiting", color: "purple" },
                { number: "Q2 2024", label: "Expected Launch", color: "orange" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 h-5 w-5 text-yellow-400" />
                What Early Members Say
              </h3>

              <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/10 backdrop-blur-sm relative">
                <div className="absolute -top-3 -left-3 text-4xl text-white/20">"</div>
                <div className="absolute -bottom-3 -right-3 text-4xl text-white/20">"</div>
                <p className="text-white/80 italic mb-4">
                  PitchX completely changed how I approach job hunting. The video CV feature helped me showcase my
                  personality in ways a paper resume never could.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">John Doe</div>
                    <div className="text-white/60 text-sm">Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Join Early Access Form */}
          <div>
            <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-30"></div>

              <CardHeader className="text-center pb-6 relative z-10">
                <CardTitle className="text-2xl font-bold text-white">Join Early Access</CardTitle>
                <p className="text-white/70">Get exclusive access and insider updates before anyone else</p>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {/* Google Sign Up Button */}
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 py-6 text-lg flex items-center justify-center space-x-3 rounded-xl backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full bg-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-transparent px-2 text-white/50">Or continue with email</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-white/80">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/30"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-white/80">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-white/80">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="profession" className="text-sm font-medium text-white/80">
                      Current Profession
                    </Label>
                    <Input
                      id="profession"
                      type="text"
                      placeholder="e.g., Software Engineer, Marketing Manager"
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-white/80">
                    What would you like to receive? (Select all that apply)
                  </Label>

                  <div className="space-y-3">
                    {[
                      { id: "updates", label: "Product updates and feature announcements" },
                      { id: "insider", label: "Insider news and behind-the-scenes content" },
                      { id: "tips", label: "Career tips and skill development resources" },
                      { id: "beta", label: "Beta testing opportunities and exclusive features" },
                    ].map((pref) => (
                      <div key={pref.id} className="flex items-center space-x-2 group">
                        <Checkbox
                          id={pref.id}
                          className="border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                        />
                        <Label
                          htmlFor={pref.id}
                          className="text-sm text-white/70 group-hover:text-white transition-colors duration-200"
                        >
                          {pref.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-6 text-lg rounded-xl relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Join Early Access
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>

                <div className="text-center">
                  <p className="text-xs text-white/50">
                    By joining, you agree to our{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Priority Access", desc: "Skip the waitlist", color: "blue" },
                { icon: Mail, title: "Exclusive Updates", desc: "Insider information", color: "purple" },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="p-4 text-center border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-30"></div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-${benefit.color}-500/20`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-white/60">{benefit.desc}</p>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-white/70">Secure Signup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-white/70">Privacy Protected</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-white/70">Premium Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
