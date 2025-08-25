import { Task } from "@/features/tasks/types";
import { TaskActions } from "@/features/tasks/components/task-actions";
import { MoreHorizontal } from "lucide-react";
import { DottedSeparator } from "@/components/dotted-separator";
import { MembersAvatar } from "@/features/members/components/members-avatar";
import { TaskDate } from "@/features/tasks/components/task-date";

interface KanbanCardProps {
  task: Task;
}

export const KanbanCard = ({ task }: KanbanCardProps) => {
  return (
    <div className="bg-white p-2.5 mb-1.5 rounded shadow-sm space-y-3">
      <div className="flex items-start justify-between gap-x-2">
        <p>{task.name}</p>
        <TaskActions id={task.$id} projectId={task.projectId}>
          <MoreHorizontal className="size-[18px] stroke-1 shrink-0 text-neutral-700 hover:opacity-75 transition" />
        </TaskActions>
      </div>
      <DottedSeparator />
      <div className="flex items-center gap-x-1.5">
        <MembersAvatar
          name={task.assignee.name}
          fallbackClassName="text-[10px]"
        />
        <div className="size-1 rounded-full bg-neutral-300" />
        <TaskDate value={task.dueDate} className="text-xs" />
      </div>
    </div>
  );
};
