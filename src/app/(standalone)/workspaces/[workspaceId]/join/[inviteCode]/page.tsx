import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  if (!user) return redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect("/");
  }

  return (
    <div>
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
export default WorkspaceIdJoinPage;
