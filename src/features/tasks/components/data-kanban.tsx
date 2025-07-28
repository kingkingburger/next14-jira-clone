import { Task, TaskStatus } from "@/features/tasks/types";

const boards: TaskStatus[] = [
  TaskStatus.BACKLOG,
  TaskStatus.TODO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.IN_PREVIEW,
  TaskStatus.DONE,
];

interface DataKanbanProps {
  data: Task[];
}

export const DataKanban: React.FC<DataKanbanProps> = ({
  data,
}: DataKanbanProps) => {
  return <div>Data Kanban</div>;
};
