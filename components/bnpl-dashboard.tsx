import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function BNPLDashboard() {
  const [token, setToken] = useState("")
  const [customer, setCustomer] = useState("")
  const [amount, setAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [contractCreated, setContractCreated] = useState(false)

  const handleCreate = () => {
    if (!token || !customer || !amount || !duration) return alert("Fill all fields")
    setContractCreated(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">BNPL Vault Creator</h1>
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Token Address</Label>
            <Input placeholder="0x..." value={token} onChange={e => setToken(e.target.value)} />
          </div>
          <div>
            <Label>Customer Wallet</Label>
            <Input placeholder="0x..." value={customer} onChange={e => setCustomer(e.target.value)} />
          </div>
          <div>
            <Label>Amount (rEURI)</Label>
            <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div>
            <Label>Duration (seconds)</Label>
            <Input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
          </div>
          <Button className="w-full" onClick={handleCreate}>Create BNPL Vault</Button>
          {contractCreated && (
            <div className="bg-green-100 text-green-800 p-2 rounded text-sm text-center">
              ✅ Demo Vault Created (off-chain)
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
