"use client";
//zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
//form
import { useForm, useController, Controller } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getData, postData } from "@/app/util/api";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const NewExpense = () => {
  const {
    handleSubmit,
    control,
    formState: { error },
  } = useForm({
    defaultValues: {
      name: "",
      amount: 0,
      date: "",
      type: "",
    },
  });
  const { toast } = useToast();
  //submit
  const onSubmit = async (values) => {
    await postData(values);
    await window.location.reload();
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create New Expense</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Expense</DialogTitle>
          </DialogHeader>
          <DialogDescription className="">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <DialogTitle>Name</DialogTitle>
              <Controller
                className=""
                name="name"
                control={control}
                render={({ field }) => {
                  return (
                    <Input {...field} type="text" placeholder="name"></Input>
                  );
                }}
              />
              <DialogTitle>Amount</DialogTitle>
              <Controller
                className=""
                name="amount"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      placeholder="amount"
                    ></Input>
                  );
                }}
              />
              <DialogTitle>Type</DialogTitle>
              <Controller
                className=""
                name="type"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Food" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Transport">Transport</SelectItem>
                        <SelectItem value="Entertainment">
                          Entertainment
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  );
                }}
              />
              <DialogTitle>Date</DialogTitle>
              <Popover>
                <Controller
                  className=""
                  name="date"
                  control={control}
                  render={({ field }) => {
                    return (
                      <>
                        <PopoverTrigger asChild>
                          <Button
                            className={cn(!field.value)}
                            variant="outline"
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent {...field}>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              const formattedDate = format(
                                new Date(date),
                                "yyyy-MM-dd"
                              );
                              field.onChange(formattedDate);
                            }}
                          ></Calendar>
                        </PopoverContent>
                      </>
                    );
                  }}
                />
              </Popover>
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewExpense;
