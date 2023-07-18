import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { error } from "console";
import { redirect } from "next/navigation";
import React from "react";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  try {
    const store = await prismadb.store.findFirst({
      where: {
        userId,
      },
    });
    if (store) {
      redirect(`/${store.id}`);
    }
  } catch {
    console.log("no store", error);
  }

  return <>{children}</>;
}