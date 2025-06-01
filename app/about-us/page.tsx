"use client"

import { useState } from "react"
import { ArrowLeft, Linkedin, Mail, Github, Twitter, Globe, Award, Users, Target, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-particle opacity-70 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-particle-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-float-particle-slower opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float-particle opacity-40"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full border-b border-white/5 bg-black/5 backdrop-blur-3xl z-50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/2 via-purple-500/2 to-orange-500/2"></div>
        <div className="container mx-auto px-4 h-24 flex items-center justify-between relative z-10">
          <Link href="/" className="flex items-center space-x-4 group">
            <ArrowLeft className="h-6 w-6 text-white/80 hover:text-white transition-colors" />
            <div className="flex items-center space-x-4">
              <Image
                src="/your-logo.png"
                alt="PitchX Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-2xl shadow-2xl"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                PitchX
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-6">
              About PitchX
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary founders behind PitchX, revolutionizing how professionals showcase their skills and connect with opportunities through innovative video CV technology.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Daksh Mishra */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/a.png"
                      alt="Daksh Mishra - Co-Founder & CEO"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-500"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Daksh Mishra</h2>
                  <p className="text-blue-400 font-semibold text-lg mb-4">Co-Founder & CEO</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Visionary entrepreneur with a passion for transforming the recruitment landscape. Daksh brings innovative thinking and strategic leadership to PitchX, driving the mission to revolutionize how professionals present themselves to potential employers.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    With expertise in technology and business development, Daksh is committed to creating solutions that bridge the gap between talent and opportunity through cutting-edge video CV technology.
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/daksh-mishra-5a036b2b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href="mailto:pitcx001@gmail.com" 
                    className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Prabhat Kumar */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/b.png"
                      alt="Prabhat Kumar - Co-Founder & CTO"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-purple-500"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Rocket className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Prabhat Kumar</h2>
                  <p className="text-purple-400 font-semibold text-lg mb-4">Co-Founder & CTO</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Technical mastermind behind PitchX's innovative platform. Prabhat combines deep technical expertise with a keen understanding of user experience to build scalable, cutting-edge solutions.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    With a strong background in software engineering and product development, Prabhat ensures that PitchX delivers a seamless, powerful experience for both job seekers and employers.
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href="mailto:pitchx001@gmail.com" 
                    className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Vision */}
          <div className="mt-20 text-center">
            <Card className="bg-white/95 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-16 max-w-5xl mx-auto shadow-2xl">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">Our Mission</h2>
              <div className="bg-white rounded-2xl p-8 mb-10 border-2 border-gray-300">
                <p className="text-2xl md:text-3xl text-black font-semibold leading-relaxed">
                  At PitchX, we believe that every professional deserves the opportunity to showcase their unique talents and personality beyond traditional resumes. Our platform empowers individuals to create compelling video CVs that tell their story, demonstrate their skills, and connect with the right opportunities.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center bg-white rounded-2xl p-8 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Connect</h3>
                  <p className="text-lg text-black font-semibold">Bridge the gap between talent and opportunity</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-8 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Innovate</h3>
                  <p className="text-lg text-black font-semibold">Revolutionize the recruitment process</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-8 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Empower</h3>
                  <p className="text-lg text-black font-semibold">Enable professionals to shine</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of the future of professional networking and career advancement.
            </p>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-12 py-4 rounded-full font-semibold shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-700 transform hover:scale-110 text-lg">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}