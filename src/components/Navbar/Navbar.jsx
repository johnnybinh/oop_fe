import React from "react";
import { IoWalletSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import NewExpense from "../New/NewExpense";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="bg-gray-200/40 sticky flex items-center justify-between px-10  py-8 w-[100%] h-12">
      <div className="flex   justify-center items-center gap-2">
        <Link className="flex gap-2 justify-center items-center" href="/">
          {" "}
          <IoWalletSharp className="size-6" />
          <h1 className="font-semibold">Money Tracking</h1>
        </Link>

        <Link href="/stats">Stats</Link>
      </div>
      <div>
        <NewExpense />
      </div>
    </div>
  );
};

export default Navbar;
