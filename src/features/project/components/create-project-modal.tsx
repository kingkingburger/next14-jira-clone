"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateProjectModal } from "@/features/project/hook/use-create-project-modal";
import { CreateProjectForm } from "@/features/project/components/create-project-form";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};
