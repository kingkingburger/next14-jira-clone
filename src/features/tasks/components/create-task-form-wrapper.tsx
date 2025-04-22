import { useGetProjects } from "@/features/project/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetMembers } from "@/features/members/api/use-get-members";

interface CreateTaskFormWrapper {
  onCancel: () => void;
}

export const CreateTaskFormWrapper = ({ onCancel }: CreateTaskFormWrapper) => {
  const workspaceId = useWorkspaceId();
  const { data: projects, isLoading: isLoadingProjects } = useGetProjects();
  const { data: members, isLoading: isLoadingMembers } = useGetMembers();
};
