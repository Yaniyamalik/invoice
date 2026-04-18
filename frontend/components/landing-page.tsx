"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Shield, Zap, Brain, CheckCircle2, Sparkles, TrendingUp, FileCheck, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
            <Brain className="h-6 w-6 text-primary-foreground" />
            <div className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full bg-accent" />
          </div>
          <span className="text-xl font-bold tracking-tight">Smart Invoice</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/about" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
            About
          </Link>
          <Link href="/dashboard">
            <Button className="gap-2 shadow-lg shadow-primary/20">
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center px-6 pb-12 pt-16 text-center lg:pb-20 lg:pt-24">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            AI-Powered Invoice Intelligence
          </div>
          
          {/* Headline */}
          <h1 className="max-w-4xl animate-fade-in text-balance text-4xl font-bold tracking-tight [animation-delay:100ms] md:text-6xl lg:text-7xl">
            Transform Invoice Management with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-chart-5 to-accent bg-clip-text text-transparent">
                Machine Learning
              </span>
              <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl animate-fade-in text-pretty text-lg text-muted-foreground [animation-delay:200ms] md:text-xl">
            Predict freight costs with precision. Detect invoice anomalies instantly. 
            Make data-driven decisions with our enterprise-grade AI platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex animate-fade-in flex-col items-center gap-4 [animation-delay:300ms] sm:flex-row">
            <Link href="/dashboard">
              <Button size="lg" className="group h-12 gap-2 px-8 text-base shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30">
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="h-12 gap-2 px-8 text-base backdrop-blur-sm">
                <Activity className="h-4 w-4" />
                View Live Demo
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex animate-fade-in flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground [animation-delay:400ms]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Cancel anytime
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative rounded-2xl border border-border/50 bg-card/40 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 rounded-t-xl border-b border-border/50 bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.smartinvoice.ai/dashboard
                </div>
              </div>
              {/* Dashboard Mockup */}
              <div className="rounded-b-xl bg-background/80 p-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {/* Mini Stat Cards */}
                  {[
                    { label: "Total Invoices", value: "12,847", change: "+12.5%", color: "primary" },
                    { label: "Predicted Savings", value: "$284K", change: "+8.2%", color: "accent" },
                    { label: "Fraud Detected", value: "23", change: "-42%", color: "destructive" },
                    { label: "Accuracy Rate", value: "99.2%", change: "+0.3%", color: "success" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/50 bg-card/60 p-4">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                      <p className={`mt-1 text-xs ${stat.color === 'destructive' ? 'text-success' : 'text-accent'}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>
                {/* Mini Chart */}
                <div className="mt-4 h-32 rounded-xl border border-border/50 bg-card/60 p-4">
                  <div className="flex h-full items-end justify-between gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/80 to-accent/80 transition-all hover:from-primary hover:to-accent"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Powerful AI Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to optimize invoice management
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: TrendingUp,
                  title: "Freight Cost Prediction",
                  description: "ML models analyze historical patterns to predict costs with 99%+ accuracy, enabling better budget planning.",
                  color: "primary",
                },
                {
                  icon: Shield,
                  title: "Fraud Detection",
                  description: "Anomaly detection algorithms instantly flag suspicious invoices, protecting your business from fraud.",
                  color: "accent",
                },
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description: "Process thousands of invoices in milliseconds with our optimized inference pipeline.",
                  color: "warning",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Interactive dashboards with deep insights into spending patterns and cost optimization.",
                  color: "chart-5",
                },
                {
                  icon: FileCheck,
                  title: "Batch Processing",
                  description: "Upload bulk invoices for automated analysis and instant categorization.",
                  color: "success",
                },
                {
                  icon: Activity,
                  title: "Continuous Learning",
                  description: "Models improve over time, adapting to your specific invoice patterns and vendors.",
                  color: "chart-3",
                },
              ].map((feature) => (
                <div 
                  key={feature.title} 
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}/10 text-${feature.color} transition-colors group-hover:bg-${feature.color} group-hover:text-${feature.color === 'warning' || feature.color === 'success' ? 'foreground' : `${feature.color}-foreground`}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 p-12 backdrop-blur-xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Trusted by Industry Leaders
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Powering intelligent invoice management across enterprises
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-4">
                {[
                  { value: "99.2%", label: "Prediction Accuracy", sublabel: "ML model precision" },
                  { value: "2.5M+", label: "Invoices Processed", sublabel: "Monthly average" },
                  { value: "<50ms", label: "Response Time", sublabel: "Average latency" },
                  { value: "$12M+", label: "Fraud Prevented", sublabel: "Last quarter" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="bg-gradient-to-r from-primary via-chart-5 to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-medium">{stat.label}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three simple steps to intelligent invoice management
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary/20 md:block" />
              
              <div className="grid gap-12 md:gap-24">
                {[
                  {
                    step: "01",
                    title: "Upload Invoices",
                    description: "Drag and drop your invoices or connect your ERP system for automatic syncing.",
                  },
                  {
                    step: "02",
                    title: "AI Analysis",
                    description: "Our ML models analyze each invoice for cost prediction and fraud indicators.",
                  },
                  {
                    step: "03",
                    title: "Actionable Insights",
                    description: "Receive detailed reports with recommendations and flagged anomalies.",
                  },
                ].map((item, i) => (
                  <div key={item.step} className={`flex items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <div className="mb-2 text-sm font-bold text-primary">STEP {item.step}</div>
                      <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-card text-2xl font-bold shadow-lg shadow-primary/20">
                      {item.step}
                    </div>
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-12 text-center backdrop-blur-xl">
              <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to Transform Your Invoice Management?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join thousands of businesses saving time and preventing fraud with AI-powered intelligence.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="h-12 gap-2 px-8 text-base shadow-xl shadow-primary/25">
                      Get Started Free
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-card/30 px-6 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">Smart Invoice</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Built with React, Tailwind CSS, Python, Machine Learning & Flask API
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
              <Link href="/dashboard" className="transition-colors hover:text-foreground">Dashboard</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
