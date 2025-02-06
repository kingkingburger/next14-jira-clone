import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getWorkspaceInfo } from "@/features/workspaces/queries";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  if (!user) return redirect("/sign-in");

  const workspace = await getWorkspaceInfo({ workspaceId: params.workspaceId });

  return <div>workspace ID : {JSON.stringify(workspace)}</div>;
};
export default WorkspaceIdJoinPage;
