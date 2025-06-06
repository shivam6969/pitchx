'use client';

import { useState, useEffect } from "react"
import Image from 'next/image'
import {
  CheckCircle,
  Play,
  Users,
  Zap,
  Target,
  Award,
  Video,
  Brain,
  TrendingUp,
  UserPlus,
  FileText,
  Upload,
  Trophy,
  Building,
  ArrowRight,
  ChevronDown,
  Star,
  Sparkles,
  Rocket,
  Globe,
  Shield,
  Layers,
  Cpu,
  Database,
  Code,
  Briefcase,
  Camera,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Clock,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PitchXLanding() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Enhanced scroll reveal functionality for features and steps
    function initScrollReveal() {
      const steps = document.querySelectorAll('.step-reveal');
      const features = document.querySelectorAll('.feature-reveal');
      const scrollReveals = document.querySelectorAll('.scroll-reveal');
      
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const stepNumber = element.getAttribute('data-step') || element.getAttribute('data-feature');
            
            // Add reveal animation with faster delay based on step/feature
            setTimeout(() => {
              element.classList.remove('opacity-0', 'translate-y-20');
              element.classList.add('opacity-100', 'translate-y-0');
              
              // Add special bounce effect for icons
              const icon = element.querySelector('.group');
              if (icon) {
                icon.classList.add('animate-bounce');
                setTimeout(() => {
                  icon.classList.remove('animate-bounce');
                }, 500);
              }
            }, stepNumber ? (stepNumber - 1) * 100 : 0);
            
            observer.unobserve(element);
          }
        });
      }, observerOptions);

      // Check if elements are already in viewport and reveal them immediately
      const allElements = [...steps, ...features, ...scrollReveals];
      allElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Immediately show elements that are already visible
          element.classList.remove('opacity-0', 'translate-y-20');
          element.classList.add('opacity-100', 'translate-y-0');
        } else {
          // Observe elements that are not yet visible
          observer.observe(element);
        }
      });
    }

    // Initialize scroll reveal
    initScrollReveal();

    // Re-initialize when navigating back to the page
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was loaded from cache (back/forward navigation)
        setTimeout(initScrollReveal, 100);
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Ultra Advanced Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Enhanced floating orbs with gradients */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-particle opacity-70 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-particle-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-float-particle-slower opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float-particle opacity-40"></div>
        <div className="absolute bottom-1/3 right-2/3 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-float-particle-slow opacity-70"></div>
        <div className="absolute top-1/2 left-1/6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float-particle-slower opacity-50"></div>
        <div className="absolute top-3/4 right-1/6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float-particle opacity-60"></div>
        <div className="absolute bottom-1/2 left-2/3 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-float-particle-slow opacity-40"></div>

        {/* Advanced geometric shapes with gradients */}
        <div className="absolute top-1/5 right-1/5 w-12 h-12 border-2 border-gradient-to-r from-blue-400/40 to-purple-400/40 rotate-45 animate-float-geometric opacity-50"></div>
        <div className="absolute bottom-1/5 left-1/5 w-8 h-8 border-2 border-purple-400/40 rounded-full animate-float-geometric-slow opacity-40"></div>
        <div className="absolute top-3/5 left-1/4 w-14 h-14 border-2 border-orange-400/40 rotate-12 animate-float-geometric-slower opacity-60"></div>

        {/* Constellation patterns */}
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Header with Ultra Advanced 3D Glass Effect */}
      <header className="fixed top-0 w-full border-b border-white/5 bg-black/5 backdrop-blur-3xl z-50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/2 via-purple-500/2 to-orange-500/2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer-header"></div>
        </div>

        <div className="container mx-auto px-4 h-24 flex items-center justify-between relative z-10">
          {/* Ultra Enhanced 3D Logo */}
          <div className="flex items-center space-x-4 group">
            <Image
              src="/your-logo.png"
              alt="PitchX Logo"
              width={56}
              height={56}
              className="transform transition-all duration-700 group-hover:scale-110"
            />
            <span className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              PitchX
            </span>
          </div>

          {/* Ultra Enhanced 3D Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="bg-white/2 backdrop-blur-3xl rounded-full px-4 py-3 flex items-center space-x-3 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-orange-500/3 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 rounded-full animate-shimmer-nav"></div>

              {[
                { href: "#features", label: "Features", color: "blue", isExternal: false },
                { href: "/about-us", label: "About Us", color: "purple", isExternal: false },
                { href: "#video-cv", label: "Video CV", color: "orange", isExternal: false },
                { href: "/careers", label: "Jobs/Career", color: "green", isExternal: false },
              ].map((item, index) => {
                // For internal page navigation, use Link component
                if (item.href.startsWith('/')) {
                  return (
                    <Link key={index} href={item.href}>
                      <span className="px-8 py-4 text-white/80 hover:text-white transition-all duration-500 font-medium rounded-full hover:bg-white/10 hover:shadow-xl relative group transform hover:scale-110 hover:-translate-y-1 cursor-pointer inline-block">
                        {item.label}
                        <span
                          className={`absolute bottom-2 left-1/2 w-0 h-1 bg-${item.color}-400 transition-all duration-500 group-hover:w-16 group-hover:left-1/2 transform -translate-x-1/2 rounded-full shadow-lg shadow-${item.color}-400/50`}
                        ></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      </span>
                    </Link>
                  )
                }
                // For anchor links (same page), use regular anchor tags
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="px-8 py-4 text-white/80 hover:text-white transition-all duration-500 font-medium rounded-full hover:bg-white/10 hover:shadow-xl relative group transform hover:scale-110 hover:-translate-y-1"
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-2 left-1/2 w-0 h-1 bg-${item.color}-400 transition-all duration-500 group-hover:w-16 group-hover:left-1/2 transform -translate-x-1/2 rounded-full shadow-lg shadow-${item.color}-400/50`}
                    ></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </a>
                )
              })}
            </div>

            {/* Ultra Enhanced 3D CTA Button */}
            <div className="ml-10">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-4 rounded-full font-semibold shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-700 transform hover:scale-125 hover:-translate-y-2 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 animate-spin" />
                    <span className="text-lg">Sign Up</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10"></div>
                </Button>
              </Link>
            </div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-14 h-14 rounded-full hover:bg-white/10 transition-all duration-500 group backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col space-y-2">
                <div className={`w-7 h-0.5 bg-white/80 rounded-full transition-all duration-500 ${
                  mobileMenuOpen 
                    ? 'rotate-45 translate-y-2.5 bg-blue-400' 
                    : 'group-hover:bg-blue-400'
                }`}></div>
                <div className={`w-7 h-0.5 bg-white/80 rounded-full transition-all duration-500 ${
                  mobileMenuOpen 
                    ? 'opacity-0' 
                    : 'group-hover:bg-purple-400'
                }`}></div>
                <div className={`w-7 h-0.5 bg-white/80 rounded-full transition-all duration-500 ${
                  mobileMenuOpen 
                    ? '-rotate-45 -translate-y-2.5 bg-orange-400' 
                    : 'group-hover:bg-orange-400'
                }`}></div>
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="relative z-10 flex flex-col h-full bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20 backdrop-blur-3xl border-r border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-500 group">
                  <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">P</span>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  PitchX
                </span>
              </div>
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <X className="h-6 w-6 text-white/80" />
              </Button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <Link 
                  href="/about-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-white/80 hover:text-white transition-colors duration-300 py-3 border-b border-white/10"
                >
                  About Us
                </Link>
                <a 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-white/80 hover:text-white transition-colors duration-300 py-3 border-b border-white/10"
                >
                  Features
                </a>
                <a 
                  href="#video-cv" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-white/80 hover:text-white transition-colors duration-300 py-3 border-b border-white/10"
                >
                  Video CV
                </a>
                <Link 
                  href="/careers" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-white/80 hover:text-white transition-colors duration-300 py-3 border-b border-white/10"
                >
                  Jobs/Career
                </Link>
              </div>
            </nav>
            
            {/* CTA Button */}
            <div className="p-6 border-t border-white/10">
              <Link href="/signup">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-4 text-lg rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105"
                >
                  <Star className="mr-3 h-5 w-5" />
                  Join Early Access
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Massive Enhanced Hero Section with Ultra 3D */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Ultra Advanced 3D Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/8 to-purple-900/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.06),transparent_50%)]"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
        </div>

        {/* Massive Floating 3D Elements with Themed Backgrounds */}
        <div className="absolute top-1/6 left-1/6 w-40 h-40 bg-gradient-to-br from-blue-500/6 to-cyan-500/6 rounded-[3rem] transform rotate-12 animate-float-3d-massive blur-sm border border-blue-400/10"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-purple-500/6 to-pink-500/6 rounded-full transform -rotate-12 animate-float-3d-massive-slow blur-sm border border-purple-400/10"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-orange-500/6 to-red-500/6 rounded-3xl transform rotate-45 animate-float-3d-massive-slower blur-sm border border-orange-400/10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-green-500/6 to-emerald-500/6 rounded-full transform -rotate-45 animate-float-3d-massive blur-sm border border-green-400/10"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-500/6 to-rose-500/6 rounded-2xl transform rotate-30 animate-float-3d-massive-slow blur-sm border border-pink-400/10"></div>

        {/* Enhanced Geometric 3D Shapes */}
        <div className="absolute top-1/4 right-1/5 w-20 h-20 border-2 border-blue-400/15 rotate-45 animate-float-geometric-massive backdrop-blur-sm bg-blue-500/3"></div>
        <div className="absolute bottom-1/5 left-1/5 w-16 h-16 border-2 border-purple-400/15 rounded-full animate-float-geometric-massive-slow backdrop-blur-sm bg-purple-500/3"></div>
        <div className="absolute top-3/5 left-1/3 w-24 h-24 border-2 border-orange-400/15 rotate-12 animate-float-geometric-massive-slower backdrop-blur-sm bg-orange-500/3"></div>

        <div className="container mx-auto px-4 text-center relative z-10 scroll-reveal">
          <div className="space-y-12 animate-fade-in-up">
            {/* Enhanced Badge */}
            <Badge className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 hover:bg-blue-500/20 px-8 py-4 text-xl backdrop-blur-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Rocket className="mr-3 h-6 w-6 animate-bounce" />
              <span className="relative z-10">The Future of Professional Hiring</span>
            </Badge>

            {/* Massive Enhanced Title */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight animate-text-reveal-massive">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700 mb-4">
                Welcome to
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent relative transform hover:scale-105 transition-transform duration-700">
                PitchX
                <span className="absolute -bottom-8 left-0 w-full h-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-40 blur-lg"></span>
                <span className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-60"></span>
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-2xl md:text-4xl text-white/80 leading-relaxed max-w-6xl mx-auto animate-fade-in-up-delay font-light">
              The revolutionary reverse job portal where{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                companies apply to you
              </span>{" "}
              based on your skills, video interviews, and Industry-Ready Score.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up-delay-2 pt-8">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-16 py-8 text-2xl rounded-3xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-700 transform hover:scale-125 hover:-translate-y-4 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center space-x-4">
                    <Star className="h-8 w-8 animate-spin" />
                    <span>Get Early Access</span>
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/90 text-black hover:bg-white hover:text-black px-16 py-8 text-2xl group rounded-3xl backdrop-blur-2xl shadow-2xl hover:shadow-white/40 transition-all duration-700 transform hover:scale-125 hover:-translate-y-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <span className="relative z-10 flex items-center space-x-4 text-black font-semibold">
                  <Play className="h-8 w-8 group-hover:scale-125 transition-transform duration-500 text-black" />
                  <span>Watch Preview</span>
                </span>
              </Button>
            </div>
          </div>

          {/* Ultra Enhanced 3D Hero Dashboard Preview */}
          <div className="mt-32 relative perspective-3000 animate-fade-in-up-delay-3">
            <div className="relative w-full max-w-7xl mx-auto transform transition-all duration-1000 hover:rotate-y-8 hover:scale-110">
              <div className="relative bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl border border-white/15 overflow-hidden">
                {/* Themed Dashboard Background Instead of Photo */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black border border-white/10">
                  {/* Animated Dashboard UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5"></div>

                  {/* Header Bar */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-b border-white/10">
                    <div className="flex items-center h-full px-6 space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main Dashboard Content */}
                  <div className="absolute top-20 left-6 right-6 bottom-6">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-6 gap-4 h-full">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="bg-white/5 rounded-lg"></div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Dashboard Elements */}
                    <div className="relative h-full">
                      <div className="absolute top-4 left-4 w-64 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-xl border border-blue-400/20 animate-float-dashboard-slow"></div>
                      <div className="absolute top-4 right-4 w-48 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-xl border border-purple-400/20 animate-float-dashboard"></div>
                      <div className="absolute bottom-4 left-4 w-56 h-28 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl backdrop-blur-xl border border-orange-400/20 animate-float-dashboard-slower"></div>
                      <div className="absolute bottom-4 right-4 w-40 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-xl border border-green-400/20 animate-float-dashboard"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-orange-500/15 rounded-3xl backdrop-blur-xl border border-white/20 animate-float-dashboard-center"></div>
                    </div>
                  </div>

                  {/* Animated Code Lines */}
                  <div className="absolute top-24 left-8 space-y-2 opacity-30">
                    <div className="w-32 h-1 bg-blue-400 rounded animate-pulse"></div>
                    <div className="w-24 h-1 bg-purple-400 rounded animate-pulse delay-1000"></div>
                    <div className="w-28 h-1 bg-orange-400 rounded animate-pulse delay-2000"></div>
                  </div>
                </div>

                {/* Professional Floating UI Elements in Containers */}
                <div className="absolute -top-8 -left-8 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl border border-white/20 transform rotate-3 animate-float-ui-massive">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">Industry-Ready Score</div>
                        <div className="text-white/80 text-sm">95% Match Rate</div>
                        <div className="flex space-x-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl border border-white/20 transform -rotate-2 animate-float-ui-massive-slow">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white mb-1">Company Interest</div>
                          <div className="text-white/80 text-sm">12 companies want to connect</div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-sm"
                      >
                        View All
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl border border-white/20 transform rotate-6 animate-float-ui-massive-slower">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                      <Video className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white mb-1">Video CV Score</div>
                    <div className="text-2xl font-bold text-orange-400">92%</div>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-6 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl border border-white/20 transform -rotate-3 animate-float-ui-massive">
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white mb-1">AI Analysis</div>
                    <div className="text-xl font-bold text-purple-400">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-40 animate-fade-in-up-delay-4">
            {[
              { number: "10K+", label: "Expected Users", color: "blue", icon: Users, delay: "0s" },
              { number: "500+", label: "Interested Companies", color: "purple", icon: Building, delay: "0.2s" },
              { number: "95%", label: "Success Rate", color: "orange", icon: Target, delay: "0.4s" },
              { number: "100%", label: "Skill-Based", color: "green", icon: Award, delay: "0.6s" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-700 hover:scale-125 hover:-translate-y-4 animate-stat-reveal-massive perspective-1000"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-700 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-${stat.color}-500/40 relative overflow-hidden group`}
                  >
                    <stat.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div
                  className={`text-6xl font-bold mb-4 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent relative`}
                >
                  {stat.number}
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></span>
                </div>
                <div className="text-white/70 font-medium text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced 3D Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-3d-massive">
          <span className="text-white/60 mb-6 text-xl font-medium">Scroll to explore</span>
          <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden backdrop-blur-xl">
            <div className="w-2 h-4 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 rounded-full mt-3 animate-scroll-indicator-massive"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full"></div>
          </div>
          <ChevronDown className="h-8 w-8 text-white/60 mt-4 animate-bounce" />
        </div>
      </section>

      {/* Enhanced Features Section with Ultra 3D */}
      <section id="features" className="py-40 px-4 relative scroll-section">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.05),transparent_70%)]"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-circuit-pattern animate-circuit-flow"></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-blue-400/15 rounded-3xl rotate-45 animate-float-geometric-section backdrop-blur-sm bg-blue-500/2"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border border-purple-400/15 rounded-full animate-float-geometric-section-slow backdrop-blur-sm bg-purple-500/2"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-32 scroll-reveal">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 px-8 py-4 text-xl backdrop-blur-3xl">
              <Layers className="mr-3 h-6 w-6" />
              Revolutionary Features
            </Badge>
            <h2 className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent animate-text-reveal relative">
              Why Choose PitchX?
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-500/10 to-purple-500/10 blur-xl -z-10"></span>
            </h2>
            <p className="text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              We're creating a skill-based community of recruiters and job seekers, transforming hiring through
              intelligent technology and data-driven insights.
            </p>
          </div>

          <div className="space-y-40">
            {[
              {
                icon: TrendingUp,
                title: "Reverse Hiring",
                description:
                  "Stop chasing opportunities. Let companies discover and apply to you based on your professional profile.",
                color: "blue",
                step: 1,
                features: ["AI-Powered Matching", "Real-time Notifications", "Smart Recommendations"],
              },
              {
                icon: Brain,
                title: "Industry-Ready Score",
                description:
                  "AI-powered evaluation system that accurately measures your real-world skills and market readiness.",
                color: "purple",
                step: 2,
                features: ["Comprehensive Analysis", "Skill Verification", "Performance Metrics"],
              },
              {
                icon: Video,
                title: "Video CV Profiles",
                description: "Showcase your personality and communication skills with professional video interviews.",
                color: "orange",
                step: 3,
                features: ["HD Video Quality", "AI Analysis", "Professional Templates"],
              },
              {
                icon: Target,
                title: "Skill-Based Community",
                description:
                  "Join a community where skills matter most. Connect with recruiters based on verified abilities.",
                color: "green",
                step: 4,
                features: ["Verified Skills", "Community Network", "Expert Connections"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-reveal opacity-0 transform translate-y-20 transition-all duration-500 ease-out ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-feature={index + 1}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Feature Content */}
                  <div className={`${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 rounded-3xl flex items-center justify-center mr-6 shadow-2xl shadow-${feature.color}-500/40 relative overflow-hidden group`}
                      >
                        <feature.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-500" />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-3xl blur-lg opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700`}
                        ></div>
                      </div>
                      <div className={`text-2xl font-bold text-${feature.color}-400 uppercase tracking-wider`}>
                        FEATURE {feature.step}
                      </div>
                    </div>

                    <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">{feature.title}</h3>

                    <p className="text-2xl text-white/80 mb-12 leading-relaxed">{feature.description}</p>

                    <div className="grid grid-cols-1 gap-4">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-white/70 text-lg">
                          <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-xl">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Visual */}
                  <div className={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                    <div className="relative perspective-1000">
                      <div
                        className={`relative bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-700/10 backdrop-blur-3xl rounded-[3rem] p-16 border border-${feature.color}-400/20 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-5 overflow-hidden`}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-6 left-6 w-24 h-24 border border-white/20 rounded-3xl rotate-12 animate-float-slow"></div>
                          <div className="absolute bottom-6 right-6 w-20 h-20 border border-white/15 rounded-full animate-float"></div>
                          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/10 rounded rotate-45 animate-float-slower"></div>
                        </div>

                        {/* Central Feature Icon */}
                        <div className="relative z-10 text-center">
                          <div
                            className={`w-40 h-40 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-${feature.color}-500/40 relative overflow-hidden group`}
                          >
                            <feature.icon className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-500" />
                            <div
                              className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-full blur-xl opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700`}
                            ></div>
                            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Feature Number Badge */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-xl border-4 border-gray-900">
                              {feature.step}
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="flex justify-center space-x-3 mb-6">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                                  i < feature.step ? `bg-${feature.color}-400` : "bg-white/20"
                                }`}
                              />
                            ))}
                          </div>

                          <div className="text-white/60 text-xl">Feature {feature.step} of 4</div>
                        </div>

                        {/* Animated Elements */}
                        <div
                          className={`absolute top-8 right-8 w-8 h-8 bg-${feature.color}-400 rounded-full animate-pulse`}
                        ></div>
                        <div
                          className={`absolute bottom-8 left-8 w-6 h-6 bg-${feature.color}-300 rounded-full animate-ping`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Line to Next Feature */}
                {index < 3 && (
                  <div className="flex justify-center mt-20">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-2 h-24 bg-gradient-to-b from-${feature.color}-400 to-transparent opacity-60`}
                      ></div>
                      <ChevronDown className="h-10 w-10 text-white/40 animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Technology Stack */}
          <div className="mt-32 scroll-reveal">
            <h3 className="text-4xl font-bold text-center text-white mb-16">Powered by Advanced Technology</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {[
                { icon: Cpu, label: "AI Engine", color: "blue" },
                { icon: Database, label: "Big Data", color: "purple" },
                { icon: Shield, label: "Security", color: "green" },
                { icon: Code, label: "ML Algorithms", color: "orange" },
                { icon: Globe, label: "Cloud Scale", color: "cyan" },
                { icon: Zap, label: "Real-time", color: "yellow" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${tech.color}-500 to-${tech.color}-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-${tech.color}-500/30`}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white/70 font-medium">{tech.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video CV Section with Themed Backgrounds */}
      <section id="video-cv" className="py-40 px-4 relative scroll-section">
        {/* Enhanced 3D Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/6 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/6 to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Enhanced Information Side */}
            <div className="scroll-reveal">
              <Badge className="mb-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 px-8 py-4 text-xl backdrop-blur-3xl">
                <Video className="mr-3 h-6 w-6" />
                Revolutionary Video CVs
              </Badge>
              <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Your </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent relative">
                  Video CV
                  <span className="absolute -bottom-4 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-40 blur-lg"></span>
                </span>
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {" "}
                  Speaks Louder
                </span>
              </h2>
              <p className="text-2xl text-white/80 mb-16 leading-relaxed">
                Transform your traditional resume into a dynamic video experience. Show your personality, communication
                skills, and passion in ways that paper never could.
              </p>

              <div className="space-y-10 mb-16">
                {[
                  {
                    icon: Camera,
                    title: "Professional Presentation",
                    desc: "Showcase your communication skills and professional demeanor",
                  },
                  {
                    icon: MessageSquare,
                    title: "Personality & Culture Fit",
                    desc: "Let employers see the real you and assess cultural alignment",
                  },
                  {
                    icon: Star,
                    title: "Stand Out from the Crowd",
                    desc: "Make a memorable impression that goes beyond traditional resumes",
                  },
                  {
                    icon: Brain,
                    title: "AI-Enhanced Analysis",
                    desc: "Our AI analyzes your video to generate insights and recommendations",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-8 transform transition-all duration-700 hover:translate-x-6 hover:scale-105 scroll-reveal-item group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mt-2 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-2xl mb-3">{item.title}</h4>
                      <p className="text-white/70 text-xl leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-10 rounded-3xl border border-blue-400/30 backdrop-blur-3xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl scroll-reveal">
                <h4 className="font-bold text-white mb-6 text-2xl flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6 text-yellow-400" />
                  Coming Soon Features:
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "AI-powered video analysis",
                    "Professional editing tools",
                    "Multi-language support",
                    "Industry-specific templates",
                    "Real-time feedback",
                    "Performance analytics",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-white/80 text-lg">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Video Section with Simple Grid Layout */}
            <div className="perspective-2000 scroll-reveal">
              <h3 className="text-4xl font-bold text-white mb-16 text-center">Sample Video CVs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Real Video Cards */}
                {[
                  { 
                    name: "Aditya Nadar", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "blue", 
                    time: "2:30", 
                    icon: Code, 
                    videoSrc: "/videos/a1.mov",
                    thumbnail: "/videos/thumbnails/a1.png"
                  },
                  { 
                    name: "Parth Bansal", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "purple", 
                    time: "1:45", 
                    icon: BarChart3, 
                    videoSrc: "/videos/a5.mp4",
                    thumbnail: "/videos/thumbnails/a5.png"
                  },
                  { 
                    name: "Agrimm Singh Rathore", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "green", 
                    time: "3:15", 
                    icon: Briefcase, 
                    videoSrc: "/videos/a2.mp4",
                    thumbnail: "/videos/thumbnails/a2.png"
                  },
                  { 
                    name: "Damynay Gaur", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "orange", 
                    time: "2:00", 
                    icon: Database, 
                    videoSrc: "/videos/a3.mp4",
                    thumbnail: "/videos/thumbnails/a3.png"
                  },
                  { 
                    name: "Harshit Vyas", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "red", 
                    time: "2:45", 
                    icon: Target, 
                    videoSrc: "/videos/a4.mp4",
                    thumbnail: "/videos/thumbnails/a4.png"
                  },
                  { 
                    name: "Likhit", 
                    role: "BML MUNJAL UNIVERSITY", 
                    color: "indigo", 
                    time: "1:30", 
                    icon: Globe, 
                    videoSrc: "/videos/a6.mp4",
                    thumbnail: "/videos/thumbnails/a6.png"
                  },
                ].map((person, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 scroll-reveal-card border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-3xl group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`relative bg-gradient-to-br from-${person.color}-500/15 via-${person.color}-600/20 to-${person.color}-700/15 h-64 group cursor-pointer overflow-hidden border-b border-white/10 aspect-[9/16]`}
                      onClick={() => setSelectedVideo(person.videoSrc)}
                    >
                      {/* Video Element with Thumbnail */}
                      <video
                        className="absolute inset-0 w-full h-full"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        preload="metadata"
                        poster={person.thumbnail}
                        muted
                        playsInline
                        onMouseEnter={(e) => {
                          e.currentTarget.play().catch(() => {
                            // Handle autoplay restrictions
                          });
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={person.videoSrc} type="video/mp4" />
                        <source src={person.videoSrc} type="video/quicktime" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-500/80 group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/30">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>

                      {/* Video Duration */}
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {person.time}
                      </div>

                      {/* Status Indicator */}
                      <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>

                      {/* Role Badge */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {person.role}
                      </div>
                    </div>
                    <CardContent className="p-4 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-black text-base mb-1">{person.name}</h4>
                          <p className="text-black/70 text-sm">{person.role}</p>
                        </div>
                        <div className={`w-10 h-10 bg-gradient-to-br from-${person.color}-500 to-${person.color}-700 rounded-xl flex items-center justify-center shadow-lg`}>
                          <person.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enhanced Stats */}
              <div className="mt-16 grid grid-cols-3 gap-6">
                {[
                  { icon: BarChart3, number: "98%", label: "Success Rate", color: "blue" },
                  { icon: Users, number: "2.5K", label: "Video CVs", color: "purple" },
                  { icon: Award, number: "4.9", label: "Avg Rating", color: "orange" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-3xl rounded-2xl p-6 border border-white/10 transform hover:scale-110 transition-all duration-500 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with other sections... */}
      {/* About Us Section with Enhanced 3D Timeline */}
      {/* Enhanced How PitchX Works Section with Step-by-Step Scroll Reveal */}
      <section id="about-us" className="py-40 px-4 relative scroll-section">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-32 scroll-reveal">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 px-8 py-4 text-xl backdrop-blur-3xl">
              <Briefcase className="mr-3 h-6 w-6" />
              How It Works
            </Badge>
            <h2 className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent relative">
              How PitchX Works
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-500/10 to-purple-500/10 blur-xl -z-10"></span>
            </h2>
            <p className="text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              Join our skill-based community through these strategic steps
            </p>
          </div>

          {/* Step-by-Step Process with Individual Scroll Reveals */}
          <div className="space-y-40">
            {[
              {
                icon: UserPlus,
                title: "Sign Up",
                desc: "Create your account and join our skill-based community of professionals",
                color: "blue",
                step: 1,
                details: [
                  "Quick registration process",
                  "Professional profile setup",
                  "Join verified community",
                  "Access to platform features",
                ],
              },
              {
                icon: FileText,
                title: "Take Skill Test",
                desc: "Complete comprehensive skill assessments to verify your abilities",
                color: "purple",
                step: 2,
                details: [
                  "Industry-specific assessments",
                  "Real-world problem solving",
                  "Timed skill challenges",
                  "Instant results and feedback",
                ],
              },
              {
                icon: Upload,
                title: "Upload Video CV",
                desc: "Record your professional video CV to showcase your personality",
                color: "orange",
                step: 3,
                details: [
                  "Professional video recording",
                  "Personality showcase",
                  "Communication skills demo",
                  "AI-powered analysis",
                ],
              },
              {
                icon: Trophy,
                title: "Industry-Ready Score",
                desc: "Receive your comprehensive score combining all assessments",
                color: "green",
                step: 4,
                details: [
                  "Comprehensive evaluation",
                  "Skills verification",
                  "Market readiness score",
                  "Performance insights",
                ],
              },
              {
                icon: Building,
                title: "Companies Apply",
                desc: "Companies discover and apply to you based on your verified skills",
                color: "red",
                step: 5,
                details: [
                  "Reverse hiring process",
                  "Company applications",
                  "Skill-based matching",
                  "Direct opportunities",
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`step-reveal opacity-0 transform translate-y-20 transition-all duration-1000 ease-out ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-step={index + 1}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Step Content */}
                  <div className={`${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 rounded-2xl flex items-center justify-center mr-6 shadow-2xl shadow-${step.color}-500/40 relative overflow-hidden group`}
                      >
                        <step.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 rounded-2xl blur-lg opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700`}
                        ></div>
                      </div>
                      <div className={`text-2xl font-bold text-${step.color}-400 uppercase tracking-wider`}>
                        STEP {step.step}
                      </div>
                    </div>

                    <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">{step.title}</h3>

                    <p className="text-2xl text-white/80 mb-12 leading-relaxed">{step.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-white/70 text-lg">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                    <div className="relative perspective-1000">
                      <div
                        className={`relative bg-gradient-to-br from-${step.color}-500/10 to-${step.color}-700/10 backdrop-blur-3xl rounded-[3rem] p-12 border border-${step.color}-400/20 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-5 overflow-hidden`}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-2xl rotate-12 animate-float-slow"></div>
                          <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/15 rounded-full animate-float"></div>
                          <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/10 rounded rotate-45 animate-float-slower"></div>
                        </div>

                        {/* Central Step Icon */}
                        <div className="relative z-10 text-center">
                          <div
                            className={`w-32 h-32 bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-${step.color}-500/40 relative overflow-hidden group`}
                          >
                            <step.icon className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-500" />
                            <div
                              className={`absolute inset-0 bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 rounded-full blur-xl opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700`}
                            ></div>
                            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl shadow-xl border-4 border-gray-900">
                              {step.step}
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="flex justify-center space-x-2 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                  i < step.step ? `bg-${step.color}-400` : "bg-white/20"
                                }`}
                              />
                            ))}
                          </div>

                          <div className="text-white/60 text-lg">Step {step.step} of 5</div>
                        </div>

                        {/* Animated Elements */}
                        <div
                          className={`absolute top-6 right-6 w-6 h-6 bg-${step.color}-400 rounded-full animate-pulse`}
                        ></div>
                        <div
                          className={`absolute bottom-6 left-6 w-4 h-4 bg-${step.color}-300 rounded-full animate-ping`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Line to Next Step */}
                {index < 4 && (
                  <div className="flex justify-center mt-20">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-1 h-20 bg-gradient-to-b from-${step.color}-400 to-transparent opacity-60`}
                      ></div>
                      <ChevronDown className="h-8 w-8 text-white/40 animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced 3D Info Card */}
          <div className="mt-32 text-center scroll-reveal">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-16 rounded-[3rem] border border-blue-400/30 max-w-6xl mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-2xl perspective-1000 hover:rotate-y-3 backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <h4 className="text-4xl font-bold text-white mb-8 relative z-10">100% Skill-Based Community</h4>
              <p className="text-2xl text-white/80 leading-relaxed relative z-10">
                PitchX creates a transparent ecosystem where your abilities speak louder than your background. Companies
                connect with candidates based purely on verified skills, creating fair opportunities for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Jobs/Career Section */}
      <section id="jobs" className="py-40 px-4 relative scroll-section">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-10 perspective-1000">
                {[
                  { icon: Users, number: "10K+", label: "Skill-Verified Candidates", color: "blue" },
                  { icon: Zap, number: "50%", label: "Faster Hiring", color: "purple" },
                  { icon: Award, number: "95%", label: "Skill Match Accuracy", color: "orange" },
                  { icon: Target, number: "100%", label: "Verified Skills", color: "green" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="p-10 text-center border border-white/10 bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-3xl hover:shadow-2xl transition-all duration-700 transform hover:scale-125 hover:-rotate-y-8 scroll-reveal-card relative overflow-hidden group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <stat.icon
                      className={`h-20 w-20 text-${stat.color}-400 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500`}
                    />
                    <div className={`text-5xl font-bold text-${stat.color}-400 mb-4`}>{stat.number}</div>
                    <div className="text-white/70 font-medium text-xl">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 scroll-reveal">
              <Badge className="mb-10 bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-200 border-green-400/30 px-8 py-4 text-xl backdrop-blur-3xl">
                <Briefcase className="mr-3 h-6 w-6" />
                Career Opportunities
              </Badge>
              <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Find Your Dream{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent relative">
                  Career
                  <span className="absolute -bottom-4 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full opacity-40 blur-lg"></span>
                </span>
              </h2>
              <p className="text-2xl text-white/80 mb-16 leading-relaxed">
                Join our skill-based community where every candidate is verified through comprehensive testing and video
                assessment.
              </p>

              <div className="space-y-10 mb-16">
                {[
                  {
                    icon: Target,
                    title: "Skill-Based Job Matching",
                    desc: "Get matched with jobs based on your verified skills",
                  },
                  {
                    icon: TrendingUp,
                    title: "Career Growth Opportunities",
                    desc: "Access roles from startups to enterprises",
                  },
                  {
                    icon: Shield,
                    title: "Fair & Transparent Process",
                    desc: "Experience hiring based on merit and capabilities",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-8 transform transition-all duration-700 hover:translate-x-6 hover:scale-105 scroll-reveal-item group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mt-2 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-2xl mb-2">{item.title}</h4>
                      <p className="text-white/70 text-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-16 py-8 text-2xl rounded-3xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-700 transform hover:scale-125 hover:-translate-y-4 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center space-x-4">
                    <Rocket className="h-8 w-8" />
                    <span>Join Early Access</span>
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Ultra 3D Parallax */}
      <section className="py-40 px-4 relative overflow-hidden scroll-section">
        {/* Ultra Enhanced 3D Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

        {/* Massive Floating 3D Elements */}
        <div className="absolute -top-60 -left-60 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-float-3d-massive"></div>
        <div className="absolute -bottom-60 -right-60 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-float-3d-massive-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-float-3d-massive-slower transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto text-center relative z-10 scroll-reveal">
          <Badge className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 px-8 py-4 text-xl backdrop-blur-3xl">
            <Globe className="mr-3 h-6 w-6" />
            Join the Revolution
          </Badge>
          <h2 className="text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Join the Skill-Based Revolution
          </h2>
          <p className="text-3xl mb-20 text-white/80 max-w-5xl mx-auto leading-relaxed">
            Be part of a community where skills matter most. Join our waitlist and be among the first to experience the
            future of skill-based hiring and recruitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-16 py-8 text-2xl rounded-3xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-700 transform hover:scale-125 hover:-translate-y-4 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-4">
                  <Globe className="h-8 w-8 animate-spin" />
                  <span>Get Early Access</span>
                  <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-16 py-8 text-2xl rounded-3xl backdrop-blur-3xl transform hover:scale-125 hover:-translate-y-4 transition-all duration-700 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-white/6 to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <span className="relative z-10 flex items-center space-x-4">
                <Play className="h-8 w-8 group-hover:scale-125 transition-transform duration-500" />
                <span>Watch Preview</span>
              </span>
            </Button>
          </div>

          {/* Enhanced Success Metrics */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99%", label: "User Satisfaction", icon: Star, color: "blue" },
              { number: "24/7", label: "Support Available", icon: Shield, color: "green" },
              { number: "50+", label: "Countries Supported", icon: Globe, color: "purple" },
              { number: "1M+", label: "Skills Verified", icon: Award, color: "orange" },
            ].map((metric, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-3xl rounded-2xl p-6 border border-white/10 transform hover:scale-110 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500`}
                >
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.number}</div>
                <div className="text-white/70 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Ultra 3D Effects */}
      <footer className="py-24 px-4 bg-gradient-to-t from-black via-gray-900/60 to-gray-900/30 border-t border-white/10 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.03),transparent_70%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="scroll-reveal">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <span className="text-white font-bold text-2xl">P</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  PitchX
                </span>
              </div>
              <p className="text-white/70 leading-relaxed mb-10 text-xl">
                Creating a skill-based community of recruiters and job seekers through intelligent reverse hiring and
                AI-powered candidate matching.
              </p>
              <div className="text-white/50 text-lg">© 2024 PitchX. All rights reserved.</div>
            </div>
            {[
              {
                title: "Coming Soon",
                items: ["Skill Testing", "Video CV Upload", "Industry-Ready Score", "Skill-Based Matching"],
              },
              {
                title: "Jobs & Career",
                items: ["Skill-Based Jobs", "Career Opportunities", "Professional Growth", "Industry Connections"],
              },
              {
                title: "Support & Resources",
                items: ["Help Center", "Contact Support", "Documentation", "Privacy Policy", "Help & Support: pitchx001@gmail.com"],
              },
            ].map((section, index) => (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <h4 className="font-bold text-white mb-10 text-2xl">{section.title}</h4>
                <ul className="space-y-6 text-white/70 text-xl">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="hover:text-white transition-colors duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-white/60 text-lg">Built with ❤️ for the future of hiring</div>
              <div className="flex space-x-8">
                {["Privacy", "Terms", "Cookies", "Security"].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300 text-lg hover:scale-105 transform"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="relative w-full h-full md:w-auto md:h-auto md:max-w-4xl md:aspect-video bg-black rounded-none md:rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <video
              className="w-full h-full object-contain md:object-cover"
              controls
              autoPlay
              playsInline
              src={selectedVideo}
            >
              <source src={selectedVideo} type="video/mp4" />
              <source src={selectedVideo} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}


    </div>
  )
}
