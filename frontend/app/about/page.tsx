import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/dashboard/theme-toggle"
import {
  Brain,
  Code2,
  Database,
  Server,
  Sparkles,
  ArrowLeft,
  Github,
  ExternalLink,
} from "lucide-react"

const technologies = [
  {
    name: "React",
    description: "Modern UI library for building interactive interfaces",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: Sparkles,
    color: "text-cyan-500",
  },
  {
    name: "Python",
    description: "Backend language for ML model training and inference",
    icon: Code2,
    color: "text-yellow-500",
  },
  {
    name: "Machine Learning",
    description: "Predictive models for freight cost and fraud detection",
    icon: Brain,
    color: "text-primary",
  },
  {
    name: "Flask API",
    description: "Lightweight Python web framework for REST APIs",
    icon: Server,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    description: "Robust database for storing invoice and prediction data",
    icon: Database,
    color: "text-blue-400",
  },
]

const features = [
  {
    title: "Freight Cost Prediction",
    description:
      "Our ML models analyze historical invoice data to accurately predict freight costs, helping businesses budget more effectively.",
  },
  {
    title: "Fraud Detection",
    description:
      "Advanced anomaly detection algorithms identify suspicious invoices in real-time, preventing financial losses.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Interactive dashboards provide instant insights into invoice processing, risk assessment, and prediction accuracy.",
  },
  {
    title: "API Integration",
    description:
      "RESTful APIs allow seamless integration with existing invoice management and ERP systems.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-border px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Smart Invoice</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/dashboard">
            <Button variant="outline">Go to Dashboard</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 text-center lg:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
          About Smart Invoice{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          A modern AI-powered invoice management system built with cutting-edge
          technologies to revolutionize how businesses handle freight cost
          prediction and fraud detection.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Built With Modern Technologies
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            We leverage the best tools and frameworks to deliver a fast, reliable,
            and scalable solution.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="glass group rounded-xl p-6 transition-all hover:scale-[1.02] hover:border-primary/30"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10 ${tech.color}`}
                >
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Key Features
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Our platform provides comprehensive tools for intelligent invoice
            management.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            System Architecture
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            A robust, scalable architecture designed for high performance.
          </p>

          <div className="glass rounded-xl p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Code2 className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mb-2 font-semibold">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  React + Next.js with Tailwind CSS for a responsive, modern UI
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                  <Server className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="mb-2 font-semibold">Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Flask API serving ML models with Python for predictions
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">ML Models</h3>
                <p className="text-sm text-muted-foreground">
                  Trained models for freight prediction and fraud detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Experience the power of AI-driven invoice intelligence today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                View Dashboard
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built By Yaniya with React, Tailwind CSS, Python, Machine Learning & Flask API
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Smart Invoice Intelligence System
        </p>
      </footer>
    </div>
  )
}
