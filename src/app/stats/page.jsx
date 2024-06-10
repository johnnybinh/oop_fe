import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import TotalCard from "./components/TotalCard";
import MonthlyCard from "./components/MonthlyCard";
import TypeCard from "./components/TypeCard";

const page = () => {
  return (
    <div className="p-10 flex flex-col gap-10">
      <TotalCard />
      <MonthlyCard />
      <TypeCard />
    </div>
  );
};

export default page;
