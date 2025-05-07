"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { DottedSeparator } from "@/components/dotted-separator";
import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { useGetTasks } from "@/features/tasks/api/use-get-tasks";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useQueryState } from "nuqs";

export const TaskViewSwitcher = () => {
  const [view, setView] = useQueryState("task-view", {
    defaultValue: "table",
  });

  const workspaceId = useWorkspaceId();
  const { open } = useCreateTaskModal();

  const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({
    workspaceId: workspaceId,
  });

  return (
    <Tabs
      defaultValue={view}
      onValueChange={setView}
      className="flex-1 w-full border rounded-lg"
    >
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
              calendar
            </TabsTrigger>
          </TabsList>
          <Button onClick={open} size="sm" className="w-full lg:w-auto">
            <PlusIcon className="size-4 mr-2" />
            New
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        DataFilter
        <DottedSeparator className="my-4" />
        <>
          <TabsContent value="table" className="mt-0">
            {JSON.stringify(tasks)}
          </TabsContent>
          <TabsContent value="kanban" className="mt-0">
            {JSON.stringify(tasks)}
          </TabsContent>
          <TabsContent value="calendar" className="mt-0">
            {JSON.stringify(tasks)}
          </TabsContent>
        </>
      </div>
    </Tabs>
  );
};
