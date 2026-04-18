"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { ActivityTable } from "@/components/dashboard/activity-table"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { RiskChart } from "@/components/dashboard/risk-chart"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FileText,
  AlertTriangle,
  DollarSign,
  Brain,
  TrendingUp,
  ShieldAlert,
  FileStack,
  ArrowRight,
  Zap,
  CheckCircle2,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"

const quickActions = [
  {
    title: "Predict Freight Cost",
    description: "AI-powered cost estimation",
    href: "/dashboard/predictor",
    icon: TrendingUp,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
  },
  {
    title: "Detect Invoice Fraud",
    description: "Real-time fraud analysis",
    href: "/dashboard/fraud",
    icon: ShieldAlert,
    gradient: "from-rose-500/20 to-red-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
  {
    title: "Bulk Invoice Analysis",
    description: "Process multiple invoices",
    href: "/dashboard/bulk",
    icon: FileStack,
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-500",
  },
]

const recentPredictions = [
  { invoice: "INV-2024-847", type: "freight", result: "$2,340", time: "2m ago", status: "completed" },
  { invoice: "INV-2024-846", type: "fraud", result: "Safe", time: "5m ago", status: "completed" },
  { invoice: "INV-2024-845", type: "freight", result: "$1,890", time: "12m ago", status: "completed" },
  { invoice: "INV-2024-844", type: "fraud", result: "Suspicious", time: "18m ago", status: "flagged" },
  { invoice: "INV-2024-843", type: "bulk", result: "23 analyzed", time: "25m ago", status: "completed" },
]

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Overview of your invoice intelligence system"
    >
      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Invoices"
          value="12,847"
          change="+12.5% from last month"
          changeType="positive"
          icon={FileText}
          iconColor="text-primary"
        />
        <StatCard
          title="Risk Alerts"
          value="23"
          change="-8.2% from last month"
          changeType="positive"
          icon={AlertTriangle}
          iconColor="text-destructive"
        />
        <StatCard
          title="Avg Freight Cost"
          value="$2,450"
          change="+3.1% from last month"
          changeType="negative"
          icon={DollarSign}
          iconColor="text-accent"
        />
        <StatCard
          title="Predictions Today"
          value="847"
          change="Processing 12 now"
          changeType="neutral"
          icon={Brain}
          iconColor="text-chart-3"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            AI-Powered Analysis
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <div
                className={cn(
                  "glass group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100",
                    action.gradient
                  )}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        action.iconBg
                      )}
                    >
                      <action.icon className={cn("h-6 w-6", action.iconColor)} />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <h4 className="mt-4 font-semibold">{action.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
        <div>
          <RiskChart />
        </div>
      </div>

      {/* Recent Activity + Quick Stats */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Predictions */}
        <div className="glass rounded-xl p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Recent Predictions</h3>
            <Button variant="ghost" size="sm" className="gap-1 text-sm">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentPredictions.map((pred, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      pred.type === "freight"
                        ? "bg-violet-500/10"
                        : pred.type === "fraud"
                          ? "bg-rose-500/10"
                          : "bg-teal-500/10"
                    )}
                  >
                    {pred.type === "freight" ? (
                      <TrendingUp className="h-4 w-4 text-violet-500" />
                    ) : pred.type === "fraud" ? (
                      <ShieldAlert className="h-4 w-4 text-rose-500" />
                    ) : (
                      <FileStack className="h-4 w-4 text-teal-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{pred.invoice}</p>
                    <p className="text-xs text-muted-foreground capitalize">{pred.type} prediction</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        pred.result === "Suspicious" ? "text-yellow-500" : ""
                      )}
                    >
                      {pred.result}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {pred.time}
                    </p>
                  </div>
                  {pred.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="space-y-4">
          <div className="glass rounded-xl p-6">
            <h3 className="mb-4 font-semibold">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm">ML Models</span>
                </div>
                <span className="text-sm text-green-500">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm">API Gateway</span>
                </div>
                <span className="text-sm text-green-500">99.9% uptime</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm">Database</span>
                </div>
                <span className="text-sm text-green-500">Connected</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="mb-4 font-semibold">Model Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Freight Accuracy</span>
                  <span className="font-medium">99.2%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[99.2%] rounded-full bg-violet-500" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fraud Detection</span>
                  <span className="font-medium">98.7%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[98.7%] rounded-full bg-rose-500" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Bulk Processing</span>
                  <span className="font-medium">97.8%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[97.8%] rounded-full bg-teal-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="mt-8">
        <ActivityTable />
      </div>
    </DashboardLayout>
  )
}
