import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { TaskStatus } from "@/features/tasks/types";

interface UseGetTasksProps {
  workspaceId: string;
  projectId?: string | null;
  status?: TaskStatus | null;
  assigneeId?: string | null;
  search?: string | null;
  dueDate?: string | null;
}

export const useGetTasks = ({
  workspaceId,
  projectId,
  status,
  assigneeId,
  search,
  dueDate,
}: UseGetTasksProps) => {
  const query = useQuery({
    queryKey: [
      "Tasks",
      workspaceId,
      projectId,
      status,
      assigneeId,
      search,
      dueDate,
    ],
    queryFn: async () => {
      const response = await client.api.tasks.$get({
        query: {
          workspaceId,
          projectId: projectId ?? undefined,
          status: status ?? undefined,
          assigneeId: assigneeId ?? undefined,
          search: search ?? undefined,
          dueDate: dueDate ?? undefined,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
