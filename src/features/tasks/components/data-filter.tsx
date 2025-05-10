import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useGetProjects } from "@/features/project/api/use-get-projects";
import { useGetMembers } from "@/features/members/api/use-get-members";

interface DataFiltersProps {
  hideProjectFilter?: boolean;
}

export const DataFilters = ({ hideProjectFilter }: DataFiltersProps) => {
  const workspaceId = useGetWorkspaces();

  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId: workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId: workspaceId,
  });

  const isLoading = isLoadingProjects || isLoadingMembers;
};
