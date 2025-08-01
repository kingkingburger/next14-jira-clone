import { Task, TaskStatus } from "@/features/tasks/types";
import { useState } from "react";

const boards: TaskStatus[] = [
  TaskStatus.BACKLOG,
  TaskStatus.TODO,
  TaskStatus.IN_PROGRESS,
  TaskStatus.IN_PREVIEW,
  TaskStatus.DONE,
];

type TasksState = {
  [key in TaskStatus]: Task[];
};

interface DataKanbanProps {
  data: Task[];
}

export const DataKanban: React.FC<DataKanbanProps> = ({
  data,
}: DataKanbanProps) => {
  const [tasks, setTasks] = useState<TaskStatus>(() => {
    const initialTasks: TasksState = {
      [TaskStatus.BACKLOG]: [],
      [TaskStatus.TODO]: [],
      [TaskStatus.IN_PROGRESS]: [],
      [TaskStatus.IN_PREVIEW]: [],
      [TaskStatus.DONE]: [],
    };
    data.forEach((task: Task) => {
      initialTasks[task.status].push(task);
    });

    Object.keys(initialTasks).forEach((status) => {
      initialTasks[status as TaskStatus].sort(
        (a, b) => a.position - b.position,
      );
    });

    return initialTasks;
  });
  return <div>Data Kanban</div>;
};
