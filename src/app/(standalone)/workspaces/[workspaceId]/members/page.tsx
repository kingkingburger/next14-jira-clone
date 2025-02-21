import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { MemberList } from "@/features/workspaces/components/member-list";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full lg:max-w-xl">
      <MemberList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
