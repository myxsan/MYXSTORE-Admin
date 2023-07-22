"use client";

import { FC } from "react";

import { Heading } from "@/components/routes/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./data-table/columns";
import { DataTable } from "./data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data ? data.length : 0})`}
        description="Manage Orders for your store."
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
