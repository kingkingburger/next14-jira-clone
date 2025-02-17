import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return <div></div>;
};

export default WorkspaceIdMembersPage;
