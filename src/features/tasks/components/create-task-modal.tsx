"use client";

import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { ResponsiveModal } from "@/components/responsive-modal";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <div>TODO: Task form</div>
    </ResponsiveModal>
  );
};
