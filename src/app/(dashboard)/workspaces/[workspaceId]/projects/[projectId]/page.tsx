import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

interface ProjectIdPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>ProjectIdPage component{params.projectId}</div>;
};
export default ProjectIdPage;
