import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function MultiCollateralForm() {
  const [formData, setFormData] = useState({
    customer: "",
    totalAmount: "",
    duration: "",
    coverage: "",
    oracle: "",
    collateralType: "",
    collateralToken: "",
    collateralValue: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeploy = () => {
    // TODO: Integrate with ethers.js deployment function
    console.log("Deploying contract with:", formData);
  };

  return (
    <div className="flex justify-center p-6">
      <Card className="max-w-xl w-full">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Multi-Collateral BNPL Vault</h2>

          <div className="space-y-2">
            <Label>Customer Wallet</Label>
            <Input name="customer" value={formData.customer} onChange={handleChange} />

            <Label>Total Amount (wei)</Label>
            <Input name="totalAmount" value={formData.totalAmount} onChange={handleChange} />

            <Label>Duration (seconds)</Label>
            <Input name="duration" value={formData.duration} onChange={handleChange} />

            <Label>Coverage Ratio (%)</Label>
            <Input name="coverage" value={formData.coverage} onChange={handleChange} />

            <Label>Price Oracle Address</Label>
            <Input name="oracle" value={formData.oracle} onChange={handleChange} />

            <Label>Collateral Type (0=ERC20, 1=ERC721, 2=RWA)</Label>
            <Input name="collateralType" value={formData.collateralType} onChange={handleChange} />

            <Label>Collateral Token Address</Label>
            <Input name="collateralToken" value={formData.collateralToken} onChange={handleChange} />

            <Label>Collateral Value or NFT ID</Label>
            <Input name="collateralValue" value={formData.collateralValue} onChange={handleChange} />

            <Button className="w-full mt-4" onClick={handleDeploy}>
              Deploy Contract
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
