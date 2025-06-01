'use client'
import { ArrowRight, Bell, CheckCircle, Gift, Mail, Sparkles, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>

        {/* Floating orbs with subtle gradients */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-float-3d-massive"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-float-3d-massive-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-40 h-40 bg-orange-100/20 rounded-full blur-3xl animate-float-3d-massive-slower"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-200/20 rotate-45 animate-float-geometric-massive"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-purple-200/20 rounded-full animate-float-geometric-massive-slow"></div>
      </div>

      {/* Enhanced Header with Glass Effect */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
          {/* Enhanced 3D Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/your-logo1.png" 
                alt="PitchX Logo" 
                className="w-12 h-12 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-blue-500/30"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              PitchX
            </span>
          </Link>

          {/* Back Button */}
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Subtle bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side - Information */}
          <div className="relative">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-300 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />🚀 Early Access Program
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black leading-tight">
              Get Early Access to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                PitchX
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-70"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Join our exclusive early access program and be among the first to experience the future of skill-based
              hiring. Get insider news, updates, and many more cool features before anyone else!
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
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/80 border border-gray-200 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
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
                    <h4 className="font-bold text-black text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Perfectly Designed Stats Section */}
            <div className="mt-20 mb-16">
              {/* Header Section */}
              <div className="text-center mb-16">
                <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-400/40 px-10 py-5 text-xl backdrop-blur-3xl font-semibold shadow-xl rounded-full">
                  <Sparkles className="mr-3 h-7 w-7" />
                  Live Statistics
                </Badge>
                <h3 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Join the Growing Community
                </h3>
                <p className="text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                  Be part of the skill-based hiring revolution
                </p>
              </div>
              
              {/* Main Stats Container */}
              <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-3xl rounded-3xl p-12 border-2 border-gray-200/60 shadow-2xl mb-12 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-50"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
                  {[
                    { 
                      number: "5K+", 
                      label: "Early Signups", 
                      description: "Active members", 
                      icon: Users, 
                      color: "blue",
                      bgGradient: "from-blue-500 to-blue-700",
                      textGradient: "from-blue-600 to-blue-800"
                    },
                    { 
                      number: "100+", 
                      label: "Companies Interested", 
                      description: "Ready to hire", 
                      icon: Star, 
                      color: "purple",
                      bgGradient: "from-purple-500 to-purple-700",
                      textGradient: "from-purple-600 to-purple-800"
                    },
                    { 
                      number: "Q1 2026", 
                      label: "Expected Launch", 
                      description: "Coming soon", 
                      icon: Zap, 
                      color: "orange",
                      bgGradient: "from-orange-500 to-orange-700",
                      textGradient: "from-orange-600 to-orange-800"
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-700 ease-out"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${stat.bgGradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl shadow-${stat.color}-500/50 relative`}
                        >
                          <stat.icon className="h-12 w-12 text-white" />
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl blur-xl opacity-60 -z-10 group-hover:opacity-90 transition-opacity duration-700`}></div>
                        </div>
                        {/* Floating particles effect */}
                        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-${stat.color}-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-1000`}></div>
                        <div className={`absolute top-2 right-1/4 w-1 h-1 bg-${stat.color}-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 transition-all duration-1000 delay-200`}></div>
                      </div>
                      
                      {/* Number */}
                      <div
                        className={`text-6xl font-bold bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent mb-4 leading-none group-hover:scale-110 transition-transform duration-500`}
                      >
                        {stat.number}
                      </div>
                      
                      {/* Label */}
                      <div className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      {/* Description */}
                      <div className="text-lg text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                        {stat.description}
                      </div>
                      
                      {/* Separator line for desktop (except last item) */}
                      {index < 2 && (
                        <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Emphasis Bar */}
              <div className="bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-orange-50/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-200/50 shadow-xl">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                  <div className="flex items-center space-x-4 text-blue-700 font-bold text-xl group cursor-pointer">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🚀</span>
                    <span className="group-hover:text-blue-800 transition-colors duration-300">Growing fast</span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
                  
                  <div className="flex items-center space-x-4 text-purple-700 font-bold text-xl group cursor-pointer">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🎯</span>
                    <span className="group-hover:text-purple-800 transition-colors duration-300">High demand</span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
                  
                  <div className="flex items-center space-x-4 text-orange-700 font-bold text-xl group cursor-pointer">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">⏰</span>
                    <span className="group-hover:text-orange-800 transition-colors duration-300">Limited time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div>
            <Card className="border-gray-200 bg-white/90 backdrop-blur-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-orange-50/30 opacity-30"></div>

              <CardHeader className="text-center pb-6 relative z-10">
                <CardTitle className="text-2xl font-bold text-black">Join Early Access</CardTitle>
                <p className="text-gray-600">Sign up now to get exclusive early access and insider updates</p>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {/* Removed Google Sign Up Button */}
                
                {/* Removed separator "Or continue with email" */}

                {/* Form with Formsubmit.co integration */}
                <form 
                  action="https://formsubmit.co/plusfirag@gmail.com" 
                  method="POST"
                  className="space-y-4"
                >
                  {/* Hidden fields for Formsubmit.co configuration */}
                  <input type="hidden" name="_subject" value="New PitchX Early Access Signup" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://pitchx.tech/thank-you" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-black">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="mt-1 bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/30"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-black">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="mt-1 bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/30"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-black">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-1 bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/30"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="profession" className="text-sm font-medium text-black">
                      Current Profession
                    </Label>
                    <Input
                      id="profession"
                      name="profession"
                      type="text"
                      placeholder="e.g., Software Engineer, Marketing Manager"
                      className="mt-1 bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/30"
                      required
                    />
                  </div>

                  {/* Preferences */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-black">
                      What would you like to receive? (Select all that apply)
                    </Label>

                    <div className="space-y-3">
                      {[
                        { id: "updates", label: "Product updates and feature announcements", name: "productUpdates" },
                        { id: "insider", label: "Insider news and behind-the-scenes content", name: "insiderNews" },
                        { id: "tips", label: "Career tips and skill development resources", name: "careerTips" },
                        { id: "beta", label: "Beta testing opportunities and exclusive features", name: "betaTesting" },
                      ].map((pref) => (
                        <div key={pref.id} className="flex items-center space-x-2 group">
                          <Checkbox
                            id={pref.id}
                            name={pref.name}
                            value="yes"
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                          <Label
                            htmlFor={pref.id}
                            className="text-sm text-gray-700 group-hover:text-black transition-colors duration-200"
                          >
                            {pref.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-6 text-lg rounded-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Early Access
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-500 hover:underline transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-500 hover:underline transition-colors">
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
                  className="p-4 text-center border-gray-200 bg-white/90 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-orange-50/30 opacity-30"></div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-${benefit.color}-500/20`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-black text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-gray-600">{benefit.desc}</p>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-4 bg-white/80 rounded-xl border border-gray-200 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-black">Secure Signup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-black">Privacy Protected</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-black">No Credit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

            {/* Horizontal Community Section - Left to Right */}
            <div className="mt-12 mb-8">
              {/* Full Width Horizontal Container */}
              <div className="bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-orange-50/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg w-full">
                {/* Header Section - Compact */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Join the Growing Community
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Be part of the skill-based hiring revolution
                  </p>
                </div>
                
                {/* Horizontal Stats and Features */}
                <div className="flex flex-wrap justify-between items-center gap-4 lg:gap-6">
                  {/* Stats Section */}
                  <div className="flex items-center gap-6 lg:gap-8">
                    {[
                      { 
                        number: "5K+", 
                        label: "Early Signups", 
                        description: "Active members", 
                        icon: Users, 
                        color: "blue"
                      },
                      { 
                        number: "100+", 
                        label: "Companies Interested", 
                        description: "Ready to hire", 
                        icon: Star, 
                        color: "purple"
                      },
                      { 
                        number: "Q2 2024", 
                        label: "Expected Launch", 
                        description: "Coming soon", 
                        icon: Zap, 
                        color: "orange"
                      },
                    ].map((stat, index) => (
                      <div key={index} className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                        {/* Compact Icon */}
                        <div className="flex items-center justify-center mb-2">
                          <div className={`w-8 h-8 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md`}>
                            <stat.icon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Compact Number */}
                        <div className={`text-xl font-bold text-${stat.color}-700 mb-1`}>
                          {stat.number}
                        </div>
                        
                        {/* Compact Label */}
                        <div className="text-xs font-semibold text-gray-800 mb-1">
                          {stat.label}
                        </div>
                        
                        {/* Compact Description */}
                        <div className="text-xs text-gray-600">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Separator */}
                  <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50"></div>
                  
                  {/* Features Section */}
                  <div className="flex items-center gap-6 lg:gap-8">
                    <div className="flex items-center space-x-2 text-blue-700 font-semibold text-sm group cursor-pointer">
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">🚀</span>
                      <span className="group-hover:text-blue-800 transition-colors duration-300">Growing fast</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-purple-700 font-semibold text-sm group cursor-pointer">
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">🎯</span>
                      <span className="group-hover:text-purple-800 transition-colors duration-300">High demand</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-orange-700 font-semibold text-sm group cursor-pointer">
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">⏰</span>
                      <span className="group-hover:text-orange-800 transition-colors duration-300">Limited time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
