"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { CreateTaskFormWrapper } from "@/features/tasks/components/create-task-form-wrapper";
import { useEditTaskModal } from "@/features/tasks/hooks/use-edit-task-modal";

export const EditTaskModal = () => {
  const { taskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
