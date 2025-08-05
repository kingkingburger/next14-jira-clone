import { TaskStatus } from "@/features/tasks/types";
import { snakeCaseToTitleCase } from "@/lib/utils";

interface KanbanColumnHeaderProps {
  board: TaskStatus;
  taskCount: number;
}

export const KanbanColumnHeader = ({
  board,
  taskCount,
}: KanbanColumnHeaderProps) => {
  return (
    <div className="px-2 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <h2>{snakeCaseToTitleCase(board)}</h2>
      </div>
    </div>
  );
};
