"use client"

import { cn } from "@/lib/utils"

interface Activity {
  id: string
  invoiceId: string
  type: "prediction" | "fraud_check" | "approval" | "alert"
  status: "completed" | "pending" | "flagged"
  amount: string
  time: string
}

const activities: Activity[] = [
  {
    id: "1",
    invoiceId: "INV-2024-001",
    type: "prediction",
    status: "completed",
    amount: "$12,450.00",
    time: "2 min ago",
  },
  {
    id: "2",
    invoiceId: "INV-2024-002",
    type: "fraud_check",
    status: "flagged",
    amount: "$8,320.00",
    time: "5 min ago",
  },
  {
    id: "3",
    invoiceId: "INV-2024-003",
    type: "approval",
    status: "completed",
    amount: "$3,150.00",
    time: "12 min ago",
  },
  {
    id: "4",
    invoiceId: "INV-2024-004",
    type: "prediction",
    status: "pending",
    amount: "$15,780.00",
    time: "18 min ago",
  },
  {
    id: "5",
    invoiceId: "INV-2024-005",
    type: "fraud_check",
    status: "completed",
    amount: "$6,200.00",
    time: "25 min ago",
  },
]

const typeLabels = {
  prediction: "Freight Prediction",
  fraud_check: "Fraud Check",
  approval: "Approval",
  alert: "Alert",
}

export function ActivityTable() {
  return (
    <div className="glass overflow-hidden rounded-xl">
      <div className="border-b border-border/50 px-6 py-4">
        <h3 className="font-semibold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest invoice processing events</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {activities.map((activity) => (
              <tr key={activity.id} className="transition-colors hover:bg-muted/20">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  {activity.invoiceId}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                  {typeLabels[activity.type]}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
                      activity.status === "completed" &&
                        "bg-green-500/10 text-green-500",
                      activity.status === "pending" &&
                        "bg-yellow-500/10 text-yellow-500",
                      activity.status === "flagged" &&
                        "bg-red-500/10 text-red-500"
                    )}
                  >
                    {activity.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  {activity.amount}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                  {activity.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
