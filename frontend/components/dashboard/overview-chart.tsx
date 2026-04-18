"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Jan", invoices: 400, predictions: 340, alerts: 12 },
  { name: "Feb", invoices: 520, predictions: 480, alerts: 18 },
  { name: "Mar", invoices: 610, predictions: 560, alerts: 8 },
  { name: "Apr", invoices: 780, predictions: 720, alerts: 22 },
  { name: "May", invoices: 890, predictions: 850, alerts: 15 },
  { name: "Jun", invoices: 950, predictions: 920, alerts: 10 },
  { name: "Jul", invoices: 1100, predictions: 1050, alerts: 25 },
]

export function OverviewChart() {
  return (
    <div className="glass rounded-xl p-6">
      <div className="mb-6">
        <h3 className="font-semibold">Invoice Analytics</h3>
        <p className="text-sm text-muted-foreground">Monthly invoice processing overview</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorInvoices" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.65 0.25 265)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPredictions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.75 0.18 180)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.75 0.18 180)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis
              dataKey="name"
              className="text-xs"
              tick={{ fill: "oklch(0.65 0 0)" }}
              axisLine={{ stroke: "oklch(0.3 0 0)" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "oklch(0.65 0 0)" }}
              axisLine={{ stroke: "oklch(0.3 0 0)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.16 0.015 265)",
                border: "1px solid oklch(0.28 0.02 265)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
            />
            <Area
              type="monotone"
              dataKey="invoices"
              stroke="oklch(0.65 0.25 265)"
              fillOpacity={1}
              fill="url(#colorInvoices)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="predictions"
              stroke="oklch(0.75 0.18 180)"
              fillOpacity={1}
              fill="url(#colorPredictions)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Invoices</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-accent" />
          <span className="text-sm text-muted-foreground">Predictions</span>
        </div>
      </div>
    </div>
  )
}
