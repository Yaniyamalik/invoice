"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"

const data = [
  { name: "Low Risk", value: 68, color: "oklch(0.7 0.18 145)" },
  { name: "Medium Risk", value: 22, color: "oklch(0.8 0.15 50)" },
  { name: "High Risk", value: 10, color: "oklch(0.55 0.22 25)" },
]

export function RiskChart() {
  return (
    <div className="glass rounded-xl p-6">
      <div className="mb-6">
        <h3 className="font-semibold">Risk Distribution</h3>
        <p className="text-sm text-muted-foreground">Invoice risk assessment overview</p>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.16 0.015 265)",
                border: "1px solid oklch(0.28 0.02 265)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
            <Legend
              formatter={(value) => (
                <span style={{ color: "oklch(0.65 0 0)" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
