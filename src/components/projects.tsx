"use client";

import { RiAddCircleFill } from "react-icons/ri";
import { useGetProjects } from "@/features/project/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Projects = () => {
  const projectId = null; // TODO: Use the useProject hook

  const pathname = usePathname();
  const workspaceId = useWorkspaceId();
  const { data } = useGetProjects({
    workspaceId: workspaceId,
  });

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        <RiAddCircleFill
          onClick={() => {}}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {data?.documents.map((project) => {
        const href = `workspaces/${workspaceId}projects/${projectId}`;
        const isActive = pathname === href;

        return <Link href={href}></Link>;
      })}
    </div>
  );
};
