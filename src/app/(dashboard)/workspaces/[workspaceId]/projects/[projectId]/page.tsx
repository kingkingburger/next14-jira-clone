import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getProject } from "@/features/project/queries";
import { ProjectAvatar } from "@/features/project/components/project-avatar";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

interface ProjectIdPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId });

  if (!initialValues) {
    throw new Error("Project not found");
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={initialValues?.name}
            image={initialValues?.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{initialValues.name}</p>
        </div>
        <div>
          <Button variant="secondary" size="sm" asChild={true}>
            <Link
              href={`/workspaces/${initialValues?.workspaceId}/projects/${initialValues.$id}`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectIdPage;
