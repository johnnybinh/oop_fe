"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaTrashCan } from "react-icons/fa6";
import { deleteData } from "@/app/util/api";
import { Router } from "next/router";

const DeleteButton = ({ id }) => {
  // const router = useRouter();
  return (
    <div>
      <Button
        onClick={async () => {
          await console.log(id);
          await deleteData(id);
          await window.location.reload();
        }}
      >
        <FaTrashCan />
      </Button>
    </div>
  );
};

export default DeleteButton;
