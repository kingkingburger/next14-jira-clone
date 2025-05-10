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

  const projectOptions = projects?.documents.map((project) => ({
    value: project.$id,
    label: project.name,
  }));

  const memberOptions = projects?.documents.map((member) => ({
    value: member.$id,
    label: member.name,
  }));

  if (isLoading) return null;

  return <div className="flex flex-col lg:flex-row gap-2"></div>;
};
