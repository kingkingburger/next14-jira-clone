import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getProject } from "@/features/project/queries";

interface ProjectIdPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId });

  return <div>ProjectIdPage component{JSON.stringify(initialValues)}</div>;
};
export default ProjectIdPage;
