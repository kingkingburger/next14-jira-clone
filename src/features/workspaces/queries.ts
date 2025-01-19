"use server";

import { cookies } from "next/headers";
import { Account, Client, Databases, Query } from "node-appwrite";

import { getMembers } from "@/features/members/util";
import { AUTH_COKKIE } from "@/features/auth/constant";

import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";

import { Workspace } from "@/features/workspaces/type/types";
import { createSessionClient } from "@/lib/appwrite";

export const getWorkspaces = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = await cookies().get(AUTH_COKKIE);

    if (!session) return { documents: [], total: 0 };

    client.setSession(session.value);
    const databases = new Databases(client);
    const account = new Account(client);
    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal("userId", user.$id),
    ]);

    if (members.total === 0) {
      return { documents: [], total: 0 };
    }

    const workspaceIds = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspaceIds)],
    );

    return workspaces;
  } catch {
    return { documents: [], total: 0 };
  }
};

interface GetWorkspaceProps {
  workspaceId: string;
}
export const getWorkspace = async ({ workspaceId }: GetWorkspaceProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const member = await getMembers({
      databases,
      userId: user.$id,
      workspaceId,
    });

    if (!member) {
      return null;
    }

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId,
    );

    return workspace;
  } catch {
    return null;
  }
};
