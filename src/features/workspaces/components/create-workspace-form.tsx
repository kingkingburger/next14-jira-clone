"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createWorkspacesSchema } from "@/features/workspaces/schemas";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";

interface CreateWorkspaceFormProps {
  onCancel?: () => void;
}

export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const form = useForm<z.infer<typeof createWorkspacesSchema>>({
    resolver: zodResolver(createWorkspacesSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspacesSchema>) => {
    console.log({ values });
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">
          Create a new workspace
        </CardTitle>
        <div className="px-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7"></CardContent>
      </CardHeader>
    </Card>
  );
};
