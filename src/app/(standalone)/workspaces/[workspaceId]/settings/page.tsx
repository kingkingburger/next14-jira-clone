import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/action";

interface WorkspaceIdSettingPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingPage = async ({
  params,
}: WorkspaceIdSettingPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>setting{params.workspaceId}</div>;
};

export default WorkspaceIdSettingPage;
