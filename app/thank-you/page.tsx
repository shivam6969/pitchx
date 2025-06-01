"use client"
import { CheckCircle, ArrowRight, Mail, Users, Zap, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ThankYouPage() {
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
      </div>

      {/* Enhanced Header with Glass Effect */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-2xl sticky top-0 z-50">
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
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              PitchX
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30 animate-bounce">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-300 px-6 py-3 text-lg backdrop-blur-xl">
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              🎉 Welcome to PitchX Early Access!
            </Badge>
          </div>

          {/* Main Thank You Message */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight">
            Thank You for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Joining Us!
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-70"></span>
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your early access registration has been successfully submitted. You're now part of an exclusive community that will shape the future of skill-based hiring.
          </p>

          {/* Founder's Message */}
          <Card className="mb-12 border-gray-200 bg-white/90 backdrop-blur-3xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-orange-50/30 opacity-30"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">DM</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-black">Daksh Mishra</h3>
                  <p className="text-gray-600">Founder & CEO, PitchX</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic leading-relaxed text-left">
                "Welcome to the PitchX family! 🚀 You're joining a revolutionary movement that will transform how companies discover and hire talent. Your early support means everything to us as we build something truly special.
                <br /><br />
                Over the next few months, you'll get exclusive insights into our development process, early access to features, and the opportunity to directly influence the platform that will change hiring forever.
                <br /><br />
                Thank you for believing in our vision. Together, we're building the future where skills matter more than resumes.
                <br /><br />
                Stay tuned for exciting updates!"
              </blockquote>
              
              <div className="mt-6 text-right">
                <p className="text-gray-600 font-medium">- Daksh Mishra</p>
              </div>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">What Happens Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Check Your Email",
                  description: "You'll receive a welcome email with exclusive content and updates within 24 hours.",
                  color: "blue"
                },
                {
                  icon: Users,
                  title: "Join Our Community",
                  description: "Get access to our private Discord server where early adopters share insights and feedback.",
                  color: "purple"
                },
                {
                  icon: Zap,
                  title: "Early Access Launch",
                  description: "Be among the first to experience PitchX when we launch in Q1 2026.",
                  color: "orange"
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 border-gray-200 bg-white/90 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-orange-50/30 opacity-30"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-${step.color}-500/20 relative z-10`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-600 relative z-10">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-xl relative overflow-hidden group mr-4">
                <span className="relative z-10 flex items-center">
                  Explore PitchX
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
            
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Follow us on social media for the latest updates and behind-the-scenes content as we build the future of hiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}