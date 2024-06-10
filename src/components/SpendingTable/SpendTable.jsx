import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteData, getData } from "@/app/util/api";
import DeleteButton from "./DeleteButton";


const SpendTable = async () => {
  const data = await getData();
  console.log(data);
  const clickRemove = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1 className="font-semibold text-3xl">Transactions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <DeleteButton id={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

SpendTable.getIn;

export default SpendTable;
