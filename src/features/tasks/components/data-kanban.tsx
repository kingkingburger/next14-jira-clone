import { Task } from "@/features/tasks/types";

interface DataKanbanProps {
  data: Task[];
}

export const DataKanban: React.FC<DataKanbanProps> = ({
  data,
}: DataKanbanProps) => {
  return <div>Data Kanban</div>;
};
