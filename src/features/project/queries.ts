import { createSessionClient } from "@/lib/appwrite";
import { getMembers } from "@/features/members/util";
import { DATABASE_ID, PROJECT_ID } from "@/config";
import { Project } from "@/features/project/type/types";

interface GetProjectProps {
  projectId: string;
}

export const getProject = async ({ projectId }: GetProjectProps) => {
  const { account, databases } = await createSessionClient();
  const user = await account.get();

  try {
    const project = await databases.getDocument<Project>(
      DATABASE_ID,
      PROJECT_ID,
      projectId,
    );

    const member = await getMembers({
      databases,
      userId: user.$id,
      workspaceId: project.workspaceId,
    });

    if (!member) {
      throw new Error("Unauthorized");
    }

    return project;
  } catch (error) {
    console.error(error);
  }
};
