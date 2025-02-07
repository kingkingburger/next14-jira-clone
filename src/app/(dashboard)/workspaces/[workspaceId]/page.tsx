import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdPage = async ({ params }) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>{params.workspaceId}</div>;
};

export default WorkspaceIdPage;
