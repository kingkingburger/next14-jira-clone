import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getProject } from "@/features/project/queries";

interface ProjectIdSettingPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingPage = async ({ params }: ProjectIdSettingPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({
    projectId: params.projectId,
  });

  return <div> ProjectIdSettingPage</div>;
};
export default ProjectIdSettingPage;
