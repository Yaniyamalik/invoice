"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  ShieldAlert,
  ShieldCheck,
  Loader2,
  Search,
  Package,
  DollarSign,
  Truck,
  Clock,
  AlertTriangle,
} from "lucide-react"

interface FormData {
  quantity: string
  dollars: string
  freight: string
  totalItemDollars: string
  delays: string
}

interface AnalysisResult {
  status: "safe" | "suspicious"
  confidence: number
  riskFactors: string[]
}

export default function FraudDetectionPage() {
  const [formData, setFormData] = useState<FormData>({
    quantity: "",
    dollars: "",
    freight: "",
    totalItemDollars: "",
    delays: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAnalyze = async () => {
  if (!formData.quantity || !formData.dollars || !formData.freight) return;

  try {
    setIsLoading(true);

    const response = await fetch("http://127.0.0.1:8000/predict-flag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoice_quantity: Number(formData.quantity),
        invoice_dollars: Number(formData.dollars),
        Freight: Number(formData.freight),
        total_item_quantity: Number(formData.quantity),
        total_item_dollars: Number(formData.totalItemDollars),
      }),
    });

    const data = await response.json();

    setResult({
      status: data.risk.toLowerCase() === "safe" ? "safe" : "suspicious",
      confidence: data.confidence || 95,
      riskFactors: data.riskFactors || [
        data.risk === "Safe"
          ? "No risk factors detected"
          : "Suspicious invoice pattern detected",
      ],
    });
  } catch (error) {
    console.error(error);
    alert("API Error: Could not analyze invoice");
  } finally {
    setIsLoading(false);
  }
};
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulated fraud detection logic
    const dollars = parseFloat(formData.dollars)
    const freight = parseFloat(formData.freight)
    const delays = parseInt(formData.delays) || 0

    const freightRatio = freight / dollars
    const isSuspicious = freightRatio > 0.15 || delays > 5 || dollars > 50000

    const riskFactors: string[] = []
    if (freightRatio > 0.15) riskFactors.push("Unusually high freight ratio")
    if (delays > 5) riskFactors.push("Excessive delivery delays")
    if (dollars > 50000) riskFactors.push("High-value transaction")
    if (parseInt(formData.quantity) > 1000) riskFactors.push("Large quantity order")

    setResult({
      status: isSuspicious ? "suspicious" : "safe",
      confidence: Math.round((85 + Math.random() * 14) * 10) / 10,
      riskFactors: riskFactors.length > 0 ? riskFactors : ["No risk factors detected"],
    })
    setIsLoading(false)
  }

  const inputFields = [
    { key: "quantity", label: "Invoice Quantity", icon: Package, placeholder: "e.g., 100" },
    { key: "dollars", label: "Total Dollars", icon: DollarSign, placeholder: "e.g., 10000" },
    { key: "freight", label: "Freight Cost", icon: Truck, placeholder: "e.g., 500" },
    { key: "totalItemDollars", label: "Total Item Dollars", icon: DollarSign, placeholder: "e.g., 9500" },
    { key: "delays", label: "Delivery Delays (days)", icon: Clock, placeholder: "e.g., 2" },
  ]

  return (
    <DashboardLayout
      title="Invoice Fraud Detection"
      description="Analyze invoices for suspicious patterns"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Form */}
        <div className="glass rounded-xl p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Invoice Details</h3>
              <p className="text-sm text-muted-foreground">
                Enter invoice information for analysis
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {inputFields.map((field) => (
              <div key={field.key} className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <field.icon className="h-4 w-4 text-muted-foreground" />
                  {field.label}
                </label>
                <Input
                  type="number"
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof FormData]}
                  onChange={(e) =>
                    handleInputChange(field.key as keyof FormData, e.target.value)
                  }
                />
              </div>
            ))}

            <Button
              onClick={handleAnalyze}
              disabled={!formData.quantity || !formData.dollars || !formData.freight || isLoading}
              className="mt-6 w-full gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing Invoice...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Analyze Invoice
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Result Badge */}
          {result && (
            <div
              className={cn(
                "glass animate-in fade-in slide-in-from-right-4 rounded-xl border-2 p-6",
                result.status === "safe"
                  ? "border-green-500/30"
                  : "border-red-500/30"
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl",
                    result.status === "safe"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  )}
                >
                  {result.status === "safe" ? (
                    <ShieldCheck className="h-8 w-8" />
                  ) : (
                    <AlertTriangle className="h-8 w-8" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Analysis Result</p>
                  <p
                    className={cn(
                      "text-2xl font-bold uppercase",
                      result.status === "safe" ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {result.status}
                  </p>
                </div>
              </div>

              {/* Confidence Meter */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Confidence Score</span>
                  <span className="font-semibold">{result.confidence}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      result.status === "safe" ? "bg-green-500" : "bg-red-500"
                    )}
                    style={{ width: `${result.confidence}%` }}
                  />
                </div>
              </div>

              {/* Risk Factors */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium">
                  {result.status === "safe" ? "Analysis Summary" : "Risk Factors Detected"}
                </p>
                <ul className="space-y-2">
                  {result.riskFactors.map((factor, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-center gap-2 rounded-lg p-2 text-sm",
                        result.status === "safe"
                          ? "bg-green-500/5 text-green-600 dark:text-green-400"
                          : "bg-red-500/5 text-red-600 dark:text-red-400"
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          result.status === "safe" ? "bg-green-500" : "bg-red-500"
                        )}
                      />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Placeholder when no result */}
          {!result && (
            <div className="glass flex h-[400px] flex-col items-center justify-center rounded-xl p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <ShieldAlert className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-semibold">No Analysis Yet</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Fill in the invoice details and click analyze to detect potential fraud
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground">Invoices Checked</p>
              <p className="mt-1 text-2xl font-bold">48,392</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground">Fraud Detected</p>
              <p className="mt-1 text-2xl font-bold text-destructive">847</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detection Stats */}
      <div className="mt-8 grid gap-6 sm:grid-cols-4">
        <div className="glass rounded-xl p-6">
          <h4 className="font-medium">Detection Rate</h4>
          <p className="mt-2 text-3xl font-bold text-primary">98.7%</p>
          <p className="mt-1 text-sm text-muted-foreground">True positive rate</p>
        </div>
        <div className="glass rounded-xl p-6">
          <h4 className="font-medium">False Positives</h4>
          <p className="mt-2 text-3xl font-bold text-accent">0.3%</p>
          <p className="mt-1 text-sm text-muted-foreground">Industry leading</p>
        </div>
        <div className="glass rounded-xl p-6">
          <h4 className="font-medium">Avg Analysis Time</h4>
          <p className="mt-2 text-3xl font-bold text-chart-3">{"< 100ms"}</p>
          <p className="mt-1 text-sm text-muted-foreground">Real-time detection</p>
        </div>
        <div className="glass rounded-xl p-6">
          <h4 className="font-medium">Money Saved</h4>
          <p className="mt-2 text-3xl font-bold text-green-500">$4.2M</p>
          <p className="mt-1 text-sm text-muted-foreground">Fraud prevented</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
