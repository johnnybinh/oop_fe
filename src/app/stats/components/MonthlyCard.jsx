"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  YAxis,
  Label,
  Tooltip,
  XAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const MonthlyCard = () => {
  return (
    <div className="px-20">
      <Card className="p-3">
        <CardHeader>
          <CardTitle>Monthly Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <center>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <MonthlyChart />
            </ResponsiveContainer>
          </center>
        </CardContent>
      </Card>
    </div>
  );
};

const MonthlyChart = () => {
  const data = [
    { name: "Jan", amount: 10 },
    { name: "Feb", amount: 20 },
  ];
  return (
    <BarChart width={512} height={196} data={data}>
      <Tooltip />
      <XAxis dataKey={"name"}>
        <Label value="Month" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis
        label={{
          value: "amount",
          angle: -90,
          offset: 30,
          position: "insideleft",
        }}
        dataKey={"amount"}
      ></YAxis>
      <Bar dataKey="amount" fill="#8874d8" barSize={30}></Bar>
    </BarChart>
  );
};

export default MonthlyCard;
