import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/action";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>workspaceId</div>;
};

export default WorkspaceIdPage;
