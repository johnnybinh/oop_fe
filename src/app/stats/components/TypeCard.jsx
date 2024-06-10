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
  PieChart,
  Pie,
  Bar,
  ResponsiveContainer,
} from "recharts";

const TypeCard = () => {
  return (
    <div className="px-20">
      <Card className="p-3">
        <CardHeader>
          <CardTitle>What You Most Spent On</CardTitle>
        </CardHeader>
        <CardContent>
          <center>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <TypeChart />
            </ResponsiveContainer>
          </center>
        </CardContent>
      </Card>
    </div>
  );
};

const TypeChart = () => {
  const data = [
    { name: "Transport", amount: 10 },
    { name: "Food", amount: 20 },
  ];
  return (
    <PieChart width={400} height={400}>
      <Tooltip />
      <Pie data={data} label={(entry) => entry.name} dataKey={"amount"}></Pie>
    </PieChart>
  );
};

export default TypeCard;
