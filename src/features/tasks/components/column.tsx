"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Task } from "@/features/tasks/types";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
];
