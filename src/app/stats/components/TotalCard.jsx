import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getTotalSpending } from "@/app/util/api";

const TotalCard = async () => {
  const sum = await getTotalSpending();
  console.log(sum);
  return (
    <div className="px-20">
      <Card className="p-3">
        <CardHeader>
          <CardTitle>Total Spending</CardTitle>
          <CardDescription>You Have Spent</CardDescription>
        </CardHeader>
        <CardContent>
          <center>
            <CardTitle className="text-4xl">{sum}$</CardTitle>
          </center>
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalCard;
