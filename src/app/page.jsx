import SpendTable from "@/components/SpendingTable/SpendTable";
import { Button } from "@/components/ui/button";
import React from "react";
import TotalCard from "./stats/components/TotalCard";

const page = () => {
  return (
    <div className="p-10">
      <div className="px-24">
        <SpendTable />
      </div>
    </div>
  );
};

export default page;
